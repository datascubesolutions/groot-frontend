# Home Page Color Audit — Groot Analytics

## Executive Summary

Audit completed to align Home page colors with industry standards, maintain theme consistency, and improve UI/UX through semantic tokens.

---

## Findings

### ✅ Already Compliant

- **tokens.css**: Full semantic token system with `--forest-foreground`, `--mint-foreground`, neutral scale, shadow tokens
- **Tailwind config**: Neutral palette, forest-foreground mapped
- **HeroSection**: Uses `hsl(var(--border)/0.08)`, `hsl(var(--background))`, `hsl(var(--muted))`
- **PainPointsSection**: Uses `text-muted-foreground`, `bg-card`, `text-foreground`, `border-border`, `text-forest-foreground`
- **Footer, Navbar**: Use `charcoal`, `birch`, `primary` consistently

### ⚠️ Inconsistencies Found

| Location | Issue | Recommendation |
|----------|-------|----------------|
| **ProcessTimelineSection** | Hardcoded hex `#064E3B`, `#2DD4BF`, `#22C55E`; `bg-emerald-500/5`, `bg-teal-500/5` | Use CSS vars: `hsl(var(--forest))`; replace with `bg-primary/5`, `bg-forest/5` |
| **ServicesSection** | `text-white` on forest buttons; `from-emerald-400`, `to-teal-400` in gradients | Use `text-forest-foreground`; use `from-primary to-leaf` |
| **DataReadinessSection** | `border-slate-200`, `text-slate-600`, `bg-emerald-500`, `bg-slate-900` | Use `border-border`, `text-muted-foreground`, `text-primary`, `bg-charcoal` |
| **ToolsSection** | `bg-white/60` | Use `bg-card/80` |
| **HowWeWorkSection** | `bg-white`, `border-slate-200`, `text-slate-700` | Use `bg-card`, `border-border`, `text-muted-foreground` |
| **VideoScrollSection** | `#FFFFFF`, `rgba(28,13,63,...)` | Use `hsl(var(--card))`, `var(--shadow-elevated)` |
| **QuizFlow.jsx** | Extensive `emerald-*`, `slate-*` | Map to `primary`, `accent`, `neutral` |
| **SideParticles.jsx** | `#1D9278`, `#10b981` | Use token-derived values |
| **QuizModal.jsx** | `emerald-*`, `slate-*`, `#80808008` | Use semantic tokens |

---

## Token Mapping Reference

| Replace | With |
|---------|------|
| `slate-50` | `neutral-50` or `bg-muted` |
| `slate-100` | `neutral-100` or `bg-muted` |
| `slate-200` | `neutral-200` or `border` |
| `slate-400` | `muted-foreground` |
| `slate-600` | `muted-foreground` |
| `slate-700` | `foreground` (80–90% opacity) |
| `slate-800` | `foreground` |
| `slate-900` | `foreground` or `charcoal` |
| `emerald-50` | `bg-primary/10` |
| `emerald-500` | `primary` or `accent` |
| `emerald-600` | `secondary` (forest) |
| `emerald-400` | `primary` |
| `text-white` on dark bg | `text-forest-foreground` or `text-secondary-foreground` |
| `bg-white` | `bg-card` |

---

## Implementation Priority

1. **High**: ProcessTimelineSection, ServicesSection, DataReadinessSection
2. **Medium**: QuizFlow, HowWeWorkSection, ToolsSection
3. **Low**: VideoScrollSection, SideParticles, QuizModal
