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
import CTASection from "./components/CTASection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EnterpriseDataStrategy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-emerald-500/30">
      <HeroSection />

      {/* NEW PROBLEM SECTION REPLACEMENT */}
      <section className="relative z-30 flex flex-col bg-muted/20 py-10 lg:py-0 lg:h-[calc(100vh-80px)] lg:min-h-[700px] border-t-2 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 pt-8 pb-4 h-full flex flex-col">
          <div className="mb-6 lg:mb-8 border-l-8 border-emerald-600 bg-card p-5 lg:p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] md:w-3/4 lg:w-2/3 xl:w-[60%]">
            <h2 className="mb-2 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              <span className="h-1 w-8 bg-emerald-600"></span>
              The Challenge
            </h2>
            <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-4xl lg:text-[3.25rem]">
              Why data strategies fail.
            </h3>
            <p className="mt-3 text-sm lg:text-[15px] font-medium text-slate-700 max-w-2xl">
              A strategy without execution is just an expensive presentation. Most data strategies lack the pragmatic prioritization needed to survive CFO scrutiny.
            </p>
          </div>

          <div className="grid gap-4 lg:gap-6 xl:gap-8 lg:grid-cols-3 flex-1 min-h-0">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-5 xl:p-6 shadow-lg transition-transform hover:-translate-y-1 flex flex-col overflow-hidden h-full justify-between"
            >
              <div className="absolute right-2 top-2 select-none text-[4rem] font-black leading-none text-rose-500/10 pointer-events-none">01</div>
              <div>
                <FileText className="mb-4 h-8 w-8 text-rose-500 relative z-10" />
                <h4 className="mb-3 text-lg lg:text-xl font-black uppercase leading-[1.1] tracking-tight relative z-10 text-slate-900">
                  The Vision Deck Nobody Opens
                </h4>
                <div className="mb-4 relative z-10">
                  <p className="text-[12px] lg:text-[13px] font-semibold text-slate-600 leading-relaxed">
                    You have a slide deck titled "Data Strategy" on SharePoint. It describes a "data-driven culture" and lists "key initiatives."
                  </p>
                </div>
                <div className="mb-4 relative z-10">
                  <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2">What's Missing</h5>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Actionable roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Architectural alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Business buy-in</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 relative z-10 bg-rose-50/80 -mx-5 px-5 xl:-mx-6 xl:px-6 -mb-5 pb-5 xl:-mb-6 xl:pb-6 mt-auto">
                <div className="flex items-start gap-2 mt-2">
                   <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[10px] uppercase tracking-wider text-rose-700 mb-1">The Reality</strong>
                     <p className="text-[12px] lg:text-[13px] font-bold text-slate-900 leading-snug">
                       When a new Power BI project starts, nobody references it. The strategy exists. Execution doesn't.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-5 xl:p-6 shadow-lg transition-transform hover:-translate-y-1 lg:mt-8 flex flex-col overflow-hidden h-full justify-between"
            >
              <div className="absolute right-2 top-2 select-none text-[4rem] font-black leading-none text-amber-500/10 pointer-events-none">02</div>
              <div>
                <Signpost className="mb-4 h-8 w-8 text-amber-500 relative z-10" />
                <h4 className="mb-3 text-lg lg:text-xl font-black uppercase leading-[1.1] tracking-tight relative z-10 text-slate-900">
                  Competing Priorities, No Framework
                </h4>
                <div className="mb-4 relative z-10">
                  <p className="text-[12px] lg:text-[13px] font-semibold text-slate-600 leading-relaxed">
                    Finance wants faster close. Marketing wants analytics. Ops wants dashboards. IT wants Fabric.
                  </p>
                </div>
                <div className="mb-4 relative z-10">
                  <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2">The Symptoms</h5>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Siloed initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Wasted resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Shadow IT</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 relative z-10 bg-amber-50/80 -mx-5 px-5 xl:-mx-6 xl:px-6 -mb-5 pb-5 xl:-mb-6 xl:pb-6 mt-auto">
                <div className="flex items-start gap-2 mt-2">
                   <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[10px] uppercase tracking-wider text-amber-700 mb-1">The Reality</strong>
                     <p className="text-[12px] lg:text-[13px] font-bold text-slate-900 leading-snug">
                       Nobody has a framework for deciding "this first, that later, this never." You do a little bit of everything and achieve nothing.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-5 xl:p-6 shadow-lg transition-transform hover:-translate-y-1 lg:mt-16 flex flex-col overflow-hidden h-full justify-between"
            >
              <div className="absolute right-2 top-2 select-none text-[4rem] font-black leading-none text-indigo-500/10 pointer-events-none">03</div>
              <div>
                <Activity className="mb-4 h-8 w-8 text-indigo-500 relative z-10" />
                <h4 className="mb-3 text-lg lg:text-xl font-black uppercase leading-[1.1] tracking-tight relative z-10 text-slate-900">
                  No Business Case Survives Scrutiny
                </h4>
                <div className="mb-4 relative z-10">
                  <p className="text-[12px] lg:text-[13px] font-semibold text-slate-600 leading-relaxed">
                    You know you need Microsoft Fabric. But the CFO wants numbers. What's the ROI? What's the cost of inaction?
                  </p>
                </div>
                <div className="mb-4 relative z-10">
                  <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2">The Root Cause</h5>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">No financial modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Vague ROI assumptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold text-slate-800">Tech-centric pitches</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 relative z-10 bg-indigo-50/80 -mx-5 px-5 xl:-mx-6 xl:px-6 -mb-5 pb-5 xl:-mb-6 xl:pb-6 mt-auto">
                <div className="flex items-start gap-2 mt-2">
                   <AlertTriangle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[10px] uppercase tracking-wider text-indigo-700 mb-1">The Reality</strong>
                     <p className="text-[12px] lg:text-[13px] font-bold text-slate-900 leading-snug">
                       Without credible numbers, modernization is delayed because it competes against projects with clearer returns.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
      <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-0 lg:h-[calc(100vh-80px)] lg:min-h-[700px] overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 pt-8 pb-4 h-full flex flex-col">
          <div className="mb-4 flex flex-col justify-between gap-3 border-b-4 border-forest pb-3 md:flex-row md:items-end shrink-0">
            <div className="max-w-2xl">
              <h2 className="mb-2 inline-block border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 lg:text-xs">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem]">
                What a real strategy looks like.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-emerald-500 bg-background/50 p-3 pl-4 text-xs font-bold leading-relaxed text-slate-700 backdrop-blur-sm lg:text-[13px]">
              A strategy that aligns your Microsoft Fabric and Azure investments with business outcomes. Not a vision deck — a plan that gets buy-in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-5 flex-1 min-h-0 h-full">
            {/* Cell 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex h-full flex-col overflow-hidden bg-card p-4 transition-colors duration-500 hover:bg-forest/5 lg:p-5"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-6 flex items-start justify-between shrink-0">
                <Target
                  className="h-8 w-8 text-forest transition-colors duration-500 group-hover:text-emerald-300 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="text-[2.5rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen lg:text-[3rem]">
                  D-01
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1 mt-auto">
                <div className="mb-2 shrink-0">
                  <p className="inline-block border-b-2 border-forest/30 pb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:border-emerald-300/50 group-hover:text-emerald-300">
                    Existing Landscape
                  </p>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.15rem] break-words text-slate-900 shrink-0">
                  Current State
                </h4>
                <p className="text-[12px] font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-emerald-50">
                  A clear-eyed view of your existing data landscape: Azure resources, data flows, capabilities, and technical debt.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex h-full flex-col overflow-hidden bg-card p-4 transition-colors duration-500 hover:bg-cyan-500/5 lg:p-5"
            >
              <div className="relative z-10 mb-6 flex items-start justify-between shrink-0">
                <Signpost
                  className="h-8 w-8 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-300 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="text-[2.5rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen lg:text-[3rem]">
                  D-02
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1 mt-auto">
                <div className="mb-2 shrink-0">
                  <p className="inline-block border-b-2 border-cyan-500/30 pb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                    Phased Plan
                  </p>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.15rem] break-words text-slate-900 shrink-0">
                  Prioritized Roadmap
                </h4>
                <p className="text-[12px] font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-cyan-50">
                  A phased plan with 90-day milestones, dependencies, and decisions. Each phase delivers measurable business value.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex h-full flex-col overflow-hidden bg-card p-4 transition-colors duration-500 hover:bg-blue-500/5 lg:p-5"
            >
              <div className="relative z-10 mb-6 flex items-start justify-between shrink-0">
                <LineChart
                  className="h-8 w-8 text-blue-500 transition-colors duration-500 group-hover:text-blue-300 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="text-[2.5rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen lg:text-[3rem]">
                  D-03
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1 mt-auto">
                <div className="mb-2 shrink-0">
                  <p className="inline-block border-b-2 border-blue-500/30 pb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-300/50 group-hover:text-blue-300">
                    Financials
                  </p>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.15rem] break-words text-slate-900 shrink-0">
                  Business Case
                </h4>
                <p className="text-[12px] font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-50">
                  Analysis quantifying investment and return. Includes Fabric capacity costs, implementation investment, and expected benefits.
                </p>
              </div>
            </motion.div>

            {/* Cell 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex h-full flex-col overflow-hidden bg-card p-4 transition-colors duration-500 hover:bg-amber-500/5 lg:p-5"
            >
              <div className="relative z-10 mb-6 flex items-start justify-between shrink-0">
                <ShieldCheck
                  className="h-8 w-8 text-amber-500 transition-colors duration-500 group-hover:text-amber-300 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="text-[2.5rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-amber-500/30 dark:mix-blend-screen lg:text-[3rem]">
                  D-04
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1 mt-auto">
                <div className="mb-2 shrink-0">
                  <p className="inline-block border-b-2 border-amber-500/30 pb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 transition-colors duration-500 group-hover:border-amber-300/50 group-hover:text-amber-300">
                    Control
                  </p>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.15rem] break-words text-slate-900 shrink-0">
                  Governance
                </h4>
                <p className="text-[12px] font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-amber-50">
                  A framework using Microsoft Purview: data ownership, quality standards, sensitivity labels, and lineage tracking.
                </p>
              </div>
            </motion.div>

            {/* Cell 5 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 md:col-span-2 lg:col-span-1 flex h-full flex-col overflow-hidden bg-foreground p-4 text-background transition-colors duration-500 lg:p-5"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10 mb-6 flex items-start justify-between shrink-0">
                <CheckCircle2 className="h-8 w-8 text-mint lg:h-10 lg:w-10" strokeWidth={1.5} />
                <span className="text-[2.5rem] font-black leading-none tracking-tighter text-background/10 lg:text-[3rem]">
                  D-05
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1 mt-auto">
                <div className="mb-2 shrink-0">
                  <p className="inline-block border-b-2 border-mint/30 pb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-mint">
                    Leadership
                  </p>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-[1.1] tracking-tight text-background lg:text-[1.15rem] break-words shrink-0">
                  Exec Summary
                </h4>
                <p className="text-[12px] font-semibold leading-relaxed text-background/80">
                  A one-page summary for leadership that drives decisions, not just informs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-background py-10 lg:py-0 lg:h-[calc(100vh-80px)] lg:min-h-[700px]">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 xl:px-8 pt-8 pb-4 h-full flex flex-col">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b-4 border-foreground pb-4 md:flex-row md:items-center shrink-0">
            <h3 className="mb-0 text-[clamp(1.5rem,4vw,3.5rem)] font-black uppercase leading-none tracking-tighter text-emerald-600">
              Our process
            </h3>
            <p className="max-w-sm border border-emerald-600/40 bg-emerald-600/10 p-3 text-xs font-black uppercase tracking-[0.2em] text-slate-900 md:text-right">
              Interviews, architectural design, and financial modeling —{" "}
              <span className="text-emerald-600">6–8 weeks to presentation.</span>
            </p>
          </div>

          <div className="relative flex flex-col flex-1 min-h-0 gap-0 border-[3px] border-foreground bg-muted/20 lg:flex-row">
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
              desc="We design the target state architecture on Fabric, prioritize initiatives, and build the roadmap via working sessions with your team."
              color="cyan"
            />
            <MethodPanel
              step={3}
              week="Week 5-6"
              title="Business Case"
              desc="We quantify capacity costs, implementation services, internal effort, and expected returns. We document assumptions so it's deeply credible."
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
      <section className="relative flex flex-col justify-center overflow-hidden border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-0 lg:h-[calc(100vh-80px)] lg:min-h-[700px]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 xl:px-8 py-6 lg:py-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
            {/* Left Column: Sticky Title */}
            <div className="md:col-span-5 lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32 z-10 pr-2 lg:pr-4">

                {/* Background 01 Watermark */}
                <div className="absolute -top-12 -left-4 -z-10 select-none text-[12rem] font-black leading-none tracking-tighter text-slate-50/80">
                  01
                </div>

                {/* Clean Eyebrow Badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 border border-emerald-500 px-2 py-1 bg-white/50 backdrop-blur-sm">
                  <FileQuestion size={12} className="text-emerald-500" strokeWidth={2} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-500">
                    Clarification
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-[2.25rem] font-black uppercase leading-[1] tracking-tight sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] text-slate-900">
                  Know
                  <br />
                  <span className="text-emerald-500">
                    Before
                  </span>
                  <br />
                  You Go
                </h2>

                {/* Separator Line */}
                <div className="h-[2px] w-12 bg-emerald-500 mt-4 mb-5"></div>

                {/* Description Text */}
                <p className="text-[13px] lg:text-sm font-medium leading-relaxed text-slate-600 mb-6 max-w-[85%]">
                  Clear answers to common questions about our strategy engagement, timeline, and deliverables.
                </p>

                {/* Neo-Brutalist Callout Card */}
                <div className="relative border-2 border-foreground bg-card shadow-[6px_6px_0_0_rgba(16,185,129,1)] w-full sm:w-[95%] transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
                  <div className="flex items-center gap-4 p-4 pl-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 border-emerald-500 bg-emerald-50">
                      <FileCheck className="h-5 w-5 text-emerald-600" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[13px] font-black uppercase tracking-widest text-slate-900 mb-0.5">
                        3 KEY QUESTIONS
                      </h4>
                      <p className="text-[11px] font-bold text-slate-600">
                        Everything you need to know.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: FAQ Items */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col h-full max-h-[60vh] lg:max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-col gap-4">
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
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t-[3px] border-slate-200/60 shrink-0">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[4px_4px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-0.5 transition-all duration-300">
                    <ShieldCheck size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Credible ROI</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[4px_4px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-0.5 transition-all duration-300">
                    <Target size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Actionable Strategy</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 border-slate-300 bg-white text-slate-700 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[4px_4px_0_0_rgba(16,185,129,1)] group-hover:-translate-y-0.5 transition-all duration-300">
                    <Lightbulb size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">Executive Buy-In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services and Extreme CTA Section */}
      <CTASection />
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
      className={`group/panel relative flex h-full flex-1 flex-col overflow-hidden border-b border-l border-foreground/30 bg-card shadow-sm transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:border-foreground hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] lg:flex-row lg:border-b-0 lg:border-l-0 lg:border-r dark:hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]`}
    >
      {/* Twisted Vertical Bar */}
      <div
        className={`flex items-center justify-between border-r border-border/50 bg-muted/40 p-3 lg:p-4 lg:flex-col ${accent.bar} min-w-[48px] lg:min-w-[56px] transition-colors duration-500 group-hover/panel:text-white`}
      >
        <span className="text-2xl font-black text-foreground/30 opacity-80 transition-colors group-hover/panel:text-white lg:text-3xl">
          {num}
        </span>
        <div className="mt-auto rotate-180 whitespace-nowrap text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-4 transition-transform duration-500 group-hover/panel:-translate-y-1 md:p-5 lg:p-6 justify-center">
        <h4 className="mb-2 pr-2 text-[15px] font-black uppercase leading-[1.1] tracking-tight lg:text-base text-slate-900">
          {title}
        </h4>
        <p className="mt-2 text-[12px] font-semibold leading-relaxed text-slate-700 lg:text-[13px]">
          {desc}
        </p>
      </div>

      {/* Massive subtle background number */}
      <div
        className={`pointer-events-none absolute -bottom-4 -right-4 select-none text-[6rem] font-black leading-[0.7] text-foreground/5 dark:text-foreground/10 ${accent.num} transition-all duration-700 group-hover/panel:scale-110 lg:text-[8rem]`}
      >
        {num}
      </div>
    </motion.div>
  );
}

export function FAQItem({ q, a, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <details className="group relative cursor-pointer overflow-hidden border-2 border-foreground bg-card transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] shadow-none [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-3 p-4 outline-none md:p-5">
        <div className="flex items-center gap-4">
          <span className="hidden text-3xl font-black text-emerald-600/30 sm:block">{num}</span>
          <span className="text-[13px] font-black uppercase leading-[1.2] tracking-normal text-slate-900 sm:text-[15px]">{q}</span>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-foreground bg-transparent text-foreground transition-all duration-300 group-open:bg-emerald-600 group-open:text-white md:h-10 md:w-10">
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-open:rotate-90 md:h-5 md:w-5" />
        </div>
      </summary>

      <div className="relative z-10 border-t-2 border-foreground bg-foreground p-4 md:p-5 text-[13px] font-semibold leading-relaxed text-white md:text-sm duration-300 animate-in fade-in slide-in-from-top-4">
        <div className="absolute top-0 left-6 -translate-y-1/2 bg-emerald-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
          Answer
        </div>
        <p className="border-l-2 border-emerald-600 pl-4">
          {a}
        </p>
      </div>
    </details>
  );
}
