import { MazeData, Command, AlgorithmVisualizerData } from '../types/maze';
import { extractAlgorithmVisualizerData } from './algorithmVisualizer';

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<any>;
    pyodideInstance?: any;
  }
}

let pyodideLoadingPromise: Promise<any> | null = null;

export async function getPyodideInstance(
  onLog?: (msg: string, type: 'info' | 'error' | 'warn') => void
): Promise<any> {
  if (typeof window === 'undefined') {
    throw new Error('Pyodide can only run in the browser environment.');
  }

  if (window.pyodideInstance) {
    return window.pyodideInstance;
  }

  if (pyodideLoadingPromise) {
    return pyodideLoadingPromise;
  }

  pyodideLoadingPromise = (async () => {
    // Check if script is already present or load it
    if (!window.loadPyodide) {
      onLog?.('Loading WebAssembly Python engine (Pyodide)...', 'info');
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Pyodide CDN script'));
        document.head.appendChild(script);
      });
    }

    onLog?.('Initializing Pyodide WebAssembly runtime...', 'info');
    const pyodide = await window.loadPyodide!({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
    });

    window.pyodideInstance = pyodide;
    onLog?.('Python WebAssembly runtime is ready!', 'info');
    return pyodide;
  })();

  return pyodideLoadingPromise;
}

export interface PyodideExecutionResult {
  success: boolean;
  commands: Command[];
  logs: string[];
  visualizerData?: AlgorithmVisualizerData;
  error?: string;
}

export async function executePythonSolver(
  code: string,
  mazeData: MazeData,
  onLogOutput: (msg: string, type: 'info' | 'error' | 'warn') => void
): Promise<PyodideExecutionResult> {
  const logs: string[] = [];

  try {
    const pyodide = await getPyodideInstance(onLogOutput);

    // Setup stdout capture in Python
    const stdoutCaptureCode = `
import sys
import io

class WebStdout(io.StringIO):
    def __init__(self, callback):
        super().__init__()
        self.callback = callback
    def write(self, s):
        if s.strip():
            self.callback(s)
        return len(s)

_captured_logs = []
def _py_log(msg):
    _captured_logs.append(msg)

sys.stdout = WebStdout(_py_log)
sys.stderr = WebStdout(_py_log)
`;
    pyodide.runPython(stdoutCaptureCode);

    // Inject MAZE_DATA into Python global namespace
    const mazeDataJson = JSON.stringify(mazeData);
    pyodide.runPython(`
import json
MAZE_DATA = json.loads('''${mazeDataJson}''')
`);

    // Reset captured logs
    pyodide.runPython(`_captured_logs.clear()`);

    // Run user's script
    pyodide.runPython(code);

    // Check if solve() function exists
    const hasSolve = pyodide.runPython(`callable(globals().get("solve"))`);
    if (!hasSolve) {
      throw new Error(
        'Function `solve()` was not found in your Python code. Please define `def solve():` that returns a command array.'
      );
    }

    // Call solve()
    const pyResult = pyodide.runPython(`solve()`);

    // Retrieve stdout logs
    const pyLogs = pyodide.runPython(`list(_captured_logs)`);
    const capturedLogsList: string[] = pyLogs.toJs ? pyLogs.toJs() : [];
    for (const log of capturedLogsList) {
      logs.push(log);
      onLogOutput(log, 'info');
    }

    if (!pyResult) {
      throw new Error('`solve()` returned None or nothing. Expected an array of commands like ["FORWARD", "RIGHT"].');
    }

    // Convert PyProxy to JS Array
    const rawCommands = pyResult.toJs ? pyResult.toJs() : pyResult;

    if (!Array.isArray(rawCommands)) {
      throw new Error(
        `Expected solve() to return a list/array of commands, but received: ${typeof rawCommands}`
      );
    }

    // Validate commands
    const validCommands: Command[] = [];
    for (let i = 0; i < rawCommands.length; i++) {
      const cmd = String(rawCommands[i]).toUpperCase().trim();
      if (!['FORWARD', 'LEFT', 'RIGHT', 'U_TURN'].includes(cmd)) {
        throw new Error(
          `Invalid motor command at index ${i}: "${cmd}". Allowed: 'FORWARD', 'LEFT', 'RIGHT', 'U_TURN'`
        );
      }
      validCommands.push(cmd as Command);
    }

    let visualizerData: AlgorithmVisualizerData | undefined;
    try {
      visualizerData = extractAlgorithmVisualizerData(pyodide, code, validCommands, mazeData);
    } catch (e) {
      console.warn('Failed to extract visualizer telemetry:', e);
    }

    return {
      success: true,
      commands: validCommands,
      logs,
      visualizerData,
    };
  } catch (err: any) {
    const errorMsg = err?.message || String(err);
    onLogOutput(errorMsg, 'error');
    return {
      success: false,
      commands: [],
      logs,
      error: errorMsg,
    };
  }
}
