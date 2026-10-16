'use client';

import React, { useRef, useEffect } from 'react';
import { LogEntry } from '../types/maze';
import { Terminal, Trash2, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

interface ConsoleOutputProps {
  logs: LogEntry[];
  onClearLogs: () => void;
}

export default function ConsoleOutput({ logs, onClearLogs }: ConsoleOutputProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />;
      case 'error':
        return <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />;
      case 'warn':
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />;
      case 'info':
      default:
        return <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />;
    }
  };

  const getLogTextColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return 'text-emerald-300';
      case 'error':
        return 'text-rose-300';
      case 'warn':
        return 'text-amber-300';
      case 'info':
      default:
        return 'text-slate-200';
    }
  };

  return (
    <div className="flex flex-col h-36 sm:h-40 bg-[#090d16] border border-slate-800 rounded-xl overflow-hidden shadow-inner">
      {/* Console Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900/80 border-b border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-slate-300">Console & Pyodide Output</span>
          <span className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded">
            {logs.length}
          </span>
        </div>
        <button
          onClick={onClearLogs}
          title="Clear console"
          className="flex items-center gap-1 hover:text-slate-200 text-slate-500 transition-colors cursor-pointer text-[11px]"
        >
          <Trash2 className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Log Messages Stream */}
      <div
        ref={scrollRef}
        className="flex-1 p-3 font-mono text-xs overflow-y-auto space-y-1.5 scroll-smooth"
      >
        {logs.length === 0 ? (
          <div className="text-slate-600 italic py-6 text-center select-none">
            Ready for execution. Click &quot;Run Simulation&quot; to execute your Python solver.
          </div>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              className={`flex items-start gap-2 leading-relaxed ${getLogTextColor(log.type)}`}
            >
              {getLogIcon(log.type)}
              <span className="text-slate-500 text-[10px] select-none mt-0.5 shrink-0">
                [{log.timestamp}]
              </span>
              <pre className="whitespace-pre-wrap font-mono break-all flex-1">{log.message}</pre>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
