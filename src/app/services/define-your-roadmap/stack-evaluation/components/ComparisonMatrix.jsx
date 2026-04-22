// @ts-nocheck
"use client";

import { CheckCircle2, ServerCog, Cpu, Braces } from "lucide-react";

const PLATFORMS = [
  {
    name: "Microsoft Fabric",
    type: "SaaS Data Analytics",
    icon: Cpu,
    features: [
      "Immediate time-to-value",
      "Native Power BI integration",
      "Unified pricing model",
    ],
    bestFor: "Best for: Power BI Heavy Orgs",
    classes: {
      container: "hover:border-blue-500/50",
      title: "text-blue-400",
      icon: "text-blue-400",
      bestFor: "text-blue-300/50 group-hover:text-blue-400",
    },
  },
  {
    name: "Databricks",
    type: "Unified Data AI",
    icon: Braces,
    features: [
      "Extreme scale custom pipelines",
      "Best-in-class Machine Learning",
      "Open-source underpinnings",
    ],
    bestFor: "Best for: Engineering & AI Focused",
    classes: {
      container: "hover:border-orange-500/50 transform md:-translate-y-6",
      title: "text-orange-500",
      icon: "text-orange-500",
      bestFor: "text-orange-300/50 group-hover:text-orange-500",
    },
    hasHighlightBar: true,
  },
  {
    name: "Snowflake",
    type: "Cloud Data Cloud",
    icon: ServerCog,
    features: [
      "Decoupled compute and storage",
      "High concurrency handling",
      "Massive data sharing marketplace",
    ],
    bestFor: "Best for: Massive Analytical Concurrency",
    classes: {
      container: "hover:border-cyan-400/50",
      title: "text-cyan-400",
      icon: "text-cyan-400",
      bestFor: "text-cyan-300/50 group-hover:text-cyan-400",
    },
  },
];

const STYLES = {
  section:
    "py-24 md:py-32 bg-[#040404] text-white overflow-hidden relative border-y border-white/10",
  bgGlow:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,hsl(var(--cyan-800)/0.15),transparent_60%)] pointer-events-none",
  container: "container mx-auto px-6 max-w-7xl relative z-10",
  headerWrapper:
    "flex flex-col items-center text-center mb-20 max-w-3xl mx-auto",
  headerLine: "w-16 h-1 bg-cyan-600 mb-8",
  heading:
    "text-[3rem] md:text-[5rem] font-black tracking-tighter uppercase leading-[0.9] mb-6 drop-shadow-sm",
  subheading: "text-xl text-white/60 font-medium leading-relaxed",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
  cardOuter:
    "bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.05] transition-colors duration-500 group flex flex-col pt-12 relative overflow-hidden",
  bgIconWrapper:
    "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity",
  cardHighlightLine:
    "absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
  cardTitle: "text-3xl font-black mb-2 uppercase tracking-tight",
  cardTypeBadge:
    "text-sm font-semibold tracking-[0.1em] text-white/40 uppercase mb-8 pb-8 border-b border-white/10",
  featuresWrapper: "space-y-6 text-sm font-bold text-white/70 mb-10 flex-grow",
  featureItem: "flex items-start gap-4",
  featureIcon: "w-5 h-5 shrink-0",
  bestForText: "text-xs uppercase tracking-widest transition-colors",
};

export default function ComparisonMatrix() {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.bgGlow} aria-hidden="true" />

      <div className={STYLES.container}>
        <div className={STYLES.headerWrapper}>
          <div className={STYLES.headerLine} aria-hidden="true" />
          <h2 className={STYLES.heading}>
            System Agnostic. <br aria-hidden="true" /> Objective Testing.
          </h2>
          <p className={STYLES.subheading}>
            We evaluate the big three data platforms against your true technical
            capabilities, constraints, and budget.
          </p>
        </div>

        <div className={STYLES.grid}>
          {PLATFORMS.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <div
                key={idx}
                className={`${STYLES.cardOuter} ${platform.classes.container}`}
              >
                <div className={STYLES.bgIconWrapper} aria-hidden="true">
                  <Icon size={120} strokeWidth={0.5} />
                </div>
                {platform.hasHighlightBar && (
                  <div
                    className={STYLES.cardHighlightLine}
                    aria-hidden="true"
                  />
                )}

                <h3 className={`${STYLES.cardTitle} ${platform.classes.title}`}>
                  {platform.name}
                </h3>
                <p className={STYLES.cardTypeBadge}>{platform.type}</p>

                <ul
                  className={STYLES.featuresWrapper}
                  aria-label={`Features of ${platform.name}`}
                >
                  {platform.features.map((feature, fIdx) => (
                    <li key={fIdx} className={STYLES.featureItem}>
                      <CheckCircle2
                        className={`${STYLES.featureIcon} ${platform.classes.icon}`}
                        aria-hidden="true"
                      />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <p
                  className={`${STYLES.bestForText} ${platform.classes.bestFor}`}
                >
                  {platform.bestFor}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
