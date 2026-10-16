'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { MazeData, RobotState, Command, Heading, AlgorithmVisualizerData } from '../types/maze';
import { WALL_NORTH, WALL_EAST, WALL_SOUTH, WALL_WEST } from '../utils/mazeGenerator';
import { traceSolutionPath, extractAlgorithmVisualizerData } from '../utils/algorithmVisualizer';
import { Compass, Navigation, Layers, Scale, Play, Pause, RotateCcw, Sparkles, ChevronDown, Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MazeCanvasProps {
  mazeData: MazeData;
  commands: Command[];
  isSimulating: boolean;
  simulationSpeed: number; // 1 to 10
  resetKey?: number;
  visualizerData?: AlgorithmVisualizerData | null;
  onSimulationEnd: (status: 'success' | 'collision' | 'stopped', steps: number) => void;
  onCollision: (node: [number, number], heading: Heading) => void;
  onStepProgress: (currentStep: number, totalSteps: number, robot: RobotState) => void;
}

const HEADING_ANGLES: Record<Heading, number> = {
  E: 0,
  S: Math.PI / 2,
  W: Math.PI,
  N: (3 * Math.PI) / 2,
};

const HEADING_DELTAS: Record<Heading, { dx: number; dy: number; wall: number }> = {
  N: { dx: 0, dy: -1, wall: WALL_NORTH },
  E: { dx: 1, dy: 0, wall: WALL_EAST },
  S: { dx: 0, dy: 1, wall: WALL_SOUTH },
  W: { dx: -1, dy: 0, wall: WALL_WEST },
};

function drawDirectionVector(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  heading: Heading,
  cellSize: number,
  isSolution: boolean
) {
  ctx.save();
  ctx.translate(cx, cy);

  let angle = 0;
  if (heading === 'E') angle = 0;
  else if (heading === 'S') angle = Math.PI / 2;
  else if (heading === 'W') angle = Math.PI;
  else if (heading === 'N') angle = -Math.PI / 2;
  ctx.rotate(angle);

  const len = Math.max(7, cellSize * 0.26);
  const headW = len * 0.45;

  if (isSolution) {
    // Solution path: Neon glowing cyan directional arrow
    ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
    ctx.shadowBlur = 4;
    ctx.strokeStyle = '#06b6d4';
    ctx.fillStyle = '#06b6d4';
    ctx.lineWidth = Math.max(2, cellSize * 0.055);

    // Arrow stem
    ctx.beginPath();
    ctx.moveTo(-len * 0.6, 0);
    ctx.lineTo(len * 0.45, 0);
    ctx.stroke();

    // Arrow arrowhead
    ctx.beginPath();
    ctx.moveTo(len * 0.65, 0);
    ctx.lineTo(len * 0.15, -headW);
    ctx.lineTo(len * 0.28, 0);
    ctx.lineTo(len * 0.15, headW);
    ctx.closePath();
    ctx.fill();
  } else {
    // Branch node: Subtle violet chevron
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
    ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';
    ctx.lineWidth = Math.max(1.5, cellSize * 0.04);

    ctx.beginPath();
    ctx.moveTo(-len * 0.4, 0);
    ctx.lineTo(len * 0.35, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(len * 0.5, 0);
    ctx.lineTo(len * 0.1, -headW * 0.8);
    ctx.lineTo(len * 0.1, headW * 0.8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

export default function MazeCanvas({
  mazeData,
  commands,
  isSimulating,
  simulationSpeed,
  resetKey,
  visualizerData,
  onSimulationEnd,
  onCollision,
  onStepProgress,
}: MazeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Algorithm Visualizer Toggles (Direction & Weight indicators default false to keep biological slime mold organic & uncluttered)
  const [showDirections, setShowDirections] = useState<boolean>(false);
  const [showExplored, setShowExplored] = useState<boolean>(true);
  const [showWeights, setShowWeights] = useState<boolean>(false);

  // Slime mold growth animation state
  const [growthProgress, setGrowthProgress] = useState<number>(0.01);
  const growthProgressRef = useRef<number>(0.01);
  const [isGrowing, setIsGrowing] = useState<boolean>(false);
  const [growthSpeed, setGrowthSpeed] = useState<number>(1); // 0.5x, 1x, 2x
  const growthAnimRef = useRef<number | null>(null);
  const drawSceneRef = useRef<() => void>(() => {});

  // Master Visualizer On/Off state (controlled via eyeball logo)
  const [isVisualizerEnabled, setIsVisualizerEnabled] = useState<boolean>(true);

  // Top-left corner hover panel state
  const [isVisualizerExpanded, setIsVisualizerExpanded] = useState<boolean>(false);
  const visualizerHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleVisualizerMouseEnter = useCallback(() => {
    if (visualizerHoverTimeoutRef.current) {
      clearTimeout(visualizerHoverTimeoutRef.current);
      visualizerHoverTimeoutRef.current = null;
    }
    setIsVisualizerExpanded(true);
  }, []);

  const handleVisualizerMouseLeave = useCallback(() => {
    visualizerHoverTimeoutRef.current = setTimeout(() => {
      setIsVisualizerExpanded(false);
    }, 280);
  }, []);

  // Compute effective visualizer data (from prop or on-the-fly traced from commands)
  const effectiveVisualizer = useMemo(() => {
    if (visualizerData && Object.keys(visualizerData.nodes).length > 0) {
      return visualizerData;
    }
    if (commands && commands.length > 0) {
      return extractAlgorithmVisualizerData(null, '', commands, mazeData);
    }
    return null;
  }, [visualizerData, commands, mazeData]);

  const effectiveVisualizerRef = useRef(effectiveVisualizer);
  useEffect(() => {
    effectiveVisualizerRef.current = effectiveVisualizer;
  }, [effectiveVisualizer]);

  // Play/Resume Slime Mold Growth animation (smooth, deliberate biological expansion)
  const playGrowthAnimation = useCallback(
    (resumeCurrent = false) => {
      const viz = effectiveVisualizerRef.current;
      if (!viz || !viz.explorationSteps?.length) return;

      if (growthAnimRef.current) {
        cancelAnimationFrame(growthAnimRef.current);
        growthAnimRef.current = null;
      }

      // If resuming and not at the very end, continue from current progress; otherwise restart from 2%
      const startP = resumeCurrent && growthProgressRef.current < 0.98 ? growthProgressRef.current : 0.02;
      growthProgressRef.current = startP;
      setGrowthProgress(startP);
      setIsGrowing(true);

      const startTime = performance.now();
      // Total duration for full 0 -> 1 growth: 4200ms at 1x speed (smooth and clear)
      const totalDuration = 4200 / growthSpeed;
      const remainingDuration = Math.max(200, totalDuration * (1 - startP));

      const stepAnim = (now: number) => {
        const elapsed = now - startTime;
        const fraction = Math.min(1, elapsed / remainingDuration);
        const p = startP + fraction * (1 - startP);
        growthProgressRef.current = p;
        drawSceneRef.current();

        if (fraction < 1) {
          growthAnimRef.current = requestAnimationFrame(stepAnim);
        } else {
          setIsGrowing(false);
          growthProgressRef.current = 1;
          setGrowthProgress(1);
          growthAnimRef.current = null;
          drawSceneRef.current();
        }
      };
      growthAnimRef.current = requestAnimationFrame(stepAnim);
    },
    [growthSpeed]
  );

  // Pause Slime Mold Growth animation
  const pauseGrowthAnimation = useCallback(() => {
    setIsGrowing(false);
    if (growthAnimRef.current) {
      cancelAnimationFrame(growthAnimRef.current);
      growthAnimRef.current = null;
    }
  }, []);

  // Scrub through growth process manually via slider
  const handleScrubberChange = useCallback((newVal: number) => {
    if (growthAnimRef.current) {
      cancelAnimationFrame(growthAnimRef.current);
      growthAnimRef.current = null;
    }
    setIsGrowing(false);
    const clamped = Math.max(0.01, Math.min(1, newVal));
    growthProgressRef.current = clamped;
    setGrowthProgress(clamped);
    drawSceneRef.current();
  }, []);

  // Cycle speed between 0.5x, 1x, 2x
  const cycleSpeed = useCallback(() => {
    setGrowthSpeed((s) => (s === 0.5 ? 1 : s === 1 ? 2 : 0.5));
  }, []);

  const handleToggleExplored = useCallback(() => {
    setShowExplored((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => playGrowthAnimation(false), 30);
      }
      return next;
    });
  }, [playGrowthAnimation]);

  useEffect(() => {
    return () => {
      if (growthAnimRef.current) {
        cancelAnimationFrame(growthAnimRef.current);
        growthAnimRef.current = null;
      }
      if (visualizerHoverTimeoutRef.current) {
        clearTimeout(visualizerHoverTimeoutRef.current);
      }
    };
  }, []);

  // Robot dynamic state for rendering & simulation
  const robotRef = useRef<{
    x: number; // cell column (0 to width - 1)
    y: number; // cell row (0 to height - 1)
    heading: Heading;
    angle: number;
    screenX: number | null; // pixel center override during animation
    screenY: number | null;
    trail: [number, number][];
  }>({
    x: mazeData.start_node[0],
    y: mazeData.start_node[1],
    heading: 'E',
    angle: 0,
    screenX: null,
    screenY: null,
    trail: [[mazeData.start_node[0], mazeData.start_node[1]]],
  });

  const [collisionFlash, setCollisionFlash] = useState(false);

  // Execution tracking refs to guarantee single execution thread
  const runIdRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);



  // Calculate cell-based geometry:
  // There are cols cells horizontally and rows cells vertically.
  // The robot sits INSIDE the cell at center: (left + cellSize/2, top + cellSize/2).
  const getCellGeometry = useCallback(
    (cssWidth: number, cssHeight: number) => {
      const cols = mazeData.width;
      const rows = mazeData.height;

      // Safe outer padding around the maze perimeter
      const padding = 24;
      const availW = Math.max(80, cssWidth - padding * 2);
      const availH = Math.max(80, cssHeight - padding * 2);

      // Sizing square cells
      const cellW = availW / cols;
      const cellH = availH / rows;
      const cellSize = Math.floor(Math.min(cellW, cellH));

      const totalGridW = cellSize * cols;
      const totalGridH = cellSize * rows;

      const offsetX = Math.floor((cssWidth - totalGridW) / 2);
      const offsetY = Math.floor((cssHeight - totalGridH) / 2);

      // Returns the pixel bounding box for cell (cx, cy)
      const getCellBounds = (cx: number, cy: number) => {
        const left = offsetX + cx * cellSize;
        const top = offsetY + cy * cellSize;
        return {
          left,
          top,
          right: left + cellSize,
          bottom: top + cellSize,
          centerX: left + cellSize / 2,
          centerY: top + cellSize / 2,
          size: cellSize,
        };
      };

      return { cellSize, offsetX, offsetY, getCellBounds, totalGridW, totalGridH };
    },
    [mazeData]
  );

  // Draw full scene on canvas
  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const cssWidth = Math.floor(rect.width) || canvas.clientWidth || 500;
    const cssHeight = Math.floor(rect.height) || canvas.clientHeight || 500;

    const targetW = Math.floor(cssWidth * dpr);
    const targetH = Math.floor(cssHeight * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Canvas background
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.fillStyle = '#080d1a';
    ctx.fillRect(0, 0, cssWidth, cssHeight);

    const cols = mazeData.width;
    const rows = mazeData.height;
    const { cellSize, getCellBounds, offsetX, offsetY, totalGridW, totalGridH } =
      getCellGeometry(cssWidth, cssHeight);

    // 1. Draw Cell Floors and Grid Separators
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const b = getCellBounds(x, y);

        // Floor tile
        ctx.fillStyle = (x + y) % 2 === 0 ? '#0d1527' : '#0f182c';
        ctx.fillRect(b.left, b.top, b.size, b.size);

        // Subtle internal pathway line
        ctx.strokeStyle = '#1a2438';
        ctx.lineWidth = 1;
        ctx.strokeRect(b.left, b.top, b.size, b.size);
      }
    }

    // 1b. Draw Slime Mold Explored Network & Dead-End Branches (Organic Physarum Redesign)
    if (isVisualizerEnabled && showExplored && effectiveVisualizer) {
      const activeProgress = growthProgressRef.current;
      const stepsToRender = effectiveVisualizer.explorationSteps || [];
      const totalSteps = stepsToRender.length;
      const visibleCount = Math.max(1, Math.floor(totalSteps * activeProgress));
      const renderedSteps = stepsToRender.slice(0, visibleCount);

      const hasReachedGoal = renderedSteps.some(
        (s) => s.x === mazeData.end_node[0] && s.y === mazeData.end_node[1]
      );
      // Once goal is reached by the growth process (>= 98% progress), highlight optimal path in vibrant green
      const isOptimalActive = hasReachedGoal && activeProgress >= 0.98;

      // Pass 1: Soft bioluminescent cell floor washes
      for (const step of renderedSteps) {
        const b = getCellBounds(step.x, step.y);
        ctx.save();
        if (step.isWinningPath && isOptimalActive) {
          ctx.fillStyle = 'rgba(34, 197, 94, 0.15)'; // Radiant emerald wash for winning path
        } else if (step.isDeadEnd && !step.isWinningPath) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.12)'; // Soft crimson wash for dead ends
        } else {
          ctx.fillStyle = 'rgba(168, 85, 247, 0.07)'; // Organic translucent protoplasm
        }
        ctx.fillRect(b.left + 1, b.top + 1, b.size - 2, b.size - 2);
        ctx.restore();
      }

      // Pass 2: Explored & dead-end branch tendril conduits
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (const step of renderedSteps) {
        if (step.parentX === undefined || step.parentY === undefined) continue;
        if (step.isWinningPath && isOptimalActive) continue; // Drawn later in radiant green

        const pBounds = getCellBounds(step.parentX, step.parentY);
        const cBounds = getCellBounds(step.x, step.y);

        if (step.isDeadEnd) {
          // Dead-end branch conduit: warm crimson glow
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.50)';
          ctx.shadowColor = 'rgba(239, 68, 68, 0.40)';
          ctx.shadowBlur = 6;
          ctx.lineWidth = Math.max(2.5, cellSize * 0.11);
        } else {
          // Exploring protoplasm vein: bio-luminescent violet
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.50)';
          ctx.shadowColor = 'rgba(168, 85, 247, 0.30)';
          ctx.shadowBlur = 4;
          ctx.lineWidth = Math.max(2.2, cellSize * 0.09);
        }

        ctx.beginPath();
        ctx.moveTo(pBounds.centerX, pBounds.centerY);
        ctx.lineTo(cBounds.centerX, cBounds.centerY);
        ctx.stroke();
      }
      ctx.restore();

      // Pass 3: Optimal Path in RADIANT GREEN (when destination found)
      if (isOptimalActive) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Outer emerald glow aura
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.40)';
        ctx.shadowColor = '#22c55e';
        ctx.shadowBlur = 14;
        ctx.lineWidth = Math.max(5, cellSize * 0.22);
        for (const step of renderedSteps) {
          if (step.parentX === undefined || step.parentY === undefined || !step.isWinningPath) continue;
          const pBounds = getCellBounds(step.parentX, step.parentY);
          const cBounds = getCellBounds(step.x, step.y);
          ctx.beginPath();
          ctx.moveTo(pBounds.centerX, pBounds.centerY);
          ctx.lineTo(cBounds.centerX, cBounds.centerY);
          ctx.stroke();
        }

        // Inner bright green core
        ctx.strokeStyle = '#4ade80';
        ctx.shadowColor = '#86efac';
        ctx.shadowBlur = 4;
        ctx.lineWidth = Math.max(2.6, cellSize * 0.11);
        for (const step of renderedSteps) {
          if (step.parentX === undefined || step.parentY === undefined || !step.isWinningPath) continue;
          const pBounds = getCellBounds(step.parentX, step.parentY);
          const cBounds = getCellBounds(step.x, step.y);
          ctx.beginPath();
          ctx.moveTo(pBounds.centerX, pBounds.centerY);
          ctx.lineTo(cBounds.centerX, cBounds.centerY);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Pass 4: Dead-End Red Highlights & Optimal Path Junctions
      for (const step of renderedSteps) {
        const b = getCellBounds(step.x, step.y);

        // DEAD END REACHED: Highlight in RED with reached depth!
        if (step.isDeadEnd && !step.isWinningPath) {
          ctx.save();
          // Soft red aura
          ctx.fillStyle = 'rgba(239, 68, 68, 0.28)';
          ctx.beginPath();
          ctx.arc(b.centerX, b.centerY, Math.max(5, cellSize * 0.18), 0, Math.PI * 2);
          ctx.fill();

          // Red terminus dot
          ctx.fillStyle = '#ef4444';
          ctx.shadowColor = '#ef4444';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(b.centerX, b.centerY, Math.max(3, cellSize * 0.10), 0, Math.PI * 2);
          ctx.fill();

          // Depth indicator showing how deep this probed corridor reached
          if (cellSize >= 20 && step.branchDepth !== undefined) {
            const depthSize = Math.max(6.5, Math.min(9, cellSize * 0.18));
            ctx.font = `bold ${depthSize}px monospace`;
            ctx.fillStyle = '#fca5a5';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const depthLabel = cellSize >= 32 ? `end(${step.branchDepth})` : `d:${step.branchDepth}`;
            ctx.fillText(depthLabel, b.centerX, b.bottom - 2);
          }
          ctx.restore();
        } else if (step.isWinningPath && isOptimalActive) {
          // Optimal path junction node (smooth green dot)
          ctx.save();
          ctx.fillStyle = '#22c55e';
          ctx.shadowColor = '#4ade80';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(b.centerX, b.centerY, Math.max(2.8, cellSize * 0.10), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Pass 5: Active biological growth tip (pseudopodium pulse at the wavefront)
      if (isGrowing || (growthProgress > 0 && growthProgress < 0.99)) {
        const frontStep = renderedSteps[renderedSteps.length - 1];
        if (frontStep) {
          const fb = getCellBounds(frontStep.x, frontStep.y);
          ctx.save();
          ctx.fillStyle = 'rgba(168, 85, 247, 0.35)';
          ctx.beginPath();
          ctx.arc(fb.centerX, fb.centerY, Math.max(6, cellSize * 0.24), 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#e879f9';
          ctx.shadowColor = '#e879f9';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(fb.centerX, fb.centerY, Math.max(3.5, cellSize * 0.13), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // 1c. Draw Path Direction Vectors / Flow Arrows (if enabled)
    if (isVisualizerEnabled && showDirections && effectiveVisualizer) {
      const activeProgress = growthProgressRef.current;
      const stepsToRender = effectiveVisualizer.explorationSteps || [];
      const visibleCount = Math.max(1, Math.floor(stepsToRender.length * activeProgress));
      const renderedSteps = stepsToRender.slice(0, visibleCount);

      for (const step of renderedSteps) {
        if (!step.direction) continue;

        // Skip target goal cell because it has the checkered flag
        const isGoal = step.x === mazeData.end_node[0] && step.y === mazeData.end_node[1];
        if (isGoal) continue;

        const b = getCellBounds(step.x, step.y);
        drawDirectionVector(
          ctx,
          b.centerX,
          b.centerY,
          step.direction,
          cellSize,
          Boolean(step.isWinningPath)
        );
      }
    }

    // 1d. Draw Node Weights and Heuristic Costs (f/g/h) (if enabled)
    if (isVisualizerEnabled && showWeights && effectiveVisualizer) {
      const activeProgress = growthProgressRef.current;
      const stepsToRender = effectiveVisualizer.explorationSteps || [];
      const visibleCount = Math.max(1, Math.floor(stepsToRender.length * activeProgress));
      const renderedSteps = stepsToRender.slice(0, visibleCount);

      for (const step of renderedSteps) {
        const isStart = step.x === mazeData.start_node[0] && step.y === mazeData.start_node[1];
        const isGoal = step.x === mazeData.end_node[0] && step.y === mazeData.end_node[1];
        if (isStart || isGoal) continue;

        const b = getCellBounds(step.x, step.y);

        if (cellSize >= 30) {
          ctx.save();
          if (effectiveVisualizer.hasWeights && step.fCost !== undefined) {
            // Display f = g + h score in gold/amber
            const fSize = Math.max(7, Math.min(10, cellSize * 0.20));
            ctx.font = `bold ${fSize}px monospace`;
            ctx.fillStyle = step.isWinningPath ? '#fbbf24' : 'rgba(251, 191, 36, 0.75)';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.fillText(`f:${step.fCost}`, b.right - 3, b.top + 2);

            // Sub-cost g and h if room
            if (cellSize >= 42 && step.gCost !== undefined && step.hCost !== undefined) {
              const subSize = Math.max(6, Math.min(8, cellSize * 0.15));
              ctx.font = `${subSize}px monospace`;
              ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
              ctx.textAlign = 'right';
              ctx.textBaseline = 'bottom';
              ctx.fillText(`g:${step.gCost} h:${step.hCost}`, b.right - 3, b.bottom - 2);
            }
          } else if (step.gCost !== undefined) {
            // Cost / weight
            const gSize = Math.max(7, Math.min(9, cellSize * 0.18));
            ctx.font = `${gSize}px monospace`;
            ctx.fillStyle = step.isWinningPath ? '#34d399' : 'rgba(148, 163, 184, 0.65)';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.fillText(`c:${step.gCost}`, b.right - 3, b.top + 2);
          }
          ctx.restore();
        }
      }
    }

    // 2. Highlight START CELL (0, 0)
    const startCell = getCellBounds(mazeData.start_node[0], mazeData.start_node[1]);
    ctx.save();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
    ctx.fillRect(startCell.left, startCell.top, startCell.size, startCell.size);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.strokeRect(startCell.left + 1, startCell.top + 1, startCell.size - 2, startCell.size - 2);

    // START cell label tag
    const fontSize = Math.max(8, Math.min(12, cellSize * 0.22));
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = '#34d399';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('START', startCell.centerX, startCell.top + 3);

    ctx.font = `600 ${Math.max(7, fontSize * 0.8)}px monospace`;
    ctx.fillStyle = 'rgba(52, 211, 153, 0.7)';
    ctx.fillText('(0,0)', startCell.centerX, startCell.bottom - fontSize - 2);
    ctx.restore();

    // 3. Highlight END / TARGET CELL (width-1, height-1)
    const endCell = getCellBounds(mazeData.end_node[0], mazeData.end_node[1]);
    ctx.save();
    ctx.fillStyle = 'rgba(6, 182, 212, 0.28)';
    ctx.fillRect(endCell.left, endCell.top, endCell.size, endCell.size);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 8;
    ctx.strokeRect(endCell.left + 1, endCell.top + 1, endCell.size - 2, endCell.size - 2);

    // TARGET cell label tag
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = '#38bdf8';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('GOAL 🏁', endCell.centerX, endCell.top + 3);

    ctx.font = `600 ${Math.max(7, fontSize * 0.8)}px monospace`;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.fillText(
      `(${mazeData.end_node[0]},${mazeData.end_node[1]})`,
      endCell.centerX,
      endCell.bottom - fontSize - 2
    );
    ctx.restore();

    // 4. Draw Traveled Path Trail (inside cells)
    const trail = robotRef.current.trail;
    if (trail.length > 1) {
      ctx.save();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.lineWidth = Math.max(3, cellSize * 0.14);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      const first = getCellBounds(trail[0][0], trail[0][1]);
      ctx.moveTo(first.centerX, first.centerY);
      for (let i = 1; i < trail.length; i++) {
        const pt = getCellBounds(trail[i][0], trail[i][1]);
        ctx.lineTo(pt.centerX, pt.centerY);
      }
      ctx.stroke();
      ctx.restore();
    }

    // 5. Draw Virtual Walls (Thick Red Barriers between cells)
    ctx.save();
    ctx.strokeStyle = '#f43f5e';
    const wallThick = Math.max(3, Math.min(7, cellSize * 0.14));
    ctx.lineWidth = wallThick;
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(244, 63, 94, 0.8)';
    ctx.shadowBlur = 6;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const wallMask = mazeData.grid[y][x];
        const b = getCellBounds(x, y);

        // North wall
        if (wallMask & WALL_NORTH) {
          ctx.beginPath();
          ctx.moveTo(b.left, b.top);
          ctx.lineTo(b.right, b.top);
          ctx.stroke();
        }

        // South wall
        if (wallMask & WALL_SOUTH) {
          ctx.beginPath();
          ctx.moveTo(b.left, b.bottom);
          ctx.lineTo(b.right, b.bottom);
          ctx.stroke();
        }

        // West wall
        if (wallMask & WALL_WEST) {
          ctx.beginPath();
          ctx.moveTo(b.left, b.top);
          ctx.lineTo(b.left, b.bottom);
          ctx.stroke();
        }

        // East wall
        if (wallMask & WALL_EAST) {
          ctx.beginPath();
          ctx.moveTo(b.right, b.top);
          ctx.lineTo(b.right, b.bottom);
          ctx.stroke();
        }
      }
    }
    ctx.restore();

    // 6. Draw Outer Border Frame
    ctx.save();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = wallThick;
    ctx.strokeRect(offsetX, offsetY, totalGridW, totalGridH);
    ctx.restore();

    // 7. Draw Robot INSIDE the current cell
    const robot = robotRef.current;
    const currentCell = getCellBounds(robot.x, robot.y);
    const drawX = robot.screenX !== null ? robot.screenX : currentCell.centerX;
    const drawY = robot.screenY !== null ? robot.screenY : currentCell.centerY;

    ctx.save();
    ctx.translate(drawX, drawY);
    ctx.rotate(robot.angle);

    const robotRadius = Math.max(8, Math.min(22, cellSize * 0.34));

    // Robot Underglow
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 14;

    // Robot Chassis (Sleek Autonomous Rover)
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.roundRect(-robotRadius, -robotRadius * 0.8, robotRadius * 2, robotRadius * 1.6, 5);
    ctx.fill();

    // Rubber Treads (top & bottom)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-robotRadius * 0.95, -robotRadius * 0.95, robotRadius * 1.9, 3.5);
    ctx.fillRect(-robotRadius * 0.95, robotRadius * 0.95 - 3.5, robotRadius * 1.9, 3.5);

    // Sensor Turret Dome
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(robotRadius * 0.25, 0, robotRadius * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Forward Direction Nose Pointer
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(robotRadius * 0.9, 0);
    ctx.lineTo(robotRadius * 0.2, -robotRadius * 0.38);
    ctx.lineTo(robotRadius * 0.38, 0);
    ctx.lineTo(robotRadius * 0.2, robotRadius * 0.38);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }, [
    mazeData,
    getCellGeometry,
    isVisualizerEnabled,
    showDirections,
    showExplored,
    showWeights,
    effectiveVisualizer,
  ]);
  drawSceneRef.current = drawScene;

  // Ensure canvas re-renders immediately when visualizer is toggled on/off
  useEffect(() => {
    drawScene();
  }, [isVisualizerEnabled, drawScene]);

  // Handle Resize smoothly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      drawScene();
    });
    ro.observe(container);
    drawScene();

    return () => ro.disconnect();
  }, [drawScene]);

  // Reset robot position when maze changes or resetKey is triggered
  const resetRobot = useCallback(() => {
    runIdRef.current++; // cancel any running simulation
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
    if (growthAnimRef.current) {
      cancelAnimationFrame(growthAnimRef.current);
      growthAnimRef.current = null;
    }
    setIsGrowing(false);
    growthProgressRef.current = 0.01;
    setGrowthProgress(0.01);

    robotRef.current = {
      x: mazeData.start_node[0],
      y: mazeData.start_node[1],
      heading: 'E',
      angle: 0,
      screenX: null,
      screenY: null,
      trail: [[mazeData.start_node[0], mazeData.start_node[1]]],
    };
    setCollisionFlash(false);
    drawScene();
  }, [mazeData, drawScene]);

  useEffect(() => {
    resetRobot();
  }, [mazeData, resetKey, resetRobot]);

  // Turn helper
  const turnHeading = (current: Heading, command: 'LEFT' | 'RIGHT' | 'U_TURN'): Heading => {
    const headings: Heading[] = ['N', 'E', 'S', 'W'];
    const idx = headings.indexOf(current);
    if (command === 'LEFT') return headings[(idx + 3) % 4];
    if (command === 'RIGHT') return headings[(idx + 1) % 4];
    if (command === 'U_TURN') return headings[(idx + 2) % 4];
    return current;
  };

  // Execution Loop: Guaranteed Single Thread with runId lock
  useEffect(() => {
    if (!isSimulating || commands.length === 0) {
      runIdRef.current++; // invalidate previous run
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      if (growthAnimRef.current) {
        cancelAnimationFrame(growthAnimRef.current);
        growthAnimRef.current = null;
      }
      setIsGrowing(false);
      return;
    }

    // Start fresh simulation run with unique ID
    const currentRunId = ++runIdRef.current;
    let stepIndex = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const cssWidth = Math.floor(rect.width) || canvas.clientWidth || 500;
    const cssHeight = Math.floor(rect.height) || canvas.clientHeight || 500;
    const { cellSize, getCellBounds } = getCellGeometry(cssWidth, cssHeight);
    const cols = mazeData.width;
    const rows = mazeData.height;

    // Guaranteed reset of robot position to START cell on simulation launch
    robotRef.current = {
      x: mazeData.start_node[0],
      y: mazeData.start_node[1],
      heading: 'E',
      angle: 0,
      screenX: null,
      screenY: null,
      trail: [[mazeData.start_node[0], mazeData.start_node[1]]],
    };
    setCollisionFlash(false);
    drawScene();

    const baseDuration = Math.max(40, 550 / Math.max(1, simulationSpeed));

    const executeNextStep = () => {
      // Abort if this run is no longer active
      if (currentRunId !== runIdRef.current) return;

      if (stepIndex >= commands.length) {
        const finalX = robotRef.current.x;
        const finalY = robotRef.current.y;
        const reachedTarget =
          finalX === mazeData.end_node[0] && finalY === mazeData.end_node[1];

        if (reachedTarget) {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
          });
          onSimulationEnd('success', stepIndex);
        } else {
          onSimulationEnd('stopped', stepIndex);
        }
        return;
      }

      const cmd = commands[stepIndex];
      const curX = robotRef.current.x;
      const curY = robotRef.current.y;
      const curHeading = robotRef.current.heading;

      onStepProgress(stepIndex + 1, commands.length, {
        x: curX,
        y: curY,
        heading: curHeading,
      });

      if (cmd === 'FORWARD') {
        const delta = HEADING_DELTAS[curHeading];
        const nextX = curX + delta.dx;
        const nextY = curY + delta.dy;

        // Collision Check: Virtual wall on the current cell border
        const currentWallMask = mazeData.grid[curY][curX];
        const hasWall = (currentWallMask & delta.wall) !== 0;
        const isOutOfBounds = nextX < 0 || nextX >= cols || nextY < 0 || nextY >= rows;

        if (hasWall || isOutOfBounds) {
          setCollisionFlash(true);
          onCollision([curX, curY], curHeading);

          // Animate brief bump shock
          const bumpStart = performance.now();
          const bumpDuration = 180;
          const fromPos = getCellBounds(curX, curY);

          const animateBump = (now: number) => {
            if (currentRunId !== runIdRef.current) return;
            const elapsed = now - bumpStart;
            const progress = Math.min(1, elapsed / bumpDuration);
            const bumpOffset = Math.sin(progress * Math.PI) * (cellSize * 0.22);

            robotRef.current.screenX = fromPos.centerX + delta.dx * bumpOffset;
            robotRef.current.screenY = fromPos.centerY + delta.dy * bumpOffset;
            drawScene();

            if (progress < 1) {
              requestAnimationFrame(animateBump);
            } else {
              robotRef.current.screenX = null;
              robotRef.current.screenY = null;
              drawScene();
              setTimeout(() => {
                if (currentRunId === runIdRef.current) {
                  setCollisionFlash(false);
                  onSimulationEnd('collision', stepIndex + 1);
                }
              }, 250);
            }
          };

          requestAnimationFrame(animateBump);
          return;
        }

        // Smooth Forward Translation from center of cell (curX, curY) to cell (nextX, nextY)
        const fromPos = getCellBounds(curX, curY);
        const toPos = getCellBounds(nextX, nextY);
        const moveStart = performance.now();

        const animateMove = (now: number) => {
          if (currentRunId !== runIdRef.current) return;
          const elapsed = now - moveStart;
          const progress = Math.min(1, elapsed / baseDuration);

          robotRef.current.screenX =
            fromPos.centerX + (toPos.centerX - fromPos.centerX) * progress;
          robotRef.current.screenY =
            fromPos.centerY + (toPos.centerY - fromPos.centerY) * progress;
          drawScene();

          if (progress < 1) {
            animFrameIdRef.current = requestAnimationFrame(animateMove);
          } else {
            robotRef.current.x = nextX;
            robotRef.current.y = nextY;
            robotRef.current.screenX = null;
            robotRef.current.screenY = null;
            robotRef.current.trail.push([nextX, nextY]);
            drawScene();

            stepIndex++;
            setTimeout(executeNextStep, 15);
          }
        };

        animFrameIdRef.current = requestAnimationFrame(animateMove);
      } else {
        // Rotation (LEFT, RIGHT, U_TURN) in place inside cell
        const nextHeading = turnHeading(curHeading, cmd);
        const startAngle = robotRef.current.angle;
        let deltaAngle = 0;

        if (cmd === 'RIGHT') deltaAngle = Math.PI / 2;
        else if (cmd === 'LEFT') deltaAngle = -Math.PI / 2;
        else if (cmd === 'U_TURN') deltaAngle = Math.PI;

        const turnStart = performance.now();
        const rotDuration = baseDuration * 0.75;

        const animateTurn = (now: number) => {
          if (currentRunId !== runIdRef.current) return;
          const elapsed = now - turnStart;
          const progress = Math.min(1, elapsed / rotDuration);

          robotRef.current.angle = startAngle + deltaAngle * progress;
          drawScene();

          if (progress < 1) {
            animFrameIdRef.current = requestAnimationFrame(animateTurn);
          } else {
            robotRef.current.heading = nextHeading;
            robotRef.current.angle = HEADING_ANGLES[nextHeading];
            drawScene();

            stepIndex++;
            setTimeout(executeNextStep, 15);
          }
        };

        animFrameIdRef.current = requestAnimationFrame(animateTurn);
      }
    };

    // Determine whether to run visualizer exploration animation before moving robot
    const vizData = effectiveVisualizerRef.current;
    const shouldVisualizeFirst =
      isVisualizerEnabled &&
      showExplored &&
      Boolean(vizData?.explorationSteps?.length);

    if (shouldVisualizeFirst) {
      // 1. Reset progress to 0% so optimal path is NOT shown at the first instant
      growthProgressRef.current = 0.01;
      setGrowthProgress(0.01);
      setIsGrowing(true);
      drawScene();

      const growthStart = performance.now();
      // Smooth growth duration scaled by simulationSpeed and growthSpeed
      const speedFactor = Math.max(1, simulationSpeed * 0.35) * growthSpeed;
      const growthDuration = Math.max(650, 2200 / speedFactor);

      const runGrowthAnim = (now: number) => {
        if (currentRunId !== runIdRef.current) return;

        const elapsed = now - growthStart;
        const progress = Math.min(1, elapsed / growthDuration);
        growthProgressRef.current = progress;
        drawScene();

        if (progress < 1) {
          growthAnimRef.current = requestAnimationFrame(runGrowthAnim);
        } else {
          // Growth completed: optimal path is now reached & highlighted in green!
          growthProgressRef.current = 1;
          setGrowthProgress(1);
          setIsGrowing(false);
          growthAnimRef.current = null;
          drawScene();

          // Brief 250ms pause to clearly show the found optimal path, then start moving the robot!
          setTimeout(() => {
            if (currentRunId === runIdRef.current) {
              executeNextStep();
            }
          }, 250);
        }
      };

      growthAnimRef.current = requestAnimationFrame(runGrowthAnim);
    } else {
      // If visualizer is OFF: robot must instantly start moving as per the code!
      executeNextStep();
    }

    return () => {
      runIdRef.current++; // cancel this run on unmount/re-run
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      if (growthAnimRef.current) {
        cancelAnimationFrame(growthAnimRef.current);
        growthAnimRef.current = null;
      }
      setIsGrowing(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isSimulating,
    commands,
    isVisualizerEnabled,
    showExplored,
    simulationSpeed,
    growthSpeed,
    mazeData,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[180px] min-w-0 max-w-full rounded-xl overflow-hidden border border-slate-800 bg-[#080d1a] flex items-center justify-center transition-colors duration-300 ${
        collisionFlash ? 'ring-4 ring-rose-500 shadow-[0_0_35px_rgba(244,63,94,0.7)]' : ''
      }`}
    >
      <canvas ref={canvasRef} className="block w-full h-full max-w-full max-h-full" />

      {/* Collision Overlay Flash */}
      {collisionFlash && (
        <div className="absolute inset-0 bg-rose-600/30 backdrop-blur-[1px] pointer-events-none flex items-center justify-center animate-pulse z-20">
          <div className="bg-rose-950/95 border-2 border-rose-500 text-rose-200 px-6 py-3 rounded-xl shadow-2xl font-bold tracking-wider text-sm flex items-center gap-2">
            <span className="text-xl">💥</span>
            <span>VIRTUAL WALL COLLISION! (+5s penalty)</span>
          </div>
        </div>
      )}

      {/* Top Left Corner Hoverable Visualizer Panel */}
      <div
        id="visualizer-top-left-panel"
        onMouseEnter={handleVisualizerMouseEnter}
        onMouseLeave={handleVisualizerMouseLeave}
        className="group/viz absolute top-3 left-3 z-30 transition-all duration-200 ease-out"
      >
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 hover:bg-slate-900/95 backdrop-blur-md border border-slate-800 hover:border-purple-500/50 rounded-xl shadow-xl transition-all duration-200">
          {/* Eyeball Logo Button: Master Toggle to Turn On / Off Visualizer on Maze */}
          <button
            id="btn-visualizer-eye-toggle"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsVisualizerEnabled((v) => !v);
            }}
            title={
              isVisualizerEnabled
                ? 'Visualizer updates are ON: Click eyeball to turn OFF'
                : 'Visualizer is OFF: Click eyeball to turn ON'
            }
            className={`p-1 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
              isVisualizerEnabled
                ? 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/15'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
          >
            {isVisualizerEnabled ? (
              <Eye className="w-3.5 h-3.5 stroke-[2.2]" />
            ) : (
              <EyeOff className="w-3.5 h-3.5 stroke-[2.2]" />
            )}
          </button>

          {/* Always Visible Badge: ONLY "Visualizer" when not hovering */}
          <button
            id="btn-visualizer-badge"
            type="button"
            onClick={() => setIsVisualizerExpanded((v) => !v)}
            title="Hover to view and configure visualizer controls"
            className="flex items-center gap-1 px-1.5 py-1 text-slate-200 text-xs font-semibold cursor-pointer select-none rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <span>Visualizer</span>
            <ChevronDown
              className={`w-3 h-3 text-slate-400 group-hover/viz:text-purple-300 transition-transform duration-200 ${
                isVisualizerExpanded ? 'rotate-180' : 'group-hover/viz:rotate-180'
              }`}
            />
            {isVisualizerEnabled && effectiveVisualizer && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] ml-0.5" />
            )}
          </button>

          {/* Hidden by default, REVEALED ON HOVER: Full controls & telemetry */}
          <div
            id="visualizer-controls-menu"
            className={`${
              isVisualizerExpanded ? 'flex' : 'hidden group-hover/viz:flex'
            } flex-wrap items-center gap-1.5 text-xs animate-in fade-in zoom-in-95 duration-150 pl-1 border-l border-slate-800`}
          >
            {/* Master Eyeball Status Toggle Button */}
            <button
              id="btn-visualizer-master-toggle"
              onClick={() => setIsVisualizerEnabled((v) => !v)}
              title={
                isVisualizerEnabled
                  ? 'Visualizer updates are active on maze (click to turn OFF)'
                  : 'Visualizer is hidden (click to turn ON)'
              }
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                isVisualizerEnabled
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {isVisualizerEnabled ? (
                <>
                  <Eye className="w-3 h-3 text-emerald-400" />
                  <span>ON</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3 h-3 text-slate-500" />
                  <span>OFF</span>
                </>
              )}
            </button>

            {/* Toggle Explored Tree */}
            <button
              id="btn-toggle-explored"
              onClick={handleToggleExplored}
              title="Toggle algorithm explored tree and visited node sequence"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                showExplored
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Explored</span>
            </button>

            {/* Growth Process Scrubber & Play/Pause Controls */}
            {showExplored && effectiveVisualizer && (
              <div className="flex items-center gap-1.5 bg-slate-800/80 border border-purple-500/30 rounded-md px-2 py-0.5">
                {/* Play / Pause / Replay Button */}
                <button
                  id="btn-growth-play-pause"
                  onClick={() => {
                    if (isGrowing) {
                      pauseGrowthAnimation();
                    } else if (growthProgress >= 0.98) {
                      playGrowthAnimation(false);
                    } else {
                      playGrowthAnimation(true);
                    }
                  }}
                  title={
                    isGrowing
                      ? 'Pause growth animation'
                      : growthProgress >= 0.98
                      ? 'Replay growth animation from start'
                      : 'Resume growth animation'
                  }
                  className="flex items-center gap-1 text-[11px] font-medium text-purple-300 hover:text-white transition-colors cursor-pointer"
                >
                  {isGrowing ? (
                    <>
                      <Pause className="w-3 h-3 fill-current text-amber-400" />
                      <span className="hidden md:inline text-amber-300">Pause</span>
                    </>
                  ) : growthProgress >= 0.98 ? (
                    <>
                      <RotateCcw className="w-3 h-3 text-purple-400" />
                      <span className="hidden md:inline">Replay</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current text-emerald-400" />
                      <span className="hidden md:inline text-emerald-300">Play</span>
                    </>
                  )}
                </button>

                {/* Scrubber Slider */}
                <div className="flex items-center gap-1.5">
                  <input
                    id="growth-scrubber-slider"
                    type="range"
                    min="0.02"
                    max="1"
                    step="0.01"
                    value={growthProgress}
                    onChange={(e) => handleScrubberChange(parseFloat(e.target.value))}
                    title={`Growth progress: ${Math.round(growthProgress * 100)}%`}
                    className="w-20 sm:w-28 accent-purple-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-purple-300 min-w-[28px]">
                    {Math.round(growthProgress * 100)}%
                  </span>
                </div>

                {/* Speed Cycle Button */}
                <button
                  id="btn-growth-speed"
                  onClick={cycleSpeed}
                  title="Change growth animation speed"
                  className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-[10px] font-mono cursor-pointer"
                >
                  {growthSpeed}x
                </button>
              </div>
            )}

            {/* Toggle Directions */}
            <button
              id="btn-toggle-directions"
              onClick={() => setShowDirections((v) => !v)}
              title="Toggle path direction vectors & motion arrows on maze cells"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                showDirections
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              <Navigation className="w-3 h-3" />
              <span>Flow</span>
            </button>

            {/* Toggle Node Weights (f/g/h) */}
            <button
              id="btn-toggle-weights"
              onClick={() => setShowWeights((v) => !v)}
              title="Toggle node weights and heuristic cost indicators (g, h, f)"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                showWeights
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              <Scale className="w-3 h-3" />
              <span>Weights</span>
            </button>

            {/* Right: Algorithm & Node Status */}
            {effectiveVisualizer ? (
              <div className="flex items-center gap-1.5 text-[11px] font-mono pl-1 border-l border-slate-800">
                <span className="text-cyan-400 font-medium truncate max-w-[150px] sm:max-w-none">
                  {effectiveVisualizer.algorithmName || 'Algorithm'}
                </span>
                {effectiveVisualizer.deadEndCount !== undefined && effectiveVisualizer.deadEndCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/30 text-[10px]">
                    {effectiveVisualizer.deadEndCount} dead ends
                  </span>
                )}
                {effectiveVisualizer.hasWeights && (
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px]">
                    Weighted
                  </span>
                )}
                <span className="text-slate-400 text-[10px]">
                  {effectiveVisualizer.explorationSteps?.length || Object.keys(effectiveVisualizer.nodes).length} probed
                </span>
              </div>
            ) : (
              <span className="text-slate-500 text-[11px] pl-1 border-l border-slate-800">Run solver to visualize</span>
            )}
          </div>
        </div>
      </div>

      {/* Legend Badge Overlay (Side Vertical Column) */}
      <div className="absolute bottom-3 left-3 bg-slate-900/95 backdrop-blur-md border border-slate-800/90 text-[10.5px] p-2.5 rounded-xl flex flex-col gap-1.5 text-slate-300 shadow-2xl pointer-events-none z-10">
        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 mb-0.5">
          Maze Legend
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500/30 border border-emerald-400 shrink-0" />
          <span className="font-semibold text-emerald-400">START (0,0)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-cyan-500/30 border border-cyan-400 shrink-0" />
          <span className="font-semibold text-cyan-400">
            GOAL ({mazeData.width - 1},{mazeData.height - 1})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-1 bg-rose-500 rounded-full shrink-0 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
          <span className="text-rose-300">Virtual Wall</span>
        </div>
        {isVisualizerEnabled && showExplored && (
          <>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 bg-purple-500/60 rounded-full shrink-0 shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
              <span className="text-purple-300">Explored Branch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
              <span className="text-red-400 font-medium">Dead End (Red)</span>
            </div>
          </>
        )}
        {isVisualizerEnabled && (
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-1.5 bg-emerald-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
            <span className="text-emerald-400 font-semibold">Optimal Path (Green)</span>
          </div>
        )}
      </div>
    </div>
  );
}
