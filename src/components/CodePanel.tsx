'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Square, Code2, Sparkles, Loader2, Zap } from 'lucide-react';
import ConsoleOutput from './ConsoleOutput';
import { LogEntry } from '../types/maze';
import { setupMonacoIntelliSense } from '../utils/monacoIntellisense';

interface CodePanelProps {
  pythonCode: string;
  onCodeChange: (code: string) => void;
  onRunSimulation: () => void;
  onStopSimulation: () => void;
  isExecutingCode: boolean;
  isSimulating: boolean;
  logs: LogEntry[];
  onClearLogs: () => void;
  onOpenGuide?: () => void;
}

export default function CodePanel({
  pythonCode,
  onCodeChange,
  onRunSimulation,
  onStopSimulation,
  isExecutingCode,
  isSimulating,
  logs,
  onClearLogs,
}: CodePanelProps) {
  const [editorTheme] = useState('vs-dark');
  const [predictionActive, setPredictionActive] = useState(true);

  return (
    <div className="flex flex-col h-full min-w-0 max-w-full bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Editor Header */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 bg-slate-900 border-b border-slate-800 min-w-0">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <div className="p-1 rounded bg-amber-500/10 text-amber-400 shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-semibold text-slate-200 text-sm shrink-0">solver.py</span>
          <span className="text-xs text-slate-500 font-mono hidden sm:inline shrink-0">(Python 3 WASM)</span>

          {/* Text Prediction Status / Toggle Pill */}
          <button
            id="btn-toggle-prediction"
            onClick={() => setPredictionActive((prev) => !prev)}
            title={
              predictionActive
                ? 'IntelliSense & Text Prediction active: suggestions appear as you type (Click to disable)'
                : 'Text Prediction disabled (Click to enable)'
            }
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
              predictionActive
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 shadow-sm shadow-emerald-500/10'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-750'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                predictionActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
            <Zap className="w-3 h-3" />
            <span>{predictionActive ? 'Prediction: ON' : 'Prediction: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Monaco Editor Container */}
      <div className="flex-1 min-h-[260px] relative">
        <Editor
          height="100%"
          language="python"
          theme={editorTheme}
          value={pythonCode}
          onChange={(val) => onCodeChange(val || '')}
          onMount={(editor, monaco) => {
            setupMonacoIntelliSense(monaco);
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: 'on',
            fontFamily: 'Fira Code, JetBrains Mono, Menlo, Monaco, Consolas, monospace',
            padding: { top: 12, bottom: 12 },
            renderLineHighlight: 'all',
            // Active text prediction and IDE autocomplete settings
            quickSuggestions: predictionActive
              ? { other: true, comments: true, strings: true }
              : false,
            quickSuggestionsDelay: 10,
            suggestOnTriggerCharacters: predictionActive,
            acceptSuggestionOnEnter: 'on',
            tabCompletion: 'on',
            wordBasedSuggestions: predictionActive ? 'allDocuments' : 'off',
            snippetSuggestions: 'top',
            suggest: {
              preview: predictionActive,
              showWords: true,
              showSnippets: true,
              showFunctions: true,
              showVariables: true,
              showConstants: true,
              showEnums: true,
              showProperties: true,
              showKeywords: true,
              localityBonus: true,
              shareSuggestSelections: true,
              insertMode: 'insert',
            },
            inlineSuggest: {
              enabled: predictionActive,
              mode: 'prefix',
            },
            parameterHints: {
              enabled: predictionActive,
              cycle: true,
            },
            suggestSelection: 'first',
          }}
          loading={
            <div className="flex items-center justify-center h-full text-slate-400 text-sm gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
              <span>Loading Monaco Editor...</span>
            </div>
          }
        />
      </div>

      {/* Execution Action Bar */}
      <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {!isSimulating ? (
            <button
              id="btn-run-simulation"
              onClick={onRunSimulation}
              disabled={isExecutingCode}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-medium text-sm shadow-lg shadow-emerald-500/20 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
            >
              {isExecutingCode ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Compiling WASM...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Run Simulation</span>
                </>
              )}
            </button>
          ) : (
            <button
              id="btn-stop-simulation"
              onClick={onStopSimulation}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm shadow-lg shadow-rose-600/30 active:scale-98 transition-all cursor-pointer"
            >
              <Square className="w-4 h-4 fill-white" />
              <span>Stop Simulation</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          {predictionActive && (
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>Tab / ↵ to predict</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>WASM Sandbox</span>
          </div>
        </div>
      </div>

      {/* Console Output Subpanel */}
      <div className="p-3 pt-0 bg-slate-900/90">
        <ConsoleOutput logs={logs} onClearLogs={onClearLogs} />
      </div>
    </div>
  );
}
