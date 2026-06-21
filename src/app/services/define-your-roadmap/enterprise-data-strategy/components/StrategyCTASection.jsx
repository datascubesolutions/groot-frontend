"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight, Target } from "lucide-react";
import Link from "next/link";

export default function StrategyCTASection() {
 return (
 <section className="relative flex flex-col overflow-hidden bg-[#f0f7f4] py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24">
 {/* Subtle grid pattern */}
 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />

 {/* Glow */}
 <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/40 blur-[100px]" />

 <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 className="flex flex-col items-center"
 >
 {/* Pill */}
 <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-[#1b3d2f]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md z-20 relative">
 <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1b3d2f]/10 text-[#1b3d2f]">
 <Target className="h-3.5 w-3.5" strokeWidth={2.5} />
 </span>
 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
 Execution Focused
 </span>
 </div>

 <div className="relative w-full rounded-[2.5rem] border border-white/80 bg-white/95 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-6 lg:p-8 md:p-6 lg:p-8 lg:p-6 lg:p-8 flex flex-col items-center">
 
 <h2 className="mb-6 font-serif text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#1b2b36] sm:text-5xl lg:text-[4rem]">
 Strategy that gets <span className="text-emerald-600 italic">executed.</span>
 </h2>

 <p className="mb-6 lg:mb-8 max-w-2xl text-[1rem] leading-relaxed text-slate-700 sm:text-[1.15rem]">
 You don't need another vision deck. You need a Microsoft Fabric strategy that aligns stakeholders, justifies investment, and guides implementation.
 </p>

 <div className="w-full sm:w-auto">
 <Link href="/contact?service=data-strategy" passHref>
 <Button
 size="lg"
 className="group relative flex w-full items-center justify-center gap-3 sm:gap-4 rounded-full border border-slate-700 bg-[#182921] px-8 sm:px-12 py-8 text-[12px] sm:text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_25px_rgba(24,41,33,0.35)] transition-all hover:bg-black"
 >
 Start a Strategy Conversation
 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
 <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
 </span>
 </Button>
 </Link>
 </div>

 {/* Footer Logos */}
 <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-slate-100 pt-8 w-full">
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/fabric_48_color.svg" alt="Fabric" className="h-6 sm:h-7" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Fabric</span>
 </div>
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/power-bi-icon.svg" alt="Power BI" className="h-6 sm:h-7" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Power BI</span>
 </div>
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/azure-2.svg" alt="Azure" className="h-6 sm:h-7" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Azure</span>
 </div>
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/10787-icon-service-Azure-Databricks.svg" alt="Databricks" className="h-6 sm:h-7" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Databricks</span>
 </div>
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/snowflake.png" alt="Snowflake" className="h-5 sm:h-6 object-contain" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Snowflake</span>
 </div>
 <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
 <img src="/svg/Tableau.svg" alt="Tableau" className="h-5 sm:h-6" />
 <span className="text-slate-800 text-[13px] font-semibold hidden md:inline-block">Tableau</span>
 </div>
 </div>

 </div>
 </motion.div>
 </div>
 </section>
 );
}
