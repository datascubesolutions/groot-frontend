"use client";

import {
  Database,
  Search,
  TrendingUp,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CaseStudySection() {
  return (
    <section className="relative flex flex-col justify-center border-t-2 border-b-2 border-foreground bg-background py-10 lg:py-0 lg:h-[calc(100vh-80px)] min-h-[700px] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 flex flex-col justify-center h-full py-6 lg:py-8">
        {/* Header Block */}
        <div className="mb-6 flex flex-col justify-between gap-5 border-b-[3px] border-emerald-600 pb-5 md:flex-row md:items-end shrink-0 mt-2">
          <div className="max-w-4xl">
            <h3 className="text-[2.25rem] font-black uppercase leading-[0.9] tracking-tighter text-[#1b2b36] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] max-w-[95%]">
              How we built a data strategy for a <br className="hidden md:block" /> multi-company construction group.
            </h3>
          </div>
          <div className="flex shrink-0 pb-1">
            <Link 
              href="/industries/construction-fleet" 
              className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-5 py-2.5 rounded-full border border-emerald-200"
            >
              Construction & Fleet
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 2x2 Grid Block */}
        <div className="flex-1 min-h-0 bg-foreground border-[3px] border-foreground p-[2px] shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.25)] flex flex-col mb-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] h-full flex-1">
            
            {/* Cell 1: Situation */}
            <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
              <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">01</div>
              <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                <Database className="h-6 w-6 text-emerald-600" strokeWidth={2.5} />
                <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Situation</h4>
              </div>
              <p className="text-[15px] lg:text-base font-semibold leading-relaxed text-slate-700 relative z-10 max-w-[95%]">
                A PE-backed fire protection contractor had grown through acquisition. Five regional business units, each with their own ERP, different job costing practices, and no consolidated financial view. The CFO needed unified reporting for board meetings but couldn't get consistent numbers.
              </p>
            </div>

            {/* Cell 2: What We Built */}
            <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
              <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">02</div>
              <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                <Search className="h-6 w-6 text-blue-600" strokeWidth={2.5} />
                <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">What We Built</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 relative z-10">
                 <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                    <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Current State</strong> 
                    <span className="text-[13px] font-bold text-slate-800 leading-snug block">7 source systems, 14 different definitions of "revenue," zero shared data infrastructure.</span>
                 </div>
                 <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                    <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Target State</strong> 
                    <span className="text-[13px] font-bold text-slate-800 leading-snug block">Microsoft Fabric with OneLake. Lakehouse for consolidated data. Power BI semantic model.</span>
                 </div>
                 <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                    <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Business Case</strong> 
                    <span className="text-[13px] font-bold text-slate-800 leading-snug block">$340K annual savings from eliminated reconciliation. 18-month payback.</span>
                 </div>
                 <div className="bg-slate-50/80 p-4 rounded-md border border-slate-200 shadow-sm">
                    <strong className="text-blue-700 uppercase text-[11px] tracking-widest block mb-1.5">Alignment</strong> 
                    <span className="text-[13px] font-bold text-slate-800 leading-snug block">Executive team fully onboarded with a phased implementation roadmap.</span>
                 </div>
              </div>
            </div>

            {/* Cell 3: Recommendation (Dark Block) */}
            <div className="group relative bg-[#0A2518] p-6 md:p-8 lg:p-10 flex flex-col text-background overflow-hidden justify-center">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--emerald-600)/0.2),transparent_70%)] pointer-events-none"></div>
               
               <div className="flex items-center gap-3 mb-4 lg:mb-6 relative z-10">
                <ShieldCheck className="h-6 w-6 text-emerald-400" strokeWidth={2.5} />
                <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-background">The Solution</h4>
              </div>
              <p className="text-base lg:text-lg font-bold leading-relaxed text-white border-l-[3px] border-emerald-500 pl-5 lg:pl-6 relative z-10 max-w-[95%]">
                A comprehensive enterprise data strategy that unified disparate ERPs into a single source of truth on Microsoft Fabric. We provided the financial justification, the architectural blueprint, and the phased execution plan to make it happen.
              </p>
            </div>

            {/* Cell 4: Outcome */}
            <div className="group relative bg-card p-6 md:p-8 lg:p-10 flex flex-col overflow-hidden justify-center">
              <div className="absolute right-[-2%] top-[-5%] text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-100 pointer-events-none">04</div>
              <div className="flex items-center gap-3 mb-5 lg:mb-8 relative z-10">
                <TrendingUp className="h-6 w-6 text-violet-600" strokeWidth={2.5} />
                <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Outcome</h4>
              </div>
              
              <div className="flex flex-col relative z-10">
                <div className="mb-6 flex items-center gap-8 pb-6 border-b border-slate-200">
                  <div className="flex flex-col min-w-[120px]">
                    <div className="text-[3rem] lg:text-[4rem] font-black text-violet-600 leading-none tracking-tighter">2h</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mt-2">Board Deck Generation</div>
                  </div>
                  <div className="w-[1px] h-14 bg-slate-200"></div>
                  <div className="flex flex-col">
                    <div className="text-[3rem] lg:text-[4rem] font-black text-violet-600 leading-none tracking-tighter">16w</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mt-2">To Phase 1 Value</div>
                  </div>
                </div>
                <p className="text-[15px] lg:text-base font-semibold leading-relaxed text-slate-700 max-w-[90%]">
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
