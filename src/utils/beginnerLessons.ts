export interface BeginnerLesson {
  id: string;
  title: string;
  level: string;
  objective: string;
  explanation: string;
  code: string;
}

export const BEGINNER_LESSONS: BeginnerLesson[] = [
  {
    id: 'lesson_1_first_steps',
    title: 'Lesson 1: My First Robot Command',
    level: 'Beginner 101',
    objective: 'Learn how solve() returns a Python list of motor commands.',
    explanation:
      'In Python, solve() is a function that outputs a list of strings. Each string instructs the rover to drive or turn.',
    code: `"""
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
`,
  },
  {
    id: 'lesson_2_loops_and_lists',
    title: 'Lesson 2: Using Loops & .append()',
    level: 'Beginner 102',
    objective: 'Generate repetitive commands using a Python for loop.',
    explanation:
      'Instead of typing commands one by one, we create an empty list and use commands.append() inside a loop.',
    code: `"""
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
`,
  },
  {
    id: 'lesson_3_reading_walls',
    title: 'Lesson 3: Reading Walls with Bitwise (&)',
    level: 'Beginner 103',
    objective: 'Inspect the cell at (0, 0) and decide whether to turn or move forward.',
    explanation:
      'MAZE_DATA["grid"][y][x] gives an integer with walls encoded: 1=North, 2=East, 4=South, 8=West. Using (walls & 2) tells you if the East wall exists!',
    code: `"""
LESSON 3: Detecting Virtual Walls
---------------------------------
Bitwise values:
  WALL_NORTH = 1
  WALL_EAST  = 2
  WALL_SOUTH = 4
  WALL_WEST  = 8

If (current_walls & 2) != 0, it means the East wall is BLOCKED.
If (current_walls & 2) == 0, the East wall is OPEN!
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
`,
  },
  {
    id: 'lesson_4_simple_wall_follower',
    title: 'Lesson 4: A Simple Wall-Following Loop',
    level: 'Beginner 104',
    objective: 'Build an autonomous reactive robot using a while loop until the goal is reached.',
    explanation:
      'We loop while (x, y) != target, checking walls and turning left, straight, or right.',
    code: `"""
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
    'N': (0, -1, 1), # (dx, dy, wall_mask)
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

        # Function to test if a direction has a wall:
        def has_wall(h):
            _, _, mask = DIR_OFFSETS[h]
            return bool(grid[y][x] & mask)

        # 1. Turn Left if open
        if not has_wall(left_h):
            commands.append('LEFT')
            commands.append('FORWARD')
            heading = left_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 2. Go straight if open
        elif not has_wall(heading):
            commands.append('FORWARD')
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 3. Turn Right if open
        elif not has_wall(right_h):
            commands.append('RIGHT')
            commands.append('FORWARD')
            heading = right_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 4. Turn around
        else:
            commands.append('U_TURN')
            heading = DIRECTIONS[(cur_idx + 2) % 4]

    print(f"Wall follower reached target in {len(commands)} commands!")
    return commands
`,
  },
];
