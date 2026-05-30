// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  PieChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import NextStepsSection from "./components/NextStepsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideAndPop = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function MaturityAssessment() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-forest/30">
      <HeroSection />


      {/* The Problem Section - Asymmetric, Watermarked Overlaps */}
      <section className="relative z-30 bg-background pb-6 pt-8">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* Extreme sticky side column with data-viz to fill empty space */}
            <div className="top-32 z-40 -mt-10 ml-0 flex flex-col gap-4 md:sticky md:col-span-5 lg:col-span-5 xl:col-span-4 md:ml-4">
              {/* Main Title Block */}
              <div className="rounded-bl-[2rem] rounded-tr-[2rem] border-y border-l-8 border-r border-forest bg-card/95 p-5 shadow-[15px_15px_30px_-15px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-6 lg:p-5">
                <h2 className="mb-4 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-forest">
                  <span className="h-1 w-8 bg-forest"></span>
                  What we see in the field
                </h2>
                <h3 className="mb-4 text-2xl font-black uppercase leading-[1.05] tracking-tight text-foreground sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] break-words">
                  The cost of assuming readiness.
                </h3>
                <p className="mb-4 text-sm font-semibold leading-relaxed text-foreground/90">
                  Most organizations drastically overestimate their data
                  maturity. When you build advanced analytics on a fractured
                  foundation, the results are predictably chaotic.
                </p>
                <p className="mb-0 border-l-2 border-forest/50 bg-muted/50 p-3 text-[12px] font-semibold leading-relaxed text-muted-foreground">
                  These patterns show up in every industry we assess — from
                  pipeline failures and master-data chaos to conflicting
                  definitions that block trust in numbers.
                </p>
              </div>

            </div>

            {/* Overlapping, cascading problem cards with massive twisted watermarks */}
            <div className="flex flex-col pt-6 md:col-span-7 lg:col-span-7 xl:col-span-8 lg:pt-0">
              {/* Problem 01 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-10 w-full overflow-hidden rounded-br-[2rem] rounded-tl-[2rem] border-2 border-foreground bg-card p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:-translate-y-1 hover:translate-x-1 sm:rounded-br-[2rem] sm:rounded-tl-[2rem] sm:p-6 md:w-full lg:p-8 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <div className="pointer-events-none absolute -right-4 -top-6 select-none text-[5rem] font-black leading-[0.75] text-rose-500/10 transition-colors duration-500 group-hover:text-rose-500/15 sm:text-[6rem] md:-rotate-12 md:text-[11rem]">
                  01
                </div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 -rotate-6 items-center justify-center bg-rose-500 text-white shadow-[3px_3px_0px_0px_rgba(244,63,94,0.3)]">
                      <Activity size={20} />
                    </div>
                    <p className="bg-rose-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-rose-500">
                      Infrastructure Risk
                    </p>
                  </div>
                  <h4 className="mb-4 text-lg font-black uppercase leading-snug tracking-tight sm:text-xl lg:text-2xl">
                    The Pipeline That Fails Every Monday
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-foreground">
                    Your Data Factory pipeline fails again. The error says
                    &quot;null reference in CustomerID transformation.&quot;
                    Someone added a new customer type in the source ERP that
                    your pipeline doesn&apos;t handle. This is the third time
                    this month. There&apos;s no schema drift detection, no data
                    quality rules, no proactive alerting.
                  </p>
                  <div className="mt-4 border-l-[3px] border-rose-500 bg-rose-500/10 p-4">
                    <p className="text-sm font-bold text-rose-600 dark:text-rose-400">
                      You find out when Finance calls asking why the Power BI
                      dashboard is blank.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Part 1.5 */}
      <section className="relative z-30 bg-background pb-6 pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="top-32 z-40 ml-0 flex flex-col gap-4 md:sticky md:col-span-5 lg:col-span-5 xl:col-span-4 md:ml-4">
              {/* Enhanced Visual Graph Block to Utilize Empty Space */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative hidden flex-col overflow-hidden rounded-br-[2rem] border-x border-b border-t-4 border-t-forest bg-card p-5 shadow-[5px_5px_15px_-10px_rgba(0,0,0,0.08)] md:flex"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                <h4 className="z-10 mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50">
                  <Target size={14} /> Baseline Disconnect Telemetry
                </h4>

                <div className="relative z-10 space-y-4">
                  {[
                    {
                      label: "Perceived Tech Readiness",
                      score: 85,
                      color: "bg-forest",
                      expected: true,
                    },
                    {
                      label: "Actual Tech Readiness",
                      score: 32,
                      color: "bg-rose-500",
                      expected: false,
                    },
                    {
                      label: "Perceived Data Trust",
                      score: 70,
                      color: "bg-forest",
                      expected: true,
                    },
                    {
                      label: "Actual Data Quality",
                      score: 28,
                      color: "bg-amber-500",
                      expected: false,
                    },
                    {
                      label: "Governance Coverage",
                      score: 15,
                      color: "bg-orange-500",
                      expected: false,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex flex-col gap-1.5 ${item.expected ? "opacity-40 grayscale" : ""}`}
                    >
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.15em]">
                        <span className="text-foreground/80">{item.label}</span>
                        <span className="text-foreground">{item.score}%</span>
                      </div>
                      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-muted shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          transition={{
                            duration: 1.2,
                            delay: i * 0.15,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-full ${item.color} relative`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="z-10 mt-4 border-t border-border/50 pt-4 text-[11px] font-bold leading-relaxed text-muted-foreground">
                  <span className="mr-2 inline-block bg-forest/10 px-2 py-0.5 font-black uppercase tracking-widest text-forest">
                    Insight
                  </span>
                  Organizations consistently rate their readiness 2-3x higher
                  than reality before objective assessment.
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col md:col-span-7 lg:col-span-7 xl:col-span-8">
              {/* Problem 02 - Highly Overlapped */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-20 mt-4 w-full self-end overflow-hidden rounded-bl-[2rem] rounded-tr-[2rem] bg-foreground p-5 text-background shadow-[8px_8px_0px_0px_hsl(var(--forest))] transition-all duration-500 hover:-translate-y-1 hover:-translate-x-1 sm:rounded-bl-[2rem] sm:rounded-tr-[2rem] sm:p-6 md:w-full lg:p-8"
              >
                <div className="pointer-events-none absolute -bottom-6 -left-6 select-none text-[5rem] font-black leading-[0.75] text-background/10 transition-colors duration-500 group-hover:text-background/15 sm:text-[6rem] md:rotate-12 md:text-[11rem]">
                  02
                </div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 rotate-3 items-center justify-center bg-amber-500 text-foreground shadow-[3px_3px_0px_0px_rgba(245,158,11,0.5)]">
                      <AlertCircle size={20} />
                    </div>
                    <p className="border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-amber-500">
                      Data Management
                    </p>
                  </div>
                  <h4 className="mb-4 text-lg font-black uppercase leading-snug tracking-tight text-background sm:text-xl lg:text-2xl">
                    Six Customer IDs, Zero Master Data
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-background/90">
                    You need to join customers from Salesforce with orders from
                    your ERP. Simple, right? Except Salesforce uses
                    &quot;AccountID,&quot; the ERP uses
                    &quot;CustomerNumber,&quot; and there&apos;s no master data
                    management.
                  </p>
                  <div className="mt-4 border-l-[3px] border-amber-500 bg-black/30 p-4 shadow-inner">
                    <p className="text-sm font-bold text-amber-400">
                      The same customer appears 47 different ways across
                      systems. Your Data Engineer spent three days building a
                      fuzzy match that&apos;s 85% accurate. Everyone pretends
                      that&apos;s good enough.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Part 2 */}
      <section className="relative z-30 bg-background pb-12 pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="top-32 z-40 ml-0 flex flex-col gap-4 md:sticky md:col-span-5 lg:col-span-5 xl:col-span-4 md:ml-4">
              {/* Premium Asymmetric Editorial Image Block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-50 mb-4 hidden w-full flex-col md:flex"
              >
                {/* Structural Offset Background */}
                <div className="absolute bottom-0 left-4 right-0 top-6 -z-10 bg-foreground shadow-[10px_10px_0px_0px_hsl(var(--forest))] transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />

                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] relative ml-0 mr-4 flex flex-col border-[2px] border-foreground bg-card outline outline-1 outline-offset-4 outline-foreground/10 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <div className="relative h-[180px] overflow-hidden border-b-[2px] border-forest bg-black">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                      alt="Data Analytics Complexity"
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      className="ease-[cubic-bezier(0.19,1,0.22,1)] object-cover opacity-40 mix-blend-luminosity transition-all duration-1000 group-hover:scale-110 group-hover:opacity-70"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    {/* Data Viz Overlay elements */}
                    <div className="absolute bottom-0 left-[35%] top-0 w-px border-r border-dashed border-forest/40 bg-forest/40" />
                    <div className="absolute left-0 right-0 top-[60%] h-px bg-forest/40" />
                    <div className="absolute left-[35%] top-[60%] h-3 w-3 -translate-x-1.5 -translate-y-1.5 rounded-full bg-forest shadow-[0_0_15px_rgba(34,197,94,0.5)]" />

                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center bg-forest text-forest-foreground shadow-[2px_2px_0_0_rgba(255,255,255,0.2)]">
                        <Activity size={18} strokeWidth={2.5} />
                      </div>
                      <div className="border border-forest/30 bg-black/80 px-2 py-1 backdrop-blur-md">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-forest">
                          Signal Lost
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute right-4 top-4 select-none text-[3.5rem] font-black leading-none tracking-tighter text-white/5">
                      NOISE
                    </div>
                  </div>

                  <div className="relative bg-card px-5 py-5">
                    <div className="absolute right-5 top-0 -translate-y-1/2 bg-foreground px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-background">
                      Critical
                    </div>

                    <h4 className="mb-2 flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.3em] text-forest">
                      <span className="h-px w-4 bg-forest"></span>
                      Architectural Entropy
                    </h4>
                    <p className="mb-2 text-lg font-black uppercase leading-[1.05] tracking-tight text-foreground">
                      Complexity{" "}
                      <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent">
                        Scales
                      </span>{" "}
                      Exponentially.
                    </p>
                    <p className="border-l-[2px] border-border pl-4 text-xs font-bold leading-relaxed text-muted-foreground">
                      Without deliberate realignment, your enterprise data layer
                      degrades into a massive, fragile web of undocumented
                      workarounds.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col md:col-span-7 lg:col-span-7 xl:col-span-8">
              {/* Problem 03 - Dense nested overlap */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-30 mt-4 w-full overflow-hidden rounded-br-[2rem] rounded-tl-[2rem] border-2 border-foreground bg-card p-5 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transition-all duration-500 hover:-translate-y-1 hover:translate-x-1 sm:rounded-br-[2rem] sm:rounded-tl-[2rem] sm:p-6 md:w-full lg:p-8 dark:shadow-[8px_8px_0px_0px_rgba(249,115,22,0.5)]"
              >
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[5rem] font-black leading-[0.75] text-orange-500/10 transition-transform duration-700 group-hover:scale-110 sm:text-[6rem] md:text-[11rem]">
                  03
                </div>
                <div className="relative z-10 md:w-4/5">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 rotate-6 items-center justify-center bg-orange-500 text-white shadow-[3px_3px_0px_0px_rgba(249,115,22,0.3)]">
                      <Target size={20} />
                    </div>
                    <p className="bg-orange-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                      Semantic Governance
                    </p>
                  </div>
                  <h4 className="mb-4 text-lg font-black uppercase leading-snug tracking-tight sm:text-xl lg:text-2xl">
                    Nobody Knows Where the Number Came From
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-foreground">
                    Finance asks why the revenue number in the executive Power
                    BI dashboard doesn&apos;t match the revenue in the sales
                    report. Both are technically &quot;correct.&quot; The
                    executive dashboard excludes returns that haven&apos;t been
                    processed. The sales report includes pending orders.
                  </p>
                  <div className="mt-4 border-l-[3px] border-r border-orange-500 border-orange-500/20 bg-orange-500/10 p-4">
                    <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      Neither is wrong, but there&apos;s no canonical definition
                      documented anywhere in your semantic model.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
      <section className="relative border-b-2 border-t-[8px] border-foreground bg-muted/20 py-16 lg:py-20 xl:py-24">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b-4 border-forest pb-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-3 inline-block border border-forest/30 bg-forest/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-forest lg:text-sm">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
                Clarity over assumptions.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-forest bg-background/50 p-4 pl-5 text-sm font-bold leading-relaxed text-foreground/80 backdrop-blur-sm lg:text-base">
              Every assessment produces the same high-quality artifacts — no
              shortcuts, no templated scores. You get evidence, priorities, and
              a path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-4 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
            {/* Cell 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[350px] flex-col justify-between overflow-hidden bg-card p-6 transition-colors duration-500 hover:bg-forest/5 lg:min-h-[420px] lg:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <PieChart
                  className="h-10 w-10 text-forest transition-colors duration-500 group-hover:text-emerald-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen lg:text-[4rem]">
                  D-01
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-3 inline-block border-b-2 border-forest/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:border-emerald-300/50 group-hover:text-emerald-300">
                  Six dimensions
                </p>
                <h4 className="mb-4 text-xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-2xl">
                  Maturity Scorecard
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-emerald-50">
                  A scored assessment across six dimensions: Data Management,
                  Analytics Capability, Governance, Technology, Organization,
                  and Culture. Rated with clear evidence, not gut feel.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[350px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-cyan-500/5 lg:min-h-[420px] lg:p-8"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Target
                  className="h-10 w-10 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-02
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-3 inline-block border-b border-cyan-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                  Current vs target
                </p>
                <h4 className="mb-4 text-xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-2xl">
                  Gap Analysis
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cyan-50">
                  For each dimension, we document where you are today vs. where
                  you need to be. Gaps prioritized by business impact, not ease
                  of implementation.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[350px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-blue-500/5 lg:min-h-[420px] lg:p-8"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <ShieldCheck
                  className="h-10 w-10 text-blue-500 transition-colors duration-500 group-hover:text-blue-300 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-03
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-3 inline-block border-b border-blue-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-300/50 group-hover:text-blue-300">
                  Architecture
                </p>
                <h4 className="mb-4 text-xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white lg:text-2xl">
                  Technical Findings
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-blue-50">
                  Specific observations from our review:
                  Fabric/Azure configuration, pipeline reliability, Power BI
                  semantic model design, security, and technical debt.
                </p>
              </div>
            </motion.div>

            {/* Cell 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[350px] flex-col justify-between overflow-hidden bg-foreground p-6 text-background transition-colors duration-500 lg:min-h-[420px] lg:p-8"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <CheckCircle2 className="h-10 w-10 text-mint lg:h-12 lg:w-12" />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-background/10 lg:text-[4rem]">
                  D-04
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-3 inline-block border-b border-mint/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-mint">
                  Exec Summary
                </p>
                <h4 className="mb-4 text-xl font-black uppercase leading-[0.9] tracking-tight text-background lg:text-2xl">
                  Recommendations
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-background/80">
                  Prioritized recommendations with rationale and effort estimates. Delivered alongside a one-page summary for leadership that drives decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative overflow-hidden bg-background py-10 lg:py-12">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b-4 border-foreground pb-8 md:flex-row md:items-center md:gap-10">
            <h3 className="mb-0 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tighter text-forest">
              Our process
            </h3>
            <p className="max-w-sm border border-forest/40 bg-forest/15 p-4 text-sm font-black uppercase tracking-[0.2em] text-foreground md:text-right">
              Interviews, technical review, and evidence-based scoring —{" "}
              <span className="text-forest">3–4 weeks to presentation.</span>
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
            {/* Method Panels */}
            <MethodPanel
              step={1}
              week="Week 1-2"
              title="Stakeholder Interviews"
              desc="We interview 8-12 stakeholders across business and technology. We're looking for gaps between what teams believe about your data capabilities and what's actually happening."
              color="forest"
            />
            <MethodPanel
              step={2}
              week="Week 2-3"
              title="Technical Review"
              desc="We review your current architecture: Azure/Fabric configuration, Data Factory pipelines, Lakehouse structure, Power BI semantic models, Purview catalog, and security settings. We look at what's documented and what's actually implemented."
              color="cyan"
            />
            <MethodPanel
              step={3}
              week="Week 3"
              title="Analysis & Scoring"
              desc="We synthesize findings into a scored assessment. Each dimension rated with specific evidence and examples."
              color="blue"
            />
            <MethodPanel
              step={4}
              week="Week 3-4"
              title="Presentation & Alignment"
              desc="We present findings to leadership and facilitate discussion. The goal is alignment on priorities and next steps."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Case Study — grid keeps image + overlapping card; stats stay inside the card column */}
      <section className="relative overflow-x-clip bg-background pb-40 pt-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-start lg:gap-0">
            {/* Left side: Image + Relatable Value Box */}
            <div className="z-10 flex h-full flex-col lg:col-span-8 lg:col-start-1 lg:row-start-1">
              <div className="relative h-[300px] min-h-[300px] shrink-0 overflow-hidden border-[6px] border-foreground contrast-[1.1] grayscale-[40%] sm:h-[400px] sm:min-h-[400px] sm:border-8 lg:h-[650px] lg:min-h-[650px]">
                <Image
                  src="/images/maturity/live_enterprise_alignment.png"
                  alt="Executive Team Discussing Data Strategy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:bg-gradient-to-l" />

                <div className="absolute left-4 top-10 rotate-180 text-[3rem] font-black uppercase leading-[0.8] tracking-tighter text-foreground/5 mix-blend-multiply [writing-mode:vertical-rl] sm:text-[4rem] md:-left-10 md:text-[10rem] md:text-foreground/5">
                  CASE STUDY
                </div>
              </div>

              {/* Relatable Space Filler for the Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative mr-[10%] mt-12 hidden h-full flex-1 overflow-hidden rounded-bl-[3rem] border border-border bg-card p-6 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] md:p-10 lg:flex"
              >
                <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.03] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-[0.06]">
                  <PieChart size={280} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex w-full flex-col justify-center">
                  <h3 className="mb-6 flex items-center gap-3 text-lg font-black uppercase tracking-[0.25em] text-foreground">
                    <span className="inline-block h-1 w-8 shrink-0 bg-forest"></span>
                    The ROI of Reality
                  </h3>

                  <p className="mb-8 border-l-[3px] border-forest/30 pl-6 text-base font-bold leading-relaxed text-muted-foreground">
                    A maturity assessment isn&apos;t about pointing fingers.
                    It&apos;s about eliminating invisible{" "}
                    <strong className="text-foreground">
                      technical debt constraints
                    </strong>{" "}
                    so you can stop wrestling with fractured pipelines and start
                    scaling advanced analytics securely.
                  </p>

                  {/* Aesthetic Data Visualization Filler */}
                  <div className="relative mb-8 min-h-[160px] w-full flex-1 overflow-hidden rounded-2xl border-2 border-border/60 shadow-inner">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                      alt="Analytics Scaling Up"
                      fill
                      className="object-cover object-center opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 contrast-[1.1] brightness-90 grayscale-[20%]"
                    />
                    {/* Deep inner shadow to ensure text and badge pop, killing the white wash */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                    {/* Live indicator badge */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                      <span className="block h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Velocity Optimized</span>
                    </div>
                  </div>

                  <div className="relative mt-auto grid grid-cols-2 gap-8 border-t border-border/80 pt-6">
                    <div className="absolute bottom-0 left-1/2 top-6 w-px bg-border/60"></div>
                    <div className="flex flex-col">
                      <div className="mb-1 flex items-baseline gap-2">
                        <span className="text-5xl font-black uppercase leading-[0.8] tracking-tighter text-rose-500">
                          - $1.2M
                        </span>
                      </div>
                      <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">
                        Tech Debt Avoided
                      </span>
                    </div>

                    <div className="flex flex-col pl-4">
                      <div className="mb-1 flex items-baseline gap-2">
                        <span className="text-5xl font-black uppercase leading-[0.8] tracking-tighter text-forest">
                          + 40%
                        </span>
                      </div>
                      <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">
                        Team Velocity Lift
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative z-20 mx-auto -mt-16 w-[92%] min-w-0 max-w-lg overflow-visible border-[3px] border-foreground bg-card/95 p-6 shadow-[10px_10px_0px_0px_hsl(var(--forest))] backdrop-blur-2xl sm:-mt-20 sm:w-[95%] sm:border-4 sm:p-10 sm:shadow-[20px_20px_0px_0px_hsl(var(--forest))] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mx-0 lg:mt-24 lg:w-auto lg:max-w-none lg:self-start lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-4 w-4 shrink-0 rounded-none bg-forest shadow-[2px_2px_0px_0px_foreground]"></span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-forest">
                  Technology &amp; SaaS
                </span>
              </div>

              <h2 className="mb-6 text-2xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:mb-8 sm:text-3xl md:text-5xl">
                How we helped a PE portfolio company find their gaps
                <span className="mt-2 inline-block bg-forest px-2 py-1 text-forest-foreground">
                  .
                </span>
              </h2>

              <p className="mb-8 border-l-[3px] border-forest bg-muted/40 p-4 pl-5 text-base font-bold leading-relaxed text-foreground/80 sm:mb-10 sm:border-l-[4px] sm:pl-6 sm:text-xl">
                A PE-backed software company had invested in Azure Analysis
                Services (AAS) for enterprise data modeling. Leadership believed
                they were &quot;data mature.&quot; But refresh failures were
                increasing, autoscaling wasn&apos;t working, and the BI team was
                frustrated with the complexity of managing AAS alongside Power
                BI.
              </p>

              <div className="mb-12 min-w-0 border-l-[4px] border-forest pl-4 sm:pl-6">
                <div className="border-y-4 border-forest bg-[linear-gradient(45deg,transparent_25%,hsl(var(--forest)/0.05)_25%,hsl(var(--forest)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--forest)/0.05)_75%,hsl(var(--forest)/0.05)_100%)] bg-[length:20px_20px] py-8 sm:py-10">
                  <div className="grid min-w-0 grid-cols-1 gap-6 px-1 sm:grid-cols-2 sm:gap-8 sm:px-0">
                    <div className="min-w-0 text-center md:text-left">
                      <div className="group relative w-fit md:mx-0 mx-auto overflow-hidden">
                        <p className="mb-3 pb-3 text-[clamp(2.25rem,7vw,3.75rem)] font-black leading-none tracking-tighter text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] md:text-[4.5rem] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                          3x
                        </p>
                        <motion.div
                          animate={{ x: ["-100%", "250%"] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5 }}
                          className="absolute inset-0 z-10 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-forest/40 to-transparent"
                        />
                      </div>
                      <p className="inline-block max-w-full whitespace-normal bg-foreground px-2 py-1 text-[0.65rem] font-black uppercase tracking-wider text-mint sm:px-3 sm:text-xs sm:tracking-widest">
                        Faster refresh after remediation
                      </p>
                    </div>
                    <div className="min-w-0 text-center md:text-left">
                      <div className="group relative w-fit md:mx-0 mx-auto overflow-hidden">
                        <p className="mb-3 pb-3 text-[clamp(2.25rem,7vw,3.75rem)] font-black leading-none tracking-tighter text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] md:text-[4.5rem] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                          8W
                        </p>
                        <motion.div
                          animate={{ x: ["-100%", "250%"] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5, delay: 1.25 }}
                          className="absolute inset-0 z-10 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
                        />
                      </div>
                      <p className="inline-block max-w-full whitespace-normal bg-foreground px-2 py-1 text-[0.65rem] font-black uppercase tracking-wider text-mint sm:px-3 sm:text-xs sm:tracking-widest">
                        To Complete Fabric Migration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 space-y-6 border-l-2 border-forest/25 pl-4 text-sm font-bold text-muted-foreground">
                <p>
                  <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                    Tech
                  </span>{" "}
                  AAS models were well-designed, but the platform was reaching
                  its limits. No autoscaling. Manual runbooks for refresh
                  management. XMLA endpoints weren&apos;t properly configured.
                </p>
                <p>
                  <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                    Analytics
                  </span>{" "}
                  Good DAX measures, but models were disconnected from the
                  modern Power BI Premium features (dataflows, deployment
                  pipelines).
                </p>
                <p>
                  <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                    Gov
                  </span>{" "}
                  No Purview integration. No lineage tracking. Sensitive data
                  without classification.
                </p>
                <p>
                  <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                    Org
                  </span>{" "}
                  One senior developer maintained everything. No documentation.
                  Knowledge trapped in one person&apos;s head.
                </p>
                <p>
                  <span className="mr-3 border border-forest/30 bg-forest/10 px-3 py-1 text-xs uppercase tracking-widest text-foreground">
                    Recommendation
                  </span>{" "}
                  Migrate from Azure Analysis Services to Microsoft Fabric. The
                  assessment revealed that 80% of their pain points would be
                  solved by the migration: autoscaling, simplified scheduling,
                  native Power BI integration, and Fabric&apos;s built-in
                  governance features.
                </p>
              </div>

              <Link
                href="/industries/technology-saas"
                className="group inline-flex flex-wrap items-center justify-center gap-2 border-4 border-foreground bg-foreground px-4 py-4 text-center text-xs font-black uppercase tracking-widest text-background shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:gap-4 sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.2em] dark:shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] dark:hover:shadow-none"
              >
                See how we work with technology companies
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-3 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - High Impact Neo-Brutalist */}
      <section className="relative overflow-hidden border-t-4 border-foreground bg-card py-20 lg:py-32">
        {/* Dramatic grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Left Column: Sticky Title */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="sticky top-32">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-4 w-4 bg-rose-600 shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"></span>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400">
                    Clarification
                  </span>
                </div>
                <h2 className="mb-8 text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight md:text-[4.5rem] lg:text-[5.5rem]">
                  Know
                  <br />
                  <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                    Before
                  </span>
                  <br />
                  You Go
                </h2>
                <div className="relative">
                  <div className="absolute -left-2 -top-2 h-full w-full bg-rose-600" />
                  <p className="relative border-[3px] border-foreground bg-foreground p-6 text-base font-semibold leading-relaxed text-background sm:text-lg">
                    Clear answers to common questions about our assessment methodology, timeline, and deliverables.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column: FAQ Items */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex flex-col gap-6 pt-4 lg:pt-12">
                {[
                  {
                    q: "How is this different from a Microsoft assessment?",
                    a: "Microsoft's assessments focus on Azure adoption. We evaluate your organization's capabilities independent of tool vendor. We'll tell you if Fabric isn't the right choice — Microsoft won't."
                  },
                  {
                    q: "Who should be involved from our side?",
                    a: "Typically 8-12 stakeholders: CDO or equivalent, IT leadership, business unit leaders, and 3-4 key data practitioners (your Data Engineers, Power BI developers, analysts)."
                  },
                  {
                    q: "What if we already know our gaps?",
                    a: "You might know some. But assessments consistently reveal blind spots — capabilities teams assume exist but don't, or problems that look technical but are actually organizational."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services and Extreme CTA Section */}
      <NextStepsSection />
    </main>
  );
}

const METHOD_PANEL_ACCENT = {
  forest: {
    bar: "group-hover/panel:bg-forest",
    num: "group-hover/panel:text-forest/10",
  },
  cyan: {
    bar: "group-hover/panel:bg-cyan-500",
    num: "group-hover/panel:text-cyan-500/10",
  },
  blue: {
    bar: "group-hover/panel:bg-blue-500",
    num: "group-hover/panel:text-blue-500/10",
  },
  indigo: {
    bar: "group-hover/panel:bg-indigo-500",
    num: "group-hover/panel:text-indigo-500/10",
  },
};

// Complex methodology panel implementing twisted writing mode
function MethodPanel({ step, week, title, desc, color }) {
  const num = String(step).padStart(2, "0");
  const accent = METHOD_PANEL_ACCENT[color] ?? METHOD_PANEL_ACCENT.forest;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`group/panel relative flex h-auto flex-1 flex-col overflow-hidden border-b border-l border-foreground/30 bg-card shadow-sm transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:translate-x-2 hover:border-foreground hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] lg:min-h-[280px] lg:flex-row lg:border-b-0 lg:border-l-0 lg:border-t dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.2)]`}
    >
      {/* Twisted Vertical Bar */}
      <div
        className={`flex items-center justify-between border-r border-border/50 bg-muted/40 p-4 lg:p-5 lg:flex-col ${accent.bar} min-w-[64px] transition-colors duration-500 group-hover/panel:text-white`}
      >
        <span className="text-3xl font-black text-foreground/30 opacity-80 transition-colors group-hover/panel:text-white lg:text-4xl">
          {num}
        </span>
        <div className="mt-auto rotate-180 whitespace-nowrap text-xs font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-5 transition-transform duration-500 group-hover/panel:-translate-y-2 md:p-6 lg:p-8">
        <h4 className="mb-4 pr-2 text-lg font-black uppercase leading-[1] tracking-tight lg:text-xl">
          {title}
        </h4>
        <p className="mt-auto text-[0.85rem] font-semibold leading-relaxed text-foreground/80 lg:text-sm">
          {desc}
        </p>
      </div>

      {/* Massive subtle background number */}
      <div
        className={`pointer-events-none absolute -bottom-6 -right-6 select-none text-[8rem] font-black leading-[0.7] text-foreground/5 dark:text-foreground/10 ${accent.num} transition-all duration-700 group-hover/panel:scale-110 lg:text-[10rem]`}
      >
        {num}
      </div>
    </motion.div>
  );
}

export function FAQItem({ q, a, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <details className="group relative cursor-pointer overflow-hidden border-[3px] border-foreground bg-card transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(225,29,72,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-4 p-6 outline-none md:p-8">
        <div className="flex items-center gap-6">
          <span className="hidden text-5xl font-black text-rose-600/20 sm:block">{num}</span>
          <span className="text-xl font-black uppercase leading-[1.25] tracking-normal text-foreground md:text-2xl">{q}</span>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground bg-muted text-foreground transition-all duration-300 group-open:bg-rose-600 group-open:text-white">
          <ChevronRight className="h-6 w-6 transition-transform duration-300 group-open:rotate-90" />
        </div>
      </summary>
      
      <div className="relative z-10 border-t-[3px] border-foreground bg-foreground p-6 md:p-8 text-base font-semibold leading-relaxed text-background md:text-lg duration-300 animate-in fade-in slide-in-from-top-4">
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-rose-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
          Answer
        </div>
        <p className="border-l-[3px] border-rose-600 pl-5">
          {a}
        </p>
      </div>
    </details>
  );
}
