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
  LineChart,
  Map,
  Signpost,
  FileText
} from "lucide-react";
import CaseStudySection from "./components/CaseStudySection";
import HeroSection from "./components/HeroSection";
import NextStepsSection from "../../maturity-assessment/components/NextStepsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EnterpriseDataStrategy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-emerald-500/30">
      <HeroSection />

      {/* NEW PROBLEM SECTION REPLACEMENT */}
      <section className="relative z-30 flex flex-col justify-center bg-muted/20 py-10 lg:py-0 lg:min-h-[calc(100vh-80px)] border-t-2 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-10 lg:py-8 xl:py-10">
          <div className="mb-8 lg:mb-10 border-l-8 border-emerald-600 bg-card p-6 lg:p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] md:w-3/4 lg:w-2/3 xl:w-[60%]">
            <h2 className="mb-3 flex items-center gap-4 text-xs lg:text-sm font-black uppercase tracking-[0.3em] text-emerald-600">
              <span className="h-1 w-12 bg-emerald-600"></span>
              The Challenge
            </h2>
            <h3 className="text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Why data strategies fail.
            </h3>
            <p className="mt-4 text-lg font-medium text-slate-700 max-w-2xl">
              A strategy without execution is just an expensive presentation. Most data strategies lack the pragmatic prioritization needed to survive CFO scrutiny.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 xl:gap-12 lg:grid-cols-3 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10 pointer-events-none">01</div>
              <FileText className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-rose-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                The Vision Deck Nobody Opens
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  You have a slide deck titled "Data Strategy" on SharePoint. It describes a "data-driven culture" and lists "key initiatives."
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">What's Missing</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Actionable roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Architectural alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Business buy-in</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-rose-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-rose-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       When a new Power BI project starts, nobody references it. The strategy exists. Execution doesn't.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-8 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10 pointer-events-none">02</div>
              <Signpost className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-amber-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                Competing Priorities, No Framework
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  Finance wants faster monthly close. Marketing wants customer analytics. Operations wants real-time Power BI dashboards. IT wants Fabric.
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">The Symptoms</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Siloed initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Wasted resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Shadow IT</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-amber-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-amber-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       Nobody has a framework for deciding "this first, that later, this never." You do a little bit of everything and achieve nothing.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-16 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-indigo-500/10 pointer-events-none">03</div>
              <Activity className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-indigo-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                No Business Case Survives Scrutiny
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  You know you need to invest in Microsoft Fabric. But the CFO wants numbers. What's the ROI? What's the cost of inaction?
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">The Root Cause</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">No financial modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Vague ROI assumptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Tech-centric pitches</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-indigo-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-indigo-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       Without credible numbers, your data modernization is delayed because it competes for budget against projects with clearer returns.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
      <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-10 lg:min-h-[calc(100vh-80px)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 lg:my-auto">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b-4 border-forest pb-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-3 inline-block border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-emerald-600 lg:text-sm">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                What a real strategy looks like.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-emerald-500 bg-background/50 p-4 pl-5 text-sm font-bold leading-relaxed text-slate-700 backdrop-blur-sm lg:text-base">
              A comprehensive strategy that aligns your Microsoft Fabric and Azure investments with business outcomes. Not a vision deck — a plan that gets executive buy-in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-5 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
            {/* Cell 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-forest/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Target
                  className="h-10 w-10 text-forest transition-colors duration-500 group-hover:text-emerald-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen lg:text-[4rem]">
                  D-01
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-forest/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:border-emerald-300/50 group-hover:text-emerald-300">
                    Existing Landscape
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words text-slate-900">
                  Current State Assessment
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-emerald-50">
                  A clear-eyed view of your existing data landscape: Azure resources, data flows, Power BI reports, capabilities, gaps, and technical debt.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-cyan-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Signpost
                  className="h-10 w-10 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-02
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-cyan-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                    Phased Plan
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words text-slate-900">
                  Prioritized Roadmap
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-cyan-50">
                  A phased implementation plan with 90-day milestones, dependencies, and decision points. Each phase delivers measurable business value.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-blue-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <LineChart
                  className="h-10 w-10 text-blue-500 transition-colors duration-500 group-hover:text-blue-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-03
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-blue-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-300/50 group-hover:text-blue-300">
                    Financials
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words text-slate-900">
                  Business Case
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-50">
                  Financial analysis quantifying investment and expected return. Includes Fabric capacity costs, implementation investment, and expected benefits.
                </p>
              </div>
            </motion.div>

            {/* Cell 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-amber-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <ShieldCheck
                  className="h-10 w-10 text-amber-500 transition-colors duration-500 group-hover:text-amber-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-amber-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-04
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-amber-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-amber-500 transition-colors duration-500 group-hover:border-amber-300/50 group-hover:text-amber-300">
                    Control
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words text-slate-900">
                  Governance Model
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-amber-50">
                  A governance framework using Microsoft Purview: data ownership, quality standards, sensitivity labels, and lineage tracking.
                </p>
              </div>
            </motion.div>

            {/* Cell 5 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 md:col-span-2 lg:col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-foreground p-5 text-background transition-colors duration-500 lg:min-h-[400px] lg:p-6"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <CheckCircle2 className="h-10 w-10 text-mint lg:h-12 lg:w-12" strokeWidth={1.5} />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-background/10 lg:text-[4rem]">
                  D-05
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-mint/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-mint">
                    Leadership
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight text-background lg:text-[1.25rem] break-words">
                  Executive Summary
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-background/80">
                  A one-page summary for leadership that drives decisions, not just informs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-background py-12 lg:py-12 lg:min-h-[calc(100vh-80px)]">
        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:my-auto flex flex-col">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b-4 border-foreground pb-8 md:flex-row md:items-center md:gap-10">
            <h3 className="mb-0 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tighter text-emerald-600">
              Our process
            </h3>
            <p className="max-w-sm border border-emerald-600/40 bg-emerald-600/10 p-4 text-sm font-black uppercase tracking-[0.2em] text-slate-900 md:text-right">
              Interviews, architectural design, and financial modeling —{" "}
              <span className="text-emerald-600">6–8 weeks to presentation.</span>
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
            {/* Method Panels */}
            <MethodPanel
              step={1}
              week="Week 1-3"
              title="Discovery"
              desc="We interview stakeholders, review Azure consumption, audit existing Power BI content, and assess current state. We map business objectives to data requirements."
              color="forest"
            />
            <MethodPanel
              step={2}
              week="Week 3-5"
              title="Strategy Development"
              desc="We design the target state architecture on Fabric, prioritize initiatives, and build the roadmap via working sessions with your team — not in isolation."
              color="cyan"
            />
            <MethodPanel
              step={3}
              week="Week 5-6"
              title="Business Case"
              desc="We quantify Fabric capacity costs, implementation services, internal effort, and expected returns. We document assumptions so the business case is deeply credible."
              color="blue"
            />
            <MethodPanel
              step={4}
              week="Week 6-8"
              title="Validation & Alignment"
              desc="We present the strategy to leadership, incorporate feedback, and finalize deliverables. Our goal is organizational buy-in, not just documentation."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* NEW BENTO BOX CASE STUDY SECTION */}
      <CaseStudySection />

      {/* FAQ Section - High Impact Neo-Brutalist */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-muted/20 py-12 lg:py-20 lg:min-h-[calc(100vh-80px)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:my-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
            {/* Left Column: Sticky Title */}
            <div className="md:col-span-5 lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32 z-10 pr-4 lg:pr-8">

                {/* Background 01 Watermark */}
                <div className="absolute -top-16 -left-8 -z-10 select-none text-[16rem] font-black leading-none tracking-tighter text-slate-50/80">
                  01
                </div>

                {/* Clean Eyebrow Badge */}
                <div className="mb-6 inline-flex items-center gap-2 border border-emerald-500 px-3 py-1.5 bg-white/50 backdrop-blur-sm">
                  <FileQuestion size={16} className="text-emerald-500" strokeWidth={2} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-500">
                    Clarification
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-[2.5rem] font-black uppercase leading-[1] tracking-tight sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] text-slate-900">
                  Know
                  <br />
                  <span className="text-emerald-500">
                    Before
                  </span>
                  <br />
                  You Go
                </h2>

                {/* Separator Line */}
                <div className="h-0.5 w-16 bg-emerald-500 mt-6 mb-8"></div>

                {/* Description Text */}
                <p className="text-base font-medium leading-relaxed text-slate-600 mb-8 max-w-[85%]">
                  Clear answers to common questions about our strategy engagement, timeline, and deliverables.
                </p>

                {/* Neo-Brutalist Callout Card */}
                <div className="relative border-2 border-foreground bg-card shadow-[8px_8px_0_0_rgba(16,185,129,1)] w-full sm:w-[95%] transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
                  <div className="flex items-center gap-5 p-5 sm:p-6 pl-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-emerald-500 bg-emerald-50">
                      <FileCheck className="h-6 w-6 text-emerald-600" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-1">
                        3 KEY QUESTIONS
                      </h4>
                      <p className="text-sm font-bold text-slate-600">
                        Everything you need to know.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: FAQ Items */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex flex-col gap-6 pt-4 lg:pt-12">
                {[
                  {
                    q: "How long does a strategy engagement take?",
                    a: "5-8 weeks for a comprehensive enterprise strategy. Smaller scopes for specific divisions can be completed in 3-4 weeks."
                  },
                  {
                    q: "Do we need a maturity assessment first?",
                    a: "Not always. We include a current state capability assessment naturally within the strategy engagement."
                  },
                  {
                    q: "What makes a strategy actually get implemented?",
                    a: "Three things: executive sponsorship, clear 90-day execution phases, and governance that assigns actual ownership. We build all three into your roadmap."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* Blank Space Filler - Perfect Icons */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t-[3px] border-slate-200/60">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[6px_6px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Credible ROI</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[6px_6px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Target size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Actionable Strategy</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[6px_6px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Lightbulb size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Executive Buy-In</span>
                  </div>
                </div>
              </div>
            </div>
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

export function FAQItem({ q, a, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <details className="group relative cursor-pointer overflow-hidden border-[3px] border-foreground bg-card transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] shadow-none [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-3 p-5 outline-none md:p-8">
        <div className="flex items-center gap-6">
          <span className="hidden text-5xl font-black text-emerald-600/30 sm:block">{num}</span>
          <span className="text-base font-black uppercase leading-[1.25] tracking-normal text-slate-900 sm:text-xl md:text-2xl">{q}</span>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-transparent text-foreground transition-all duration-300 group-open:bg-emerald-600 group-open:text-white md:h-12 md:w-12">
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-open:rotate-90 md:h-6 md:w-6" />
        </div>
      </summary>

      <div className="relative z-10 border-t-[3px] border-foreground bg-foreground p-6 md:p-8 text-base font-semibold leading-relaxed text-white md:text-lg duration-300 animate-in fade-in slide-in-from-top-4">
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-emerald-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
          Answer
        </div>
        <p className="border-l-[3px] border-emerald-600 pl-5">
          {a}
        </p>
      </div>
    </details>
  );
}
