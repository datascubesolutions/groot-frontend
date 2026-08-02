// src/components/sections/microsoft/ExampleSection.jsx
// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ArrowRight, TrendingDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ExampleSection({
  title = "Private Equity: 3 ERPs, 1 Truth",
  outcomeMetric,
  outcomeMetricLabel,
  context,
  reality,
  build,
  outcome,
  linkText,
  linkUrl,
}) {
  return (
    <section className="relative z-30 bg-white font-sans w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-[1320px] relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-slate-50 rounded-[2rem] lg:rounded-[3rem] border border-slate-200/80 shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full"
        >
          
          {/* Left Column - High Premium Dark Mode */}
          <div className="lg:w-5/12 p-8 lg:p-14 flex flex-col justify-between bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 relative overflow-hidden shrink-0">
            {/* Dark Mode Background Effects */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 mb-8 shadow-sm">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Featured Case Study</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
                {title}
              </h3>
            </div>
            
            <div className="space-y-8 relative z-10 mt-auto">
              {context && (
                <div className="border-l-[3px] border-blue-500 pl-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Context</span>
                  <p className="text-[15px] font-medium text-slate-300 leading-relaxed">
                    {context}
                  </p>
                </div>
              )}
              {reality && (
                <div className="border-l-[3px] border-slate-700 pl-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2">The Challenge</span>
                  <p className="text-[15px] font-medium text-slate-400 leading-relaxed">
                    {reality}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Clean Data / Bento Aesthetic */}
          <div className="lg:w-7/12 p-8 lg:p-14 bg-white flex flex-col justify-center">
            
            {outcomeMetric && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600">
                    <TrendingDown className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-widest text-slate-500">{outcomeMetricLabel}</span>
                </div>
                
                {/* Custom Split Metric Visualization */}
                <div className="flex flex-wrap items-baseline gap-4 lg:gap-6 bg-slate-50 border border-slate-100 p-6 lg:p-8 rounded-3xl shadow-sm">
                  <div className="text-4xl lg:text-5xl font-black text-slate-400 line-through decoration-red-500/80 decoration-4">
                    10 Days
                  </div>
                  <div className="text-slate-300">
                    <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 pb-2">
                    3 Days
                  </div>
                </div>
              </div>
            )}

            {build && (
              <div className="mb-12">
                <div className="text-[12px] font-bold uppercase tracking-widest text-slate-400 mb-5">What We Built</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {build.map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 transition-colors hover:border-blue-200 group">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover:text-blue-600" />
                      <span className="text-[14px] font-semibold text-slate-700 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pt-8 border-t border-slate-100 mt-auto">
              {outcome && (
                <p className="text-[15px] font-medium text-slate-600 italic flex-1 xl:pr-8">
                  "{outcome}"
                </p>
              )}
              {linkUrl && (
                <Link href={linkUrl} className="shrink-0">
                  <Button className="h-14 px-8 rounded-2xl bg-[#0067B8] hover:bg-[#005A9E] text-white text-[13px] font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full xl:w-auto flex items-center justify-center">
                     {linkText}
                     <ArrowRight className="ml-2.5 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

