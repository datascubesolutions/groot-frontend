"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const METHOD_PANEL_ACCENT = {
  forest: {
    bar: "group-hover/panel:bg-forest",
    num: "group-hover/panel:text-forest/10",
  },
  cyan: {
    bar: "group-hover/panel:bg-cyan-500",
    num: "group-hover/panel:text-cyan-500/10",
  },
  blue: {
    bar: "group-hover/panel:bg-blue-500",
    num: "group-hover/panel:text-blue-500/10",
  },
  indigo: {
    bar: "group-hover/panel:bg-indigo-500",
    num: "group-hover/panel:text-indigo-500/10",
  },
};

function MethodPanel({ step, week, title, desc, color }) {
  const num = String(step).padStart(2, "0");
  const accent = METHOD_PANEL_ACCENT[color] ?? METHOD_PANEL_ACCENT.forest;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`group/panel relative flex h-auto flex-1 flex-col overflow-hidden border-b border-l border-foreground/30 bg-card shadow-sm transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:translate-x-2 hover:border-foreground hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,1)] lg:min-h-[350px] lg:flex-row lg:border-b-0 lg:border-l-0 lg:border-t rounded-none`}
    >
      <div
        className={`flex items-center justify-between border-r border-border/50 bg-muted/40 p-6 lg:flex-col ${accent.bar} min-w-[80px] transition-colors duration-500 group-hover/panel:text-white`}
      >
        <span className="text-4xl font-black text-foreground/30 opacity-80 transition-colors group-hover/panel:text-white">
          {num}
        </span>
        <div className="mt-auto rotate-180 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 transition-transform duration-500 group-hover/panel:-translate-y-2 md:p-10">
        <h4 className="mb-6 pr-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">
          {title}
        </h4>
        <p className="mt-auto text-base font-bold leading-relaxed text-foreground/70">
          {desc}
        </p>
      </div>

      <div
        className={`pointer-events-none absolute -bottom-8 -right-8 select-none text-[12rem] font-black leading-[0.7] text-foreground/5 dark:text-foreground/10 ${accent.num} transition-all duration-700 group-hover/panel:scale-110`}
      >
        {num}
      </div>
    </motion.div>
  );
}

export default function MethodologySection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="mb-20 flex flex-col justify-between gap-8 border-b-8 border-foreground pb-12 md:flex-row md:items-center md:gap-10">
          <h3 className="mb-0 text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-none tracking-tighter text-forest">
            Our process
          </h3>
          <p className="max-w-sm border border-forest/40 bg-forest/15 p-6 text-base font-black uppercase tracking-[0.2em] text-foreground md:text-right">
            Interviews, technical review, and evidence-based scoring —{" "}
            <span className="text-forest">3–4 weeks to presentation.</span>
          </p>
        </div>

        <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
          <MethodPanel
            step={1}
            week="Week 1-2"
            title="Stakeholder Interviews"
            desc="We interview 8-12 stakeholders across business and technology. We're looking for gaps between what teams believe about your data capabilities and what's actually happening."
            color="forest"
          />
          <MethodPanel
            step={2}
            week="Week 2-3"
            title="Technical Review"
            desc="We review your current architecture: Azure/Fabric configuration, Data Factory pipelines, Lakehouse structure, Power BI semantic models, Purview catalog, and security settings. We look at what's documented and what's actually implemented."
            color="cyan"
          />
          <MethodPanel
            step={3}
            week="Week 3"
            title="Analysis & Scoring"
            desc="We synthesize findings into a scored assessment. Each dimension rated with specific evidence and examples."
            color="blue"
          />
          <MethodPanel
            step={4}
            week="Week 3-4"
            title="Presentation & Alignment"
            desc="We present findings to leadership and facilitate discussion. The goal is alignment on priorities and next steps."
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
}
