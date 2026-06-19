// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Database,
  FileCheck,
  FileQuestion,
  Lightbulb,
  Network,
  PieChart,
  ShieldCheck,
  Target,
  Users,
  XCircle,
  Cpu,
  Braces,
  ServerCog,
  ShieldAlert,
  Scale
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import NextStepsSection from "../../maturity-assessment/components/NextStepsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StackEvaluationPageClient() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-cyan-500/30">
      <HeroSection />

      {/* NEW PROBLEM SECTION REPLACEMENT */}
      <section className="relative z-30 flex flex-col justify-center bg-muted/20 py-10 lg:py-0 lg:min-h-[calc(100vh-80px)] border-t-2 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-10 lg:py-8 xl:py-10">
          <div className="mb-8 lg:mb-10 border-l-8 border-cyan-500 bg-card p-6 lg:p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] md:w-3/4 lg:w-2/3 xl:w-[60%]">
            <h2 className="mb-3 flex items-center gap-4 text-xs lg:text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              <span className="h-1 w-12 bg-cyan-600"></span>
              The Problem
            </h2>
            <h3 className="text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[3rem] lg:text-[3.5rem]">
              The Cost of Vendor Noise.
            </h3>
            <p className="mt-4 text-lg font-medium text-slate-700 max-w-2xl">
              Organizations burn millions migrating to platforms that looked perfect in the sales demo but immediately hit performance scaling issues in production due to their unique pipeline architectures.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 xl:gap-12 lg:grid-cols-2 items-start max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10 pointer-events-none">01</div>
              <ShieldAlert className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-rose-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                The "Hello World" Demo
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  Vendor demos use perfectly clean CSVs to show how fast their pipeline engine runs. Your real data comes from an on-premise ERP heavily nested in XML with schema drift and duplicate keys.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-rose-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8 mt-auto">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-rose-700 mb-1">Missing Proof</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       Without testing your specific constraints, you're buying a promise, not a solution.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-16 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10 pointer-events-none">02</div>
              <ServerCog className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-amber-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                Unpredictable TCO
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  Compute curves are intentionally complicated. It's nearly impossible to map your expected daily data processing volume to actual dollars without standing up the architecture and running your specific workloads.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-amber-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8 mt-auto">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-amber-700 mb-1">Cost Opaqueness</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       A cheaper licensing model often masks significantly higher compute costs at scale.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix / Platform Grid */}
      <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-10 lg:min-h-[calc(100vh-80px)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 lg:my-auto">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b-4 border-cyan-500 pb-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-3 inline-block border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-cyan-600 lg:text-sm">
                [ THE PLATFORMS ]
              </h2>
              <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                System Agnostic. Objective Testing.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-cyan-500 bg-background/50 p-4 pl-5 text-sm font-bold leading-relaxed text-slate-700 backdrop-blur-sm lg:text-base">
              We evaluate the big three data platforms against your true technical capabilities, constraints, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:grid-cols-3 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
            {/* Microsoft Fabric */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative flex min-h-[280px] flex-col overflow-hidden bg-card p-6 md:p-8 transition-colors duration-500 hover:bg-blue-50 lg:min-h-[400px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Cpu
                  className="h-10 w-10 text-blue-500 transition-colors duration-500 group-hover:text-blue-600 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/10 dark:mix-blend-screen lg:text-[4rem]">
                  01
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-blue-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-600/50 group-hover:text-blue-600">
                    SaaS Data Analytics
                  </p>
                </div>
                <h4 className="mb-4 text-[1.5rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-slate-900 lg:text-[1.75rem] break-words text-slate-900">
                  Microsoft Fabric
                </h4>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-slate-600 mb-8">
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" strokeWidth={2} />
                      Immediate time-to-value
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" strokeWidth={2} />
                      Native Power BI integration
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" strokeWidth={2} />
                      Unified pricing model
                   </li>
                </ul>
                <div className="mt-auto pt-4 border-t border-slate-200">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Best for: Power BI Heavy Orgs</span>
                </div>
              </div>
            </motion.div>

            {/* Databricks */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative flex min-h-[280px] flex-col overflow-hidden bg-card p-6 md:p-8 transition-colors duration-500 hover:bg-orange-50 lg:min-h-[400px]"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Braces
                  className="h-10 w-10 text-orange-500 transition-colors duration-500 group-hover:text-orange-600 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-orange-500/10 dark:mix-blend-screen lg:text-[4rem]">
                  02
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-orange-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-orange-500 transition-colors duration-500 group-hover:border-orange-600/50 group-hover:text-orange-600">
                    Unified Data AI
                  </p>
                </div>
                <h4 className="mb-4 text-[1.5rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-slate-900 lg:text-[1.75rem] break-words text-slate-900">
                  Databricks
                </h4>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-slate-600 mb-8">
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" strokeWidth={2} />
                      Extreme scale custom pipelines
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" strokeWidth={2} />
                      Best-in-class Machine Learning
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" strokeWidth={2} />
                      Open-source underpinnings
                   </li>
                </ul>
                <div className="mt-auto pt-4 border-t border-slate-200">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Best for: Engineering & AI Focused</span>
                </div>
              </div>
            </motion.div>

            {/* Snowflake */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative flex min-h-[280px] flex-col overflow-hidden bg-card p-6 md:p-8 transition-colors duration-500 hover:bg-cyan-50 lg:min-h-[400px]"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <ServerCog
                  className="h-10 w-10 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-600 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/10 dark:mix-blend-screen lg:text-[4rem]">
                  03
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-cyan-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-600/50 group-hover:text-cyan-600">
                    Cloud Data Cloud
                  </p>
                </div>
                <h4 className="mb-4 text-[1.5rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-slate-900 lg:text-[1.75rem] break-words text-slate-900">
                  Snowflake
                </h4>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-slate-600 mb-8">
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" strokeWidth={2} />
                      Decoupled compute and storage
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" strokeWidth={2} />
                      High concurrency handling
                   </li>
                   <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" strokeWidth={2} />
                      Massive data sharing marketplace
                   </li>
                </ul>
                <div className="mt-auto pt-4 border-t border-slate-200">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Best for: Massive Analytical Concurrency</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-background py-12 lg:py-12 lg:min-h-[calc(100vh-80px)]">
        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:my-auto flex flex-col">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b-4 border-foreground pb-8 md:flex-row md:items-center md:gap-10">
            <h3 className="mb-0 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tighter text-cyan-600">
              Proof over promises.
            </h3>
            <p className="max-w-sm border border-cyan-600/40 bg-cyan-600/10 p-4 text-sm font-black uppercase tracking-[0.2em] text-slate-900 md:text-right">
              We execute a rapid, sprint-based approach to test your heaviest constraint on multiple platforms.
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
            {/* Method Panels */}
            <MethodPanel
              step={1}
              week="Step 1"
              title="Architectural Mapping"
              desc="We map your current source systems, volume peaks, latency requirements, and team skillsets to form the baseline constraints."
              color="cyan"
            />
            <MethodPanel
              step={2}
              week="Step 2"
              title="Use Case Selection"
              desc="Identifying the single hardest or most representative data pipeline to test—the one that usually breaks vendors."
              color="blue"
            />
            <MethodPanel
              step={3}
              week="Step 3"
              title="Rapid Hands-On PoC"
              desc="Executing a technical bake-off. We build the exact same pipeline across candidate tools to measure true latency and dev experience."
              color="indigo"
            />
            <MethodPanel
              step={4}
              week="Step 4"
              title="TCO & Recommendation"
              desc="Analyzing the performance data, mapping it to your production scale, and projecting 3-year Total Cost of Ownership."
              color="forest"
            />
          </div>
        </div>
      </section>

      {/* Related Services and Extreme CTA Section */}
      <NextStepsSection />
    </main>
  );
}

const METHOD_PANEL_ACCENT = {
  forest: {
    bar: "group-hover/panel:bg-emerald-600",
    num: "group-hover/panel:text-emerald-600/10",
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

// Complex methodology panel implementing twisted writing mode
function MethodPanel({ step, week, title, desc, color }) {
  const num = String(step).padStart(2, "0");
  const accent = METHOD_PANEL_ACCENT[color] ?? METHOD_PANEL_ACCENT.forest;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`group/panel relative flex h-auto flex-1 flex-col overflow-hidden border-b border-l border-foreground/30 bg-card shadow-sm transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:translate-x-2 hover:border-foreground hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] lg:min-h-[280px] lg:flex-row lg:border-b-0 lg:border-l-0 lg:border-t dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.2)]`}
    >
      {/* Twisted Vertical Bar */}
      <div
        className={`flex items-center justify-between border-r border-border/50 bg-muted/40 p-4 lg:p-5 lg:flex-col ${accent.bar} min-w-[64px] transition-colors duration-500 group-hover/panel:text-white`}
      >
        <span className="text-3xl font-black text-foreground/30 opacity-80 transition-colors group-hover/panel:text-white lg:text-4xl">
          {num}
        </span>
        <div className="mt-auto rotate-180 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-5 transition-transform duration-500 group-hover/panel:-translate-y-2 md:p-6 lg:p-8">
        <h4 className="mb-4 pr-2 text-lg font-black uppercase leading-[1] tracking-tight lg:text-xl text-slate-900">
          {title}
        </h4>
        <p className="mt-auto text-[0.85rem] font-semibold leading-relaxed text-slate-700 lg:text-sm">
          {desc}
        </p>
      </div>

      {/* Massive subtle background number */}
      <div
        className={`pointer-events-none absolute -bottom-6 -right-6 select-none text-[8rem] font-black leading-[0.7] text-foreground/5 dark:text-foreground/10 ${accent.num} transition-all duration-700 group-hover/panel:scale-110 lg:text-[10rem]`}
      >
        {num}
      </div>
    </motion.div>
  );
}
