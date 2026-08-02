"use client";

import {
  ArrowRight,
  Database,
  Search,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CaseStudySection() {
  return (
    <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-background lg:h-[calc(100vh-80px)] min-h-[700px] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* ── Full-height flex column fills the section ── */}
      <div className="relative z-10 flex flex-col w-full h-full px-4 xl:px-8 2xl:px-12 pt-8 pb-4 max-w-[1536px] mx-auto">

        {/* ── Header — shrinks to its natural height ── */}
        <div className="shrink-0 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[3px] border-emerald-600 pb-5 mb-4">
          <h3 className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-[#1b2b36]">
            How we built a data strategy for a<br className="hidden md:block" /> multi-company construction group.
          </h3>
          <div className="shrink-0">
            <Link
              href="/industries/construction-fleet"
              className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1b2b36] hover:bg-emerald-600 hover:text-white transition-all bg-emerald-100 px-5 py-2.5 rounded-full border-2 border-emerald-600 shadow-[2px_2px_0_0_#1b2b36] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_#1b2b36]"
            >
              Construction &amp; Fleet
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Grid wrapper — flex-1 fills all remaining height ── */}
        <div className="flex-1 min-h-0 border-[3px] border-foreground p-[2px] bg-foreground shadow-[12px_12px_0px_0px_rgba(16,185,129,0.2)]">
          {/*
            grid-rows-2 forces two equal rows on desktop.
            h-full propagates the height into the grid so both rows
            together fill exactly the available space.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-[2px] h-full">

            {/* ── Cell 1: Situation ── */}
            <div className="relative bg-card p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[9rem] lg:text-[13rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none select-none translate-x-4 translate-y-6">01</div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-emerald-600 shrink-0" strokeWidth={2} />
                  <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-[#1b2b36]">The Situation</h4>
                </div>
                <div className="h-[3px] w-10 bg-emerald-500 mb-5" />
                <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-700 max-w-lg">
                  A PE-backed fire protection contractor had grown through acquisition. Five regional business units, each with their own ERP, different job costing practices, and no consolidated financial view.
                </p>
              </div>

              <div className="relative z-10 border-l-4 border-emerald-500 pl-5 bg-emerald-50/70 py-4 pr-5">
                <p className="text-sm lg:text-base font-bold text-slate-700 leading-relaxed">
                  The CFO needed unified reporting for board meetings — but couldn&apos;t get consistent numbers from any two business units.
                </p>
              </div>
            </div>

            {/* ── Cell 2: What We Built ── */}
            <div className="relative bg-card p-8 lg:p-12 flex flex-col overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[9rem] lg:text-[13rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none select-none translate-x-4 translate-y-6">02</div>

              <div className="relative z-10 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-6 w-6 text-blue-600 shrink-0" strokeWidth={2} />
                  <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-[#1b2b36]">What We Built</h4>
                </div>
                <div className="h-[3px] w-10 bg-blue-500 mb-5" />
              </div>

              {/* 2×2 mini-grid — flex-1 fills remaining cell height */}
              <div className="relative z-10 grid grid-cols-2 gap-3 lg:gap-4 flex-1 min-h-0">
                {[
                  { label: "Current State", text: "7 source systems, 14 definitions of \"revenue,\" zero shared data infrastructure." },
                  { label: "Target State",  text: "Microsoft Fabric with OneLake. Lakehouse for consolidated data. Power BI semantic model." },
                  { label: "Business Case", text: "$340K annual savings from eliminated reconciliation. 18-month payback period." },
                  { label: "Alignment",     text: "Executive team fully onboarded with a phased implementation roadmap." },
                ].map(({ label, text }) => (
                  <div key={label} className="bg-slate-50 p-4 lg:p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                    <strong className="text-blue-700 uppercase text-[10px] tracking-widest block mb-2">{label}</strong>
                    <span className="text-sm lg:text-[15px] font-bold text-slate-800 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Cell 3: Solution (dark) ── */}
            <div className="relative bg-[#0A2518] p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />

              <div className="relative z-10 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" strokeWidth={2} />
                  <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-white">The Solution</h4>
                </div>
                <div className="h-[3px] w-10 bg-emerald-500 mb-5" />
              </div>

              <blockquote className="relative z-10 flex-1 flex items-center">
                <p className="text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed text-white border-l-4 border-emerald-400 pl-6">
                  A comprehensive enterprise data strategy that unified disparate ERPs into a single source of truth on Microsoft Fabric — with financial justification, architectural blueprint, and phased execution plan.
                </p>
              </blockquote>

              <div className="relative z-10 shrink-0 flex flex-wrap gap-2">
                {["Microsoft Fabric", "OneLake", "Power BI", "Phased Delivery"].map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Cell 4: Outcome ── */}
            <div className="relative bg-card p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[9rem] lg:text-[13rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none select-none translate-x-4 translate-y-6">04</div>

              <div className="relative z-10 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-violet-600 shrink-0" strokeWidth={2} />
                  <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-[#1b2b36]">The Outcome</h4>
                </div>
                <div className="h-[3px] w-10 bg-violet-500 mb-5" />
              </div>

              {/* Big stats — flex-1 expands to fill middle space */}
              <div className="relative z-10 flex items-center gap-10 lg:gap-16 flex-1">
                <div className="flex flex-col">
                  <span className="text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-black text-violet-600 leading-none tracking-tighter">2h</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mt-2">Board Deck<br />Generation</span>
                </div>
                <div className="w-[2px] h-20 bg-slate-200 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-black text-violet-600 leading-none tracking-tighter">16w</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mt-2">To Phase 1<br />Value Delivery</span>
                </div>
              </div>

              <div className="relative z-10 shrink-0 border-t border-slate-200 pt-5">
                <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-700">
                  Board reporting time reduced from 2 weeks to 2 hours. A clear path to enterprise-wide data maturity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
