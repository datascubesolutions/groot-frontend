"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ChevronRight, FileText, Layers, LineChart, Target } from "lucide-react";
import Link from "next/link";

const StrategyMockup = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl border border-white bg-gradient-to-br from-white/95 to-white/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.07)] backdrop-blur-xl overflow-hidden flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full blur-[50px] pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#1b3d2f]/5 flex items-center justify-center border border-[#1b3d2f]/10">
            <Target className="h-4 w-4 text-[#1b3d2f]" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#1b3d2f]/70">Strategic Plan</div>
            <div className="text-sm font-semibold text-slate-800">Enterprise Roadmap</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
        </div>
      </div>

      {/* Main Content - Roadmap Timeline */}
      <div className="flex-1 py-6 flex flex-col justify-center gap-6 z-10 relative">
        {/* Phase 1 */}
        <div className="flex items-start gap-4 group">
          <div className="flex flex-col items-center mt-1">
            <div className="w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-white shadow-[0_0_10px_rgba(16,185,129,0.3)] z-10 relative"></div>
            <div className="w-[2px] h-14 bg-gradient-to-b from-emerald-500 to-slate-200 -mt-1"></div>
          </div>
          <div className="flex-1 bg-white border border-slate-100 shadow-sm rounded-lg p-3 transition-colors group-hover:border-emerald-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Phase 01 • 90 Days</span>
              <span className="text-[10px] text-slate-500 font-semibold">100%</span>
            </div>
            <div className="text-sm font-semibold text-slate-800 mb-1">Foundation & Alignment</div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 w-full h-full"></div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="flex items-start gap-4 group">
          <div className="flex flex-col items-center mt-1">
            <div className="w-4 h-4 rounded-full bg-slate-200 border-[3px] border-white z-10 relative transition-colors group-hover:bg-emerald-400"></div>
            <div className="w-[2px] h-14 bg-slate-200 -mt-1"></div>
          </div>
          <div className="flex-1 bg-white/60 border border-slate-100 shadow-sm rounded-lg p-3 transition-colors group-hover:bg-white group-hover:border-emerald-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phase 02 • 180 Days</span>
              <span className="text-[10px] text-slate-400 font-semibold">In Progress</span>
            </div>
            <div className="text-sm font-semibold text-slate-600">Fabric Integration</div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="flex items-start gap-4 group">
          <div className="flex flex-col items-center mt-1">
            <div className="w-4 h-4 rounded-full bg-slate-200 border-[3px] border-white z-10 relative"></div>
          </div>
          <div className="flex-1 bg-slate-50/50 border border-slate-100 rounded-lg p-3 opacity-70">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phase 03 • 12 Months</span>
            </div>
            <div className="text-sm font-semibold text-slate-500">Advanced Analytics</div>
          </div>
        </div>
      </div>

      {/* Floating Metrics */}
      <div className="absolute right-[-10px] top-[40%] bg-white border border-slate-200 rounded-xl p-3 shadow-xl z-20 flex items-center gap-3">
        <LineChart className="w-5 h-5 text-emerald-500" />
        <div>
          <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Projected ROI</div>
          <div className="text-sm font-bold text-slate-800">245%</div>
        </div>
      </div>
    </div>
  );
};

export default function CTASection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#f0f7f4] py-16 md:py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-100/40 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Left Column - Content */}
          <div className="w-full lg:w-[55%] flex flex-col">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#1b3d2f]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md w-max">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1b3d2f]/10 text-[#1b3d2f]">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Execution Starts Here
              </span>
            </div>
            
            <h2 className="mb-4 text-[2.5rem] font-black uppercase leading-[0.95] tracking-tight text-[#0a3622] sm:text-5xl lg:text-[4rem]">
              Strategy that <br />
              <span className="text-emerald-600">gets executed.</span>
            </h2>
            
            <p className="mb-10 text-[1.1rem] leading-relaxed text-slate-700 max-w-xl font-medium">
              You don't need another vision deck. You need a Microsoft Fabric strategy that aligns stakeholders, justifies investment, and guides implementation.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex flex-col gap-1.5 bg-white/80 border border-white p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1b3d2f]" strokeWidth={2.5} />
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">Executive-Ready</h4>
                </div>
                <p className="text-[12px] text-slate-600 leading-snug pl-6">Clear financial models and business cases for CFO approval.</p>
              </div>
              <div className="flex flex-col gap-1.5 bg-white/80 border border-white p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1b3d2f]" strokeWidth={2.5} />
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">Actionable Roadmap</h4>
                </div>
                <p className="text-[12px] text-slate-600 leading-snug pl-6">90-day milestones and prioritized phases to ensure delivery.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/contact?service=data-strategy" passHref className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative flex w-full items-center justify-center gap-4 rounded-full border border-slate-700 bg-[#182921] px-8 py-7 text-[12px] sm:text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_25px_rgba(24,41,33,0.35)] transition-all hover:bg-black"
                >
                  Start a Strategy Conversation
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:bg-white/20 group-hover:translate-x-1">
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Button>
              </Link>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-2">
                Stop presenting. <br />
                <span className="text-[#1b3d2f]">Start executing.</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
            <StrategyMockup />
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl p-4 flex items-center gap-4 z-20">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Alignment</div>
                <div className="text-sm font-bold text-slate-800">IT + Business</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
