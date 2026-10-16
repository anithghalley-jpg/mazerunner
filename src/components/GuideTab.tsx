'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  Code2,
  Play,
  Layers,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  HelpCircle,
  Copy,
  Check,
  Lightbulb,
  BookMarked,
  Binary,
  GitBranch,
} from 'lucide-react';
import { ALGORITHM_PRESETS, AlgorithmPreset } from '../utils/algorithmPresets';
import { BEGINNER_LESSONS, BeginnerLesson } from '../utils/beginnerLessons';

interface GuideTabProps {
  onLoadAlgorithm: (code: string, algoName: string) => void;
  onGoToSimulator: () => void;
}

export default function GuideTab({ onLoadAlgorithm, onGoToSimulator }: GuideTabProps) {
  // Sub-track navigation inside Guide
  const [activeTrack, setActiveTrack] = useState<
    'python-basics' | 'bitwise-grid' | 'algorithms' | 'rules'
  >('python-basics');

  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmPreset>(ALGORITHM_PRESETS[0]);
  const [selectedLesson, setSelectedLesson] = useState<BeginnerLesson>(BEGINNER_LESSONS[0]);
  const [copied, setCopied] = useState(false);

  // Interactive Bitwise Demo state
  const [bitNorth, setBitNorth] = useState(true);
  const [bitEast, setBitEast] = useState(false);
  const [bitSouth, setBitSouth] = useState(true);
  const [bitWest, setBitWest] = useState(false);

  const calculatedBitmask =
    (bitNorth ? 1 : 0) | (bitEast ? 2 : 0) | (bitSouth ? 4 : 0) | (bitWest ? 8 : 0);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-6 text-slate-200">
      {/* Curriculum Track Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#111827] border border-slate-800 rounded-2xl text-xs">
        <button
          onClick={() => setActiveTrack('python-basics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
            activeTrack === 'python-basics'
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-600/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>1. Python Fundamentals (Beginners)</span>
        </button>

        <button
          onClick={() => setActiveTrack('bitwise-grid')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
            activeTrack === 'bitwise-grid'
              ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Binary className="w-4 h-4" />
          <span>2. Virtual Walls & Bitwise Math</span>
        </button>

        <button
          onClick={() => setActiveTrack('algorithms')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
            activeTrack === 'algorithms'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <GitBranch className="w-4 h-4" />
          <span>3. Pathfinding Algorithms (BFS, A*, DFS)</span>
        </button>

        <button
          onClick={() => setActiveTrack('rules')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
            activeTrack === 'rules'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-600/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>4. Motor Commands & Scoring Rules</span>
        </button>
      </div>

      {/* TRACK 1: PYTHON FUNDAMENTALS FOR BEGINNERS */}
      {activeTrack === 'python-basics' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Conceptual Primer */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <Lightbulb className="w-5 h-5" />
              <h2 className="text-lg font-bold text-white">How Python Controls the Robot</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In this simulator, your Python script runs inside your browser using WebAssembly. The
              simulator looks for a function named <code className="text-amber-300 font-mono">solve()</code>.
              Whatever list of commands <code className="text-amber-300 font-mono">solve()</code> returns,
              the simulator executes sequentially on the robot.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-emerald-400">1. Functions (`def`)</div>
                <p className="text-[11px] text-slate-400">
                  <code className="text-slate-200 font-mono">def solve():</code> defines the entrypoint. Everything indented beneath it is executed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-cyan-400">2. Lists (`[...]`)</div>
                <p className="text-[11px] text-slate-400">
                  Commands are stored in a list: <code className="text-slate-200 font-mono">[&apos;FORWARD&apos;, &apos;LEFT&apos;]</code>. Use <code className="text-slate-200 font-mono">.append()</code> to add steps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-amber-400">3. Return Value</div>
                <p className="text-[11px] text-slate-400">
                  <code className="text-slate-200 font-mono">return commands</code> sends the list to the robotics animation engine.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Beginner Lessons */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-cyan-400" />
                  <span>Step-by-Step Beginner Lessons</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click a lesson to inspect the Python code, or load it into the editor to run it live.
                </p>
              </div>
            </div>

            {/* Lesson Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {BEGINNER_LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedLesson.id === lesson.id
                      ? 'bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-500/10 text-white'
                      : 'bg-[#111827] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-cyan-400 font-semibold mb-1">
                    {lesson.level}
                  </div>
                  <div className="font-bold text-xs text-slate-100">{lesson.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {lesson.objective}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Lesson Interactive Viewer */}
            <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-block text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded-full font-semibold">
                    {selectedLesson.level}
                  </div>
                  <h4 className="text-lg font-bold text-white">{selectedLesson.title}</h4>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="font-semibold text-cyan-400">Goal: </span>
                    {selectedLesson.objective}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedLesson.explanation}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      onLoadAlgorithm(selectedLesson.code, selectedLesson.title);
                      onGoToSimulator();
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-cyan-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Load Lesson into Editor & Run</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#090d16] flex flex-col">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-cyan-400">beginner_lesson.py</span>
                  <button
                    onClick={() => handleCopyCode(selectedLesson.code)}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="flex-1 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[420px] leading-relaxed">
                  {selectedLesson.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TRACK 2: VIRTUAL WALLS & BITWISE MATH */}
      {activeTrack === 'bitwise-grid' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Bitwise Explanation */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                <Binary className="w-5 h-5" />
                <h2 className="text-lg font-bold text-white">Why Bitwise? (1, 2, 4, 8)</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In robotics competitions, memory efficiency is critical. Instead of storing 4 booleans
                (north=true, east=false, etc.), we encode all 4 walls into a single integer using powers of 2.
              </p>
            </div>

            {/* Binary Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1">
                <div className="text-rose-400 font-bold text-sm">Value: 1</div>
                <div className="text-slate-300 font-sans font-medium">NORTH Wall</div>
                <div className="text-slate-500 text-[10px]">Binary: 0001 (y - 1)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1">
                <div className="text-rose-400 font-bold text-sm">Value: 2</div>
                <div className="text-slate-300 font-sans font-medium">EAST Wall</div>
                <div className="text-slate-500 text-[10px]">Binary: 0010 (x + 1)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1">
                <div className="text-rose-400 font-bold text-sm">Value: 4</div>
                <div className="text-slate-300 font-sans font-medium">SOUTH Wall</div>
                <div className="text-slate-500 text-[10px]">Binary: 0100 (y + 1)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1">
                <div className="text-rose-400 font-bold text-sm">Value: 8</div>
                <div className="text-slate-300 font-sans font-medium">WEST Wall</div>
                <div className="text-slate-500 text-[10px]">Binary: 1000 (x - 1)</div>
              </div>
            </div>

            {/* The & Operator Concept */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 font-mono">
              <div className="text-cyan-400 font-bold font-sans text-sm">
                How does the Bitwise AND (&) Operator work in Python?
              </div>
              <p className="text-slate-400 font-sans text-xs">
                Think of <code className="text-amber-300">&</code> as asking: &quot;Is this specific wall bit active?&quot;
              </p>
              <pre className="text-[11px] text-slate-300 whitespace-pre-wrap bg-slate-950 p-3 rounded-lg border border-slate-800">
{`# Suppose current cell integer is 5 (North + South = 1 + 4 = 5)
walls = 5

print(walls & 1)  # Output: 1  -> NORTH wall is PRESENT!
print(walls & 2)  # Output: 0  -> EAST wall is OPEN! Safe to drive East!
print(walls & 4)  # Output: 4  -> SOUTH wall is PRESENT!
print(walls & 8)  # Output: 0  -> WEST wall is OPEN!`}
              </pre>
            </div>
          </div>

          {/* Interactive Calculator Widget */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-sm font-bold text-white">Interactive Bitwise Cell Playground</span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800 font-bold">
                Computed Integer = {calculatedBitmask}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Checkboxes */}
              <div className="space-y-2">
                <p className="text-xs text-slate-400">
                  Toggle the walls below to see how the bitmask integer changes:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850">
                    <input
                      type="checkbox"
                      checked={bitNorth}
                      onChange={(e) => setBitNorth(e.target.checked)}
                      className="accent-rose-500 w-4 h-4"
                    />
                    <span className="font-mono text-slate-200">North Wall (1)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850">
                    <input
                      type="checkbox"
                      checked={bitEast}
                      onChange={(e) => setBitEast(e.target.checked)}
                      className="accent-rose-500 w-4 h-4"
                    />
                    <span className="font-mono text-slate-200">East Wall (2)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850">
                    <input
                      type="checkbox"
                      checked={bitSouth}
                      onChange={(e) => setBitSouth(e.target.checked)}
                      className="accent-rose-500 w-4 h-4"
                    />
                    <span className="font-mono text-slate-200">South Wall (4)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850">
                    <input
                      type="checkbox"
                      checked={bitWest}
                      onChange={(e) => setBitWest(e.target.checked)}
                      className="accent-rose-500 w-4 h-4"
                    />
                    <span className="font-mono text-slate-200">West Wall (8)</span>
                  </label>
                </div>
              </div>

              {/* Visual Cell */}
              <div className="relative w-44 h-44 mx-auto border border-dashed border-slate-700 rounded-xl flex items-center justify-center bg-[#090d16]">
                {bitNorth && (
                  <div className="absolute top-0 inset-x-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                )}
                {bitSouth && (
                  <div className="absolute bottom-0 inset-x-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                )}
                {bitWest && (
                  <div className="absolute left-0 inset-y-2 w-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                )}
                {bitEast && (
                  <div className="absolute right-0 inset-y-2 w-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                )}
                {/* Robot Inside Cell */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-sky-600 border border-sky-400 flex items-center justify-center shadow-lg text-white font-mono font-bold text-xs">
                    🤖
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Inside Cell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TRACK 3: PATHFINDING ALGORITHMS (BFS, A*, DFS, WALL FOLLOWER) */}
      {activeTrack === 'algorithms' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Pathfinding Evolution: From Reflexes to Optimal Search
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Select an algorithm below to learn its mental model and click &quot;Load & Test in Simulator&quot; to execute it.
            </p>
          </div>

          {/* Interactive Visualizer Callout */}
          <div className="p-3.5 bg-gradient-to-r from-purple-950/50 via-slate-900 to-amber-950/40 border border-purple-900/40 rounded-xl flex items-center justify-between text-xs text-slate-300 shadow-md">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong className="text-white">Algorithm Visualizer Live Mode:</strong> In the simulator canvas, use the top toggles for <span className="text-cyan-400 font-semibold">Path Flow (Direction Arrows)</span>, <span className="text-purple-400 font-semibold">Explored Tree (# order)</span>, and <span className="text-amber-400 font-semibold">Weights (f/g/h costs)</span> to watch how each algorithm develops its path and evaluates graph nodes!
              </span>
            </div>
          </div>

          {/* Algorithm Selector Buttons */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
            {ALGORITHM_PRESETS.map((algo) => (
              <button
                key={algo.id}
                onClick={() => setSelectedAlgo(algo)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedAlgo.id === algo.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{algo.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40">
                  {algo.difficulty}
                </span>
              </button>
            ))}
          </div>

          {/* Active Algorithm Display */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 space-y-5 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase bg-purple-950 text-purple-400 border border-purple-800 px-2 py-0.5 rounded-full font-bold">
                      {selectedAlgo.difficulty}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{selectedAlgo.complexity}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{selectedAlgo.name}</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedAlgo.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Why This Matters
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {selectedAlgo.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onLoadAlgorithm(selectedAlgo.code, selectedAlgo.name);
                    onGoToSimulator();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Load Algorithm into Simulator</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#090d16] flex flex-col">
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-purple-400">{selectedAlgo.id}_solver.py</span>
                <button
                  onClick={() => handleCopyCode(selectedAlgo.code)}
                  className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="flex-1 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[460px] leading-relaxed">
                {selectedAlgo.code}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TRACK 4: MOTOR COMMANDS & SCORING RULES */}
      {activeTrack === 'rules' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Robotics Rules & Motor Output
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Your algorithm must guide the robot from cell (0, 0) to the goal cell using these 4 actions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-emerald-400 font-bold text-sm">&apos;FORWARD&apos;</div>
              <p className="text-slate-400 font-sans text-xs">
                Moves from current cell into the next cell along current heading.
              </p>
              <div className="text-[11px] text-rose-400">💥 Causes collision if a wall is in front</div>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-indigo-400 font-bold text-sm">&apos;LEFT&apos;</div>
              <p className="text-slate-400 font-sans text-xs">
                Pivots 90° counter-clockwise inside the cell without changing position.
              </p>
              <div className="text-[11px] text-slate-500">e.g. East → North → West → South</div>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-indigo-400 font-bold text-sm">&apos;RIGHT&apos;</div>
              <p className="text-slate-400 font-sans text-xs">
                Pivots 90° clockwise inside the cell without changing position.
              </p>
              <div className="text-[11px] text-slate-500">e.g. East → South → West → North</div>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-amber-400 font-bold text-sm">&apos;U_TURN&apos;</div>
              <p className="text-slate-400 font-sans text-xs">
                Turns 180° in place inside the cell. Essential for escaping dead ends.
              </p>
              <div className="text-[11px] text-slate-500">e.g. East ↔ West, North ↔ South</div>
            </div>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Collision Penalties & Scoring</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If the robot issues a <code className="text-emerald-400 font-mono">&apos;FORWARD&apos;</code> command
              while facing a virtual wall, the robot stops, the screen flashes red, and a{' '}
              <span className="text-rose-400 font-bold">+5.0 second penalty</span> is added to the competition score.
              Always check the bitwise wall mask before driving forward!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
