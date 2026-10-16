'use client';

import React from 'react';
import {
  Bot,
  Cpu,
  ArrowLeftRight,
  Play,
  GraduationCap,
  Maximize2,
  Columns2,
  PanelLeftClose,
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'simulator' | 'guide';
  onChangeTab: (tab: 'simulator' | 'guide') => void;
  layoutMode: 'maze-left' | 'maze-right';
  onToggleLayout: () => void;
  panelRatio: 'wide' | 'balanced' | 'focus-maze';
  onChangePanelRatio: (ratio: 'wide' | 'balanced' | 'focus-maze') => void;
}

export default function Navbar({
  activeTab,
  onChangeTab,
  layoutMode,
  onToggleLayout,
  panelRatio,
  onChangePanelRatio,
}: NavbarProps) {
  return (
    <header className="border-b border-slate-800 bg-[#0c121e]/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
      {/* Brand & Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-600/20 text-white shrink-0">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-slate-100 text-sm tracking-tight">
              Maze Runner
            </h1>
            <span className="text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 border border-cyan-800/80 px-2 py-0.5 rounded-full font-semibold">
              Robotics Sim
            </span>
          </div>
        </div>
      </div>

      {/* Center Navigation Tabs */}
      <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
        <button
          onClick={() => onChangeTab('simulator')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeTab === 'simulator'
              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>Simulator Workbench</span>
        </button>

        <button
          onClick={() => onChangeTab('guide')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            activeTab === 'guide'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Getting Started & Guide</span>
          <span className="text-[9px] bg-indigo-500/30 text-indigo-300 px-1.5 py-0.2 rounded-full font-bold ml-0.5">
            Docs
          </span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 text-xs">
        {activeTab === 'simulator' && (
          <>
            {/* View Width Selector */}
            <div className="hidden md:flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => onChangePanelRatio('wide')}
                title="Wide Simulation Canvas (65% width)"
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  panelRatio === 'wide'
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Columns2 className="w-3 h-3" />
                <span>Wide</span>
              </button>
              <button
                onClick={() => onChangePanelRatio('balanced')}
                title="Balanced 50/50 View"
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  panelRatio === 'balanced'
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>50/50</span>
              </button>
              <button
                onClick={() => onChangePanelRatio('focus-maze')}
                title="Full Canvas Focus"
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  panelRatio === 'focus-maze'
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Maximize2 className="w-3 h-3" />
                <span>Focus</span>
              </button>
            </div>

            {/* Swap Left/Right Panels */}
            {panelRatio !== 'focus-maze' && (
              <button
                onClick={onToggleLayout}
                title="Swap Left/Right Panels"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">
                  {layoutMode === 'maze-left' ? 'Maze: Left' : 'Maze: Right'}
                </span>
              </button>
            )}
          </>
        )}

        <div className="hidden xl:flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400 font-mono text-[11px]">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Pyodide WASM</span>
        </div>
      </div>
    </header>
  );
}
