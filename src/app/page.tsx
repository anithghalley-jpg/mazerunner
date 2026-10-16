'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CodePanel from '../components/CodePanel';
import MazeCanvas from '../components/MazeCanvas';
import ControlPanel from '../components/ControlPanel';
import GuideTab from '../components/GuideTab';
import { MazeData, Command, SimulationStats, LogEntry, Heading, RobotState, AlgorithmVisualizerData } from '../types/maze';
import { generateBraidedMaze, generateBlankArena } from '../utils/mazeGenerator';
import { DEFAULT_PYTHON_CODE } from '../utils/defaultPythonCode';
import { executePythonSolver } from '../utils/pyodideRunner';
import { Sparkles, ArrowRight, Code } from 'lucide-react';

export default function Home() {
  // Navigation: 'simulator' or 'guide'
  const [activeTab, setActiveTab] = useState<'simulator' | 'guide'>('simulator');

  // Layout mode: 'maze-left' (Maze on Left) or 'maze-right' (Maze on Right)
  const [layoutMode, setLayoutMode] = useState<'maze-left' | 'maze-right'>('maze-left');

  // Panel sizing: 'wide' (65/35), 'balanced' (50/50), 'focus-maze' (100% canvas)
  const [panelRatio, setPanelRatio] = useState<'wide' | 'balanced' | 'focus-maze'>('wide');

  // Grid parameters
  const [gridWidth, setGridWidth] = useState(11);
  const [gridHeight, setGridHeight] = useState(11);
  const [braidRatio, setBraidRatio] = useState(0.4);
  const [simulationSpeed, setSimulationSpeed] = useState(4);

  // Maze state
  const [mazeData, setMazeData] = useState<MazeData>(() =>
    generateBraidedMaze(11, 11, 0.4)
  );

  // Reset trigger key to force canvas robot repositioning
  const [resetKey, setResetKey] = useState(0);

  // Editor and simulation state
  const [pythonCode, setPythonCode] = useState(DEFAULT_PYTHON_CODE);
  const [isExecutingCode, setIsExecutingCode] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [commands, setCommands] = useState<Command[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [visualizerData, setVisualizerData] = useState<AlgorithmVisualizerData | null>(null);

  // Telemetry stats
  const [stats, setStats] = useState<SimulationStats>({
    stepsTaken: 0,
    collisions: 0,
    status: 'idle',
    executionTimeMs: 0,
  });

  // Append to console
  const addLog = useCallback(
    (message: string, type: LogEntry['type'] = 'info') => {
      const now = new Date();
      const timeStr =
        now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 9),
          type,
          message,
          timestamp: timeStr,
        },
      ]);
    },
    []
  );

  // Clear console
  const handleClearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  // Regenerate maze with walls
  const handleGenerateMaze = useCallback(() => {
    setIsSimulating(false);
    setCommands([]);
    setVisualizerData(null);
    const newMaze = generateBraidedMaze(gridWidth, gridHeight, braidRatio);
    setMazeData(newMaze);
    setResetKey((prev) => prev + 1);
    setStats({
      stepsTaken: 0,
      collisions: 0,
      status: 'idle',
      executionTimeMs: 0,
    });
    addLog(
      `Generated new ${gridWidth}x${gridHeight} cell-based maze (Braid: ${Math.round(
        braidRatio * 100
      )}%). Ready.`,
      'info'
    );
  }, [gridWidth, gridHeight, braidRatio, addLog]);

  // Generate blank practice arena with zero internal walls
  const handleGenerateBlankArena = useCallback(() => {
    setIsSimulating(false);
    setCommands([]);
    setVisualizerData(null);
    const blankMaze = generateBlankArena(gridWidth, gridHeight);
    setMazeData(blankMaze);
    setResetKey((prev) => prev + 1);
    setStats({
      stepsTaken: 0,
      collisions: 0,
      status: 'idle',
      executionTimeMs: 0,
    });
    addLog(
      `🏟️ Blank Practice Arena (${gridWidth}x${gridHeight}) loaded! Zero internal walls — safe for testing robot moves.`,
      'info'
    );
  }, [gridWidth, gridHeight, addLog]);

  // Handle grid size or braid changes
  useEffect(() => {
    handleGenerateMaze();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridWidth, gridHeight, braidRatio]);

  // Reset robot position back to Start Cell (0, 0)
  const handleResetRobot = useCallback(() => {
    setIsSimulating(false);
    setCommands([]);
    setResetKey((prev) => prev + 1);
    setStats((prev) => ({
      ...prev,
      stepsTaken: 0,
      status: 'idle',
    }));
    addLog('Robot reset to center of Start Cell (0, 0) facing East.', 'info');
  }, [addLog]);

  // Handle algorithm preset load from Guide
  const handleLoadAlgorithm = useCallback(
    (code: string, algoName: string) => {
      setPythonCode(code);
      setActiveTab('simulator');
      setResetKey((prev) => prev + 1);
      addLog(`Loaded algorithm preset: "${algoName}". Ready to execute!`, 'info');
    },
    [addLog]
  );

  // Run simulation
  const handleRunSimulation = useCallback(async () => {
    if (isExecutingCode || isSimulating) return;

    setIsExecutingCode(true);
    setCommands([]);
    setResetKey((prev) => prev + 1);
    setStats((prev) => ({
      ...prev,
      status: 'idle',
      stepsTaken: 0,
    }));

    addLog('Compiling Python solver in Pyodide WebAssembly...', 'info');
    const startTime = performance.now();

    const result = await executePythonSolver(pythonCode, mazeData, (msg, type) => {
      addLog(msg, type);
    });

    const elapsed = Math.round(performance.now() - startTime);
    setIsExecutingCode(false);

    if (!result.success) {
      setStats((prev) => ({
        ...prev,
        status: 'stopped',
        executionTimeMs: elapsed,
      }));
      addLog(`Execution error: ${result.error}`, 'error');
      return;
    }

    if (result.commands.length === 0) {
      setStats((prev) => ({
        ...prev,
        status: 'stopped',
        executionTimeMs: elapsed,
      }));
      addLog('solve() returned an empty list of commands.', 'warn');
      return;
    }

    addLog(
      `Computed ${result.commands.length} motor commands in ${elapsed}ms: [${result.commands
        .slice(0, 8)
        .join(', ')}${result.commands.length > 8 ? '...' : ''}]. Navigating cells!`,
      'success'
    );

    setCommands(result.commands);
    if (result.visualizerData) {
      setVisualizerData(result.visualizerData);
    }
    setIsSimulating(true);
    setStats((prev) => ({
      ...prev,
      status: 'running',
      executionTimeMs: elapsed,
    }));
  }, [isExecutingCode, isSimulating, pythonCode, mazeData, addLog]);

  // Stop simulation
  const handleStopSimulation = useCallback(() => {
    setIsSimulating(false);
    setStats((prev) => ({ ...prev, status: 'stopped' }));
    addLog('Simulation stopped by user.', 'warn');
  }, [addLog]);

  // Simulation finished
  const handleSimulationEnd = useCallback(
    (status: 'success' | 'collision' | 'stopped', steps: number) => {
      setIsSimulating(false);
      setStats((prev) => ({
        ...prev,
        status,
        stepsTaken: steps,
      }));

      if (status === 'success') {
        addLog(
          `SUCCESS: Target cell [${mazeData.end_node.join(', ')}] reached successfully in ${steps} steps!`,
          'success'
        );
      } else if (status === 'collision') {
        addLog(`Simulation halted: Virtual wall collision (+5s penalty).`, 'error');
      } else {
        addLog(`Simulation ended after ${steps} steps.`, 'info');
      }
    },
    [mazeData, addLog]
  );

  // Collision detected
  const handleCollision = useCallback(
    (node: [number, number], heading: Heading) => {
      setStats((prev) => ({
        ...prev,
        collisions: prev.collisions + 1,
      }));
      addLog(
        `VIRTUAL COLLISION: +5s penalty at cell (${node[0]}, ${node[1]}) heading ${heading}!`,
        'error'
      );
    },
    [addLog]
  );

  // Step progress
  const handleStepProgress = useCallback(
    (step: number, _total: number, _robot: RobotState) => {
      setStats((prev) => ({
        ...prev,
        stepsTaken: step,
      }));
    },
    []
  );

  // Compute Grid Columns based on panelRatio
  const getMazeColSpan = () => {
    if (panelRatio === 'focus-maze') return 'col-span-12';
    if (panelRatio === 'wide') return 'lg:col-span-7 xl:col-span-7';
    return 'lg:col-span-6'; // balanced
  };

  const getCodeColSpan = () => {
    if (panelRatio === 'focus-maze') return 'hidden';
    if (panelRatio === 'wide') return 'lg:col-span-5 xl:col-span-5';
    return 'lg:col-span-6'; // balanced
  };

  // Sections
  const mazeSection = (
    <section className={`flex flex-col h-full space-y-2 min-h-0 min-w-0 w-full max-w-full overflow-hidden ${getMazeColSpan()}`}>
      {/* 2D Canvas Visualizer (Fills maximum space) */}
      <div className="flex-1 min-h-[200px] w-full min-w-0 relative overflow-hidden">
        <MazeCanvas
          mazeData={mazeData}
          commands={commands}
          isSimulating={isSimulating}
          simulationSpeed={simulationSpeed}
          resetKey={resetKey}
          visualizerData={visualizerData}
          onSimulationEnd={handleSimulationEnd}
          onCollision={handleCollision}
          onStepProgress={handleStepProgress}
        />
      </div>

      {/* Compact Controls */}
      <ControlPanel
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        braidRatio={braidRatio}
        simulationSpeed={simulationSpeed}
        stats={stats}
        onGridWidthChange={setGridWidth}
        onGridHeightChange={setGridHeight}
        onBraidRatioChange={setBraidRatio}
        onSimulationSpeedChange={setSimulationSpeed}
        onGenerateMaze={handleGenerateMaze}
        onGenerateBlankArena={handleGenerateBlankArena}
        onResetRobot={handleResetRobot}
        isSimulating={isSimulating}
      />
    </section>
  );

  const codeSection = (
    <section className={`flex flex-col h-full min-h-0 min-w-0 w-full max-w-full overflow-hidden ${getCodeColSpan()}`}>
      <CodePanel
        pythonCode={pythonCode}
        onCodeChange={setPythonCode}
        onRunSimulation={handleRunSimulation}
        onStopSimulation={handleStopSimulation}
        isExecutingCode={isExecutingCode}
        isSimulating={isSimulating}
        logs={logs}
        onClearLogs={handleClearLogs}
        onOpenGuide={() => setActiveTab('guide')}
      />
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#0a0e17] text-slate-100">
      <Navbar
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        layoutMode={layoutMode}
        onToggleLayout={() =>
          setLayoutMode((prev) => (prev === 'maze-left' ? 'maze-right' : 'maze-left'))
        }
        panelRatio={panelRatio}
        onChangePanelRatio={setPanelRatio}
      />

      {/* Main Content Area */}
      {activeTab === 'guide' ? (
        <main className="flex-1 w-full max-w-full overflow-x-hidden bg-slate-50 min-h-[calc(100vh-3.5rem)] text-slate-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <GuideTab
            onLoadAlgorithm={handleLoadAlgorithm}
            onGoToSimulator={() => setActiveTab('simulator')}
          />
        </main>
      ) : (
        <main className="flex-1 p-2 sm:p-2.5 flex flex-col w-full max-w-full mx-auto h-[calc(100dvh-3.5rem)] min-h-0 overflow-hidden">
          {/* Grid Layout Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 min-w-0 w-full max-w-full h-full overflow-hidden">
            {layoutMode === 'maze-left' ? (
              <>
                {mazeSection}
                {codeSection}
              </>
            ) : (
              <>
                {codeSection}
                {mazeSection}
              </>
            )}
          </div>
        </main>
      )}
    </div>
  );
}
