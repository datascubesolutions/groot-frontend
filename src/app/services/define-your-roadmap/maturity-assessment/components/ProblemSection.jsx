"use client";

import { motion } from "framer-motion";
import { Activity, AlertCircle, Target } from "lucide-react";

export default function ProblemSection() {
 return (
 <section className="overflow-x-clip relative z-30 border-t-8 border-foreground bg-background py-24 lg:py-32 lg:py-24">
 <div className="container mx-auto max-w-7xl px-6">
 <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-12 lg:gap-12 lg:gap-16">
 
 {/* Header Area */}
 <div className="flex flex-col justify-start lg:col-span-5">
 <div className="lg:sticky lg:top-32">
 <h2 className="mb-6 flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-forest">
 <span className="h-1 w-12 bg-forest"></span>
 The Reality Check
 </h2>
 <h3 className="mb-6 text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-4xl lg:text-[4rem]">
 The Cost of <br /> Assuming <br /> Readiness.
 </h3>
 <p className="mb-8 text-xl font-bold leading-relaxed text-foreground/80">
 Most organizations drastically overestimate their data maturity. When you build advanced analytics on a fractured foundation, the results are predictably chaotic.
 </p>
 <div className="border-l-[4px] border-forest bg-muted/40 p-6">
 <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
 Common Symptoms We See
 </p>
 </div>
 </div>
 </div>

 {/* Cards Area */}
 <div className="flex flex-col gap-12 lg:gap-16 lg:col-span-7">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="group border-[4px] border-foreground bg-card p-5 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 hover:translate-x-2 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
 >
 <div className="mb-6 flex items-center gap-6">
 <div className="flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-foreground bg-rose-500 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
 <Activity size={32} strokeWidth={2.5} />
 </div>
 <h4 className="text-2xl font-black uppercase tracking-tight text-foreground">
 Fragile Pipelines
 </h4>
 </div>
 <p className="text-lg font-bold leading-relaxed text-foreground/80">
 Your Data Factory pipeline fails every Monday due to unhandled schema changes. There are no drift detection, no quality rules, and no proactive alerting. You find out when Finance calls.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="group border-[4px] border-foreground bg-foreground p-5 sm:p-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--forest)/1)] sm:shadow-[12px_12px_0px_0px_hsl(var(--forest)/1)] transition-transform hover:-translate-y-2 hover:translate-x-2"
 >
 <div className="mb-6 flex items-center gap-6">
 <div className="flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-background bg-amber-500 text-foreground shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
 <AlertCircle size={32} strokeWidth={2.5} />
 </div>
 <h4 className="text-2xl font-black uppercase tracking-tight text-background">
 Master Data Chaos
 </h4>
 </div>
 <p className="text-lg font-bold leading-relaxed text-background/90">
 You need to join Salesforce with ERP orders. But the same customer appears 47 different ways across systems. Your data team spends days building fuzzy matches that are "good enough."
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="group border-[4px] border-foreground bg-card p-5 sm:p-8 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] sm:shadow-[12px_12px_0px_0px_rgba(249,115,22,1)] transition-transform hover:-translate-y-2 hover:translate-x-2"
 >
 <div className="mb-6 flex items-center gap-6">
 <div className="flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-foreground bg-orange-500 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
 <Target size={32} strokeWidth={2.5} />
 </div>
 <h4 className="text-2xl font-black uppercase tracking-tight text-foreground">
 Semantic Confusion
 </h4>
 </div>
 <p className="text-lg font-bold leading-relaxed text-foreground/80">
 Finance asks why the executive dashboard doesn't match the sales report. Both are "correct", but there's no canonical definition documented in your semantic model. Nobody trusts the numbers.
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
}
