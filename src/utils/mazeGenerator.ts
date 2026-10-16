import { MazeData } from '../types/maze';

export const WALL_NORTH = 1;
export const WALL_EAST = 2;
export const WALL_SOUTH = 4;
export const WALL_WEST = 8;

export const OPPOSITE_WALL: Record<number, number> = {
  [WALL_NORTH]: WALL_SOUTH,
  [WALL_EAST]: WALL_WEST,
  [WALL_SOUTH]: WALL_NORTH,
  [WALL_WEST]: WALL_EAST,
};

export const DIR_DELTA: Record<number, [number, number]> = {
  [WALL_NORTH]: [0, -1],
  [WALL_EAST]: [1, 0],
  [WALL_SOUTH]: [0, 1],
  [WALL_WEST]: [-1, 0],
};

/**
 * Generates an open practice arena with ZERO interior walls.
 * Only outer perimeter boundary walls are kept so the robot stays within the arena.
 */
export function generateBlankArena(width: number = 10, height: number = 10): MazeData {
  const w = Math.max(3, Math.min(30, width));
  const h = Math.max(3, Math.min(30, height));

  const grid: number[][] = Array.from({ length: h }, (_, y) =>
    Array.from({ length: w }, (_, x) => {
      let mask = 0;
      if (y === 0) mask |= WALL_NORTH;
      if (y === h - 1) mask |= WALL_SOUTH;
      if (x === 0) mask |= WALL_WEST;
      if (x === w - 1) mask |= WALL_EAST;
      return mask;
    })
  );

  return {
    width: w,
    height: h,
    grid,
    start_node: [0, 0],
    end_node: [w - 1, h - 1],
  };
}

/**
 * Generates an edge-based braided maze using bitwise encoding
 * 1 = North, 2 = East, 4 = South, 8 = West.
 * 
 * @param width Grid width (cells horizontally)
 * @param height Grid height (cells vertically)
 * @param braidRatio 0.0 (perfect tree maze) to 1.0 (dead ends removed / loops created)
 */
export function generateBraidedMaze(
  width: number = 10,
  height: number = 10,
  braidRatio: number = 0.5
): MazeData {
  // Clamp dimensions
  const w = Math.max(3, Math.min(30, width));
  const h = Math.max(3, Math.min(30, height));

  // Initialize with all walls present (1 | 2 | 4 | 8 = 15)
  const grid: number[][] = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => WALL_NORTH | WALL_EAST | WALL_SOUTH | WALL_WEST)
  );

  const visited: boolean[][] = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false)
  );

  // Randomized Depth-First Search / Recursive Backtracker
  const stack: [number, number][] = [];
  const startX = 0;
  const startY = 0;

  visited[startY][startX] = true;
  stack.push([startX, startY]);

  const directions = [WALL_NORTH, WALL_EAST, WALL_SOUTH, WALL_WEST];

  while (stack.length > 0) {
    const [cx, cy] = stack[stack.length - 1];

    // Shuffle directions
    const shuffledDirs = [...directions].sort(() => Math.random() - 0.5);
    let carved = false;

    for (const dir of shuffledDirs) {
      const [dx, dy] = DIR_DELTA[dir];
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[ny][nx]) {
        // Remove wall between current cell and neighbor
        grid[cy][cx] &= ~dir;
        grid[ny][nx] &= ~OPPOSITE_WALL[dir];

        visited[ny][nx] = true;
        stack.push([nx, ny]);
        carved = true;
        break;
      }
    }

    if (!carved) {
      stack.pop();
    }
  }

  // Braid the maze: identify dead-ends (cells with 3 walls = 1 passage)
  // and knock down walls based on braidRatio
  if (braidRatio > 0) {
    const deadEnds: [number, number][] = [];

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        // Count number of walls intact
        let wallCount = 0;
        if (grid[y][x] & WALL_NORTH) wallCount++;
        if (grid[y][x] & WALL_EAST) wallCount++;
        if (grid[y][x] & WALL_SOUTH) wallCount++;
        if (grid[y][x] & WALL_WEST) wallCount++;

        if (wallCount === 3) {
          // It is a dead end
          deadEnds.push([x, y]);
        }
      }
    }

    // Shuffle dead ends
    deadEnds.sort(() => Math.random() - 0.5);

    const removeCount = Math.round(deadEnds.length * braidRatio);
    for (let i = 0; i < removeCount; i++) {
      const [x, y] = deadEnds[i];
      // Find candidate walls that lead to adjacent in-bounds cells
      const candidates: number[] = [];

      for (const dir of directions) {
        if (grid[y][x] & dir) {
          const [dx, dy] = DIR_DELTA[dir];
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            candidates.push(dir);
          }
        }
      }

      if (candidates.length > 0) {
        const chosenDir = candidates[Math.floor(Math.random() * candidates.length)];
        const [dx, dy] = DIR_DELTA[chosenDir];
        const nx = x + dx;
        const ny = y + dy;

        grid[y][x] &= ~chosenDir;
        grid[ny][nx] &= ~OPPOSITE_WALL[chosenDir];
      }
    }
  }

  // Ensure border walls remain strictly closed
  for (let x = 0; x < w; x++) {
    grid[0][x] |= WALL_NORTH;
    grid[h - 1][x] |= WALL_SOUTH;
  }
  for (let y = 0; y < h; y++) {
    grid[y][0] |= WALL_WEST;
    grid[y][w - 1] |= WALL_EAST;
  }

  return {
    width: w,
    height: h,
    grid,
    start_node: [0, 0],
    end_node: [w - 1, h - 1],
  };
}
