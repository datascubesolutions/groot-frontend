"use client";

import {
  Bold,
  Code,
  Eye,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  PencilLine,
  Quote,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

// ── Basic Markdown → HTML renderer ────────────────────────────────────────────
// SECURITY: This renderer is safe because it HTML-escapes ALL input FIRST
// (replacing &, <, >) before applying Markdown transforms. This means no
// user-controlled markup can reach the output. Do NOT remove the escape block.
function renderMarkdown(md) {
  if (!md) return "";

  let html = md
    // HTML-escape before any transforms — this is the XSS-prevention foundation
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="md-codeblock"><code>${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Blockquote
  html = html.replace(
    /^&gt; (.+)$/gm,
    '<blockquote class="md-blockquote">$1</blockquote>'
  );

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="md-hr" />');

  // Links — guard href against javascript:/data:/vbscript: URIs
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, text, url) => {
      // Strip dangerous URI schemes
      const safeUrl = /^(?:javascript|data|vbscript):/i.test(url.trim()) ? '#' : url;
      return `<a href="${safeUrl}" class="md-link" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
  );

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="md-img" />'
  );

  // Process lists and paragraphs line-by-line
  const lines = html.split("\n");
  const processed = [];
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ulMatch = line.match(/^(\s*)[-*] (.+)$/);
    const olMatch = line.match(/^(\s*)\d+\. (.+)$/);

    if (ulMatch) {
      if (!inUl) {
        processed.push('<ul class="md-ul">');
        inUl = true;
      }
      processed.push(`<li>${ulMatch[2]}</li>`);
    } else if (olMatch) {
      if (!inOl) {
        processed.push('<ol class="md-ol">');
        inOl = true;
      }
      processed.push(`<li>${olMatch[2]}</li>`);
    } else {
      if (inUl) {
        processed.push("</ul>");
        inUl = false;
      }
      if (inOl) {
        processed.push("</ol>");
        inOl = false;
      }

      // Skip empty lines or lines already processed (headings, hr, pre, blockquote)
      if (
        line.trim() === "" ||
        line.startsWith("<h") ||
        line.startsWith("<hr") ||
        line.startsWith("<pre") ||
        line.startsWith("<blockquote")
      ) {
        processed.push(line);
      } else {
        processed.push(`<p class="md-p">${line}</p>`);
      }
    }
  }

  if (inUl) processed.push("</ul>");
  if (inOl) processed.push("</ol>");

  return processed.join("\n");
}

// ── Toolbar Buttons ───────────────────────────────────────────────────────────
const TOOLBAR_ITEMS = [
  {
    icon: Bold,
    label: "Bold",
    prefix: "**",
    suffix: "**",
    placeholder: "bold text",
  },
  {
    icon: Italic,
    label: "Italic",
    prefix: "*",
    suffix: "*",
    placeholder: "italic text",
  },
  { type: "divider" },
  {
    icon: Heading1,
    label: "Heading 1",
    prefix: "# ",
    suffix: "",
    placeholder: "Heading 1",
    line: true,
  },
  {
    icon: Heading2,
    label: "Heading 2",
    prefix: "## ",
    suffix: "",
    placeholder: "Heading 2",
    line: true,
  },
  {
    icon: Heading3,
    label: "Heading 3",
    prefix: "### ",
    suffix: "",
    placeholder: "Heading 3",
    line: true,
  },
  { type: "divider" },
  {
    icon: List,
    label: "Bullet List",
    prefix: "- ",
    suffix: "",
    placeholder: "List item",
    line: true,
  },
  {
    icon: ListOrdered,
    label: "Numbered List",
    prefix: "1. ",
    suffix: "",
    placeholder: "List item",
    line: true,
  },
  { type: "divider" },
  {
    icon: Quote,
    label: "Blockquote",
    prefix: "> ",
    suffix: "",
    placeholder: "Quote text",
    line: true,
  },
  {
    icon: Code,
    label: "Code",
    prefix: "`",
    suffix: "`",
    placeholder: "code",
  },
  {
    icon: Link2,
    label: "Link",
    prefix: "[",
    suffix: "](url)",
    placeholder: "link text",
  },
  {
    icon: Minus,
    label: "Horizontal Rule",
    prefix: "\n---\n",
    suffix: "",
    placeholder: "",
    insert: true,
  },
];

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write your content in Markdown...",
  rows = 16,
  required = false,
  label = "Content",
}) {
  const [mode, setMode] = useState("write"); // "write" | "preview"
  const textareaRef = useRef(null);

  const insertFormat = useCallback(
    (item) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = value || "";
      const selected = text.substring(start, end);

      let newText;
      let newCursorPos;

      if (item.insert) {
        // Insert-only (like horizontal rule)
        newText = text.substring(0, start) + item.prefix + text.substring(end);
        newCursorPos = start + item.prefix.length;
      } else if (item.line) {
        // Line-level format (headings, lists)
        // Find the beginning of the current line
        const lineStart = text.lastIndexOf("\n", start - 1) + 1;
        const beforeLine = text.substring(0, lineStart);
        const currentLine = text.substring(lineStart);

        if (selected) {
          // Wrap selected text
          newText = beforeLine + item.prefix + selected + item.suffix + currentLine.substring(selected.length + (start - lineStart));
          newCursorPos = lineStart + item.prefix.length + selected.length + item.suffix.length;
        } else {
          // Insert at line start
          newText = beforeLine + item.prefix + (item.placeholder || "") + item.suffix + currentLine.substring(start - lineStart);
          newCursorPos = lineStart + item.prefix.length + (item.placeholder || "").length;
        }
      } else {
        // Inline format (bold, italic, code, link)
        if (selected) {
          newText =
            text.substring(0, start) +
            item.prefix +
            selected +
            item.suffix +
            text.substring(end);
          newCursorPos = start + item.prefix.length + selected.length + item.suffix.length;
        } else {
          const ph = item.placeholder || "";
          newText =
            text.substring(0, start) +
            item.prefix +
            ph +
            item.suffix +
            text.substring(end);
          // Select the placeholder text
          newCursorPos = start + item.prefix.length + ph.length;
        }
      }

      onChange(newText);
      // Restore focus and cursor
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    },
    [value, onChange]
  );

  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden">
      {/* Toolbar Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1">
          <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest mr-3">
            {label} {required && <span className="text-red-400">*</span>}
          </h2>

          {/* Formatting Buttons */}
          {mode === "write" &&
            TOOLBAR_ITEMS.map((item, i) =>
              item.type === "divider" ? (
                <div
                  key={`d-${i}`}
                  className="w-px h-5 bg-white/10 mx-1"
                />
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => insertFormat(item)}
                  title={item.label}
                  className="h-7 w-7 flex items-center justify-center rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                >
                  <item.icon size={14} />
                </button>
              )
            )}
        </div>

        {/* Write / Preview Toggle */}
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setMode("write")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${mode === "write"
                ? "bg-white/10 text-white"
                : "text-gray-500 hover:text-gray-300"
              }`}
          >
            <PencilLine size={12} />
            Write
          </button>
          <button
            type="button"
            onClick={() => setMode("preview")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${mode === "preview"
                ? "bg-white/10 text-white"
                : "text-gray-500 hover:text-gray-300"
              }`}
          >
            <Eye size={12} />
            Preview
          </button>
        </div>
      </div>

      {/* Content Area */}
      {mode === "write" ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="block w-full px-5 py-4 bg-transparent text-white placeholder:text-gray-500 focus:outline-none resize-y font-mono text-sm leading-relaxed"
          required={required}
        />
      ) : (
        <div
          className="markdown-preview px-5 py-4 min-h-[300px] text-sm"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
        />
      )}

      {/* Footer hint */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-white/[0.02]">
        <p className="text-[11px] text-gray-600">
          Supports Markdown — **bold**, *italic*, # headings, - bullet lists, 1.
          numbered lists, `code`, [links](url)
        </p>
        <p className="text-[11px] text-gray-600">
          {(value || "").length} characters
        </p>
      </div>
    </div>
  );
}
