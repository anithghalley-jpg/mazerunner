/**
 * Monaco Editor IntelliSense & Text Prediction Configuration for Maze Runner IDE
 * Provides rich autocompletions, AI-like inline ghost text predictions, snippet expansions,
 * and documentation tooltips for Python and Maze Runner specific commands/data.
 */

// Track registration so we only register providers once globally for Monaco
let isIntelliSenseRegistered = false;

export function setupMonacoIntelliSense(monaco: any) {
  if (isIntelliSenseRegistered || !monaco) return;
  isIntelliSenseRegistered = true;

  // 1. Register Completion Items Provider (Dropdown autocomplete & predictions)
  monaco.languages.registerCompletionItemProvider('python', {
    triggerCharacters: [
      '.',
      '[',
      "'",
      '"',
      '(',
      ':',
      ' ',
      '=',
      'F',
      'L',
      'R',
      'U',
      'M',
      's',
      'c',
      'w',
      'b',
      'd',
      'n',
      'e',
    ],
    provideCompletionItems: (model: any, position: any) => {
      const lineContent = model.getLineContent(position.lineNumber);
      const textUntilPosition = lineContent.substring(0, position.column - 1);
      const word = model.getWordUntilPosition(position);

      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions: any[] = [];

      // === A. Robot Motion Commands ===
      const motionCommands = [
        {
          label: "'FORWARD'",
          insertText: "'FORWARD'",
          detail: '🤖 Robot Command: Move forward 1 cell',
          documentation: {
            value:
              '**`FORWARD`**\n\nMoves the robot one cell ahead in its current heading orientation. If a virtual wall is in front, a **5-second collision penalty** is added and the robot stays in the cell.',
          },
          kind: monaco.languages.CompletionItemKind.EnumMember,
          sortText: '001',
        },
        {
          label: "'LEFT'",
          insertText: "'LEFT'",
          detail: '🤖 Robot Command: Turn 90° CCW',
          documentation: {
            value:
              '**`LEFT`**\n\nRotates the robot 90 degrees counter-clockwise (Left) in place without moving into another cell.',
          },
          kind: monaco.languages.CompletionItemKind.EnumMember,
          sortText: '002',
        },
        {
          label: "'RIGHT'",
          insertText: "'RIGHT'",
          detail: '🤖 Robot Command: Turn 90° CW',
          documentation: {
            value:
              '**`RIGHT`**\n\nRotates the robot 90 degrees clockwise (Right) in place without moving into another cell.',
          },
          kind: monaco.languages.CompletionItemKind.EnumMember,
          sortText: '003',
        },
        {
          label: "'U_TURN'",
          insertText: "'U_TURN'",
          detail: '🤖 Robot Command: Turn 180°',
          documentation: {
            value:
              '**`U_TURN`**\n\nRotates the robot 180 degrees in place without changing position.',
          },
          kind: monaco.languages.CompletionItemKind.EnumMember,
          sortText: '004',
        },
      ];

      // === B. Maze Runner Global Environment Data ===
      const mazeDataCompletions = [
        {
          label: 'MAZE_DATA',
          insertText: 'MAZE_DATA',
          detail: '🌐 Global Environment dict',
          documentation: {
            value:
              '**`MAZE_DATA`**\n\nThe simulator dictionary provided to `solve()`:\n- `grid`: 2D bitmask array `[y][x]`\n- `start_node`: (x, y) start cell coordinates\n- `end_node`: (x, y) destination cell coordinates\n- `width`: arena column count\n- `height`: arena row count',
          },
          kind: monaco.languages.CompletionItemKind.Variable,
          sortText: '010',
        },
        {
          label: "MAZE_DATA['grid']",
          insertText: "MAZE_DATA['grid']",
          detail: '🧱 2D bitmask grid [y][x]',
          documentation: {
            value:
              '**`MAZE_DATA[\'grid\']`**\n\nAccess the bitwise wall integer for any cell `[row][col]`. Values: `1=North`, `2=East`, `4=South`, `8=West`.',
          },
          kind: monaco.languages.CompletionItemKind.Property,
          sortText: '011',
        },
        {
          label: "MAZE_DATA['start_node']",
          insertText: "MAZE_DATA['start_node']",
          detail: '🏁 (x, y) starting coordinate',
          documentation: {
            value:
              '**`MAZE_DATA[\'start_node\']`**\n\nTuple `(start_x, start_y)` indicating where the robot starts (defaults to `(0, 0)`).',
          },
          kind: monaco.languages.CompletionItemKind.Property,
          sortText: '012',
        },
        {
          label: "MAZE_DATA['end_node']",
          insertText: "MAZE_DATA['end_node']",
          detail: '🎯 (x, y) goal coordinate',
          documentation: {
            value:
              '**`MAZE_DATA[\'end_node\']`**\n\nTuple `(goal_x, goal_y)` indicating the destination cell (defaults to `(width-1, height-1)`).',
          },
          kind: monaco.languages.CompletionItemKind.Property,
          sortText: '013',
        },
        {
          label: "MAZE_DATA['width']",
          insertText: "MAZE_DATA['width']",
          detail: '📏 Arena width in cells',
          documentation: {
            value: '**`MAZE_DATA[\'width\']`**\n\nInteger number of columns in the grid.',
          },
          kind: monaco.languages.CompletionItemKind.Property,
          sortText: '014',
        },
        {
          label: "MAZE_DATA['height']",
          insertText: "MAZE_DATA['height']",
          detail: '📐 Arena height in cells',
          documentation: {
            value: '**`MAZE_DATA[\'height\']`**\n\nInteger number of rows in the grid.',
          },
          kind: monaco.languages.CompletionItemKind.Property,
          sortText: '015',
        },
      ];

      // === C. Wall Constants & Bitmasks ===
      const wallConstants = [
        {
          label: 'NORTH = 1',
          insertText: 'NORTH = 1',
          detail: '🧭 Bitmask: North wall (y - 1)',
          documentation: {
            value: 'Bit 0 (`1`): Set if there is a wall on the North side of the cell.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '020',
        },
        {
          label: 'EAST = 2',
          insertText: 'EAST = 2',
          detail: '🧭 Bitmask: East wall (x + 1)',
          documentation: {
            value: 'Bit 1 (`2`): Set if there is a wall on the East side of the cell.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '021',
        },
        {
          label: 'SOUTH = 4',
          insertText: 'SOUTH = 4',
          detail: '🧭 Bitmask: South wall (y + 1)',
          documentation: {
            value: 'Bit 2 (`4`): Set if there is a wall on the South side of the cell.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '022',
        },
        {
          label: 'WEST = 8',
          insertText: 'WEST = 8',
          detail: '🧭 Bitmask: West wall (x - 1)',
          documentation: {
            value: 'Bit 3 (`8`): Set if there is a wall on the West side of the cell.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '023',
        },
        {
          label: 'WALL_MASKS',
          insertText: "WALL_MASKS = {'NORTH': 1, 'EAST': 2, 'SOUTH': 4, 'WEST': 8}",
          detail: '🧭 Wall masks dictionary',
          documentation: {
            value: 'Convenient dictionary mapping direction names to their bitwise wall masks.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '024',
        },
        {
          label: 'DIR_OFFSETS',
          insertText:
            "DIR_OFFSETS = {'NORTH': (0, -1), 'EAST': (1, 0), 'SOUTH': (0, 1), 'WEST': (-1, 0)}",
          detail: '🧭 Direction coordinate offsets (dx, dy)',
          documentation: {
            value: 'Maps each direction to its grid change `(dx, dy)`.',
          },
          kind: monaco.languages.CompletionItemKind.Constant,
          sortText: '025',
        },
      ];

      // === D. Snippets & Code Predictions ===
      const codeSnippets = [
        {
          label: 'def solve():',
          insertText: [
            'def solve():',
            '    """Solve the maze and return a list of movement commands."""',
            '    commands = []',
            "    start = MAZE_DATA['start_node']",
            "    goal = MAZE_DATA['end_node']",
            "    grid = MAZE_DATA['grid']",
            '    ',
            '    ${0:# TODO: Add your pathfinding or commands here}',
            '    ',
            '    return commands',
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Maze Runner Entrypoint Function',
          documentation: {
            value: 'Creates the required `def solve():` function that returns a list of commands.',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '000',
        },
        {
          label: 'commands.append()',
          insertText: "commands.append('${1|FORWARD,LEFT,RIGHT,U_TURN|}')",
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Append command to output list',
          documentation: {
            value: 'Appends a movement command (`FORWARD`, `LEFT`, `RIGHT`, `U_TURN`) to the commands list.',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '005',
        },
        {
          label: 'check_wall_snippet',
          insertText: [
            "# Check if path is open at (x, y) in direction (${1:1=N, 2=E, 4=S, 8=W})",
            "walls = MAZE_DATA['grid'][${2:y}][${3:x}]",
            "if not (walls & ${1:1}):",
            "    ${0:# Path is open, no wall}",
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Wall Bitmask Check Snippet',
          documentation: {
            value: 'Tests if a wall is present at cell `(x, y)` using bitwise AND (`walls & mask`).',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '030',
        },
        {
          label: 'bfs_algorithm_snippet',
          insertText: [
            'from collections import deque',
            '',
            'def bfs(start, goal, grid, width, height):',
            '    queue = deque([(start[0], start[1], [])])',
            '    visited = set([(start[0], start[1])])',
            '    ',
            '    dirs = [',
            "        ('NORTH', 0, -1, 1),",
            "        ('EAST',  1,  0, 2),",
            "        ('SOUTH', 0,  1, 4),",
            "        ('WEST', -1,  0, 8),",
            '    ]',
            '    ',
            '    while queue:',
            '        cx, cy, path = queue.popleft()',
            '        if (cx, cy) == goal:',
            '            return path',
            '        ',
            '        walls = grid[cy][cx]',
            '        for name, dx, dy, mask in dirs:',
            '            if not (walls & mask):',
            '                nx, ny = cx + dx, cy + dy',
            '                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:',
            '                    visited.add((nx, ny))',
            '                    queue.append((nx, ny, path + [(nx, ny)]))',
            '    return []',
            '${0}',
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Complete BFS Pathfinding Algorithm',
          documentation: {
            value: 'Breadth-First Search template with queue and visited set.',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '031',
        },
        {
          label: 'calculate_turns_snippet',
          insertText: [
            '# Heading directions: 0=NORTH, 1=EAST, 2=SOUTH, 3=WEST',
            'diff = (${1:target_dir} - ${2:current_heading}) % 4',
            'if diff == 1:',
            "    commands.append('RIGHT')",
            'elif diff == 2:',
            "    commands.append('U_TURN')",
            'elif diff == 3:',
            "    commands.append('LEFT')",
            "commands.append('FORWARD')",
            '${0}',
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Relative Turn & Forward Movement Logic',
          documentation: {
            value: 'Calculates the relative turn (`LEFT`, `RIGHT`, `U_TURN`) between headings and appends `FORWARD`.',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '032',
        },
        {
          label: 'for_grid_cells',
          insertText: [
            "for r in range(MAZE_DATA['height']):",
            "    for c in range(MAZE_DATA['width']):",
            "        walls = MAZE_DATA['grid'][r][c]",
            '        ${0:# Process cell}',
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '⚡ Iterate All Maze Cells',
          documentation: {
            value: 'Nested loop scanning each coordinate in the maze arena.',
          },
          kind: monaco.languages.CompletionItemKind.Snippet,
          sortText: '033',
        },
      ];

      // === E. Standard Python Keywords & Built-ins ===
      const pythonBuiltins = [
        { label: 'return', insertText: 'return ', kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'import', insertText: 'import ', kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'from', insertText: 'from ', kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'while', insertText: 'while ${1:condition}:\n    ${0}', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'if', insertText: 'if ${1:condition}:\n    ${0}', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'elif', insertText: 'elif ${1:condition}:\n    ${0}', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'else:', insertText: 'else:\n    ${0}', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Keyword },
        { label: 'for in range', insertText: 'for ${1:i} in range(${2:n}):\n    ${0}', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Snippet },
        { label: 'print()', insertText: 'print(${1:msg})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Function },
        { label: 'len()', insertText: 'len(${1:obj})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Function },
        { label: 'range()', insertText: 'range(${1:stop})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, kind: monaco.languages.CompletionItemKind.Function },
        { label: 'deque', insertText: 'from collections import deque', kind: monaco.languages.CompletionItemKind.Module },
        { label: 'heapq', insertText: 'import heapq', kind: monaco.languages.CompletionItemKind.Module },
      ];

      // Context-aware predictions:
      // If user is inside a string quote or right after 'commands.append('
      if (textUntilPosition.endsWith("'") || textUntilPosition.endsWith('"') || textUntilPosition.includes('commands.append')) {
        motionCommands.forEach((item) => {
          // If already inside quotes, insert without quotes
          const rawText = item.label.replace(/'/g, '');
          suggestions.push({
            ...item,
            insertText: textUntilPosition.endsWith("'") || textUntilPosition.endsWith('"') ? rawText : item.insertText,
            range,
          });
        });
      }

      // If user typed 'MAZE_DATA['
      if (textUntilPosition.endsWith("MAZE_DATA['") || textUntilPosition.endsWith('MAZE_DATA["')) {
        ['grid', 'start_node', 'end_node', 'width', 'height'].forEach((key) => {
          suggestions.push({
            label: key,
            insertText: `${key}']`,
            detail: `MAZE_DATA property`,
            kind: monaco.languages.CompletionItemKind.Property,
            range,
          });
        });
      }

      // Combine all general suggestions
      const allItems = [
        ...motionCommands,
        ...mazeDataCompletions,
        ...wallConstants,
        ...codeSnippets,
        ...pythonBuiltins,
      ];

      allItems.forEach((item) => {
        suggestions.push({
          ...item,
          range,
        });
      });

      return {
        suggestions,
      };
    },
  });

  // 2. Register Inline Completions Provider (AI-like Ghost Text Predictions)
  if (monaco.languages.registerInlineCompletionsProvider) {
    monaco.languages.registerInlineCompletionsProvider('python', {
      provideInlineCompletions: (model: any, position: any) => {
        const lineContent = model.getLineContent(position.lineNumber);
        const prefix = lineContent.substring(0, position.column - 1).trim();

        const predictions: { insertText: string }[] = [];

        // Dynamic inline text predictions based on current line context
        if (prefix === 'def solve' || prefix === 'def solve(') {
          predictions.push({ insertText: '():\n    commands = []\n    return commands' });
        } else if (prefix === 'commands.append(') {
          predictions.push({ insertText: "'FORWARD')" });
          predictions.push({ insertText: "'RIGHT')" });
          predictions.push({ insertText: "'LEFT')" });
        } else if (prefix === "commands.append('F" || prefix === 'commands.append("F') {
          predictions.push({ insertText: "ORWARD')" });
        } else if (prefix === "commands.append('L" || prefix === 'commands.append("L') {
          predictions.push({ insertText: "EFT')" });
        } else if (prefix === "commands.append('R" || prefix === 'commands.append("R') {
          predictions.push({ insertText: "IGHT')" });
        } else if (prefix === "commands.append('U" || prefix === 'commands.append("U') {
          predictions.push({ insertText: "_TURN')" });
        } else if (prefix === 'walls =') {
          predictions.push({ insertText: " MAZE_DATA['grid'][y][x]" });
        } else if (prefix === 'if not (walls &') {
          predictions.push({ insertText: ' 1):  # North path open' });
        } else if (prefix === 'start =') {
          predictions.push({ insertText: " MAZE_DATA['start_node']" });
        } else if (prefix === 'goal =') {
          predictions.push({ insertText: " MAZE_DATA['end_node']" });
        } else if (prefix === 'grid =') {
          predictions.push({ insertText: " MAZE_DATA['grid']" });
        } else if (prefix === 'from collections import') {
          predictions.push({ insertText: ' deque' });
        } else if (prefix === 'return') {
          predictions.push({ insertText: ' commands' });
        }

        return {
          items: predictions.map((p) => ({
            insertText: p.insertText,
            range: {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: position.column,
              endColumn: position.column,
            },
          })),
        };
      },
      freeInlineCompletions: () => {},
    });
  }

  // 3. Register Hover Documentation Provider
  monaco.languages.registerHoverProvider('python', {
    provideHover: (model: any, position: any) => {
      const word = model.getWordAtPosition(position);
      if (!word) return null;

      const hoverDocs: Record<string, string> = {
        MAZE_DATA:
          '### `MAZE_DATA` (Global Dictionary)\nContains all information about the generated maze:\n- `grid`: 2D list of bitwise wall integers `[row][col]`\n- `start_node`: `(x, y)` coordinate tuple\n- `end_node`: `(x, y)` coordinate tuple\n- `width`: Integer width in cells\n- `height`: Integer height in cells',
        FORWARD:
          '### Command: `FORWARD`\nMoves the robot 1 cell forward according to its orientation.\n⚠️ Colliding with a wall adds a **5-second penalty**.',
        LEFT:
          '### Command: `LEFT`\nTurns the robot 90 degrees counter-clockwise in place.',
        RIGHT:
          '### Command: `RIGHT`\nTurns the robot 90 degrees clockwise in place.',
        U_TURN:
          '### Command: `U_TURN`\nTurns the robot 180 degrees in place.',
        solve:
          '### Entrypoint: `def solve():`\nThe main function executed by the WASM Python runner. It must return a list of movement command strings.',
      };

      const doc = hoverDocs[word.word];
      if (doc) {
        return {
          range: new monaco.Range(
            position.lineNumber,
            word.startColumn,
            position.lineNumber,
            word.endColumn
          ),
          contents: [{ value: doc }],
        };
      }
      return null;
    },
  });
}
