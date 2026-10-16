'use client';

import React, { useState, useEffect } from 'react';
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
import { ALGORITHM_PRESETS } from '../utils/algorithmPresets';
import { BEGINNER_LESSONS } from '../utils/beginnerLessons';
import MarkdownRenderer from './MarkdownRenderer';
import {
  getDocumentationData,
  DEFAULT_DOCUMENTATION_SECTIONS,
  DocumentationSection,
} from '../utils/documentationStore';

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
  const [docSections, setDocSections] = useState<Record<string, DocumentationSection>>(
    () => getDocumentationData()
  );

  // Sync with documentation store (including edits from /documentation)
  useEffect(() => {
    // Initial fetch
    setDocSections(getDocumentationData());

    const handleDocsUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Record<string, DocumentationSection>>;
      if (customEvent.detail) {
        setDocSections(customEvent.detail);
      } else {
        setDocSections(getDocumentationData());
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'maze_runner_documentation_data_v1') {
        setDocSections(getDocumentationData());
      }
    };

    window.addEventListener('maze_runner_docs_updated', handleDocsUpdate);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('maze_runner_docs_updated', handleDocsUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Lesson 3: Interactive Virtual Wall Tester State
  const [wallTesterValue, setWallTesterValue] = useState<number>(3); // 3 = North (1) + East (2)

  // Lesson 4 / BFS: Interactive BFS Stepper State
  const [bfsStepIndex, setBfsStepIndex] = useState<number>(0);

  // Track 6: Interactive A* Score Calculator State
  const [astarCurrentPos, setAstarCurrentPos] = useState<{ x: number; y: number }>({ x: 2, y: 1 });
  const [astarTargetPos, setAstarTargetPos] = useState<{ x: number; y: number }>({ x: 4, y: 3 });
  const [astarGCost, setAstarGCost] = useState<number>(2);

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
      actionTaken: 'Queued left turn state (0, 0, \'N\').',
    },
    {
      step: 3,
      title: 'Step 3 — Probing Right Turn',
      description: 'Turns 90° clockwise from East to South. State becomes (0, 0, \'S\'). Command list becomes [\'RIGHT\'].',
      stateBeingProcessed: "(0, 0, 'E')",
      queueContents: ["(1, 0, 'E', ['FORWARD'])", "(0, 0, 'N', ['LEFT'])", "(0, 0, 'S', ['RIGHT'])"],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')", "(0, 0, 'N')", "(0, 0, 'S')"],
      actionTaken: 'Queued right turn state (0, 0, \'S\').',
    },
    {
      step: 4,
      title: 'Step 4 — Popping Next Frontier State',
      description: 'De-queues state (1, 0, \'E\'). Now tests forward, left, and right moves from (1, 0).',
      stateBeingProcessed: "(1, 0, 'E')",
      queueContents: ["(0, 0, 'N', ['LEFT'])", "(0, 0, 'S', ['RIGHT'])", "(2, 0, 'E', ['FORWARD', 'FORWARD'])"],
      visitedSet: ["(0, 0, 'E')", "(1, 0, 'E')", "(0, 0, 'N')", "(0, 0, 'S')", "(2, 0, 'E')"],
      actionTaken: 'Advancing wavefront layer by layer with minimum commands.',
    },
  ];

  const currentBfsStep = bfsSteps[bfsStepIndex];

  // Current active markdown content
  const currentSection = docSections[activeTab] || DEFAULT_DOCUMENTATION_SECTIONS[activeTab];
  const currentMarkdown = currentSection?.markdown || '';

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'lesson-1', label: '1. First Robot Command' },
    { key: 'lesson-2', label: '2. Loops & .append()' },
    { key: 'lesson-3', label: '3. Bitwise Wall Detection' },
    { key: 'lesson-4', label: '4. Wall-Following Loop' },
    { key: 'algo-bfs', label: '5. BFS Algorithm' },
    { key: 'algo-astar', label: '6. A* Search & Heuristics' },
    { key: 'rules', label: '7. Rules & Scoring' },
  ];

  return (
    <div className="max-w-[1240px] mx-auto text-slate-800 space-y-6 pb-16">
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer shadow-xs"
          >
            <span>Open Simulator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sticky Tab Navigation Bar (Pinned below top navbar when scrolling) */}
      <div className="sticky top-[53px] z-40 bg-slate-50/95 backdrop-blur-md pt-2 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
                activeTab === tab.key
                  ? 'bg-white text-slate-900 border-slate-300 shadow-xs font-semibold'
                  : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Documentation Card (Rendered via Markdown from store) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        {currentSection?.category && (
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-[-1rem]">
            {currentSection.category}
          </div>
        )}
        <MarkdownRenderer content={currentMarkdown} />
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE WIDGETS & RUN BUTTONS MATCHING ACTIVE TAB                     */}
      {/* ========================================================================= */}

      {/* TAB 1: RUN IN SIMULATOR BUTTON */}
      {activeTab === 'lesson-1' && (
        <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900">Ready to test Lesson 1?</h3>
            <p className="text-sm text-slate-600">
              Load the 5-step motor sequence directly into the Python editor and watch the rover drive.
            </p>
          </div>
          <button
            onClick={() => handleLoadAndRun(BEGINNER_LESSONS[0].code, 'Lesson 1: First Move')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Run Lesson 1 in Simulator</span>
          </button>
        </div>
      )}

      {/* TAB 2: RUN IN SIMULATOR BUTTON */}
      {activeTab === 'lesson-2' && (
        <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900">Ready to test Lesson 2?</h3>
            <p className="text-sm text-slate-600">
              Load the loop-based motor sequence into the editor and observe the loop commands.
            </p>
          </div>
          <button
            onClick={() => handleLoadAndRun(BEGINNER_LESSONS[1].code, 'Lesson 2: Loops & Append')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Run Lesson 2 in Simulator</span>
          </button>
        </div>
      )}

      {/* TAB 3: INTERACTIVE BITWISE WALL TESTER + RUN BUTTON */}
      {activeTab === 'lesson-3' && (
        <div className="space-y-6">
          {/* Interactive Widget: Virtual Wall Tester */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
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

          {/* Action Button */}
          <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-slate-900">Ready to test Lesson 3?</h3>
              <p className="text-sm text-slate-600">
                Load the bitwise wall inspection solver into the code editor.
              </p>
            </div>
            <button
              onClick={() => handleLoadAndRun(BEGINNER_LESSONS[2].code, 'Lesson 3: Bitwise Walls')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Run Lesson 3 in Simulator</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: RUN IN SIMULATOR BUTTON */}
      {activeTab === 'lesson-4' && (
        <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900">Ready to test Left Wall Follower?</h3>
            <p className="text-sm text-slate-600">
              Load the reactive left-hand wall solver and run it against the maze.
            </p>
          </div>
          <button
            onClick={() => handleLoadAndRun(ALGORITHM_PRESETS[0].code, 'Left Wall Follower')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Run Wall Follower in Simulator</span>
          </button>
        </div>
      )}

      {/* TAB 5 (BFS): INTERACTIVE STEPPER + LOAD BUTTON */}
      {activeTab === 'algo-bfs' && (
        <div className="space-y-6">
          {/* Interactive Widget: BFS State Stepper */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
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
                  <div className="text-xs font-semibold text-slate-500 uppercase">Action Taken</div>
                  <div className="text-xs text-slate-700">{currentBfsStep.actionTaken}</div>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <div className="text-xs font-semibold text-slate-500 uppercase">Visited Set Count</div>
                  <div className="font-mono font-bold text-emerald-700">{currentBfsStep.visitedSet.length} states explored</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase">Current Queue Frontier:</div>
                <div className="p-3 bg-slate-900 text-cyan-300 font-mono text-xs rounded-lg overflow-x-auto whitespace-pre">
                  {JSON.stringify(currentBfsStep.queueContents, null, 2)}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-slate-900">Load BFS into Simulator</h3>
              <p className="text-sm text-slate-600">
                Execute optimal Breadth-First Search on the active maze.
              </p>
            </div>
            <button
              onClick={() => handleLoadAndRun(ALGORITHM_PRESETS[1].code, 'Breadth-First Search (BFS)')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Load BFS into Simulator</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 6 (ASTAR): INTERACTIVE CALCULATOR + LOAD BUTTON */}
      {activeTab === 'algo-astar' && (
        <div className="space-y-6">
          {/* Interactive Widget: A* Score Calculator */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Interactive A* Score &amp; Heuristic Calculator</h3>
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
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >-</button>
                    <span className="px-3 font-mono font-semibold text-sm">X: {astarCurrentPos.x}</span>
                    <button
                      onClick={() => setAstarCurrentPos((p) => ({ ...p, x: p.x + 1 }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >+</button>
                  </div>

                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setAstarCurrentPos((p) => ({ ...p, y: Math.max(0, p.y - 1) }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >-</button>
                    <span className="px-3 font-mono font-semibold text-sm">Y: {astarCurrentPos.y}</span>
                    <button
                      onClick={() => setAstarCurrentPos((p) => ({ ...p, y: p.y + 1 }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
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
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >-</button>
                    <span className="px-3 font-mono font-semibold text-sm">X: {astarTargetPos.x}</span>
                    <button
                      onClick={() => setAstarTargetPos((p) => ({ ...p, x: p.x + 1 }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >+</button>
                  </div>

                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setAstarTargetPos((p) => ({ ...p, y: Math.max(0, p.y - 1) }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                    >-</button>
                    <span className="px-3 font-mono font-semibold text-sm">Y: {astarTargetPos.y}</span>
                    <button
                      onClick={() => setAstarTargetPos((p) => ({ ...p, y: p.y + 1 }))}
                      className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
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
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
                  >-</button>
                  <span className="px-4 font-mono font-bold text-sm text-indigo-700">{astarGCost} commands</span>
                  <button
                    onClick={() => setAstarGCost((g) => g + 1)}
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold cursor-pointer"
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

          {/* Action Button */}
          <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-slate-900">Load A* Search into Simulator</h3>
              <p className="text-sm text-slate-600">
                Execute priority-guided A* search using Manhattan distance heuristic.
              </p>
            </div>
            <button
              onClick={() => handleLoadAndRun(ALGORITHM_PRESETS[2].code, 'A* Search (Manhattan)')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Load A* Search into Simulator</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 7: RULES - SIMULATOR ACTION */}
      {activeTab === 'rules' && (
        <div className="p-5 border border-slate-200 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900">Ready to Test Your Autonomous Algorithm?</h3>
            <p className="text-sm text-slate-600">
              Open the simulator workspace and begin programming your robot controller in Python.
            </p>
          </div>
          <button
            onClick={onGoToSimulator}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Open Simulator</span>
          </button>
        </div>
      )}
    </div>
  );
}
