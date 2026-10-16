'use client';

import React from 'react';
import { Sliders, RefreshCw, Gauge, Network, ShieldAlert, CheckCircle2, SquareDashedBottom, RotateCcw } from 'lucide-react';
import { SimulationStats } from '../types/maze';

interface ControlPanelProps {
  gridWidth: number;
  gridHeight: number;
  braidRatio: number;
  simulationSpeed: number;
  stats: SimulationStats;
  onGridWidthChange: (w: number) => void;
  onGridHeightChange: (h: number) => void;
  onBraidRatioChange: (ratio: number) => void;
  onSimulationSpeedChange: (speed: number) => void;
  onGenerateMaze: () => void;
  onGenerateBlankArena: () => void;
  onResetRobot: () => void;
  isSimulating: boolean;
}

export default function ControlPanel({
  gridWidth,
  gridHeight,
  braidRatio,
  simulationSpeed,
  stats,
  onGridWidthChange,
  onGridHeightChange,
  onBraidRatioChange,
  onSimulationSpeedChange,
  onGenerateMaze,
  onGenerateBlankArena,
  onResetRobot,
  isSimulating,
}: ControlPanelProps) {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-xl px-3 sm:px-4 py-2.5 shadow-lg space-y-2 shrink-0 w-full max-w-full min-w-0 overflow-hidden">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        {/* Left: Quick Actions */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            id="btn-reset-position"
            onClick={onResetRobot}
            title="Reset robot back to start cell (0, 0)"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Reset Position</span>
          </button>

          <button
            id="btn-blank-arena"
            onClick={onGenerateBlankArena}
            disabled={isSimulating}
            title="Create an open arena with zero interior walls for practice"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/80 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50"
          >
            <SquareDashedBottom className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Blank Arena (No Walls)</span>
            <span className="sm:hidden">Blank Arena</span>
          </button>

          <button
            id="btn-generate-maze"
            onClick={onGenerateMaze}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-md shadow-cyan-600/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Generate Maze</span>
          </button>
        </div>

        {/* Center/Right: Parameters & Sliders */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          {/* Grid Size */}
          <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400 text-[11px]">Size:</span>
            <input
              id="input-grid-width"
              type="number"
              min={3}
              max={35}
              value={gridWidth}
              disabled={isSimulating}
              onChange={(e) =>
                onGridWidthChange(Math.max(3, Math.min(35, parseInt(e.target.value) || 3)))
              }
              className="w-11 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-cyan-400 font-mono text-center font-bold focus:outline-none focus:border-cyan-500"
            />
            <span className="text-slate-500 font-mono">×</span>
            <input
              id="input-grid-height"
              type="number"
              min={3}
              max={35}
              value={gridHeight}
              disabled={isSimulating}
              onChange={(e) =>
                onGridHeightChange(Math.max(3, Math.min(35, parseInt(e.target.value) || 3)))
              }
              className="w-11 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-cyan-400 font-mono text-center font-bold focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Braid Slider */}
          <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <span className="text-slate-400 text-[11px]">Braid:</span>
            <input
              id="slider-braid-ratio"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={braidRatio}
              disabled={isSimulating}
              onChange={(e) => onBraidRatioChange(parseFloat(e.target.value))}
              className="w-14 sm:w-18 accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <span className="font-mono text-cyan-400 text-[11px] font-semibold min-w-[28px]">
              {Math.round(braidRatio * 100)}%
            </span>
          </div>

          {/* Speed Slider */}
          <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400 text-[11px]">Speed:</span>
            <input
              id="slider-simulation-speed"
              type="range"
              min={1}
              max={10}
              step={1}
              value={simulationSpeed}
              onChange={(e) => onSimulationSpeedChange(parseInt(e.target.value))}
              className="w-14 sm:w-18 accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <span className="font-mono text-amber-400 text-[11px] font-semibold min-w-[20px]">
              {simulationSpeed}x
            </span>
          </div>
        </div>
      </div>

      {/* Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">Status:</span>
            {stats.status === 'running' && (
              <span className="flex items-center gap-1 text-cyan-400 font-semibold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Navigating Maze...
              </span>
            )}
            {stats.status === 'success' && (
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Target Reached!
              </span>
            )}
            {stats.status === 'collision' && (
              <span className="flex items-center gap-1 text-rose-400 font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Collision (+5s)
              </span>
            )}
            {stats.status === 'idle' && (
              <span className="text-slate-400 font-medium">Ready</span>
            )}
            {stats.status === 'stopped' && (
              <span className="text-amber-400 font-medium">Stopped</span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-500">Steps:</span>
            <span className="font-mono font-bold text-slate-200">{stats.stepsTaken}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-500">Collisions:</span>
            <span
              className={`font-mono font-bold ${
                stats.collisions > 0 ? 'text-rose-400' : 'text-slate-200'
              }`}
            >
              {stats.collisions}
            </span>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono hidden md:block">
          Cell-based rover coordinates: (0,0) → ({gridWidth - 1},{gridHeight - 1})
        </div>
      </div>
    </div>
  );
}
