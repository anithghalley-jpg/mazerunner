import {
  MazeData,
  Command,
  Heading,
  AlgorithmVisualizerData,
  NodeVisualData,
  ExplorationStep,
} from '../types/maze';

const HEADING_DELTAS: Record<Heading, { dx: number; dy: number; wall: number }> = {
  N: { dx: 0, dy: -1, wall: 1 },
  E: { dx: 1, dy: 0, wall: 2 },
  S: { dx: 0, dy: 1, wall: 4 },
  W: { dx: -1, dy: 0, wall: 8 },
};

const ROTATE_LEFT: Record<Heading, Heading> = { N: 'W', W: 'S', S: 'E', E: 'N' };
const ROTATE_RIGHT: Record<Heading, Heading> = { N: 'E', E: 'S', S: 'W', W: 'N' };
const ROTATE_UTURN: Record<Heading, Heading> = { N: 'S', S: 'N', E: 'W', W: 'E' };

/**
 * Traces the robot movement commands through the maze to build the exact solution path,
 * direction vectors for each step, and step costs.
 */
export function traceSolutionPath(
  commands: Command[],
  mazeData: MazeData
): {
  solutionPath: [number, number][];
  nodeMap: Record<string, NodeVisualData>;
  maxCost: number;
} {
  const [sx, sy] = mazeData.start_node;
  const [tx, ty] = mazeData.end_node;

  let cx = sx;
  let cy = sy;
  let heading: Heading = 'E';

  const solutionPath: [number, number][] = [[cx, cy]];
  const nodeMap: Record<string, NodeVisualData> = {};

  let stepCost = 0;
  const initialH = Math.abs(cx - tx) + Math.abs(cy - ty);
  nodeMap[`${cx},${cy}`] = {
    x: cx,
    y: cy,
    visitedOrder: 1,
    direction: heading,
    gCost: 0,
    hCost: initialH,
    fCost: initialH,
    isSolutionPath: true,
  };

  for (const cmd of commands) {
    if (cmd === 'FORWARD') {
      const delta = HEADING_DELTAS[heading];
      const nx = cx + delta.dx;
      const ny = cy + delta.dy;

      // Update current cell's exit direction
      if (nodeMap[`${cx},${cy}`]) {
        nodeMap[`${cx},${cy}`].direction = heading;
      }

      // Check bounds
      if (nx >= 0 && nx < mazeData.width && ny >= 0 && ny < mazeData.height) {
        cx = nx;
        cy = ny;
        stepCost++;
        solutionPath.push([cx, cy]);

        const h = Math.abs(cx - tx) + Math.abs(cy - ty);
        nodeMap[`${cx},${cy}`] = {
          x: cx,
          y: cy,
          visitedOrder: solutionPath.length,
          direction: heading,
          gCost: stepCost,
          hCost: h,
          fCost: stepCost + h,
          isSolutionPath: true,
        };
      }
    } else if (cmd === 'LEFT') {
      heading = ROTATE_LEFT[heading];
      if (nodeMap[`${cx},${cy}`]) {
        nodeMap[`${cx},${cy}`].direction = heading;
      }
    } else if (cmd === 'RIGHT') {
      heading = ROTATE_RIGHT[heading];
      if (nodeMap[`${cx},${cy}`]) {
        nodeMap[`${cx},${cy}`].direction = heading;
      }
    } else if (cmd === 'U_TURN') {
      heading = ROTATE_UTURN[heading];
      if (nodeMap[`${cx},${cy}`]) {
        nodeMap[`${cx},${cy}`].direction = heading;
      }
    }
  }

  return {
    solutionPath,
    nodeMap,
    maxCost: stepCost,
  };
}

/**
 * Simulates a full graph search (slime mold process) on the maze to generate all explored
 * branches, tendril connections to parents, dead-end termination points, and node weights (g, h, f).
 */
export function generateSlimeMoldExploration(
  mazeData: MazeData,
  algorithmType: 'bfs' | 'astar' | 'dijkstra' | 'dfs'
): {
  steps: ExplorationStep[];
  nodeMap: Record<string, NodeVisualData>;
  solutionPath: [number, number][];
  deadEndCount: number;
} {
  const { width, height, grid, start_node, end_node } = mazeData;
  const [sx, sy] = start_node;
  const [tx, ty] = end_node;

  const steps: ExplorationStep[] = [];
  const nodeMap: Record<string, NodeVisualData> = {};
  const parentMap = new Map<string, { px: number; py: number; dir: Heading; g: number; depth: number }>();
  const childrenCount = new Map<string, number>();

  const startKey = `${sx},${sy}`;
  const startH = Math.abs(sx - tx) + Math.abs(sy - ty);

  // Initial start step
  steps.push({
    step: 1,
    x: sx,
    y: sy,
    direction: 'E',
    gCost: 0,
    hCost: startH,
    fCost: startH,
    branchDepth: 0,
  });

  nodeMap[startKey] = {
    x: sx,
    y: sy,
    visitedOrder: 1,
    direction: 'E',
    gCost: 0,
    hCost: startH,
    fCost: startH,
    branchDepth: 0,
  };

  const directions: { dir: Heading; dx: number; dy: number; wall: number }[] = [
    { dir: 'E', dx: 1, dy: 0, wall: 2 },
    { dir: 'S', dx: 0, dy: 1, wall: 4 },
    { dir: 'W', dx: -1, dy: 0, wall: 8 },
    { dir: 'N', dx: 0, dy: -1, wall: 1 },
  ];

  if (algorithmType === 'astar' || algorithmType === 'dijkstra') {
    // Priority queue search
    type PQItem = { f: number; g: number; x: number; y: number; dir: Heading; depth: number };
    const pq: PQItem[] = [{ f: algorithmType === 'astar' ? startH : 0, g: 0, x: sx, y: sy, dir: 'E', depth: 0 }];
    const bestG = new Map<string, number>();
    bestG.set(startKey, 0);

    let stepCounter = 1;

    while (pq.length > 0) {
      // Pop lowest f/g
      pq.sort((a, b) => a.f - b.f || a.g - b.g);
      const curr = pq.shift()!;
      const currKey = `${curr.x},${curr.y}`;

      if (curr.x === tx && curr.y === ty) {
        break; // Reached goal
      }

      const walls = grid[curr.y][curr.x];

      for (const { dir, dx, dy, wall } of directions) {
        if (!(walls & wall)) {
          const nx = curr.x + dx;
          const ny = curr.y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nextKey = `${nx},${ny}`;
            const newG = curr.g + 1;
            const prevG = bestG.get(nextKey) ?? Infinity;

            if (newG < prevG) {
              bestG.set(nextKey, newG);
              stepCounter++;
              const h = Math.abs(nx - tx) + Math.abs(ny - ty);
              const f = algorithmType === 'astar' ? newG + h : newG;
              const nextDepth = curr.depth + 1;

              parentMap.set(nextKey, { px: curr.x, py: curr.y, dir, g: newG, depth: nextDepth });
              childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);

              steps.push({
                step: stepCounter,
                x: nx,
                y: ny,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: f,
                branchDepth: nextDepth,
              });

              nodeMap[nextKey] = {
                x: nx,
                y: ny,
                visitedOrder: stepCounter,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: f,
                branchDepth: nextDepth,
              };

              pq.push({ f, g: newG, x: nx, y: ny, dir, depth: nextDepth });
            }
          }
        }
      }
    }
  } else if (algorithmType === 'dfs') {
    // Depth-First Search
    const stack: { x: number; y: number; dir: Heading; depth: number; g: number }[] = [
      { x: sx, y: sy, dir: 'E', depth: 0, g: 0 },
    ];
    const visited = new Set<string>([startKey]);
    let stepCounter = 1;

    while (stack.length > 0) {
      const curr = stack.pop()!;
      const currKey = `${curr.x},${curr.y}`;

      if (curr.x === tx && curr.y === ty) {
        break;
      }

      const walls = grid[curr.y][curr.x];

      for (const { dir, dx, dy, wall } of directions) {
        if (!(walls & wall)) {
          const nx = curr.x + dx;
          const ny = curr.y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nextKey = `${nx},${ny}`;
            if (!visited.has(nextKey)) {
              visited.add(nextKey);
              stepCounter++;
              const newG = curr.g + 1;
              const h = Math.abs(nx - tx) + Math.abs(ny - ty);
              const nextDepth = curr.depth + 1;

              parentMap.set(nextKey, { px: curr.x, py: curr.y, dir, g: newG, depth: nextDepth });
              childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);

              steps.push({
                step: stepCounter,
                x: nx,
                y: ny,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: newG + h,
                branchDepth: nextDepth,
              });

              nodeMap[nextKey] = {
                x: nx,
                y: ny,
                visitedOrder: stepCounter,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: newG + h,
                branchDepth: nextDepth,
              };

              stack.push({ x: nx, y: ny, dir, depth: nextDepth, g: newG });
            }
          }
        }
      }
    }
  } else {
    // Breadth-First Search (FIFO Queue)
    const queue: { x: number; y: number; dir: Heading; depth: number; g: number }[] = [
      { x: sx, y: sy, dir: 'E', depth: 0, g: 0 },
    ];
    const visited = new Set<string>([startKey]);
    let stepCounter = 1;

    while (queue.length > 0) {
      const curr = queue.shift()!;
      const currKey = `${curr.x},${curr.y}`;

      if (curr.x === tx && curr.y === ty) {
        break;
      }

      const walls = grid[curr.y][curr.x];

      for (const { dir, dx, dy, wall } of directions) {
        if (!(walls & wall)) {
          const nx = curr.x + dx;
          const ny = curr.y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nextKey = `${nx},${ny}`;
            if (!visited.has(nextKey)) {
              visited.add(nextKey);
              stepCounter++;
              const newG = curr.g + 1;
              const h = Math.abs(nx - tx) + Math.abs(ny - ty);
              const nextDepth = curr.depth + 1;

              parentMap.set(nextKey, { px: curr.x, py: curr.y, dir, g: newG, depth: nextDepth });
              childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);

              steps.push({
                step: stepCounter,
                x: nx,
                y: ny,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: newG + h,
                branchDepth: nextDepth,
              });

              nodeMap[nextKey] = {
                x: nx,
                y: ny,
                visitedOrder: stepCounter,
                parentX: curr.x,
                parentY: curr.y,
                direction: dir,
                gCost: newG,
                hCost: h,
                fCost: newG + h,
                branchDepth: nextDepth,
              };

              queue.push({ x: nx, y: ny, dir, depth: nextDepth, g: newG });
            }
          }
        }
      }
    }
  }

  // Reconstruct solution path by backtracking from end_node
  const goalKey = `${tx},${ty}`;
  const solutionPath: [number, number][] = [];
  const winningKeys = new Set<string>();

  if (parentMap.has(goalKey) || (sx === tx && sy === ty)) {
    let curr = goalKey;
    while (curr) {
      const [xStr, yStr] = curr.split(',');
      const px = parseInt(xStr, 10);
      const py = parseInt(yStr, 10);
      solutionPath.unshift([px, py]);
      winningKeys.add(curr);

      const pInfo = parentMap.get(curr);
      if (pInfo) {
        curr = `${pInfo.px},${pInfo.py}`;
      } else {
        break;
      }
    }
  }

  // Mark winning path & dead-end tips on both steps and nodeMap
  let deadEndCount = 0;
  for (const step of steps) {
    const key = `${step.x},${step.y}`;
    if (winningKeys.has(key)) {
      step.isWinningPath = true;
      if (nodeMap[key]) nodeMap[key].isSolutionPath = true;
    } else {
      step.isWinningPath = false;
      // If cell has no explored children and isn't the goal, it's a dead-end tip!
      const count = childrenCount.get(key) || 0;
      if (count === 0 && !(step.x === tx && step.y === ty)) {
        step.isDeadEnd = true;
        deadEndCount++;
        if (nodeMap[key]) nodeMap[key].isDeadEnd = true;
      }
    }
  }

  return {
    steps,
    nodeMap,
    solutionPath,
    deadEndCount,
  };
}

/**
 * Extracts algorithm telemetry from Python execution runtime (Pyodide),
 * constructing the complete slime mold tree of attempted paths, tendrils, and node weights.
 */
export function extractAlgorithmVisualizerData(
  pyodide: any,
  code: string,
  commands: Command[],
  mazeData: MazeData
): AlgorithmVisualizerData {
  let algorithmType: 'bfs' | 'astar' | 'dijkstra' | 'dfs' = 'bfs';
  let hasWeights = false;
  let algorithmName = 'Breadth-First Search (BFS)';

  if (code.includes('heapq') && (code.includes('f_score') || code.includes('heuristic'))) {
    algorithmName = 'A* Search (Heuristic Weighted)';
    algorithmType = 'astar';
    hasWeights = true;
  } else if (code.includes('heapq') || code.includes('Dijkstra')) {
    algorithmName = "Dijkstra's Algorithm (Uniform-Cost)";
    algorithmType = 'dijkstra';
    hasWeights = true;
  } else if (code.includes('DFS') || code.includes('stack.pop()')) {
    algorithmName = 'Depth-First Search (DFS)';
    algorithmType = 'dfs';
  } else if (code.includes('Wall Follower') || code.includes('is_wall')) {
    algorithmName = 'Left-Hand Wall Follower (Reactive)';
    algorithmType = 'dfs';
  }

  // Generate full search tree with all tried paths and dead ends
  const sim = generateSlimeMoldExploration(mazeData, algorithmType);

  // Trace the exact commands executed by the user's Python solve()
  const traced = traceSolutionPath(commands, mazeData);

  // If user's executed path reached goal, use it as the final solutionPath
  const finalSolutionPath = traced.solutionPath.length > 1 ? traced.solutionPath : sim.solutionPath;

  // Mark all cells on finalSolutionPath as isSolutionPath
  const finalWinningKeys = new Set(finalSolutionPath.map(([x, y]) => `${x},${y}`));

  // Merge traced node direction vectors into the simulated map
  for (const [key, node] of Object.entries(traced.nodeMap)) {
    if (sim.nodeMap[key]) {
      sim.nodeMap[key].direction = node.direction;
      sim.nodeMap[key].isSolutionPath = true;
    } else {
      sim.nodeMap[key] = node;
    }
  }

  for (const step of sim.steps) {
    const key = `${step.x},${step.y}`;
    if (finalWinningKeys.has(key)) {
      step.isWinningPath = true;
      if (sim.nodeMap[key]) sim.nodeMap[key].isSolutionPath = true;
    }
  }

  let maxCost = 0;
  for (const node of Object.values(sim.nodeMap)) {
    if (node.gCost && node.gCost > maxCost) {
      maxCost = node.gCost;
    }
  }

  return {
    algorithmName,
    hasWeights,
    nodes: sim.nodeMap,
    solutionPath: finalSolutionPath,
    explorationSteps: sim.steps,
    maxOrder: sim.steps.length,
    maxCost,
    deadEndCount: sim.deadEndCount,
    totalExplored: Object.keys(sim.nodeMap).length,
  };
}
