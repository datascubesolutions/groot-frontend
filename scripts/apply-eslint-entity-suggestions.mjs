/**
 * Applies ESLint suggestion fixes for react/no-unescaped-entities (one pass).
 * Uses non-overlapping suggestion ranges only. Re-run manually if needed.
 *
 * From repo root: node scripts/apply-eslint-entity-suggestions.mjs
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const reportPath = path.join(root, "eslint-entity-report.tmp.json");

function rangesOverlap(a, b) {
  return a[0] < b[1] && b[0] < a[1];
}

function pickNonOverlapping(fixes) {
  const sorted = [...fixes].sort((x, y) => y.range[0] - x.range[0]);
  const picked = [];
  for (const f of sorted) {
    if (picked.some((p) => rangesOverlap(p.range, f.range))) continue;
    picked.push(f);
  }
  return picked;
}

const es = spawnSync(
  "npx",
  ["eslint", ".", "--format", "json", "-o", reportPath],
  { cwd: root, encoding: "utf8" }
);
if (es.error) throw es.error;

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const byFile = new Map();

for (const file of report) {
  for (const msg of file.messages || []) {
    if (msg.ruleId !== "react/no-unescaped-entities") continue;
    const sug = msg.suggestions?.[0]?.fix;
    if (!sug?.range || typeof sug.text !== "string") continue;
    const fp = file.filePath;
    if (!byFile.has(fp)) byFile.set(fp, []);
    byFile.get(fp).push({ range: sug.range, text: sug.text });
  }
}

let fixesApplied = 0;
let filesChanged = 0;

for (const [filePath, rawFixes] of byFile) {
  const fixes = pickNonOverlapping(rawFixes);
  if (fixes.length === 0) continue;
  fixes.sort((a, b) => b.range[0] - a.range[0]);
  let source = fs.readFileSync(filePath, "utf8");
  const original = source;
  for (const { range, text } of fixes) {
    source = source.slice(0, range[0]) + text + source.slice(range[1]);
    fixesApplied++;
  }
  if (source !== original) {
    fs.writeFileSync(filePath, source, "utf8");
    filesChanged++;
  }
}

try {
  fs.unlinkSync(reportPath);
} catch {
  /* ignore */
}

console.log(
  `Applied ${fixesApplied} entity fixes in ${filesChanged} files (one pass).`
);
