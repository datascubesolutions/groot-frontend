// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
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
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import CaseStudySection from "./components/CaseStudySection";
import NextStepsSection from "./components/NextStepsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideAndPop = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function MaturityAssessment() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-forest/30">
      <HeroSection />


      {/* NEW PROBLEM SECTION REPLACEMENT */}
      <section className="relative z-30 flex flex-col border-t-2 border-b-2 border-foreground bg-card py-8 lg:py-8 lg:min-h-[calc(100vh-80px)]">
        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 flex flex-col gap-5 lg:gap-4 lg:my-auto">
          {/* Row 1: The Cost of Assuming Readiness */}
          <div className="flex flex-col lg:flex-row w-full bg-muted/40 rounded-xl border border-border shadow-sm overflow-hidden relative">
            {/* Thick left border */}
            <div className="w-2.5 bg-[#0A2518] absolute left-0 top-0 bottom-0 z-10"></div>

            {/* Left Content */}
            <div className="w-full lg:w-[45%] p-4 lg:p-5 pl-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#0A2518]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A2518]">
                  What we see in the field
                </span>
              </div>
              <h3 className="font-serif text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[#0A2518] mb-3">
                The Cost of<br />Assuming<br />Readiness.
              </h3>
              <p className="text-sm leading-relaxed text-gray-800 font-medium max-w-[90%]">
                Most organizations drastically overestimate their data maturity. When you build advanced analytics on a fractured foundation, the results are predictably chaotic.
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[55%] p-3 flex items-stretch">
              <div className="w-full bg-rose-950/10 rounded-xl p-5 lg:p-6 relative overflow-hidden flex flex-col justify-center border border-rose-900/20">
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white shadow-sm">
                    <Activity size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-rose-600">
                    Infrastructure Risk
                  </span>
                </div>

                <h4 className="text-base lg:text-lg font-black uppercase tracking-tight text-[#1b2b36] mb-1.5 relative z-10">
                  The Pipeline That Fails Every Monday
                </h4>

                <p className="text-sm leading-relaxed text-gray-800 mb-2 relative z-10 w-full lg:max-w-[75%]">
                  Your Data Factory pipeline fails again. The error says &quot;null reference in CustomerID transformation.&quot; Someone added a new customer type in the source ERP that your pipeline doesn&apos;t handle. This is the third time this month. There&apos;s no schema drift detection, no data quality rules, no proactive alerting.
                </p>

                <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2 relative z-10 w-full lg:max-w-[75%]">
                  <AlertCircle size={14} className="text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-rose-700 leading-snug">
                    You find out when Finance calls asking why the Power BI dashboard is blank.
                  </p>
                </div>

                {/* SVG Background - Highly Detailed Pink Illustration */}
                <div className="absolute right-0 top-0 bottom-0 w-[45%] max-w-[320px] pointer-events-none hidden lg:flex items-center justify-end pr-2 overflow-hidden z-0 rounded-r-xl">

                  {/* Dot Grid Background */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f43f5e 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                  <svg viewBox="0 0 100 125" className="w-full h-full max-h-[90%] text-rose-300 relative z-10" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMaxYMid meet">

                    {/* Database Cylinder */}
                    <g className="translate-y-[-5px]">
                      <path d="M50 15 c 12 0 18 2 18 4 v 18 c 0 2 -6 4 -18 4 s -18 -2 -18 -4 v -18 c 0 -2 6 -4 18 -4" fill="#FFF1F2" stroke="currentColor" strokeWidth="1.5" />
                      <ellipse cx="50" cy="19" rx="18" ry="4" stroke="currentColor" strokeWidth="1.5" fill="#FFE4E6" />
                      <path d="M32 27 c 0 2 6 4 18 4 s 18 -2 18 -4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M32 35 c 0 2 6 4 18 4 s 18 -2 18 -4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </g>

                    {/* Dashed Connecting Lines & Arrows */}
                    <path d="M30 65 v -15 a 5 5 0 0 1 5 -5 h 13" strokeDasharray="2 3" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <polygon points="46,43 50,45 46,47" fill="currentColor" stroke="none" />

                    <path d="M70 65 v -15 a 5 5 0 0 0 -5 -5 h -13" strokeDasharray="2 3" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <polygon points="54,43 50,45 54,47" fill="currentColor" stroke="none" />

                    {/* Danger Triangle */}
                    <g className="translate-y-[-2px]">
                      <polygon points="50,48 68,75 32,75" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="2" strokeLinejoin="round" />
                      <rect x="49" y="55" width="2" height="10" fill="#F43F5E" stroke="none" rx="1" />
                      <circle cx="50" cy="70" r="1.5" fill="#F43F5E" stroke="none" />
                    </g>

                    {/* Arrow down to Browser */}
                    <path d="M50 78 v 10" strokeDasharray="2 3" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <polygon points="48,86 52,86 50,90" fill="currentColor" stroke="none" />

                    {/* Browser Window */}
                    <g className="translate-y-[2px]">
                      <rect x="22" y="88" width="56" height="34" rx="3" fill="#FFF5F5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 96 h 56" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="27" cy="92" r="1.2" fill="currentColor" stroke="none" />
                      <circle cx="31" cy="92" r="1.2" fill="currentColor" stroke="none" />
                      <circle cx="35" cy="92" r="1.2" fill="currentColor" stroke="none" />

                      {/* Chart Bars inside Browser */}
                      <rect x="28" y="110" width="5" height="8" fill="#FDA4AF" stroke="none" rx="1" />
                      <rect x="35" y="103" width="5" height="15" fill="#FB7185" stroke="none" rx="1" />
                      <rect x="42" y="99" width="5" height="19" fill="#F43F5E" stroke="none" rx="1" />

                      {/* Lines on right side */}
                      <rect x="52" y="103" width="20" height="3" fill="#FECACA" stroke="none" rx="1.5" />
                      <rect x="52" y="112" width="14" height="4" fill="#FEE2E2" stroke="none" rx="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Baseline Disconnect Telemetry */}
          <div className="w-full bg-muted/40 rounded-xl border border-border shadow-sm p-4 flex flex-col xl:flex-row gap-4 lg:items-center">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A2518] text-white">
                  <BarChart3 size={14} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0A2518]">
                  Baseline Disconnect Telemetry
                </h4>
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-between items-end gap-3 w-full mt-1">
                {/* Metric 1 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-gray-700 whitespace-nowrap tracking-wider">Perceived Tech Readiness</span>
                  <span className="text-[1.75rem] font-black text-[#0A2518] leading-none">85%</span>
                  <div className="h-2 w-16 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-[#0A2518] w-[85%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-gray-700 whitespace-nowrap tracking-wider">Actual Tech Readiness</span>
                  <span className="text-[1.75rem] font-black text-rose-600 leading-none">32%</span>
                  <div className="h-2 w-16 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-rose-600 w-[32%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-gray-700 whitespace-nowrap tracking-wider">Perceived Data Trust</span>
                  <span className="text-[1.75rem] font-black text-[#2E4049] leading-none">70%</span>
                  <div className="h-2 w-16 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-[#2E4049] w-[70%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-gray-700 whitespace-nowrap tracking-wider">Actual Data Quality</span>
                  <span className="text-[1.75rem] font-black text-amber-500 leading-none">28%</span>
                  <div className="h-2 w-16 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-amber-500 w-[28%] rounded-full"></div>
                  </div>
                </div>
                {/* Metric 5 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-gray-700 whitespace-nowrap tracking-wider">Governance Coverage</span>
                  <span className="text-[1.75rem] font-black text-[#0A2518] leading-none">15%</span>
                  <div className="h-2 w-16 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-[#0A2518] w-[15%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[260px] bg-[#0A2518] rounded-xl p-4 flex items-start gap-3 shrink-0 border border-[#0A2518]">
              <div className="p-2 bg-white/10 rounded-full text-white shadow-sm shrink-0">
                <Lightbulb size={16} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-300">Key Insight</span>
                <p className="text-xs font-medium leading-relaxed text-white/90">
                  Organizations consistently rate their readiness <strong className="text-white">2-3x higher</strong> than reality before objective assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Data Management & Semantic Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Card 02 */}
            <div className="bg-[#0A2518] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between h-full border border-gray-800">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500">
                    <Database size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                    Data Management
                  </span>
                </div>

                <h4 className="text-base lg:text-lg font-black uppercase tracking-tight text-white">
                  Six Customer IDs, Zero Master Data
                </h4>

                <p className="text-sm leading-relaxed text-white/85 max-w-[95%]">
                  You need to join customers from Salesforce with orders from your ERP. Simple, right? Except Salesforce uses &quot;AccountID,&quot; the ERP uses &quot;CustomerNumber,&quot; and there&apos;s no master data management.
                </p>
              </div>

              <div className="relative z-10 mt-4 border border-amber-500/30 bg-amber-500/10 p-3 rounded-xl flex items-start gap-2.5">
                <div className="text-amber-400 shrink-0 mt-0.5">
                  <Users size={15} />
                </div>
                <p className="text-xs font-medium leading-relaxed text-amber-200">
                  The same customer appears <strong className="text-amber-300">47 different ways</strong> across systems. Your Data Engineer spent three days building a fuzzy match that&apos;s 85% accurate. Everyone pretends that&apos;s good enough.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-card rounded-xl border border-border shadow-sm p-5 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="relative z-10 flex flex-col gap-2 w-full lg:max-w-[58%]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#A855F7] text-white shadow-sm">
                    <Network size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9333EA]">
                    Semantic Governance
                  </span>
                </div>

                <h4 className="text-base lg:text-lg font-black uppercase tracking-tight text-[#1b2b36]">
                  Nobody Knows Where the Number Came From
                </h4>

                <p className="text-sm leading-relaxed text-gray-800">
                  Finance asks why the revenue number in the executive Power BI dashboard doesn&apos;t match the revenue in the sales report. Both are technically &quot;correct.&quot; The executive dashboard excludes returns that haven&apos;t been processed. The sales report includes pending orders.
                </p>
              </div>

              <div className="relative z-10 mt-4 bg-purple-50 p-3 rounded-xl flex items-start gap-2.5 w-full lg:max-w-[58%] border border-purple-200">
                <FileQuestion size={16} className="text-[#A855F7] shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-purple-700 leading-snug">
                  Neither is wrong, but there&apos;s no canonical definition documented anywhere in your semantic model.
                </p>
              </div>

              {/* Fixed SVG Background - Highly Detailed Purple Illustration */}
              <div className="absolute right-0 top-0 bottom-0 w-[50%] max-w-[280px] pointer-events-none z-0 overflow-hidden hidden lg:flex items-center justify-end pr-2 rounded-br-xl">
                <svg viewBox="0 0 100 100" className="w-full h-full max-h-[90%] text-purple-300" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMaxYMid meet">

                  {/* Background Crosshair/Circle accents */}
                  <circle cx="50" cy="30" r="28" stroke="currentColor" opacity="0.15" strokeWidth="0.5" strokeDasharray="4 4" />
                  <path d="M50 0v100M0 30h100" stroke="currentColor" opacity="0.1" strokeWidth="0.5" />

                  {/* Top Circle */}
                  <circle cx="50" cy="30" r="14" fill="#F3E8FF" stroke="currentColor" strokeWidth="1.5" />
                  {/* Question Mark */}
                  <text x="50" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#9333EA" stroke="none">?</text>

                  {/* Connections */}
                  <path d="M50 48v10" strokeDasharray="2 3" />
                  <path d="M25 58h50" strokeDasharray="2 3" />
                  <path d="M25 58v10" strokeDasharray="2 3" />
                  <path d="M75 58v10" strokeDasharray="2 3" />

                  {/* Arrow pointing UP to question mark */}
                  <polygon points="47,47 53,47 50,44" fill="currentColor" stroke="none" />
                  {/* Arrows pointing down to boxes */}
                  <polygon points="22,66 28,66 25,69" fill="currentColor" stroke="none" />
                  <polygon points="72,66 78,66 75,69" fill="currentColor" stroke="none" />

                  {/* Left Node - Dollar Box */}
                  <rect x="13" y="70" width="24" height="24" rx="4" fill="#F3E8FF" stroke="currentColor" />
                  <text x="25" y="87" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9333EA" stroke="none">$</text>

                  {/* Right Node - Chart Box */}
                  <rect x="63" y="70" width="24" height="24" rx="4" fill="#F3E8FF" stroke="currentColor" />
                  {/* Chart Bars */}
                  <rect x="68" y="82" width="4" height="7" fill="#C084FC" stroke="none" rx="1" />
                  <rect x="73" y="78" width="4" height="11" fill="#A855F7" stroke="none" rx="1" />
                  <rect x="78" y="74" width="4" height="15" fill="#9333EA" stroke="none" rx="1" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
      <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-10 lg:min-h-[calc(100vh-80px)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 lg:my-auto">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b-4 border-forest pb-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-3 inline-block border border-forest/30 bg-forest/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-forest lg:text-sm">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                Clarity over assumptions.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-forest bg-background/50 p-4 pl-5 text-sm font-bold leading-relaxed text-foreground/80 backdrop-blur-sm lg:text-base">
              Every assessment produces the same high-quality artifacts — no
              shortcuts, no templated scores. You get evidence, priorities, and
              a path forward.
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
                <PieChart
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
                    Six dimensions
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words">
                  Maturity Scorecard
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-emerald-50">
                  A scored assessment across six dimensions: Data Management,
                  Analytics Capability, Governance, Technology, Organization,
                  and Culture. Rated with clear evidence, not gut feel.
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
                <Target
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
                    Current vs target
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words">
                  Gap Analysis
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cyan-50">
                  For each dimension, we document where you are today vs. where
                  you need to be. Gaps prioritized by business impact, not ease
                  of implementation.
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
                <ShieldCheck
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
                    Architecture
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words">
                  Technical Findings
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-blue-50">
                  Specific observations from our review:
                  Fabric/Azure configuration, pipeline reliability, Power BI
                  semantic model design, security, and technical debt.
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
                <Lightbulb
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
                    Prioritized Path
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-[1.25rem] break-words">
                  Prioritized Recommendations
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-amber-50">
                  A prioritized set of recommendations with rationale and rough effort estimates. We explain why and in what order.
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
            <h3 className="mb-0 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tighter text-forest">
              Our process
            </h3>
            <p className="max-w-sm border border-forest/40 bg-forest/15 p-4 text-sm font-black uppercase tracking-[0.2em] text-foreground md:text-right">
              Interviews, technical review, and evidence-based scoring —{" "}
              <span className="text-forest">3–4 weeks to presentation.</span>
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
            {/* Method Panels */}
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



      {/* NEW BENTO BOX CASE STUDY SECTION */}
      <CaseStudySection />

      {/* FAQ Section - High Impact Neo-Brutalist */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-card py-12 lg:py-20 lg:min-h-[calc(100vh-80px)]">
        {/* Dramatic grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:64px_64px]" />
        
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
                <div className="mb-6 inline-flex items-center gap-2 border border-rose-500 px-3 py-1.5 bg-white/50 backdrop-blur-sm">
                  <FileQuestion size={16} className="text-rose-500" strokeWidth={2} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-rose-500">
                    Clarification
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-[2.5rem] font-black uppercase leading-[1] tracking-tight sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] text-slate-900">
                  Know
                  <br />
                  <span className="text-rose-500">
                    Before
                  </span>
                  <br />
                  You Go
                </h2>

                {/* Separator Line */}
                <div className="h-0.5 w-16 bg-rose-500 mt-6 mb-8"></div>

                {/* Description Text */}
                <p className="text-base font-medium leading-relaxed text-slate-600 mb-8 max-w-[85%]">
                  Clear answers to common questions about our assessment methodology, timeline, and deliverables.
                </p>

                {/* Sleek Dark Card */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-xl w-full sm:w-[95%]">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.6)]"></div>
                  <div className="flex items-center gap-4 p-5 sm:p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10">
                      <FileCheck className="h-6 w-6 text-rose-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-white mb-0.5 tracking-wide">
                        3 KEY QUESTIONS
                      </h4>
                      <p className="text-xs font-medium text-slate-300">
                        Everything you need to know before we begin.
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
                    q: "How is this different from a Microsoft assessment?",
                    a: "Microsoft's assessments focus on Azure adoption. We evaluate your organization's capabilities independent of tool vendor. We'll tell you if Fabric isn't the right choice — Microsoft won't."
                  },
                  {
                    q: "Who should be involved from our side?",
                    a: "Typically 8-12 stakeholders: CDO or equivalent, IT leadership, business unit leaders, and 3-4 key data practitioners (your Data Engineers, Power BI developers, analysts)."
                  },
                  {
                    q: "What if we already know our gaps?",
                    a: "You might know some. But assessments consistently reveal blind spots — capabilities teams assume exist but don't, or problems that look technical but are actually organizational."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* Blank Space Filler - Perfect Icons */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t-[3px] border-slate-200/60">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:shadow-[6px_6px_0_0_rgba(225,29,72,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-rose-600 transition-colors duration-300">Unbiased Analysis</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:shadow-[6px_6px_0_0_rgba(225,29,72,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Target size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-rose-600 transition-colors duration-300">Actionable Strategy</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:shadow-[6px_6px_0_0_rgba(225,29,72,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Lightbulb size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-rose-600 transition-colors duration-300">Clear Path Forward</span>
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
        <h4 className="mb-4 pr-2 text-lg font-black uppercase leading-[1] tracking-tight lg:text-xl">
          {title}
        </h4>
        <p className="mt-auto text-[0.85rem] font-semibold leading-relaxed text-foreground/80 lg:text-sm">
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
    <details className="group relative cursor-pointer overflow-hidden border-[3px] border-foreground bg-card transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(225,29,72,1)] shadow-none [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-3 p-5 outline-none md:p-8">
        <div className="flex items-center gap-6">
          <span className="hidden text-5xl font-black text-rose-600/30 sm:block">{num}</span>
          <span className="text-base font-black uppercase leading-[1.25] tracking-normal text-foreground sm:text-xl md:text-2xl">{q}</span>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-transparent text-foreground transition-all duration-300 group-open:bg-rose-600 group-open:text-white md:h-12 md:w-12">
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-open:rotate-90 md:h-6 md:w-6" />
        </div>
      </summary>
      
      <div className="relative z-10 border-t-[3px] border-foreground bg-foreground p-6 md:p-8 text-base font-semibold leading-relaxed text-background md:text-lg duration-300 animate-in fade-in slide-in-from-top-4">
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-rose-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
          Answer
        </div>
        <p className="border-l-[3px] border-rose-600 pl-5">
          {a}
        </p>
      </div>
    </details>
  );
}
