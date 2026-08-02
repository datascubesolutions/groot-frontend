// src/components/sections/microsoft/ProblemSection.jsx
// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Search, Database, ShieldAlert, Activity, FileSpreadsheet, Lock } from "lucide-react";

// Map default icons for the top-left badge
const defaultIcons = [Search, Database, ShieldAlert];

// Map large decorative icons for the middle empty space
const bigIcons = [Activity, FileSpreadsheet, Lock];

export function ProblemSection({
  title = "When the Numbers Don't Line Up.",
  tagline = "Sound familiar?",
  bridgeText,
  problems = [],
}) {
  if (!problems || problems.length === 0) return null;

  return (
    <section className="relative z-20 w-full bg-[#F8FAFC] font-sans overflow-hidden border-t border-slate-200/60 pt-[80px] pb-16 flex flex-col">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1320px] relative z-10 w-full flex flex-col justify-center py-10">
        
        {/* Header Block */}
        <div className="mb-12 max-w-4xl text-center mx-auto shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 mb-4 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase">The Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium">
            <span className="font-bold text-slate-800">{tagline}</span> {bridgeText}
          </p>
        </div>

        {/* Problems Grid - Natural scroll flow without internal scrollbar constraints */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, idx) => {
            const IconComponent = defaultIcons[idx % defaultIcons.length];
            const BigIcon = bigIcons[idx % bigIcons.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_4px_30px_rgb(0,0,0,0.04)] border border-slate-200/80 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden h-full"
              >
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Section */}
                <div className="flex flex-col flex-1 shrink-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_rgba(239,68,68,0.1)] group-hover:shadow-[0_4px_15px_rgba(239,68,68,0.3)] shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* Fixed Number Styling */}
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-300 group-hover:from-red-400 group-hover:to-red-300 transition-all duration-300 shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-[#0F172A] mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] font-medium leading-relaxed text-slate-600 mb-6">
                    {problem.description}
                  </p>
                </div>

                {/* Large Decorative Icon Block in the middle */}
                <div className="w-full flex items-center justify-center mb-6 py-8 lg:py-10 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100/50 group-hover:bg-red-50/50 transition-colors duration-300 shrink-0">
                  <BigIcon className="w-16 h-16 text-slate-500 group-hover:text-red-500 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                </div>

                {/* Bottom Solution Section */}
                {problem.outcome && (
                  <div className="bg-emerald-50/70 rounded-2xl p-4 lg:p-5 border border-emerald-100 flex gap-3 items-start mt-auto shrink-0 group-hover:bg-emerald-50 transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-700 block mb-1.5">The Solution</span>
                      <span className="text-[13px] lg:text-[14px] font-semibold text-emerald-950 leading-tight block">{problem.outcome}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
