export interface AlgorithmPreset {
  id: string;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  complexity: string;
  description: string;
  keyFeatures: string[];
  code: string;
}

export const ALGORITHM_PRESETS: AlgorithmPreset[] = [
  {
    id: 'bfs',
    name: 'Breadth-First Search (BFS)',
    difficulty: 'Intermediate',
    complexity: 'O(V + E) — Optimal / Shortest Path',
    description:
      'Explores the maze level-by-level using a FIFO queue. BFS is guaranteed to find the path with the fewest motor actions or shortest distance, making it the benchmark in autonomous competitions.',
    keyFeatures: [
      'Guarantees shortest path to target beacon',
      'Tracks (x, y, heading) state space to minimize motor turns',
      'Uses deque for efficient O(1) popping',
    ],
    code: `"""
ALGORITHM: Breadth-First Search (BFS)
-------------------------------------
- Guarantees the shortest path from start_node to end_node.
- State: (x, y, heading)
- Queue explores paths layer by layer.
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
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    start = tuple(MAZE_DATA["start_node"])
    target = tuple(MAZE_DATA["end_node"])
    grid = MAZE_DATA["grid"]

    # Queue holds: (x, y, heading, [list of commands])
    queue = deque([(start[0], start[1], 'E', [])])
    visited = set([(start[0], start[1], 'E')])

    while queue:
        x, y, heading, path = queue.popleft()

        # Goal reached!
        if (x, y) == target:
            print(f"Goal reached! Total motor commands: {len(path)}")
            return path

        cur_walls = grid[y][x]

        # 1. Drive FORWARD if no virtual wall is ahead
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

    print("No route found to end node!")
    return []
`,
  },
  {
    id: 'astar',
    name: 'A* (A-Star) Search Algorithm',
    difficulty: 'Advanced',
    complexity: 'O(E) with Manhattan Heuristic — Fast & Optimal',
    description:
      'Uses Manhattan distance heuristic h(n) = |x - target_x| + |y - target_y| to prioritize nodes pointing toward the finish beacon. Much faster on larger mazes.',
    keyFeatures: [
      'Heuristic guidance towards target coordinates',
      'Priority queue (min-heap) based evaluation',
      'Ideal for large grid competitions',
    ],
    code: `"""
ALGORITHM: A* Search (Manhattan Distance Heuristic)
---------------------------------------------------
- Uses f(n) = g(n) + h(n)
  g(n) = cost from start (number of commands)
  h(n) = Manhattan distance to target
- Priority queue yields optimal path while exploring fewer nodes than BFS.
"""

import heapq

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

def heuristic(x, y, tx, ty):
    return abs(x - tx) + abs(y - ty)

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Priority queue item: (f_score, g_cost, counter, x, y, heading, path)
    counter = 0
    start_h = heuristic(start_x, start_y, tx, ty)
    open_set = [(start_h, 0, counter, start_x, start_y, 'E', [])]
    visited_costs = {(start_x, start_y, 'E'): 0}

    while open_set:
        f, g, _, x, y, heading, path = heapq.heappop(open_set)

        if (x, y) == (tx, ty):
            print(f"A* found optimal path! Total actions: {len(path)}")
            return path

        if g > visited_costs.get((x, y, heading), float('inf')):
            continue

        cur_walls = grid[y][x]

        # 1. Forward motion
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            new_g = g + 1
            if new_g < visited_costs.get(state, float('inf')):
                visited_costs[state] = new_g
                counter += 1
                f_score = new_g + heuristic(nx, ny, tx, ty)
                heapq.heappush(open_set, (f_score, new_g, counter, nx, ny, heading, path + ['FORWARD']))

        # 2. Turn LEFT
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            f_score = new_g + heuristic(x, y, tx, ty)
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, left_h, path + ['LEFT']))

        # 3. Turn RIGHT
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            f_score = new_g + heuristic(x, y, tx, ty)
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, right_h, path + ['RIGHT']))

    print("A* could not reach target.")
    return []
`,
  },
  {
    id: 'dfs',
    name: 'Depth-First Search (DFS)',
    difficulty: 'Beginner',
    complexity: 'O(V + E) — Memory Efficient Exploration',
    description:
      'Explores as deep as possible down each branch before backtracking. Great for understanding maze recursion and stack-based decision making.',
    keyFeatures: [
      'Simple LIFO stack-based exploration',
      'Low memory footprint',
      'Demonstrates non-optimal vs optimal path comparison',
    ],
    code: `"""
ALGORITHM: Depth-First Search (DFS)
-----------------------------------
- Deep exploration algorithm using a LIFO stack.
- Does not guarantee the shortest path, but finds a valid path quickly.
"""

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
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Stack holds: (x, y, heading, path)
    stack = [(start_x, start_y, 'E', [])]
    visited = set([(start_x, start_y, 'E')])

    while stack:
        x, y, heading, path = stack.pop()

        if (x, y) == (tx, ty):
            print(f"DFS Path found! Total commands: {len(path)}")
            return path

        cur_walls = grid[y][x]

        # Branch out into neighbors
        # Option 1: Turn Left
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        if (x, y, left_h) not in visited:
            visited.add((x, y, left_h))
            stack.append((x, y, left_h, path + ['LEFT']))

        # Option 2: Turn Right
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        if (x, y, right_h) not in visited:
            visited.add((x, y, right_h))
            stack.append((x, y, right_h, path + ['RIGHT']))

        # Option 3: Move Forward
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            if (nx, ny, heading) not in visited:
                visited.add((nx, ny, heading))
                stack.append((nx, ny, heading, path + ['FORWARD']))

    print("DFS completed with no path.")
    return []
`,
  },
  {
    id: 'wall_follower',
    name: 'Left-Hand Wall Follower (Rule-Based)',
    difficulty: 'Intermediate',
    complexity: 'Reactive Sensor Logic',
    description:
      'A classic reactive robotics strategy: keep your left hand touching the wall at all times. If there is an opening to your left, turn left and drive forward. Otherwise, drive forward if clear, or turn right.',
    keyFeatures: [
      'Simulates on-board physical wall sensors',
      'Solves standard simply-connected mazes',
      'Great for studying robotics edge-cases',
    ],
    code: `"""
ALGORITHM: Left-Hand Wall Follower
----------------------------------
- Emulates a physical micromouse / rover robot using left-side wall sensors.
- Decision Priority:
  1. If left is open: Turn LEFT and move FORWARD.
  2. Else if front is open: Move FORWARD.
  3. Else if right is open: Turn RIGHT and move FORWARD.
  4. Else dead end: U_TURN and move FORWARD.
"""

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

def is_wall(grid, x, y, heading, width, height):
    cur_walls = grid[y][x]
    dx, dy, mask = DIR_OFFSETS[heading]
    nx, ny = x + dx, y + dy
    if nx < 0 or nx >= width or ny < 0 or ny >= height:
        return True
    return bool(cur_walls & mask)

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    x, y = MAZE_DATA["start_node"]
    heading = 'E'
    grid = MAZE_DATA["grid"]

    commands = []
    max_steps = 1000
    step_count = 0

    while (x, y) != (tx, ty) and step_count < max_steps:
        step_count += 1
        
        # Directions relative to current heading
        cur_idx = DIRECTIONS.index(heading)
        left_h = DIRECTIONS[(cur_idx - 1) % 4]
        front_h = heading
        right_h = DIRECTIONS[(cur_idx + 1) % 4]

        # 1. Can we turn left?
        if not is_wall(grid, x, y, left_h, width, height):
            commands.append('LEFT')
            commands.append('FORWARD')
            heading = left_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 2. Can we move straight?
        elif not is_wall(grid, x, y, front_h, width, height):
            commands.append('FORWARD')
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 3. Can we turn right?
        elif not is_wall(grid, x, y, right_h, width, height):
            commands.append('RIGHT')
            commands.append('FORWARD')
            heading = right_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 4. Dead end: Turn around
        else:
            commands.append('U_TURN')
            heading = DIRECTIONS[(cur_idx + 2) % 4]

    print(f"Wall Follower completed in {len(commands)} actions!")
    return commands
`,
  },
  {
    id: 'dijkstra',
    name: "Dijkstra's Algorithm (Weighted Graph)",
    difficulty: 'Intermediate',
    complexity: 'O((V + E) log V) — Uniform-Cost / Weighted Search',
    description:
      'Explores paths in order of minimal accumulated edge weight/cost g(n). Guarantees the absolute lowest-cost path in weighted environments without requiring heuristics.',
    keyFeatures: [
      'Min-heap priority queue ordered strictly by accumulated cost g(n)',
      'Assigns exact numerical weight / distance to every reached node',
      'Benchmark comparison against unweighted BFS and heuristic A*',
    ],
    code: `"""
ALGORITHM: Dijkstra's Algorithm (Uniform-Cost Weighted Search)
--------------------------------------------------------------
- Explores cells strictly by lowest accumulated cost g(n).
- Moving FORWARD has an edge weight of 1.
- Turning LEFT or RIGHT has an edge weight of 1.
- Tracks visited_costs dict for exact node weight values.
"""

import heapq

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
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Priority queue stores: (g_cost, counter, x, y, heading, path)
    counter = 0
    pq = [(0, counter, start_x, start_y, 'E', [])]
    visited_costs = {(start_x, start_y, 'E'): 0}

    while pq:
        g, _, x, y, heading, path = heapq.heappop(pq)

        if (x, y) == (tx, ty):
            print(f"Dijkstra found optimal path with total cost {g}! Total commands: {len(path)}")
            return path

        if g > visited_costs.get((x, y, heading), float('inf')):
            continue

        cur_walls = grid[y][x]

        # 1. Action: FORWARD (Cost = +1)
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            new_g = g + 1
            if new_g < visited_costs.get(state, float('inf')):
                visited_costs[state] = new_g
                counter += 1
                heapq.heappush(pq, (new_g, counter, nx, ny, heading, path + ['FORWARD']))

        # 2. Action: Turn LEFT (Cost = +1)
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            heapq.heappush(pq, (new_g, counter, x, y, left_h, path + ['LEFT']))

        # 3. Action: Turn RIGHT (Cost = +1)
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            heapq.heappush(pq, (new_g, counter, x, y, right_h, path + ['RIGHT']))

    print("Dijkstra could not find a path to the goal.")
    return []
`,
  },
];
