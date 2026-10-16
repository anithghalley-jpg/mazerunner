export type Heading = 'N' | 'E' | 'S' | 'W';

export type Command = 'FORWARD' | 'LEFT' | 'RIGHT' | 'U_TURN';

export interface RobotState {
  x: number;
  y: number;
  heading: Heading;
}

export interface MazeData {
  width: number;
  height: number;
  grid: number[][]; // bitwise walls: 1=North, 2=East, 4=South, 8=West
  start_node: [number, number]; // [x, y]
  end_node: [number, number];   // [x, y]
}

export interface SimulationStats {
  stepsTaken: number;
  collisions: number;
  status: 'idle' | 'running' | 'success' | 'collision' | 'stopped';
  executionTimeMs: number;
}

export interface LogEntry {
  id: string;
  type: 'info' | 'error' | 'success' | 'warn';
  message: string;
  timestamp: string;
}

export interface ExplorationStep {
  step: number;
  x: number;
  y: number;
  parentX?: number;
  parentY?: number;
  direction?: Heading;
  gCost?: number;
  hCost?: number;
  fCost?: number;
  isDeadEnd?: boolean;
  isWinningPath?: boolean;
  branchDepth?: number;
}

export interface NodeVisualData {
  x: number;
  y: number;
  visitedOrder?: number;      // Sequence in which node was expanded (1, 2, 3...)
  parentX?: number;
  parentY?: number;
  direction?: Heading;        // Direction pointer (N, E, S, W) pointing to next or parent
  gCost?: number;             // Distance / cost from start
  hCost?: number;             // Heuristic estimate to target
  fCost?: number;             // Total priority f = g + h
  isSolutionPath?: boolean;   // Whether node is part of the final solved route
  isDeadEnd?: boolean;        // Whether this node is a dead-end branch tip
  branchDepth?: number;       // How deep this branch reached
  weight?: number;            // Custom edge or cell weight
}

export interface AlgorithmVisualizerData {
  algorithmName?: string;     // e.g. "A* (A-Star)", "BFS", "Dijkstra"
  hasWeights: boolean;        // True if algorithm evaluates weights/costs (g, h, f)
  nodes: Record<string, NodeVisualData>; // key: `${x},${y}`
  solutionPath: [number, number][];      // Array of [x, y] coordinates in the solution path
  explorationSteps: ExplorationStep[];   // Sequential slime mold growth events
  maxOrder: number;
  maxCost: number;
  deadEndCount: number;
  totalExplored: number;
}

