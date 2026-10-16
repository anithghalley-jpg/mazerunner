export const DEFAULT_PYTHON_CODE = `"""
MAZE RUNNER - Autonomous Cell-Based Maze Solver
------------------------------------------------
Environment Context:
- MAZE_DATA: Global dictionary with environment info:
    - MAZE_DATA["width"]: grid width (number of cell columns)
    - MAZE_DATA["height"]: grid height (number of cell rows)
    - MAZE_DATA["start_node"]: [x, y] coordinates of START cell [0, 0]
    - MAZE_DATA["end_node"]: [x, y] coordinates of GOAL cell [width-1, height-1]
    - MAZE_DATA["grid"]: 2D array [height][width] of cell wall bitmasks:
        1 = NORTH wall of cell (y - 1)
        2 = EAST wall of cell  (x + 1)
        4 = SOUTH wall of cell (y + 1)
        8 = WEST wall of cell  (x - 1)

Movement Rules:
- The robot is located INSIDE the cell and travels from cell to cell.
- 'FORWARD': Moves inside cell along current heading to the adjacent cell.
- 'LEFT' / 'RIGHT' / 'U_TURN': Pivots in-place inside the current cell.
- Initial state: Start cell [0, 0] facing 'E' (East).
"""

from collections import deque

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def solve():
    print(f"Solving maze: Start cell {MAZE_DATA['start_node']} -> Goal cell {MAZE_DATA['end_node']}")
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    start = tuple(MAZE_DATA["start_node"])
    target = tuple(MAZE_DATA["end_node"])
    grid = MAZE_DATA["grid"]

    # Shortest path BFS with state: (x, y, heading)
    queue = deque([(start[0], start[1], 'E', [])])
    visited = set([(start[0], start[1], 'E')])

    while queue:
        x, y, heading, path = queue.popleft()
        
        # Reached the goal cell!
        if (x, y) == target:
            print(f"Goal reached! Total motor commands: {len(path)}")
            return path
            
        cur_walls = grid[y][x]
        
        # 1. Drive FORWARD into adjacent cell if no wall
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            if state not in visited:
                visited.add(state)
                queue.append((nx, ny, heading, path + ['FORWARD']))

        # 2. Pivot in-place LEFT
        left_heading = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, left_heading, path + ['LEFT']))

        # 3. Pivot in-place RIGHT
        right_heading = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, right_heading, path + ['RIGHT']))

    print("No valid path found to goal cell!")
    return []
`;
