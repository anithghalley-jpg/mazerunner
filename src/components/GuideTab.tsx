'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Play,
  Terminal,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Compass,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ALGORITHM_PRESETS, AlgorithmPreset } from '../utils/algorithmPresets';
import { BEGINNER_LESSONS, BeginnerLesson } from '../utils/beginnerLessons';

interface GuideTabProps {
  onLoadAlgorithm: (code: string, algoName: string) => void;
  onGoToSimulator: () => void;
}

type TabKey =
  | 'lesson-1'
  | 'lesson-2'
  | 'lesson-3'
  | 'lesson-4'
  | 'algo-bfs'
  | 'algo-astar'
  | 'rules';

export default function GuideTab({ onLoadAlgorithm, onGoToSimulator }: GuideTabProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('lesson-1');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Lesson 3: Interactive Virtual Wall Tester State
  const [wallTesterValue, setWallTesterValue] = useState<number>(3); // 3 = North (1) + East (2)

  // Lesson 4: Interactive BFS Stepper State
  const [bfsStepIndex, setBfsStepIndex] = useState<number>(0);

  // Track 6: Interactive A* Score Calculator State
  const [astarCurrentPos, setAstarCurrentPos] = useState<{ x: number; y: number }>({ x: 2, y: 1 });
  const [astarTargetPos, setAstarTargetPos] = useState<{ x: number; y: number }>({ x: 4, y: 3 });
  const [astarGCost, setAstarGCost] = useState<number>(2);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleLoadAndRun = (code: string, name: string) => {
    onLoadAlgorithm(code, name);
    onGoToSimulator();
  };

  // Helper calculation for Lesson 3 Virtual Wall Tester
  const isNorthBlocked = (wallTesterValue & 1) !== 0;
  const isEastBlocked = (wallTesterValue & 2) !== 0;
  const isSouthBlocked = (wallTesterValue & 4) !== 0;
  const isWestBlocked = (wallTesterValue & 8) !== 0;
  const binaryString = wallTesterValue.toString(2).padStart(4, '0');

  // Helper calculation for A* Calculator
  const astarH =
    Math.abs(astarCurrentPos.x - astarTargetPos.x) +
    Math.abs(astarCurrentPos.y - astarTargetPos.y);
  const astarF = astarGCost + astarH;

  // BFS Stepper Data
  const bfsSteps = [
    {
      step: 0,
      title: 'Step 0 — Initial State',
      description: 'The queue contains only the starting state at (0, 0) facing East. No motor commands have been issued yet.',
      stateBeingProcessed: "(0, 0, 'E')",
      queueContents: ["(0, 0, 'E', [])"],
      visitedSet: ["(0, 0, 'E')"],
      actionTaken: 'Initialize search from start_node facing East.',
    },
    {
      step: 1,
      title: 'Step 1 — Probing Forward Neighbor',
      description: 'The East wall is open. Robot tests moving forward to (1, 0) facing East. Command list becomes [\'FORWARD\'].',
      stateBeingProcessed: "(0, 0, 'E')",
      queueContents: ["(1, 0, 'E', ['FORWARD'])"],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')"],
      actionTaken: 'Queued forward state (1, 0, \'E\').',
    },
    {
      step: 2,
      title: 'Step 2 — Probing Left Turn',
      description: 'Turns 90° counterclockwise from East to North. State becomes (0, 0, \'N\'). Command list becomes [\'LEFT\'].',
      stateBeingProcessed: "(0, 0, 'E')",
      queueContents: ["(1, 0, 'E', ['FORWARD'])", "(0, 0, 'N', ['LEFT'])"],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')", "(0, 0, 'N')"],
      actionTaken: 'Queued in-place pivot left.',
    },
    {
      step: 3,
      title: 'Step 3 — Probing Right Turn',
      description: 'Turns 90° clockwise from East to South. State becomes (0, 0, \'S\'). Command list becomes [\'RIGHT\'].',
      stateBeingProcessed: "(0, 0, 'E')",
      queueContents: [
        "(1, 0, 'E', ['FORWARD'])",
        "(0, 0, 'N', ['LEFT'])",
        "(0, 0, 'S', ['RIGHT'])"
      ],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')", "(0, 0, 'N')", "(0, 0, 'S')"],
      actionTaken: 'Queued in-place pivot right. All 3 immediate actions for start state explored.',
    },
    {
      step: 4,
      title: 'Step 4 — Popping Oldest State from Queue (FIFO)',
      description: 'Queue removes (1, 0, \'E\', [\'FORWARD\']) to process its forward, left, and right options next.',
      stateBeingProcessed: "(1, 0, 'E')",
      queueContents: [
        "(0, 0, 'N', ['LEFT'])",
        "(0, 0, 'S', ['RIGHT'])",
        "(2, 0, 'E', ['FORWARD', 'FORWARD'])"
      ],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')", "(0, 0, 'N')", "(0, 0, 'S')", "(2, 0, 'E')"],
      actionTaken: 'Advancing wavefront layer by layer with minimum commands.',
    },
  ];

  const currentBfsStep = bfsSteps[bfsStepIndex];

  return (
    <div className="max-w-[1240px] mx-auto text-slate-800 space-y-8 pb-16">
      {/* Top Header & Overview */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Robotics & Python Learning Curriculum
            </h1>
            <p className="text-[15px] sm:text-[16px] text-slate-600 mt-1">
              From foundational Python commands to autonomous reactive navigation and optimal search algorithms (BFS, A*).
            </p>
          </div>
          <button
            onClick={onGoToSimulator}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer"
          >
            <span>Open Simulator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Distinct Minimalist Tab Navigation Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-5 pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('lesson-1')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'lesson-1'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            1. First Robot Command
          </button>

          <button
            onClick={() => setActiveTab('lesson-2')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'lesson-2'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            2. Loops & .append()
          </button>

          <button
            onClick={() => setActiveTab('lesson-3')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'lesson-3'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            3. Bitwise Wall Detection
          </button>

          <button
            onClick={() => setActiveTab('lesson-4')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'lesson-4'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            4. Wall-Following Loop
          </button>

          <button
            onClick={() => setActiveTab('algo-bfs')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'algo-bfs'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            5. BFS Algorithm
          </button>

          <button
            onClick={() => setActiveTab('algo-astar')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'algo-astar'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            6. A* Search & Heuristics
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeTab === 'rules'
                ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            7. Rules & Scoring
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: BEGINNER 101 - FIRST ROBOT COMMAND                                 */}
      {/* ========================================================================= */}
      {activeTab === 'lesson-1' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Article */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Beginner 101
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                First Robot Command
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Goal:</strong> Learn how{' '}
                <code className="text-indigo-600 font-mono">solve()</code> returns a Python list of motor commands. In Python,{' '}
                <code className="text-indigo-600 font-mono">solve()</code> is a function that outputs a list of strings. Each string instructs the rover to drive or turn.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">lesson_1_first_steps.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(BEGINNER_LESSONS[0].code, 'lesson-1')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'lesson-1' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(BEGINNER_LESSONS[0].code, 'Lesson 1: First Steps')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto">
{BEGINNER_LESSONS[0].code}
              </pre>
            </div>

            <p className="text-[16px] sm:text-[17px] leading-7 text-slate-700">
              This code is your first step in programming a robot to move through a maze. You give the robot a sequence of commands, and the robot executes them one after another. Unlike an reactive program where the robot checks whether a wall is blocked, this code does not make decisions yet. It simply tells the robot what to do.
            </p>

            {/* Section 1: Understanding the Code */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-slate-900">1. Understanding the Code</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                There are three important concepts here:
              </p>

              <div className="space-y-4 text-[16px] leading-7 text-slate-700">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono">A</span>
                    <code>def solve():</code>
                  </div>
                  <p>
                    This creates a function named <code className="font-mono text-indigo-600">solve</code>. Think of a function as a set of instructions that you can run whenever needed. In this robot challenge, the maze program calls <code className="font-mono text-indigo-600">solve()</code> to ask your code what the robot should do.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono">B</span>
                    <code>print(&quot;Executing my first robot commands!&quot;)</code>
                  </div>
                  <p>
                    This displays a message in the Pyodide output console:
                  </p>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg font-mono text-sm text-slate-800">
                    Executing my first robot commands!
                  </div>
                  <p className="text-slate-500 text-[14px]">
                    This message is for the person running the program. It does not tell the robot to move.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono">C</span>
                    <code>return [&apos;FORWARD&apos;, &apos;RIGHT&apos;, ...]</code>
                  </div>
                  <p>
                    <strong>This is the most important part.</strong> The <code className="font-mono text-indigo-600">return</code> statement sends a list of commands back to the maze simulator engine. The program can then execute these commands in order.
                  </p>
                  <p className="text-slate-600 text-[15px]">
                    The square brackets <code className="font-mono">[]</code> indicate a Python list, and each command is written as a string inside quotation marks.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What will the robot do? */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">2. What Will the Robot Do?</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                Assume the robot starts facing <strong>North (up)</strong> at coordinate <code className="font-mono text-indigo-600">(0, 0)</code>, and that every forward movement takes it one cell:
              </p>

              <ol className="list-decimal pl-6 space-y-2 text-[15px] sm:text-[16px] text-slate-700">
                <li><strong className="text-slate-900">&apos;FORWARD&apos;</strong> — Move one cell North.</li>
                <li><strong className="text-slate-900">&apos;RIGHT&apos;</strong> — Turn 90° clockwise in-place to face East.</li>
                <li><strong className="text-slate-900">&apos;FORWARD&apos;</strong> — Move one cell East.</li>
                <li><strong className="text-slate-900">&apos;LEFT&apos;</strong> — Turn 90° counterclockwise in-place to face North.</li>
                <li><strong className="text-slate-900">&apos;FORWARD&apos;</strong> — Move one cell North again.</li>
              </ol>

              <p className="text-[15px] text-slate-600 italic">
                The robot makes 3 forward movements and 2 turns. It finishes two cells North and one cell East of its starting position at (1, 2). Turns change the orientation of the robot, but do not change its position cell.
              </p>
            </div>

            {/* Section 3: Key Takeaways */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">3. What Should You Remember from Lesson 1?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[15px] text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><code className="font-mono text-slate-900 font-semibold">def solve():</code> defines the function the simulator executes.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><code className="font-mono text-slate-900 font-semibold">print()</code> displays progress messages in the console for debugging.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><code className="font-mono text-slate-900 font-semibold">return</code> delivers the command list back to the robot controller.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><code className="font-mono text-slate-900 font-semibold">&apos;FORWARD&apos;</code> drives 1 cell along the heading.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><code className="font-mono text-slate-900 font-semibold">&apos;LEFT&apos;</code> &amp; <code className="font-mono text-slate-900 font-semibold">&apos;RIGHT&apos;</code> change heading by 90° in-place.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Order matters: each action changes the state for the next action.</span>
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 mt-4">
                <div className="font-bold text-amber-900 text-[15px]">Practice Challenge:</div>
                <p className="text-[15px] text-amber-800">
                  Can you modify the list so that a robot starting at (0, 0) facing North moves two cells North, turns right, and then moves three cells East?
                </p>
                <p className="text-xs text-amber-700 font-mono">
                  Hint: [&apos;FORWARD&apos;, &apos;FORWARD&apos;, &apos;RIGHT&apos;, &apos;FORWARD&apos;, &apos;FORWARD&apos;, &apos;FORWARD&apos;]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: BEGINNER 102 - LOOPS & .APPEND()                                   */}
      {/* ========================================================================= */}
      {activeTab === 'lesson-2' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Beginner 102
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Using Loops &amp; .append()
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Goal:</strong> Generate repetitive commands dynamically using a Python <code className="text-indigo-600 font-mono">for</code> loop instead of typing every command manually.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">lesson_2_loops.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(BEGINNER_LESSONS[1].code, 'lesson-2')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'lesson-2' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(BEGINNER_LESSONS[1].code, 'Lesson 2: Loops & Lists')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto">
{BEGINNER_LESSONS[1].code}
              </pre>
            </div>

            <p className="text-[16px] sm:text-[17px] leading-7 text-slate-700">
              The code does five main things:
            </p>

            <ol className="list-decimal pl-6 space-y-1.5 text-[15px] sm:text-[16px] text-slate-700">
              <li>Creates an empty list <code className="font-mono text-indigo-600">commands = []</code> to store commands.</li>
              <li>Uses a loop <code className="font-mono text-indigo-600">for step in range(3):</code> to add three FORWARD commands.</li>
              <li>Appends one <code className="font-mono text-indigo-600">&apos;RIGHT&apos;</code> command to make the robot turn.</li>
              <li>Uses another loop <code className="font-mono text-indigo-600">for step in range(2):</code> to add two more FORWARD commands.</li>
              <li>Returns the complete list to the robot controller.</li>
            </ol>

            {/* Iteration Breakdown Table */}
            <div className="space-y-3 pt-3">
              <h3 className="text-xl font-bold text-slate-900">Understanding the Iteration Steps</h3>
              <p className="text-[15px] text-slate-600">
                Notice that Python starts counting from 0, not 1. In Python, <code className="font-mono text-indigo-600">range(3)</code> generates numbers <code className="font-mono">0, 1, 2</code>:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200 text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="p-3 border border-slate-200 font-semibold">Loop Iteration</th>
                      <th className="p-3 border border-slate-200 font-semibold font-mono">step value</th>
                      <th className="p-3 border border-slate-200 font-semibold">Command Added</th>
                      <th className="p-3 border border-slate-200 font-semibold">Console Message (<code className="font-mono">step + 1</code>)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="p-3 border border-slate-200">First</td>
                      <td className="p-3 border border-slate-200 font-mono font-bold text-indigo-600">0</td>
                      <td className="p-3 border border-slate-200 font-mono text-emerald-700">&apos;FORWARD&apos;</td>
                      <td className="p-3 border border-slate-200 font-mono text-slate-600">Added forward step 1</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="p-3 border border-slate-200">Second</td>
                      <td className="p-3 border border-slate-200 font-mono font-bold text-indigo-600">1</td>
                      <td className="p-3 border border-slate-200 font-mono text-emerald-700">&apos;FORWARD&apos;</td>
                      <td className="p-3 border border-slate-200 font-mono text-slate-600">Added forward step 2</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200">Third</td>
                      <td className="p-3 border border-slate-200 font-mono font-bold text-indigo-600">2</td>
                      <td className="p-3 border border-slate-200 font-mono text-emerald-700">&apos;FORWARD&apos;</td>
                      <td className="p-3 border border-slate-200 font-mono text-slate-600">Added forward step 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Range Reference Table */}
            <div className="space-y-3 pt-3">
              <h3 className="text-xl font-bold text-slate-900">How range(n) Controls Repetition</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-sm">
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <div className="font-mono text-indigo-700 font-bold">range(1)</div>
                  <div className="text-slate-600 text-xs mt-1">1 repetition</div>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <div className="font-mono text-indigo-700 font-bold">range(2)</div>
                  <div className="text-slate-600 text-xs mt-1">2 repetitions</div>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <div className="font-mono text-indigo-700 font-bold">range(3)</div>
                  <div className="text-slate-600 text-xs mt-1">3 repetitions</div>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <div className="font-mono text-indigo-700 font-bold">range(5)</div>
                  <div className="text-slate-600 text-xs mt-1">5 repetitions</div>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 col-span-2 sm:col-span-1">
                  <div className="font-mono text-indigo-700 font-bold">range(10)</div>
                  <div className="text-slate-600 text-xs mt-1">10 repetitions</div>
                </div>
              </div>
            </div>

            {/* Practice Challenge */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 mt-4">
              <div className="font-bold text-amber-900 text-[15px]">Practice Challenge:</div>
              <p className="text-[15px] text-amber-800">
                Write a function using three separate loops that makes the robot:
              </p>
              <p className="text-xs text-amber-900 font-mono pl-3">
                1. Move forward 4 cells.<br />
                2. Turn left.<br />
                3. Move forward 3 cells.<br />
                4. Turn right.<br />
                5. Move forward 2 cells.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BEGINNER 103 - BITWISE WALL DETECTION                              */}
      {/* ========================================================================= */}
      {activeTab === 'lesson-3' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Beginner 103
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Reading Walls with Bitwise (&amp;)
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Goal:</strong> Inspect the cell at <code className="text-indigo-600 font-mono">(x, y)</code> and test whether a wall exists in any direction using the bitwise AND (<code className="text-indigo-600 font-mono">&amp;</code>) operator.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">lesson_3_bitwise.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(BEGINNER_LESSONS[2].code, 'lesson-3')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'lesson-3' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(BEGINNER_LESSONS[2].code, 'Lesson 3: Bitwise Walls')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto">
{BEGINNER_LESSONS[2].code}
              </pre>
            </div>

            {/* Section 1: Direction Values */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-slate-900">1. Understanding How Walls Are Encoded</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                Instead of storing four separate true/false variables for each cell, the maze combines all 4 walls into a single integer using powers of two (bits):
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                  <div className="text-xs uppercase font-mono text-slate-500">North (Up)</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">1</div>
                  <div className="text-xs font-mono text-indigo-600 mt-0.5">Binary: 0001</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                  <div className="text-xs uppercase font-mono text-slate-500">East (Right)</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">2</div>
                  <div className="text-xs font-mono text-indigo-600 mt-0.5">Binary: 0010</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                  <div className="text-xs uppercase font-mono text-slate-500">South (Down)</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">4</div>
                  <div className="text-xs font-mono text-indigo-600 mt-0.5">Binary: 0100</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                  <div className="text-xs uppercase font-mono text-slate-500">West (Left)</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">8</div>
                  <div className="text-xs font-mono text-indigo-600 mt-0.5">Binary: 1000</div>
                </div>
              </div>

              <p className="text-[15px] text-slate-600">
                For example, suppose a cell has a North wall (1) and an East wall (2). The stored integer is <code className="font-mono text-slate-900 font-bold">1 + 2 = 3</code>.
              </p>
            </div>

            {/* Section 2: What does the & operator mean? */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">2. How the Bitwise AND (&amp;) Operator Works</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                In Python, <code className="font-mono text-indigo-600">&amp;</code> compares two numbers bit-by-bit. It yields a <code className="font-mono">1</code> only where both numbers have a <code className="font-mono">1</code>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1.5">
                  <div className="font-bold text-slate-900 font-sans">Testing East Wall when Value is 3 (Blocked):</div>
                  <div className="text-slate-600">cell_walls = 3  # Binary: 0011</div>
                  <div className="text-slate-600">east_mask  = 2  # Binary: 0010</div>
                  <div className="text-slate-400">-------------------------------</div>
                  <div className="text-rose-700 font-bold">3 &amp; 2 == 2 (Non-zero = BLOCKED)</div>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1.5">
                  <div className="font-bold text-slate-900 font-sans">Testing East Wall when Value is 9 (Open):</div>
                  <div className="text-slate-600">cell_walls = 9  # Binary: 1001</div>
                  <div className="text-slate-600">east_mask  = 2  # Binary: 0010</div>
                  <div className="text-slate-400">-------------------------------</div>
                  <div className="text-emerald-700 font-bold">9 &amp; 2 == 0 (Zero = OPEN)</div>
                </div>
              </div>

              <p className="text-[15px] text-slate-600">
                Therefore, <code className="font-mono text-slate-900">if not (current_walls &amp; 2):</code> and <code className="font-mono text-slate-900">if (current_walls &amp; 2) == 0:</code> are identical ways to test if East is open.
              </p>
            </div>

            {/* Interactive Widget: Virtual Wall Tester */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Interactive Virtual Wall Tester</h3>
                  <p className="text-[15px] text-slate-600">
                    Change the wall integer from 0 to 15 below to see the wall configuration and live bitwise outputs:
                  </p>
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  Value: {wallTesterValue}
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {[
                  { label: '0 (All Open)', val: 0 },
                  { label: '2 (East Only)', val: 2 },
                  { label: '3 (North + East)', val: 3 },
                  { label: '5 (North + South)', val: 5 },
                  { label: '9 (North + West)', val: 9 },
                  { label: '14 (E + S + W)', val: 14 },
                  { label: '15 (Boxed In)', val: 15 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => setWallTesterValue(preset.val)}
                    className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      wallTesterValue === preset.val
                        ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Slider Control */}
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-sm font-medium text-slate-700">Select Integer (0 - 15):</span>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={wallTesterValue}
                  onChange={(e) => setWallTesterValue(parseInt(e.target.value))}
                  className="flex-1 accent-slate-900 cursor-pointer"
                />
                <span className="font-mono font-bold text-base w-8 text-center">{wallTesterValue}</span>
              </div>

              {/* Visualization and Status Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                {/* Visual Cell Box */}
                <div className="relative w-48 h-48 mx-auto border border-dashed border-slate-300 rounded-xl bg-slate-50 flex items-center justify-center">
                  {/* North Wall */}
                  <div
                    className={`absolute top-0 inset-x-2 h-2.5 rounded-full transition-all ${
                      isNorthBlocked ? 'bg-rose-500 shadow-sm' : 'bg-transparent'
                    }`}
                  />
                  {/* East Wall */}
                  <div
                    className={`absolute right-0 inset-y-2 w-2.5 rounded-full transition-all ${
                      isEastBlocked ? 'bg-rose-500 shadow-sm' : 'bg-transparent'
                    }`}
                  />
                  {/* South Wall */}
                  <div
                    className={`absolute bottom-0 inset-x-2 h-2.5 rounded-full transition-all ${
                      isSouthBlocked ? 'bg-rose-500 shadow-sm' : 'bg-transparent'
                    }`}
                  />
                  {/* West Wall */}
                  <div
                    className={`absolute left-0 inset-y-2 w-2.5 rounded-full transition-all ${
                      isWestBlocked ? 'bg-rose-500 shadow-sm' : 'bg-transparent'
                    }`}
                  />

                  {/* Rover representation inside cell */}
                  <div className="text-center space-y-1">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center mx-auto text-xs font-mono font-bold shadow-xs">
                      ROVER
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 font-semibold">
                      Binary: {binaryString}
                    </div>
                  </div>
                </div>

                {/* Wall Direction Results Table */}
                <div className="space-y-2">
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5">Direction</th>
                          <th className="p-2.5">Bit Value</th>
                          <th className="p-2.5">Bitwise Test</th>
                          <th className="p-2.5">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr>
                          <td className="p-2.5 font-medium">North (Up)</td>
                          <td className="p-2.5 font-mono">1</td>
                          <td className="p-2.5 font-mono">{wallTesterValue} &amp; 1 = {wallTesterValue & 1}</td>
                          <td className="p-2.5 font-semibold">
                            {isNorthBlocked ? (
                              <span className="text-rose-600 font-medium">Blocked</span>
                            ) : (
                              <span className="text-emerald-600 font-medium">Open</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">East (Right)</td>
                          <td className="p-2.5 font-mono">2</td>
                          <td className="p-2.5 font-mono">{wallTesterValue} &amp; 2 = {wallTesterValue & 2}</td>
                          <td className="p-2.5 font-semibold">
                            {isEastBlocked ? (
                              <span className="text-rose-600 font-medium">Blocked</span>
                            ) : (
                              <span className="text-emerald-600 font-medium">Open</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">South (Down)</td>
                          <td className="p-2.5 font-mono">4</td>
                          <td className="p-2.5 font-mono">{wallTesterValue} &amp; 4 = {wallTesterValue & 4}</td>
                          <td className="p-2.5 font-semibold">
                            {isSouthBlocked ? (
                              <span className="text-rose-600 font-medium">Blocked</span>
                            ) : (
                              <span className="text-emerald-600 font-medium">Open</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">West (Left)</td>
                          <td className="p-2.5 font-mono">8</td>
                          <td className="p-2.5 font-mono">{wallTesterValue} &amp; 8 = {wallTesterValue & 8}</td>
                          <td className="p-2.5 font-semibold">
                            {isWestBlocked ? (
                              <span className="text-rose-600 font-medium">Blocked</span>
                            ) : (
                              <span className="text-emerald-600 font-medium">Open</span>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: BEGINNER 104 - REACTIVE WALL-FOLLOWING                             */}
      {/* ========================================================================= */}
      {activeTab === 'lesson-4' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Beginner 104
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                A Simple Wall-Following Loop
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Goal:</strong> Build an autonomous reactive robot using a <code className="text-indigo-600 font-mono">while (x, y) != target:</code> loop that checks surrounding walls and moves toward the goal.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">lesson_4_wall_follower.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(BEGINNER_LESSONS[3].code, 'lesson-4')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'lesson-4' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(BEGINNER_LESSONS[3].code, 'Lesson 4: Wall Follower')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto max-h-[460px]">
{BEGINNER_LESSONS[3].code}
              </pre>
            </div>

            <p className="text-[16px] sm:text-[17px] leading-7 text-slate-700">
              Lesson 4 introduces an important idea: making a robot move through a maze by repeatedly checking its surroundings until it reaches the goal. Instead of knowing the entire route beforehand, the robot reacts to the walls around its current position and chooses its next movement.
            </p>

            {/* Section 1: Wall-Following Decision Rule */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-slate-900">1. The Wall-Following Decision Hierarchy</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                In a right-hand wall-following algorithm, the robot follows this strict sequence at each step:
              </p>

              <ol className="list-decimal pl-6 space-y-2 text-[15px] sm:text-[16px] text-slate-700">
                <li>If the <strong>right side is open</strong>, turn right and move forward.</li>
                <li>Otherwise, if the <strong>front is open</strong>, move straight forward.</li>
                <li>Otherwise, if the <strong>left side is open</strong>, turn left and move forward.</li>
                <li>If <strong>all three directions are blocked</strong>, perform a U-turn to escape the dead end.</li>
              </ol>
            </div>

            {/* Section 2: For Loop vs While Loop */}
            <div className="space-y-3 pt-3">
              <h3 className="text-xl font-bold text-slate-900">2. Difference Between a for Loop and a while Loop</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200 text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="p-3 border border-slate-200 font-semibold w-1/2">for loop</th>
                      <th className="p-3 border border-slate-200 font-semibold w-1/2">while loop</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="p-3 border border-slate-200">Repeats for a specified sequence or number of iterations.</td>
                      <td className="p-3 border border-slate-200">Repeats continuously while a condition remains true.</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="p-3 border border-slate-200">Example: move forward 3 times.</td>
                      <td className="p-3 border border-slate-200">Example: keep navigating until <code className="font-mono text-indigo-600">(x, y) == target</code>.</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200">Usually has a predetermined number of repetitions.</td>
                      <td className="p-3 border border-slate-200">The total number of repetitions is not known beforehand.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Limitations */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-slate-900 text-[15px]">Limitations of Simple Wall-Following:</div>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                While simple wall following works for standard simply-connected mazes, it can become trapped in an infinite loop if the goal is located on an interior disconnected wall island. To solve any arbitrary maze with guaranteed shortest paths, we use search algorithms like <strong>BFS</strong> and <strong>A*</strong>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: BREADTH-FIRST SEARCH (BFS) DEEP DIVE                               */}
      {/* ========================================================================= */}
      {activeTab === 'algo-bfs' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Optimal Graph Search
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Understanding the BFS Maze-Solving Algorithm
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Core Principle:</strong> Breadth-First Search (BFS) explores all states that require fewer motor commands before exploring states that require more commands. This guarantees finding the route with the fewest motor commands.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">bfs_solver.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(ALGORITHM_PRESETS[0].code, 'bfs-code')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'bfs-code' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(ALGORITHM_PRESETS[0].code, 'Breadth-First Search (BFS)')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto max-h-[460px]">
{ALGORITHM_PRESETS[0].code}
              </pre>
            </div>

            {/* Section 1: The Robot's State Space */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-slate-900">1. Why State Includes Both Position AND Direction</h3>
              <p className="text-[16px] leading-7 text-slate-700">
                In robotics, a state cannot simply be <code className="font-mono">(x, y)</code>. It must be <code className="font-mono text-indigo-600">(x, y, heading)</code>:
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-[15px] text-slate-700 space-y-2">
                <p>
                  Imagine the robot is in cell <code className="font-mono">(2, 1)</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>If it faces <strong>East</strong>, moving FORWARD takes it to <code className="font-mono">(3, 1)</code>.</li>
                  <li>If it faces <strong>North</strong>, moving FORWARD takes it to <code className="font-mono">(2, 0)</code>.</li>
                </ul>
                <p className="text-slate-600 text-sm">
                  The position is the same, but the next valid move differs completely. Hence, <code className="font-mono">(2, 1, &apos;N&apos;)</code> and <code className="font-mono">(2, 1, &apos;E&apos;)</code> are treated as separate, distinct states.
                </p>
              </div>
            </div>

            {/* Section 2: Direction Offsets */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-bold text-slate-900">2. Clockwise Directions &amp; Position Offsets</h3>
              <p className="text-[15px] text-slate-600">
                Directions are arranged clockwise: <code className="font-mono text-indigo-700">[&apos;N&apos;, &apos;E&apos;, &apos;S&apos;, &apos;W&apos;]</code>. Turning right is <code className="font-mono">(idx + 1) % 4</code> and turning left is <code className="font-mono">(idx - 1) % 4</code>.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200 text-sm font-mono">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="p-2.5 border border-slate-200">Heading</th>
                      <th className="p-2.5 border border-slate-200">dx</th>
                      <th className="p-2.5 border border-slate-200">dy</th>
                      <th className="p-2.5 border border-slate-200 font-sans">Explanation</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr>
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">&apos;N&apos;</td>
                      <td className="p-2.5 border border-slate-200">0</td>
                      <td className="p-2.5 border border-slate-200 text-indigo-600">-1</td>
                      <td className="p-2.5 border border-slate-200 font-sans">Moves one row up (row 0 is at top)</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">&apos;E&apos;</td>
                      <td className="p-2.5 border border-slate-200 text-indigo-600">+1</td>
                      <td className="p-2.5 border border-slate-200">0</td>
                      <td className="p-2.5 border border-slate-200 font-sans">Moves one column right</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">&apos;S&apos;</td>
                      <td className="p-2.5 border border-slate-200">0</td>
                      <td className="p-2.5 border border-slate-200 text-indigo-600">+1</td>
                      <td className="p-2.5 border border-slate-200 font-sans">Moves one row down</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">&apos;W&apos;</td>
                      <td className="p-2.5 border border-slate-200 text-indigo-600">-1</td>
                      <td className="p-2.5 border border-slate-200">0</td>
                      <td className="p-2.5 border border-slate-200 font-sans">Moves one column left</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Widget: BFS State Stepper */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Interactive BFS Step-by-Step Simulator</h3>
                  <p className="text-[15px] text-slate-600">
                    Step through the queue expansion cycle from start position (0, 0) facing East:
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setBfsStepIndex((i) => Math.max(0, i - 1))}
                    disabled={bfsStepIndex === 0}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-mono px-2 text-slate-700">
                    Step {bfsStepIndex} of {bfsSteps.length - 1}
                  </span>
                  <button
                    onClick={() => setBfsStepIndex((i) => Math.min(bfsSteps.length - 1, i + 1))}
                    disabled={bfsStepIndex === bfsSteps.length - 1}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setBfsStepIndex(0)}
                    title="Reset to Step 0"
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer ml-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>
              </div>

              {/* Stepper Card */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/70 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-900 text-[16px]">{currentBfsStep.title}</span>
                  <span className="text-xs bg-slate-200 text-slate-800 font-mono px-2 py-0.5 rounded">
                    Queue size: {currentBfsStep.queueContents.length}
                  </span>
                </div>

                <p className="text-[15px] text-slate-700 leading-relaxed">
                  {currentBfsStep.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase">State Being Processed</div>
                    <div className="font-mono font-bold text-indigo-700">{currentBfsStep.stateBeingProcessed}</div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase">Queue (FIFO Waiting)</div>
                    <div className="font-mono text-xs text-slate-800 truncate">
                      {currentBfsStep.queueContents.join(' → ')}
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase">Visited States Count</div>
                    <div className="font-mono font-bold text-emerald-700">{currentBfsStep.visitedSet.length} states</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Guarantees of BFS */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Why Does BFS Guarantee the Shortest Path?</h3>
              <ol className="list-decimal pl-6 space-y-1.5 text-[15px] sm:text-[16px] text-slate-700">
                <li><strong>Equal action cost:</strong> Forward move, left turn, and right turn each count as one command.</li>
                <li><strong>First-in, first-out (FIFO):</strong> States reached with fewer commands are always popped and processed before states that require more commands.</li>
                <li><strong>Visited set:</strong> Prevents cycles or redundant exploration of already-reached positions.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: A* (A-STAR) ALGORITHM DEEP DIVE                                    */}
      {/* ========================================================================= */}
      {activeTab === 'algo-astar' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Heuristic Search Algorithm
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Understanding the A* Maze-Solving Algorithm
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Core Equation:</strong>{' '}
                <code className="text-indigo-600 font-mono font-bold text-base">f(n) = g(n) + h(n)</code>. While BFS explores uniformly in all directions, A* uses an admissible distance estimate to the target to prioritize the most promising directions first.
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono font-medium text-slate-800">astar_solver.py</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(ALGORITHM_PRESETS[1].code, 'astar-code')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCodeId === 'astar-code' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleLoadAndRun(ALGORITHM_PRESETS[1].code, 'A* Search Algorithm')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Simulator</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto max-h-[460px]">
{ALGORITHM_PRESETS[1].code}
              </pre>
            </div>

            {/* Formula Breakdown */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-slate-900">1. Anatomy of the f(n) = g(n) + h(n) Score</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="text-indigo-600 font-mono font-bold text-base">g(n)</div>
                  <div className="font-semibold text-slate-900">Actual Cost So Far</div>
                  <p className="text-slate-600 text-xs">
                    The exact number of motor commands executed from the start cell to reach the current state.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="text-indigo-600 font-mono font-bold text-base">h(n)</div>
                  <div className="font-semibold text-slate-900">Manhattan Heuristic</div>
                  <p className="text-slate-600 text-xs">
                    Estimated remaining distance: <code className="font-mono">|x - target_x| + |y - target_y|</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="text-indigo-600 font-mono font-bold text-base">f(n)</div>
                  <div className="font-semibold text-slate-900">Total Priority Score</div>
                  <p className="text-slate-600 text-xs">
                    Sum of actual cost + estimated remaining cost. A* explores lowest <code className="font-mono">f(n)</code> states first using a priority queue.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Widget: A* Score Calculator */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Interactive A* Score Calculator</h3>
                  <p className="text-[15px] text-slate-600">
                    Adjust coordinates and commands to test Manhattan distance and candidate action evaluations:
                  </p>
                </div>
                <div className="font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-sm">
                  f(n) = {astarGCost} + {astarH} = {astarF}
                </div>
              </div>

              {/* Calculator Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                {/* Current Pos */}
                <div className="space-y-2">
                  <div className="text-xs uppercase font-semibold text-slate-600">Current Position (x, y)</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setAstarCurrentPos((p) => ({ ...p, x: Math.max(0, p.x - 1) }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >-</button>
                      <span className="px-3 font-mono font-semibold text-sm">X: {astarCurrentPos.x}</span>
                      <button
                        onClick={() => setAstarCurrentPos((p) => ({ ...p, x: p.x + 1 }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >+</button>
                    </div>

                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setAstarCurrentPos((p) => ({ ...p, y: Math.max(0, p.y - 1) }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >-</button>
                      <span className="px-3 font-mono font-semibold text-sm">Y: {astarCurrentPos.y}</span>
                      <button
                        onClick={() => setAstarCurrentPos((p) => ({ ...p, y: p.y + 1 }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >+</button>
                    </div>
                  </div>
                </div>

                {/* Target Pos */}
                <div className="space-y-2">
                  <div className="text-xs uppercase font-semibold text-slate-600">Target Goal (tx, ty)</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setAstarTargetPos((p) => ({ ...p, x: Math.max(0, p.x - 1) }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >-</button>
                      <span className="px-3 font-mono font-semibold text-sm">X: {astarTargetPos.x}</span>
                      <button
                        onClick={() => setAstarTargetPos((p) => ({ ...p, x: p.x + 1 }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >+</button>
                    </div>

                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setAstarTargetPos((p) => ({ ...p, y: Math.max(0, p.y - 1) }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >-</button>
                      <span className="px-3 font-mono font-semibold text-sm">Y: {astarTargetPos.y}</span>
                      <button
                        onClick={() => setAstarTargetPos((p) => ({ ...p, y: p.y + 1 }))}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                      >+</button>
                    </div>
                  </div>
                </div>

                {/* g Cost */}
                <div className="space-y-2">
                  <div className="text-xs uppercase font-semibold text-slate-600">Commands Taken: g(n)</div>
                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden w-fit">
                    <button
                      onClick={() => setAstarGCost((g) => Math.max(0, g - 1))}
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                    >-</button>
                    <span className="px-4 font-mono font-bold text-sm text-indigo-700">{astarGCost} commands</span>
                    <button
                      onClick={() => setAstarGCost((g) => g + 1)}
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Action Comparison Table */}
              <div className="space-y-2 pt-2">
                <div className="text-sm font-bold text-slate-900">Comparing Three Candidate Next Actions:</div>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Candidate Action</th>
                        <th className="p-3">New Position</th>
                        <th className="p-3 font-mono">g(n)</th>
                        <th className="p-3 font-mono">h(n)</th>
                        <th className="p-3 font-mono font-bold">f(n) Score</th>
                        <th className="p-3">Priority Decision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="bg-emerald-50/50">
                        <td className="p-3 font-semibold text-emerald-900">Move FORWARD (East)</td>
                        <td className="p-3 font-mono">({astarCurrentPos.x + 1}, {astarCurrentPos.y})</td>
                        <td className="p-3 font-mono">{astarGCost + 1}</td>
                        <td className="p-3 font-mono">
                          {Math.abs(astarCurrentPos.x + 1 - astarTargetPos.x) + Math.abs(astarCurrentPos.y - astarTargetPos.y)}
                        </td>
                        <td className="p-3 font-mono font-bold text-emerald-700">
                          {astarGCost + 1 + Math.abs(astarCurrentPos.x + 1 - astarTargetPos.x) + Math.abs(astarCurrentPos.y - astarTargetPos.y)}
                        </td>
                        <td className="p-3 font-medium text-emerald-700">Preferred next state (lowest f)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pivot LEFT (North)</td>
                        <td className="p-3 font-mono">({astarCurrentPos.x}, {astarCurrentPos.y})</td>
                        <td className="p-3 font-mono">{astarGCost + 1}</td>
                        <td className="p-3 font-mono">{astarH}</td>
                        <td className="p-3 font-mono font-bold text-slate-900">{astarGCost + 1 + astarH}</td>
                        <td className="p-3 text-slate-500">Queued in priority heap</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pivot RIGHT (South)</td>
                        <td className="p-3 font-mono">({astarCurrentPos.x}, {astarCurrentPos.y})</td>
                        <td className="p-3 font-mono">{astarGCost + 1}</td>
                        <td className="p-3 font-mono">{astarH}</td>
                        <td className="p-3 font-mono font-bold text-slate-900">{astarGCost + 1 + astarH}</td>
                        <td className="p-3 text-slate-500">Queued in priority heap</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Comparison Table: BFS vs A* */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">A* versus BFS Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200 text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="p-3 border border-slate-200 font-semibold">Feature</th>
                      <th className="p-3 border border-slate-200 font-semibold">BFS (Breadth-First Search)</th>
                      <th className="p-3 border border-slate-200 font-semibold">A* (A-Star Search)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="p-3 border border-slate-200 font-medium text-slate-900">Search Order</td>
                      <td className="p-3 border border-slate-200">Oldest discovered state first</td>
                      <td className="p-3 border border-slate-200 font-semibold text-indigo-700">Lowest estimated total cost f(n) first</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="p-3 border border-slate-200 font-medium text-slate-900">Uses Heuristic?</td>
                      <td className="p-3 border border-slate-200 text-rose-600 font-medium">No</td>
                      <td className="p-3 border border-slate-200 text-emerald-600 font-medium">Yes (Manhattan distance)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 border border-slate-200 font-medium text-slate-900">Primary Data Structure</td>
                      <td className="p-3 border border-slate-200 font-mono">deque (FIFO queue)</td>
                      <td className="p-3 border border-slate-200 font-mono">heapq (Priority queue)</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="p-3 border border-slate-200 font-medium text-slate-900">Route Cost Tracking</td>
                      <td className="p-3 border border-slate-200">Implicitly by layer</td>
                      <td className="p-3 border border-slate-200">Explicitly using g(n) in visited_costs</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-medium text-slate-900">Exploration Pattern</td>
                      <td className="p-3 border border-slate-200">Uniform radial ripples</td>
                      <td className="p-3 border border-slate-200 font-semibold text-slate-900">Focused directly toward the goal beacon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: MOTOR COMMANDS & SCORING RULES                                     */}
      {/* ========================================================================= */}
      {activeTab === 'rules' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Robotics Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Motor Commands, Physics &amp; Scoring Rules
              </h2>
              <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] text-slate-700">
                <strong className="text-slate-900">Rules Overview:</strong> Your Python solver must guide the robot from start cell <code className="font-mono text-indigo-600">(0, 0)</code> to the goal beacon using 4 legal motor commands.
              </div>
            </div>

            {/* 4 Motor Commands Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-mono">
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
                <div className="font-bold text-base text-emerald-700">&apos;FORWARD&apos;</div>
                <p className="font-sans text-slate-600 text-xs leading-relaxed">
                  Drives 1 grid cell forward along current heading.
                </p>
                <div className="font-sans text-xs text-rose-600 font-medium">
                  💥 Collides if a virtual wall is in front!
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
                <div className="font-bold text-base text-indigo-700">&apos;LEFT&apos;</div>
                <p className="font-sans text-slate-600 text-xs leading-relaxed">
                  Pivots 90° counter-clockwise in place inside the cell without changing position.
                </p>
                <div className="font-sans text-xs text-slate-500">
                  East → North → West → South
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
                <div className="font-bold text-base text-indigo-700">&apos;RIGHT&apos;</div>
                <p className="font-sans text-slate-600 text-xs leading-relaxed">
                  Pivots 90° clockwise in place inside the cell without changing position.
                </p>
                <div className="font-sans text-xs text-slate-500">
                  East → South → West → North
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
                <div className="font-bold text-base text-amber-700">&apos;U_TURN&apos;</div>
                <p className="font-sans text-slate-600 text-xs leading-relaxed">
                  Pivots 180° in place inside the cell. Vital for escaping dead-end passages.
                </p>
                <div className="font-sans text-xs text-slate-500">
                  East ↔ West, North ↔ South
                </div>
              </div>
            </div>

            {/* Collision Rules & Penalties */}
            <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/70 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Collision Penalty &amp; Scoring Metric</span>
              </h3>
              <p className="text-[15px] leading-7 text-slate-700">
                If the robot issues a <code className="font-mono text-emerald-700 font-bold">&apos;FORWARD&apos;</code> command while facing a wall, the robot immediately stops, the simulator flashes red, and a <strong className="text-rose-600">+5.0 second penalty</strong> is added to your competition time.
              </p>
              <p className="text-[15px] text-slate-600">
                Always inspect the wall bit using <code className="font-mono text-slate-900">grid[y][x] &amp; wall_mask</code> before executing forward moves!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
