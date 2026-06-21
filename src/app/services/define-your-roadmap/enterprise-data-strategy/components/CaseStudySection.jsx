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
 <section className="relative flex flex-col justify-center border-t-2 border-b-2 border-foreground bg-[#f8faf9] py-20 lg:py-0 min-h-[800px] overflow-hidden w-full">
 {/* Subtle Blueprint Background Grid */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

 <div className="container relative z-10 mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full py-8 lg:py-10">
 {/* Header Block */}
 <div className="mb-6 lg:mb-8 flex flex-col justify-between gap-4 border-b-[3px] border-emerald-600 pb-4 md:flex-row md:items-end shrink-0">
 <div className="max-w-4xl">
 <h3 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-black uppercase leading-[1.05] tracking-tighter text-[#1b2b36]">
 How we built a data strategy for a multi-company construction group.
 </h3>
 </div>
 <div className="flex shrink-0 pb-1">
 <Link 
 href="/industries/construction-fleet" 
 className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-100 px-5 py-2.5 border-[2px] border-emerald-200 hover:border-emerald-300 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.2)]"
 >
 Construction & Fleet
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
 </Link>
 </div>
 </div>

 {/* Bento Grid - Fits nicely in the remaining height */}
 <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6 flex-1 min-h-[50vh] w-full">
 
 {/* Top Left: The Situation (6 cols) */}
 <div className="lg:col-span-6 lg:row-span-1 relative bg-white p-6 lg:p-8 border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(27,43,54,1)] flex flex-col justify-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
 <div className="absolute right-[-2%] top-[-5%] text-[6rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none transition-transform duration-500 group-hover:scale-110">01</div>
 
 <div className="flex items-center gap-3 mb-4 lg:mb-5 relative z-10">
 <div className="bg-emerald-50 p-2.5 border-2 border-emerald-100">
 <Database className="h-5 w-5 text-emerald-600" strokeWidth={2.5} />
 </div>
 <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Situation</h4>
 </div>
 
 <p className="text-[13px] lg:text-[15px] font-medium leading-relaxed text-slate-700 relative z-10">
 A PE-backed fire protection contractor had grown through acquisition. Five regional business units, each with their own ERP (mix of QuickBooks, Sage, and ServiceTitan for field ops), different job costing practices, and no consolidated financial view. The CFO needed unified reporting for board meetings but couldn't get consistent numbers. Manual report compilation took two weeks — and nobody trusted the final numbers.
 </p>
 </div>

 {/* Top Right: What We Built (6 cols) */}
 <div className="lg:col-span-6 lg:row-span-1 relative bg-white p-6 lg:p-8 border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(27,43,54,1)] flex flex-col justify-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
 <div className="absolute right-[-2%] top-[-5%] text-[6rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none transition-transform duration-500 group-hover:scale-110">02</div>
 
 <div className="flex items-center gap-3 mb-4 lg:mb-5 relative z-10">
 <div className="bg-blue-50 p-2.5 border-2 border-blue-100">
 <Search className="h-5 w-5 text-blue-600" strokeWidth={2.5} />
 </div>
 <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">What We Built</h4>
 </div>
 
 <div className="flex flex-col gap-3 relative z-10">
 <div className="bg-slate-50/80 p-3 lg:p-4 border-l-4 border-blue-500 shadow-sm flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
 <strong className="text-blue-700 uppercase text-[10px] font-black tracking-widest sm:w-1/3 shrink-0 sm:mt-0.5">Current State</strong> 
 <span className="text-[12px] lg:text-[13px] font-semibold text-slate-800 leading-snug">7 source systems, 14 different definitions of "revenue," zero shared data infrastructure.</span>
 </div>
 <div className="bg-slate-50/80 p-3 lg:p-4 border-l-4 border-emerald-500 shadow-sm flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
 <strong className="text-emerald-700 uppercase text-[10px] font-black tracking-widest sm:w-1/3 shrink-0 sm:mt-0.5">Target State</strong> 
 <span className="text-[12px] lg:text-[13px] font-semibold text-slate-800 leading-snug">Microsoft Fabric with OneLake as unified storage. Lakehouse for consolidated data. Power BI semantic model.</span>
 </div>
 <div className="bg-slate-50/80 p-3 lg:p-4 border-l-4 border-indigo-500 shadow-sm flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
 <strong className="text-indigo-700 uppercase text-[10px] font-black tracking-widest sm:w-1/3 shrink-0 sm:mt-0.5">Business Case</strong> 
 <span className="text-[12px] lg:text-[13px] font-semibold text-slate-800 leading-snug">$340K annual savings from eliminated reconciliation. $180K implementation. 18-month payback.</span>
 </div>
 </div>
 </div>

 {/* Bottom Left: 18-Month Roadmap (7 cols) */}
 <div className="lg:col-span-7 lg:row-span-1 relative bg-[#0A2518] p-6 lg:p-8 border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(27,43,54,1)] flex flex-col justify-center text-background overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
 <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--emerald-600)/0.2),transparent_70%)] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
 
 <div className="flex items-center gap-3 mb-5 lg:mb-6 relative z-10">
 <div className="bg-emerald-900/50 p-2.5 border-2 border-emerald-500/30">
 <ShieldCheck className="h-5 w-5 text-emerald-400" strokeWidth={2.5} />
 </div>
 <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-white">18-Month Roadmap</h4>
 </div>
 
 <div className="flex flex-col gap-4 relative z-10 w-full">
 <div className="flex gap-4 items-start">
 <div className="w-10 h-10 shrink-0 bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50 flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(16,185,129,0.3)]">1</div>
 <div className="pt-0.5">
 <h5 className="text-emerald-400 text-[11px] lg:text-xs font-black uppercase tracking-widest mb-1.5 border-b border-emerald-500/30 pb-1 inline-block">Months 1-4</h5>
 <p className="text-white text-[13px] lg:text-[14px] font-semibold leading-relaxed">Fabric implementation, integration from two largest ERPs, executive dashboard.</p>
 </div>
 </div>
 <div className="flex gap-4 items-start">
 <div className="w-10 h-10 shrink-0 bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50 flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(16,185,129,0.3)]">2</div>
 <div className="pt-0.5">
 <h5 className="text-emerald-400 text-[11px] lg:text-xs font-black uppercase tracking-widest mb-1.5 border-b border-emerald-500/30 pb-1 inline-block">Months 5-10</h5>
 <p className="text-white text-[13px] lg:text-[14px] font-semibold leading-relaxed">Remaining integrations, job costing analytics, Samsara fleet data integration.</p>
 </div>
 </div>
 <div className="flex gap-4 items-start">
 <div className="w-10 h-10 shrink-0 bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50 flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(16,185,129,0.3)]">3</div>
 <div className="pt-0.5">
 <h5 className="text-emerald-400 text-[11px] lg:text-xs font-black uppercase tracking-widest mb-1.5 border-b border-emerald-500/30 pb-1 inline-block">Months 11-18</h5>
 <p className="text-white text-[13px] lg:text-[14px] font-semibold leading-relaxed">Vendor spend categorization, predictive equipment maintenance.</p>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom Right: Outcome (5 cols) */}
 <div className="lg:col-span-5 lg:row-span-1 relative bg-white p-6 lg:p-8 border-[3px] border-foreground shadow-[6px_6px_0px_0px_rgba(27,43,54,1)] flex flex-col justify-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
 <div className="absolute right-[-2%] top-[-5%] text-[6rem] lg:text-[10rem] font-black leading-none tracking-tighter text-slate-50 pointer-events-none transition-transform duration-500 group-hover:scale-110">04</div>
 
 <div className="flex items-center gap-3 mb-5 lg:mb-6 relative z-10">
 <div className="bg-violet-50 p-2.5 border-2 border-violet-100">
 <TrendingUp className="h-5 w-5 text-violet-600" strokeWidth={2.5} />
 </div>
 <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight text-[#1b2b36]">The Outcome</h4>
 </div>
 
 <div className="flex flex-col relative z-10 h-full justify-center">
 <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4 lg:gap-6 pb-6 mb-5 border-b-2 border-slate-100">
 <div className="flex flex-col">
 <div className="text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-black text-violet-600 leading-none tracking-tighter">2h</div>
 <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 leading-snug">Board Deck<br/>Generation</div>
 </div>
 <div className="hidden sm:block w-[1px] bg-slate-200 mt-1"></div>
 <div className="flex flex-col">
 <div className="text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-black text-violet-600 leading-none tracking-tighter">16w</div>
 <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 leading-snug">To Phase 1<br/>Value</div>
 </div>
 <div className="hidden sm:block w-[1px] bg-slate-200 mt-1"></div>
 <div className="flex flex-col w-full sm:w-auto mt-4 sm:mt-0">
 <div className="text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-black text-violet-600 leading-none tracking-tighter">3w</div>
 <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2 leading-snug">To Integrate<br/>Acquisition</div>
 </div>
 </div>
 <p className="text-[13px] lg:text-[14px] font-medium leading-relaxed text-slate-700">
 Strategy approved at board. Phase 1 completed in 16 weeks. Board deck now generates in 2 hours instead of 2 weeks. Fourth acquisition integrated in 3 weeks using established patterns.
 </p>
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
