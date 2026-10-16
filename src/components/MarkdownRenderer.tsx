'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Parse markdown into blocks
  const renderBlocks = () => {
    if (!content) return null;

    const lines = content.split('\n');
    const blocks: React.ReactNode[] = [];
    let i = 0;
    let blockKey = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 1. Code Block (```lang ... ```)
      if (line.trim().startsWith('```')) {
        const lang = line.trim().slice(3).trim() || 'python';
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const codeText = codeLines.join('\n');
        const currentCodeIdx = blockKey;

        blocks.push(
          <div
            key={`code-${blockKey++}`}
            className="my-5 border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-xs"
          >
            <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-mono font-semibold text-slate-700 uppercase tracking-wider text-[11px]">
                {lang}
              </span>
              <button
                type="button"
                onClick={() => handleCopyCode(codeText, currentCodeIdx)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer text-xs"
              >
                {copiedIndex === currentCodeIdx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 sm:p-5 font-mono text-[14px] sm:text-[15px] text-slate-800 leading-relaxed overflow-x-auto whitespace-pre">
              {codeText}
            </pre>
          </div>
        );
        continue;
      }

      // 2. Table (| Col 1 | Col 2 |)
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }

        if (tableLines.length >= 2) {
          const parseRow = (rowStr: string) =>
            rowStr
              .split('|')
              .slice(1, -1)
              .map((cell) => cell.trim());

          const headerCells = parseRow(tableLines[0]);
          // check if row 1 is separator (e.g. |---|---|)
          const isSeparator = /^\|?(\s*:?-+:?\s*\|?)+$/.test(tableLines[1]);
          const bodyRows = tableLines.slice(isSeparator ? 2 : 1).map(parseRow);

          blocks.push(
            <div key={`table-${blockKey++}`} className="my-5 overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                    {headerCells.map((h, colIdx) => (
                      <th key={colIdx} className="p-3 font-semibold">
                        {renderInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {bodyRows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-slate-50/60' : ''}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // 3. Headings (# H1, ## H2, ### H3, #### H4)
      if (line.startsWith('# ')) {
        blocks.push(
          <h1 key={`h1-${blockKey++}`} className="text-2xl sm:text-3xl font-bold text-slate-900 mt-7 mb-3 tracking-tight">
            {renderInline(line.slice(2))}
          </h1>
        );
        i++;
        continue;
      }
      if (line.startsWith('## ')) {
        blocks.push(
          <h2 key={`h2-${blockKey++}`} className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3 tracking-tight">
            {renderInline(line.slice(3))}
          </h2>
        );
        i++;
        continue;
      }
      if (line.startsWith('### ')) {
        blocks.push(
          <h3 key={`h3-${blockKey++}`} className="text-lg sm:text-xl font-bold text-slate-900 mt-5 mb-2">
            {renderInline(line.slice(4))}
          </h3>
        );
        i++;
        continue;
      }
      if (line.startsWith('#### ')) {
        blocks.push(
          <h4 key={`h4-${blockKey++}`} className="text-base sm:text-lg font-semibold text-slate-900 mt-4 mb-2">
            {renderInline(line.slice(5))}
          </h4>
        );
        i++;
        continue;
      }

      // 4. Blockquote / Callout (> ...)
      if (line.startsWith('>')) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('>')) {
          quoteLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        blocks.push(
          <blockquote
            key={`quote-${blockKey++}`}
            className="my-4 p-4 border-l-4 border-indigo-500 bg-indigo-50/40 rounded-r-xl text-slate-800 text-[15px] sm:text-[16px] leading-relaxed"
          >
            {quoteLines.map((q, qIdx) => (
              <p key={qIdx} className={qIdx > 0 ? 'mt-2' : ''}>
                {renderInline(q)}
              </p>
            ))}
          </blockquote>
        );
        continue;
      }

      // 5. Horizontal rule (--- or ***)
      if (/^(\*{3,}|-{3,}|_{3,})$/.test(line.trim())) {
        blocks.push(<hr key={`hr-${blockKey++}`} className="my-6 border-slate-200" />);
        i++;
        continue;
      }

      // 6. Ordered List (1. ...)
      if (/^\d+\.\s/.test(line)) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\.\s/, ''));
          i++;
        }
        blocks.push(
          <ol key={`ol-${blockKey++}`} className="my-3 list-decimal pl-6 space-y-1.5 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
            {listItems.map((item, itemIdx) => (
              <li key={itemIdx}>{renderInline(item)}</li>
            ))}
          </ol>
        );
        continue;
      }

      // 7. Unordered List (- ... or * ...)
      if (/^[-*]\s/.test(line)) {
        const listItems: string[] = [];
        while (i < lines.length && /^[-*]\s/.test(lines[i])) {
          listItems.push(lines[i].replace(/^[-*]\s/, ''));
          i++;
        }
        blocks.push(
          <ul key={`ul-${blockKey++}`} className="my-3 list-disc pl-6 space-y-1.5 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
            {listItems.map((item, itemIdx) => (
              <li key={itemIdx}>{renderInline(item)}</li>
            ))}
          </ul>
        );
        continue;
      }

      // 8. Empty line
      if (!line.trim()) {
        i++;
        continue;
      }

      // 9. Standard paragraph
      blocks.push(
        <p key={`p-${blockKey++}`} className="my-3 text-[16px] sm:text-[17px] leading-7 text-slate-700">
          {renderInline(line)}
        </p>
      );
      i++;
    }

    return blocks;
  };

  // Helper for inline styles (bold, code, links)
  const renderInline = (text: string): React.ReactNode => {
    // Regex for bold **text**, inline code `code`, link [label](href)
    const tokens: React.ReactNode[] = [];
    let remaining = text;
    let k = 0;

    while (remaining.length > 0) {
      // Bold: **text**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Code: `code`
      const codeMatch = remaining.match(/`(.+?)`/);
      // Link: [label](href)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      // Find earliest match
      let firstMatch: { type: string; index: number; length: number; match: RegExpMatchArray } | null = null;

      if (boldMatch && boldMatch.index !== undefined) {
        firstMatch = { type: 'bold', index: boldMatch.index, length: boldMatch[0].length, match: boldMatch };
      }
      if (codeMatch && codeMatch.index !== undefined) {
        if (!firstMatch || codeMatch.index < firstMatch.index) {
          firstMatch = { type: 'code', index: codeMatch.index, length: codeMatch[0].length, match: codeMatch };
        }
      }
      if (linkMatch && linkMatch.index !== undefined) {
        if (!firstMatch || linkMatch.index < firstMatch.index) {
          firstMatch = { type: 'link', index: linkMatch.index, length: linkMatch[0].length, match: linkMatch };
        }
      }

      if (!firstMatch) {
        tokens.push(<React.Fragment key={k++}>{remaining}</React.Fragment>);
        break;
      }

      // Push text before match
      if (firstMatch.index > 0) {
        tokens.push(<React.Fragment key={k++}>{remaining.slice(0, firstMatch.index)}</React.Fragment>);
      }

      // Push matched element
      if (firstMatch.type === 'bold') {
        tokens.push(
          <strong key={k++} className="font-semibold text-slate-900">
            {firstMatch.match[1]}
          </strong>
        );
      } else if (firstMatch.type === 'code') {
        tokens.push(
          <code
            key={k++}
            className="px-1.5 py-0.5 rounded bg-slate-100 text-indigo-700 font-mono text-[14px] border border-slate-200"
          >
            {firstMatch.match[1]}
          </code>
        );
      } else if (firstMatch.type === 'link') {
        tokens.push(
          <a
            key={k++}
            href={firstMatch.match[2]}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline font-medium"
          >
            {firstMatch.match[1]}
          </a>
        );
      }

      remaining = remaining.slice(firstMatch.index + firstMatch.length);
    }

    return tokens;
  };

  return <div className={`markdown-body space-y-1 ${className}`}>{renderBlocks()}</div>;
}
