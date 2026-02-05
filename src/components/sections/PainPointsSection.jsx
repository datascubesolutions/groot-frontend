"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Database, GitMerge } from "lucide-react";
import { useState } from "react";

const painPoints = [
  {
    id: "mna",
    category: "Mergers & Acquisitions",
    icon: GitMerge,
    quote: "We acquired a company. Systems don't talk.",
    description: "Fragmented data silos are preventing cross-entity reporting and killing synergy targets.",
    status: "CRITICAL",
  },
  {
    id: "ops",
    category: "Operations",
    icon: Database,
    quote: "Pipelines break. Reports are late.",
    description: "Your data engineering is fragile, manual, and hindering operational agility.",
    status: "WARNING",
  },
  {
    id: "ai",
    category: "AI & R&D",
    icon: Bot,
    quote: "Every AI pilot stalls on bad data.",
    description: "Without governance, your AI initiatives are hallucinating. You need a clean data plane.",
    status: "BLOCKED",
  },
];

export function PainPointsSection() {
  const [activePoint, setActivePoint] = useState(0);

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-7xl mx-auto relative">

          {/* Left Column: Header + Cards */}
          <div className="flex-1 w-full lg:w-1/2 z-20">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="section-label text-red-600/90 tracking-widest text-xs">System Diagnostics</span>
              </div>
              <h2 className="heading-section mb-6">
                Sound <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Familiar?</span>
              </h2>
              <p className="body-large text-slate-600">
                We've seen all three. Let's figure out which one you're facing.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6 relative">

              {/* Connection Line Layer (Mobile hidden) */}
              {/* This sits absolutely relative to the cards column to track Y positions accurately */}
              <div className="hidden lg:block absolute right-[-120px] top-0 bottom-0 w-[160px] pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible">
                  <motion.path
                    initial={false}
                    animate={{
                      d: `M 40 ${activePoint * 140 + 48} C 100 ${activePoint * 140 + 48}, 100 178, 152 178`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    className="opacity-50"
                  />
                </svg>
              </div>

              {painPoints.map((point, index) => {
                const isActive = activePoint === index;
                // Force a minimum height or layout stability
                return (
                  <motion.div
                    key={point.id}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border group ${isActive
                      ? "bg-white border-primary/20 shadow-xl shadow-primary/5 scale-[1.02] z-10"
                      : "bg-white/50 border-transparent hover:bg-white hover:border-border/50 z-0"
                      }`}
                    onClick={() => setActivePoint(index)}
                    onMouseEnter={() => setActivePoint(index)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Box */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-100/80 text-slate-500"
                        }`}>
                        <point.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? "text-primary" : "text-slate-400"
                            }`}>
                            {point.category}
                          </span>
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 leading-tight transition-colors ${isActive ? "text-slate-900" : "text-slate-600"
                          }`}>
                          "{point.quote}"
                        </h3>

                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-500 text-sm leading-relaxed pt-2 border-t border-slate-100 mt-2">
                            {point.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* SENDER DOT: Always aligned with the Icon (approx 24px + 24px = 48px from top) */}
                    <div className={`hidden lg:block absolute -right-2 top-[48px] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] transition-colors duration-300 z-50 ${isActive ? "border-primary scale-110 shadow-[0_0_0_4px_rgba(255,255,255,1)]" : "border-slate-200 scale-75 opacity-0"
                      }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Terminal Proof Box */}
          <div className="flex-1 w-full lg:w-1/2 z-20 relative lg:pt-32 pl-10">

            {/* RECEIVER DOT: Fixed position to receive the line */}
            <div className="hidden lg:block absolute left-8 top-[calc(8rem+50px)] -translate-x-1/2 w-4 h-4 rounded-full bg-[#0F172A] border-[3px] border-primary z-50 shadow-[0_0_0_4px_rgba(15,23,42,1)]" />

            <motion.div
              layout
              className="relative rounded-2xl overflow-hidden bg-[#0F172A] border border-slate-700/50 shadow-2xl text-slate-300"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Live Project Status</div>
              </div>

              <div className="p-8 font-mono text-sm leading-relaxed">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-teal-500 shrink-0">➜</span>
                  <div>
                    <p className="mb-4 text-slate-100">
                      Currently migrating <span className="text-teal-400 font-bold">3 ERP systems</span> into one governed Fabric Lakehouse for a PE-backed company.
                    </p>
                    <ul className="space-y-2 text-slate-400 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-teal-500" /> ERP Extraction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-teal-500" /> Medallion Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-teal-500" /> Purview Governance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-teal-500" /> Executive Dashboards
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-xs text-slate-500">ESTIMATED COMPLETION</span>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded text-xs font-bold border border-teal-500/20">
                    Unified reporting in 10 weeks
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
