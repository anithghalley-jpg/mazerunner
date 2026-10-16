'use client';

export interface DocumentationSection {
  id: string;
  title: string;
  category: string;
  markdown: string;
}

export const DEFAULT_DOCUMENTATION_SECTIONS: Record<string, DocumentationSection> = {
  'lesson-1': {
    id: 'lesson-1',
    title: 'Lesson 1: First Robot Command',
    category: 'Beginner 101',
    markdown: `# Lesson 1: First Robot Command

> **Goal:** Learn how \`solve()\` returns a Python list of motor commands. In Python, \`solve()\` is a function that outputs a list of strings. Each string instructs the rover to drive or turn.

\`\`\`python
"""
LESSON 1: My First Robot Controller
------------------------------------
In Python, solve() must return a list of sequential commands.
Valid commands:
  - 'FORWARD' : Drive 1 cell forward
  - 'LEFT'    : Turn 90 degrees left
  - 'RIGHT'   : Turn 90 degrees right
  - 'U_TURN'  : Turn 180 degrees around

Try modifying the list below to see the robot move!
"""

def solve():
    print("Executing my first robot commands!")
    
    # Return a basic sequence of moves:
    return [
        'FORWARD',
        'RIGHT',
        'FORWARD',
        'LEFT',
        'FORWARD'
    ]
\`\`\`

This code is your first step in programming a robot to move through a maze. You give the robot a sequence of commands, and the robot executes them one after another. Unlike an reactive program where the robot checks whether a wall is blocked, this code does not make decisions yet. It simply tells the robot what to do.

## 1. Understanding the Code

Let's look at the three important concepts:

### A. def solve():
\`\`\`python
def solve():
\`\`\`
This creates a function named \`solve\`. Think of a function as a set of instructions that you can run whenever needed. In this robot challenge, the maze program calls \`solve()\` to ask your code what the robot should do.

### B. print()
\`\`\`python
print("Executing my first robot commands!")
\`\`\`
This displays a message on the screen in the console. The output will be:
\`\`\`
Executing my first robot commands!
\`\`\`
This message is for the person running the program. It does not tell the robot to move.

### C. return [...]
\`\`\`python
return [
    'FORWARD',
    'RIGHT',
    'FORWARD',
    'LEFT',
    'FORWARD'
]
\`\`\`
**This is the most important part.** The return statement sends a list of commands back to the maze simulator engine. The program can then execute these commands in order.

The square brackets \`[]\` indicate a Python list, and each command is written as a string inside quotation marks.

---

## 2. What Will the Robot Do?

Assume the robot starts facing **North (up)** at cell \`(0, 0)\`, and that every movement forward takes it one cell:

1. **FORWARD** — Move one cell North.
2. **RIGHT** — Turn 90° clockwise in-place to face East.
3. **FORWARD** — Move one cell East.
4. **LEFT** — Turn 90° counterclockwise in-place to face North.
5. **FORWARD** — Move one cell North again.

The robot makes three forward movements and two turns. It finishes two cells North and one cell East of its starting position at (1, 2). Turns change the orientation of the robot, but do not change its position cell.

---

## 3. What Should You Remember from Lesson 1?

- \`def solve():\` defines the function the maze program calls.
- \`print()\` displays a message for debugging or information.
- \`return\` gives the command list back to the maze program.
- \`FORWARD\` moves one cell in the direction the robot is facing.
- \`LEFT\`, \`RIGHT\`, and \`U_TURN\` change its orientation without moving cells.
- The order of commands matters because each action affects the starting state of the next action.

> **Practice Challenge:** Can you modify the list so that a robot starting at \`(0, 0)\` and facing North moves two cells North, turns right, and then moves three cells East?
`,
  },

  'lesson-2': {
    id: 'lesson-2',
    title: 'Lesson 2: Using Loops & .append()',
    category: 'Beginner 102',
    markdown: `# Lesson 2: Using Loops & .append()

> **Goal:** Generate repetitive commands dynamically using a Python \`for\` loop and \`commands.append()\` instead of typing each command manually.

\`\`\`python
"""
LESSON 2: Using Loops and Lists
--------------------------------
Instead of manually typing ['FORWARD', 'FORWARD', ...],
we start with an empty list: commands = []
and use a for loop with commands.append('FORWARD').
"""

def solve():
    print("Generating commands dynamically using a loop...")
    commands = []

    # Drive 3 steps forward
    for step in range(3):
        commands.append('FORWARD')
        print(f"Added forward step {step + 1}")

    # Turn right, drive 2 more steps
    commands.append('RIGHT')
    for step in range(2):
        commands.append('FORWARD')

    return commands
\`\`\`

The code does five main things:
1. Creates an empty list \`commands = []\` to store commands.
2. Uses a loop to add three \`FORWARD\` commands.
3. Adds one \`RIGHT\` command.
4. Uses another loop to add two more \`FORWARD\` commands.
5. Returns the complete list to the robot controller.

---

## 1. What Are commands = [] and .append()?

\`\`\`python
commands = []
\`\`\`
This creates an empty Python list. Think of the list as a box in which you collect instructions for the robot. Initially, the box is empty.

Whenever you call:
\`\`\`python
commands.append('FORWARD')
\`\`\`
The method \`.append()\` adds a new item to the end of the list.

---

## 2. Understanding the for Loop and range()

\`\`\`python
for step in range(3):
    commands.append('FORWARD')
    print(f"Added forward step {step + 1}")
\`\`\`
In Python, \`range(3)\` generates three numbers: \`0, 1, 2\`. So the loop runs three times.

| Loop Iteration | Value of step | Command Added | Message Printed (\`step + 1\`) |
| :--- | :--- | :--- | :--- |
| First | 0 | FORWARD | Added forward step 1 |
| Second | 1 | FORWARD | Added forward step 2 |
| Third | 2 | FORWARD | Added forward step 3 |

Notice that Python starts counting from 0, not 1. That is why the code uses \`step + 1\` to make the displayed step numbers natural for people (1, 2, and 3).

---

## 3. How range(n) Controls Repetition

| Code Expression | Number of Repetitions |
| :--- | :--- |
| \`range(1)\` | 1 time |
| \`range(2)\` | 2 times |
| \`range(3)\` | 3 times |
| \`range(5)\` | 5 times |
| \`range(10)\` | 10 times |

> **Practice Challenge:** Try to write a \`solve()\` function that makes the robot:
> 1. Move forward 4 cells.
> 2. Turn left.
> 3. Move forward 3 cells.
> 4. Turn right.
> 5. Move forward 2 cells.
`,
  },

  'lesson-3': {
    id: 'lesson-3',
    title: 'Lesson 3: Reading Walls with Bitwise (&)',
    category: 'Beginner 103',
    markdown: `# Lesson 3: Reading Walls with Bitwise (&)

> **Goal:** Inspect the cell at \`(0, 0)\` and decide whether to turn or move forward using the bitwise AND (\`&\`) operator on \`MAZE_DATA["grid"][y][x]\`.

\`\`\`python
"""
LESSON 3: Detecting Virtual Walls
---------------------------------
Bitwise values:
  WALL_NORTH = 1
  WALL_EAST  = 2
  WALL_SOUTH = 4
  WALL_WEST  = 8

If (current_walls & 2) != 0, East wall is BLOCKED.
If (current_walls & 2) == 0, East wall is OPEN!
"""

def solve():
    x, y = MAZE_DATA["start_node"]  # Start at (0, 0)
    current_walls = MAZE_DATA["grid"][y][x]
    
    print(f"Cell ({x}, {y}) wall integer value: {current_walls}")
    
    commands = []

    # Check if East (right) is open:
    if not (current_walls & 2):
        print("East is open! Moving forward.")
        commands.append('FORWARD')
    else:
        print("East is blocked by a wall! Turning South (Right).")
        commands.append('RIGHT')
        commands.append('FORWARD')

    return commands
\`\`\`

---

## 1. How Walls Are Represented with Bits

The code assigns a unique power-of-two number to each direction:

| Direction | Wall Constant | Decimal Value | Binary Value |
| :--- | :--- | :--- | :--- |
| North (Up) | WALL_NORTH | 1 | 0001 |
| East (Right) | WALL_EAST | 2 | 0010 |
| South (Down) | WALL_SOUTH | 4 | 0100 |
| West (Left) | WALL_WEST | 8 | 1000 |

Each number represents a particular wall. The maze combines these numbers by addition. For example, if a cell has a North wall and an East wall:
- North wall = 1
- East wall = 2
- Total = 1 + 2 = 3 (Binary: \`0011\`)

---

## 2. What Does the & Operator Mean?

The bitwise AND operator (\`&\`) takes two integers, converts them to binary, and compares them bit by bit. It returns a 1 only if both corresponding bits are 1:
- \`1 & 1\` gives 1
- \`1 & 0\` gives 0
- \`0 & 1\` gives 0
- \`0 & 0\` gives 0

### Checking the East Wall:
\`\`\`python
# If cell_walls = 3 (North + East):
current_walls = 3   # Binary: 0011
East wall     = 2   # Binary: 0010
# -----------------------------
Bitwise AND   = 2   # Non-zero! East is BLOCKED.

# If cell_walls = 9 (North + West):
current_walls = 9   # Binary: 1001
East wall     = 2   # Binary: 0010
# -----------------------------
Bitwise AND   = 0   # Zero! East is OPEN.
\`\`\`

In short, \`current_walls & 2\` checks only the East-wall bit, completely ignoring the other three walls.
`,
  },

  'lesson-4': {
    id: 'lesson-4',
    title: 'Lesson 4: A Simple Wall-Following Loop',
    category: 'Beginner 104',
    markdown: `# Lesson 4: A Simple Wall-Following Loop

> **Goal:** Build an autonomous reactive robot using a \`while (x, y) != target:\` loop. At each step, the robot checks its surroundings and makes decisions as it moves.

\`\`\`python
"""
LESSON 4: The Reactive Left-Hand Wall Follower
----------------------------------------------
A while loop repeats until the robot reaches MAZE_DATA["end_node"].
Rule:
  1. Try to turn LEFT and move FORWARD.
  2. If blocked, move straight FORWARD.
  3. If blocked, turn RIGHT and move FORWARD.
  4. If blocked on all 3 sides, U_TURN!
"""

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, 1),
    'E': (1, 0, 2),
    'S': (0, 1, 4),
    'W': (-1, 0, 8)
}

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    target = tuple(MAZE_DATA["end_node"])
    x, y = MAZE_DATA["start_node"]
    heading = 'E'
    grid = MAZE_DATA["grid"]

    commands = []
    steps = 0

    while (x, y) != target and steps < 800:
        steps += 1
        cur_idx = DIRECTIONS.index(heading)
        left_h = DIRECTIONS[(cur_idx - 1) % 4]
        right_h = DIRECTIONS[(cur_idx + 1) % 4]

        def has_wall(h):
            _, _, mask = DIR_OFFSETS[h]
            return bool(grid[y][x] & mask)

        if not has_wall(left_h):
            commands.append('LEFT')
            commands.append('FORWARD')
            heading = left_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        elif not has_wall(heading):
            commands.append('FORWARD')
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        elif not has_wall(right_h):
            commands.append('RIGHT')
            commands.append('FORWARD')
            heading = right_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        else:
            commands.append('U_TURN')
            heading = DIRECTIONS[(cur_idx + 2) % 4]

    print(f"Wall follower reached target in {len(commands)} commands!")
    return commands
\`\`\`

---

## 1. What Does a Wall-Following Robot Do?

The robot does not need to plan the entire route beforehand. It makes one decision, moves, and then checks its surroundings again. This is called **reactive navigation**.

### Right-Hand Wall-Following Rule:
1. If the right side is open, turn right and move forward.
2. Otherwise, if the front is open, move forward.
3. Otherwise, if the left side is open, turn left and move forward.
4. If all three directions are blocked, turn around (\`U_TURN\`).

---

## 2. Difference Between for and while Loops

| for loop | while loop |
| :--- | :--- |
| Repeats for a specified sequence or number of iterations. | Repeats while a condition remains true. |
| Example: move forward 3 times. | Example: keep navigating until \`(x, y) == target\`. |
| Number of repetitions is predetermined. | Number of repetitions is not known beforehand. |
`,
  },

  'algo-bfs': {
    id: 'algo-bfs',
    title: 'BFS (Breadth-First Search) Algorithm',
    category: 'Optimal Search',
    markdown: `# Understanding the BFS Maze-Solving Algorithm

> **The Most Important Idea:** BFS explores all states that require fewer commands before exploring states that require more commands. This guarantees finding a route with the fewest motor commands.

\`\`\`python
"""
ALGORITHM: Breadth-First Search (BFS)
-------------------------------------
- Guarantees shortest path from start_node to end_node.
- State: (x, y, heading)
- Explores layer by layer using a FIFO queue.
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
\`\`\`

---

## 1. The Robot's State: Position AND Direction

A robot state contains three pieces of information:
- \`x\`: horizontal column in the maze.
- \`y\`: vertical row in the maze.
- \`heading\`: current orientation (\`'N'\`, \`'E'\`, \`'S'\`, \`'W'\`).

**Why is heading necessary?**
Imagine the robot is in cell \`(2, 1)\`. If facing East, \`FORWARD\` takes it to \`(3, 1)\`. If facing North, \`FORWARD\` takes it to \`(2, 0)\`. The position is identical, but the available next movements differ completely!

---

## 2. Clockwise Directions & Offsets

\`\`\`python
DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}
\`\`\`

Turning right is \`(index + 1) % 4\`. Turning left is \`(index - 1) % 4\`. Why does North have \`dy = -1\`? Because row numbers increase as you move downward on the screen.

---

## 3. What Guarantees the Shortest Path?

1. **Equal action cost:** Forward moves and 90-degree turns each count as one motor action.
2. **First-in, first-out (FIFO):** States reached in fewer commands are processed before states reached in more commands.
3. **Visited set:** Prevents repeated exploration of previously discovered states.
`,
  },

  'algo-astar': {
    id: 'algo-astar',
    title: 'A* (A-Star) Search Algorithm',
    category: 'Heuristic Search',
    markdown: `# Understanding the A* Maze-Solving Algorithm

> **Core Formula:** \`f(n) = g(n) + h(n)\`. Instead of exploring possibilities uniformly in all directions like BFS, A* prioritizes the states that appear closest to the destination.

\`\`\`python
"""
ALGORITHM: A* (A-Star) Search Algorithm
---------------------------------------
- Uses Manhattan Distance heuristic to prioritize states closest to end_node.
- Evaluates: f(n) = g(n) + h(n)
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

    counter = 0
    start_h = heuristic(start_x, start_y, tx, ty)
    
    # Heap tuple: (f_score, g_cost, counter, x, y, heading, path)
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

        # Action 1: FORWARD
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            new_g = g + 1
            if new_g < visited_costs.get(state, float('inf')):
                visited_costs[state] = new_g
                f_score = new_g + heuristic(nx, ny, tx, ty)
                counter += 1
                heapq.heappush(open_set, (f_score, new_g, counter, nx, ny, heading, path + ['FORWARD']))

        # Action 2: Turn LEFT
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            f_score = new_g + heuristic(x, y, tx, ty)
            counter += 1
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, left_h, path + ['LEFT']))

        # Action 3: Turn RIGHT
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            f_score = new_g + heuristic(x, y, tx, ty)
            counter += 1
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, right_h, path + ['RIGHT']))

    return []
\`\`\`

---

## 1. Understanding the Scores

- \`g(n)\`: Actual number of commands executed to reach current state.
- \`h(n)\`: Manhattan distance estimate: \`abs(x - tx) + abs(y - ty)\`.
- \`f(n)\`: Total estimated route cost: \`g(n) + h(n)\`. The algorithm explores lowest \`f(n)\` states first.

---

## 2. A* versus BFS Comparison

| Feature | BFS (Breadth-First Search) | A* (A-Star Search) |
| :--- | :--- | :--- |
| **Search Order** | Oldest discovered state first | Lowest estimated total cost \`f(n)\` first |
| **Uses Heuristic?** | No | Yes (Manhattan distance) |
| **Main Data Structure** | \`deque\` (FIFO queue) | \`heapq\` (Priority queue) |
| **Route Cost Tracking** | Implicitly by search depth | Explicitly using \`g(n)\` in \`visited_costs\` |
| **Exploration Breadth** | Explores broadly in uniform ripples | Focuses directly toward the goal beacon |
`,
  },

  'rules': {
    id: 'rules',
    title: 'Robotics Rules & Scoring',
    category: 'Specifications',
    markdown: `# Robotics Rules & Scoring

> **Overview:** The robot starts at coordinate \`(0, 0)\` and must reach the target goal beacon using four valid motor commands.

---

## 1. The Four Motor Commands

1. **'FORWARD'** — Moves 1 grid cell forward along current heading.
   - *Causes a collision penalty if a wall is in front!*
2. **'LEFT'** — Pivots 90° counter-clockwise in place inside the cell without changing coordinates.
3. **'RIGHT'** — Pivots 90° clockwise in place inside the cell without changing coordinates.
4. **'U_TURN'** — Pivots 180° in place inside the cell. Vital for escaping dead-end corridors.

---

## 2. Coordinate System & Walls

- Coordinate \`(0, 0)\` is the top-left cell.
- Column \`x\` increases East (to the right).
- Row \`y\` increases South (downward).
- Grid walls are accessed as \`MAZE_DATA["grid"][y][x]\` (row first, column second).

---

## 3. Collision Penalty & Scoring

- If the robot executes a \`'FORWARD'\` command into a wall, the simulator flashes red, the move fails, and a **+5.0 second penalty** is added to your competition time.
- Always verify \`not (current_walls & mask)\` before executing a forward movement!
`,
  },
};

const STORAGE_KEY = 'maze_runner_documentation_data_v1';
const SYNC_EVENT = 'maze_runner_docs_updated';

export function getDocumentationData(): Record<string, DocumentationSection> {
  if (typeof window === 'undefined') {
    return DEFAULT_DOCUMENTATION_SECTIONS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DOCUMENTATION_SECTIONS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_DOCUMENTATION_SECTIONS, ...parsed };
  } catch (err) {
    console.error('Failed to read documentation from localStorage', err);
    return DEFAULT_DOCUMENTATION_SECTIONS;
  }
}

export function saveDocumentationData(data: Record<string, DocumentationSection>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: data }));
  } catch (err) {
    console.error('Failed to save documentation to localStorage', err);
  }
}

export function resetDocumentationData(): Record<string, DocumentationSection> {
  if (typeof window === 'undefined') return DEFAULT_DOCUMENTATION_SECTIONS;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: DEFAULT_DOCUMENTATION_SECTIONS }));
  } catch (err) {
    console.error('Failed to reset documentation data', err);
  }
  return DEFAULT_DOCUMENTATION_SECTIONS;
}
