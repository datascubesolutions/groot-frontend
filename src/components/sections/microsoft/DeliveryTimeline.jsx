// src/components/sections/microsoft/DeliveryTimeline.jsx
// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Calendar, ShieldCheck, Flag, ArrowRight } from "lucide-react";

export function DeliveryTimeline({
  title = "From Chaos to Clarity in 10 Weeks",
  subtitle = "A proven path. No endless discovery. Real deliverables, every phase.",
  timeline = [],
}) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="relative z-20 bg-slate-50 font-sans w-full border-t border-slate-200/60 py-16 lg:py-24 overflow-visible h-auto">
      
      <div className="container mx-auto px-6 max-w-[1320px] relative z-10 w-full h-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative w-full h-auto pb-10">
          
          {/* Left Summary Area - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-6 lg:mb-8 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0067B8] mb-4 shadow-sm">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Roadmap</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-4">
                {title}
              </h2>
              <p className="text-[15px] lg:text-base text-slate-600 font-medium leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-6 lg:p-8 border border-slate-800 shadow-2xl flex flex-col w-full relative overflow-hidden group">
              {/* Background glowing effects */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block w-max mb-4">
                  Fixed Scope Guarantee
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">10-Week Execution</h3>
                <p className="text-slate-400 text-[15px] font-medium leading-relaxed mb-6">
                  Structured phased delivery with dedicated Microsoft Fabric architects. No endless discovery, just results.
                </p>
              </div>

              {/* REAL CSS UI: Beautiful 10-Week Gantt Chart / Timeline Graphic */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-5 mb-6 relative z-10 flex flex-col gap-3 shadow-inner">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Timeline</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 flex items-center gap-1"><Flag className="w-3 h-3"/> GO LIVE</span>
                </div>
                
                {/* Track 1 */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 font-mono w-6">Wk1</span>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="w-1/4 h-full bg-blue-500/80 border-r border-slate-900" title="Discovery"></div>
                    <div className="w-1/4 h-full bg-slate-700" title="Pending"></div>
                    <div className="w-1/2 h-full bg-slate-800" title="Pending"></div>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 font-mono w-6">Wk4</span>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="w-1/4 h-full bg-transparent"></div>
                    <div className="w-1/2 h-full bg-indigo-500/80 border-r border-slate-900 shadow-[0_0_10px_rgba(99,102,241,0.3)] relative">
                      <div className="absolute inset-0 bg-white/20 w-1/2 animate-pulse"></div>
                    </div>
                    <div className="w-1/4 h-full bg-slate-700"></div>
                  </div>
                </div>
                
                {/* Track 3 */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 font-mono w-6">Wk8</span>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="w-1/2 h-full bg-transparent"></div>
                    <div className="w-1/2 h-full bg-emerald-500/80 shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-[14px] font-semibold text-slate-300 relative z-10">
                <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-3.5 rounded-xl border border-slate-700/50">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Audit-Ready Infrastructure
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-3.5 rounded-xl border border-slate-700/50">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Full Codebase Ownership
                </div>
              </div>
            </div>
          </div>

          {/* Right Timeline Steps - Native Scroll */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 pb-20 relative before:absolute before:inset-0 before:ml-[31px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent h-auto">
            {timeline.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[11px] md:static md:left-auto md:mx-auto z-20">
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1 relative z-10 bg-white hover:bg-slate-50/80 rounded-[1.5rem] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[13px] font-bold text-[#0067B8] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 flex items-center gap-2 shrink-0 shadow-sm">
                          <Clock className="w-4 h-4" />
                          {item.phase}
                        </span>
                        <h4 className="text-xl font-extrabold text-[#0F172A] tracking-tight">{item.title}</h4>
                      </div>
                      <p className="text-[15px] font-medium text-slate-600 leading-relaxed lg:pl-[90px]">
                        {item.description}
                      </p>
                    </div>

                    {item.deliverable && (
                      <div className="lg:w-64 bg-slate-50 group-hover:bg-emerald-50/80 p-5 rounded-2xl border border-slate-200 group-hover:border-emerald-200 shrink-0 transition-all duration-300 relative z-10">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-700 block mb-2.5 transition-colors">Key Deliverable</span>
                        <div className="flex items-start gap-2.5 text-[14px] font-bold text-slate-900 leading-snug">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item.deliverable}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
