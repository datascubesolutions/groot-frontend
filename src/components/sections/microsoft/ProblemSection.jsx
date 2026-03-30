"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProblemSection({
  title = "When the Numbers Don't Line Up.",
  tagline = "Sound familiar?",
  bridgeText,
  problems = []
}) {
  if (!problems || problems.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 antialiased">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              The Problem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 tracking-tight text-balance"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-semibold italic text-forest leading-snug mb-6 border-l-4 border-forest pl-5 text-balance tracking-tight"
            >
              {tagline}
            </motion.p>
            {bridgeText && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-lg md:text-xl text-muted-foreground/90 font-normal leading-relaxed mb-8"
              >
                {bridgeText}
              </motion.p>
            )}
            {/* Fragmented Architecture Custom Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square xl:aspect-[4/5] max-h-[550px] shadow-2xl border border-border/40 w-full mt-8 lg:mt-12 group bg-card p-8 flex flex-col items-center justify-center font-sans"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5" />
              
              {/* Corner Dot Matrices */}
              <svg className="absolute top-6 right-6 opacity-30 text-red-500 pointer-events-none" width="80" height="80" viewBox="0 0 80 80">
                <pattern id="dots-tr-prob" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr-prob)" />
              </svg>
              <svg className="absolute bottom-6 left-6 opacity-30 text-orange-500 pointer-events-none" width="80" height="80" viewBox="0 0 80 80">
                <pattern id="dots-bl-prob" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-bl-prob)" />
              </svg>

              <div className="relative w-full h-full flex flex-col items-center justify-between z-10 py-4 xl:py-8">
                 
                 {/* Disconnected Nodes */}
                 <div className="flex justify-between w-full px-4">
                    <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-4 rounded-2xl shadow-lg border border-red-100 flex flex-col gap-3 items-center w-28 xl:w-32 z-10">
                       <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold ring-1 ring-red-100">SQL</div>
                       <div className="h-1.5 w-full bg-red-100 rounded-full" />
                    </motion.div>
                    <motion.div animate={{ x: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100 flex flex-col gap-3 items-center w-28 xl:w-32 mt-12 z-10">
                       <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xs font-bold ring-1 ring-orange-100">CSV</div>
                       <div className="h-1.5 w-full bg-orange-100 rounded-full" />
                    </motion.div>
                 </div>

                 {/* Broken Core */}
                 <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-full bg-white shadow-xl border-2 border-dashed border-red-200 flex flex-col items-center justify-center gap-2 relative z-10">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white text-[12px] font-bold animate-pulse">!</div>
                    <div className="absolute bottom-6 left-2 w-6 h-6 bg-orange-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white text-[12px] font-bold animate-bounce delay-700">!</div>
                    <svg className="w-12 h-12 xl:w-16 xl:h-16 text-muted-foreground/30 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="text-xs xl:text-sm font-bold text-muted-foreground uppercase tracking-widest">Siloed Data</span>
                 </div>

                 {/* Failing Reports */}
                 <div className="flex justify-center w-full mt-8 z-10">
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-4 rounded-2xl shadow-lg border border-red-100 flex items-center gap-4 w-56 xl:w-64">
                       <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                          <div className="w-4 h-4 bg-red-400 rounded-sm" />
                       </div>
                       <div className="flex-1">
                          <div className="h-2 w-full bg-muted rounded mb-2" />
                          <div className="h-2 w-2/3 bg-red-300 rounded" />
                       </div>
                    </motion.div>
                 </div>

              </div>

              {/* Tangled Lines SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0" viewBox="0 0 400 500" preserveAspectRatio="none">
                <path d="M 100 100 Q 200 250 150 350 T 200 450" fill="none" stroke="currentColor" className="text-red-400" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 300 150 Q 150 300 250 400" fill="none" stroke="currentColor" className="text-orange-400" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

            </motion.div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-forest rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[0_20px_40px_rgba(22,78,60,0.3)] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
              >
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                <div className="relative z-10 antialiased">
                  {/* Number indicator */}
                  <span className="text-white/50 font-semibold block mb-6 md:mb-8 text-sm tracking-widest uppercase">
                    Problem {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight tracking-tight">
                    {problem.title}
                  </h3>

                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal mb-4">
                    {problem.description}
                  </p>

                  {problem.outcome && (
                    <p className="text-base md:text-lg text-mint font-medium leading-snug">
                      → {problem.outcome}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
