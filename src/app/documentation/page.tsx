'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Save,
  RotateCcw,
  Eye,
  Edit3,
  Check,
  ChevronLeft,
  FileText,
  Sparkles,
  Columns2,
  ExternalLink,
  Download,
} from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import {
  getDocumentationData,
  saveDocumentationData,
  resetDocumentationData,
  DocumentationSection,
} from '@/utils/documentationStore';

export default function DocumentationEditorPage() {
  const [sections, setSections] = useState<Record<string, DocumentationSection>>({});
  const [activeSectionId, setActiveSectionId] = useState<string>('lesson-1');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Load from store on mount
  useEffect(() => {
    const data = getDocumentationData();
    setSections(data);
  }, []);

  const currentSection = sections[activeSectionId] || {
    id: activeSectionId,
    title: 'Loading...',
    category: '',
    markdown: '',
  };

  const handleMarkdownChange = (newMarkdown: string) => {
    setSections((prev) => ({
      ...prev,
      [activeSectionId]: {
        ...prev[activeSectionId],
        markdown: newMarkdown,
      },
    }));
    setIsDirty(true);
    setIsSaved(false);
  };

  const handleSave = useCallback(() => {
    saveDocumentationData(sections);
    setIsSaved(true);
    setIsDirty(false);
    setSaveToast('Saved! The frontend documentation tab is now updated.');
    setTimeout(() => {
      setSaveToast(null);
    }, 3500);
  }, [sections]);

  const handleResetSection = () => {
    if (confirm('Reset this section back to original curriculum defaults?')) {
      const freshDefaults = resetDocumentationData();
      setSections(freshDefaults);
      setIsDirty(false);
      setSaveToast('Reset to original curriculum defaults.');
      setTimeout(() => setSaveToast(null), 3000);
    }
  };

  const handleExportStoreFile = () => {
    const jsonStr = JSON.stringify(sections, null, 2);
    const tsCode = `export interface DocumentationSection {
  id: string;
  title: string;
  category: string;
  markdown: string;
}

export const DEFAULT_DOCUMENTATION_SECTIONS: Record<string, DocumentationSection> = ${jsonStr};

const STORAGE_KEY = 'maze_runner_documentation_data_v1';
const SYNC_EVENT = 'maze_runner_docs_updated';

export function getDocumentationData(): Record<string, DocumentationSection> {
  if (typeof window === 'undefined') {
    return DEFAULT_DOCUMENTATION_SECTIONS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DOCUMENTATION_SECTIONS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_DOCUMENTATION_SECTIONS, ...parsed };
  } catch (err) {
    console.error('Failed to read documentation from localStorage', err);
    return DEFAULT_DOCUMENTATION_SECTIONS;
  }
}

export function saveDocumentationData(data: Record<string, DocumentationSection>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: data }));
  } catch (err) {
    console.error('Failed to save documentation to localStorage', err);
  }
}

export function resetDocumentationData(): Record<string, DocumentationSection> {
  if (typeof window === 'undefined') return DEFAULT_DOCUMENTATION_SECTIONS;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: DEFAULT_DOCUMENTATION_SECTIONS }));
  } catch (err) {
    console.error('Failed to reset documentation data', err);
  }
  return DEFAULT_DOCUMENTATION_SECTIONS;
}
`;
    const blob = new Blob([tsCode], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documentationStore.ts';
    a.click();
    URL.revokeObjectURL(url);
    setSaveToast('Exported documentationStore.ts file!');
    setTimeout(() => setSaveToast(null), 3500);
  };

  // Keyboard shortcut Cmd+S / Ctrl+S to save
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSave]);

  const sectionKeys = [
    { id: 'lesson-1', label: '1. First Command' },
    { id: 'lesson-2', label: '2. Loops & .append()' },
    { id: 'lesson-3', label: '3. Bitwise Walls' },
    { id: 'lesson-4', label: '4. Wall Follower' },
    { id: 'algo-bfs', label: '5. BFS Algorithm' },
    { id: 'algo-astar', label: '6. A* Search' },
    { id: 'rules', label: '7. Rules & Scoring' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Navigation & Action Bar */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Back to Simulator</span>
          </Link>
          <div className="h-4 w-px bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm tracking-tight flex items-center gap-1.5">
              <Edit3 className="w-4 h-4 text-indigo-600" />
              <span>Documentation Markdown Editor</span>
            </span>
            <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-mono font-semibold">
              Admin / Edit Mode
            </span>
          </div>
        </div>

        {/* Save & Reset Actions */}
        <div className="flex items-center gap-2">
          {saveToast && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg animate-fadeIn">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>{saveToast}</span>
            </div>
          )}

          <button
            onClick={handleResetSection}
            className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
            title="Reset this section to default"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={handleExportStoreFile}
            className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
            title="Export documentationStore.ts file to commit to git"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Export Code</span>
          </button>

          <button
            onClick={handleSave}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              isDirty
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20 active:scale-98'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Save className="w-3.5 h-3.5" />}
            <span>Save Documentation</span>
            <span className="hidden md:inline text-[10px] text-slate-400 font-mono ml-1">(Cmd+S)</span>
          </button>
        </div>
      </header>

      {/* Section Selector Tab Bar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap mr-1">
          Edit Section:
        </span>
        {sectionKeys.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              setActiveSectionId(sec.id);
              setIsSaved(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap border ${
              activeSectionId === sec.id
                ? 'bg-indigo-50 text-indigo-900 border-indigo-300 font-semibold shadow-2xs'
                : 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* Split Screen Workspace: Editor on Left, Live Preview on Right */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 min-h-[calc(100vh-105px)]">
        {/* LEFT COLUMN: Markdown Editor */}
        <div className="flex flex-col bg-white">
          <div className="px-4 sm:px-6 py-2.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-semibold text-slate-800">{currentSection.title}</span>
              <span className="text-[11px] text-slate-400 font-mono">(Markdown)</span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              {currentSection.markdown.length} chars | {currentSection.markdown.split('\n').length} lines
            </div>
          </div>

          <div className="flex-1 p-4 sm:p-6 flex flex-col">
            <textarea
              value={currentSection.markdown}
              onChange={(e) => handleMarkdownChange(e.target.value)}
              placeholder="Write Markdown here..."
              className="w-full flex-1 min-h-[500px] lg:min-h-[650px] p-4 bg-slate-50/60 border border-slate-200 rounded-xl font-mono text-[14px] sm:text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
              spellCheck={false}
            />
            <p className="text-[12px] text-slate-500 mt-2">
              Supports standard Markdown: headers (<code className="font-mono">#</code>), tables (<code className="font-mono">| col |</code>), lists (<code className="font-mono">-</code>), blockquotes (<code className="font-mono">&gt;</code>), and code blocks (<code className="font-mono">```python</code>).
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-Time Markdown Preview */}
        <div className="flex flex-col bg-slate-50/50 overflow-y-auto">
          <div className="px-4 sm:px-6 py-2.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 sticky top-0 z-20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-slate-800">Live Markdown Preview</span>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                Live Rendering
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Matches Frontend Docs Theme
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-8 max-w-[850px] mx-auto w-full">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <MarkdownRenderer content={currentSection.markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
