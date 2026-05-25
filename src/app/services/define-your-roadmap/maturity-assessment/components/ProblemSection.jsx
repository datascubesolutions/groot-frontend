"use client";

import { motion } from "framer-motion";
import { Activity, AlertCircle, Target } from "lucide-react";
import Image from "next/image";

const slideAndPop = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: /** @type {import("framer-motion").Transition} */ ({
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    }),
  },
};

export default function ProblemSection() {
  return (
    <section className="relative z-30 bg-background pb-32 pt-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-10 lg:gap-24">
          <div className="top-32 z-40 -mt-16 ml-0 flex flex-col gap-6 md:sticky md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:ml-4 md:w-[35%] no-scrollbar">
            <div className="rounded-none border-y border-l-8 border-r border-forest bg-card/95 p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] backdrop-blur-xl md:p-10 lg:p-6">
              <h2 className="mb-6 flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-forest">
                <span className="h-1 w-12 bg-forest"></span>
                What we see in the field
              </h2>
              <h3 className="mb-8 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[3.5rem] md:text-[3.5rem] lg:text-[4rem]">
                The cost of assuming readiness.
              </h3>
              <p className="mb-8 text-xl font-bold leading-relaxed text-foreground/80">
                Most organizations drastically overestimate their data
                maturity. When you build advanced analytics on a fractured
                foundation, the results are predictably chaotic.
              </p>
              <p className="mb-0 border-l-2 border-forest/50 bg-muted/50 p-4 text-sm font-semibold leading-relaxed text-muted-foreground">
                These patterns show up in every industry we assess — from
                pipeline failures and master-data chaos to conflicting
                definitions that block trust in numbers.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative hidden flex-col overflow-hidden rounded-none border-x border-b border-t-4 border-t-forest bg-card p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:flex"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]"></div>

              <h4 className="z-10 mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50">
                <Target size={14} /> Baseline Disconnect Telemetry
              </h4>

              <div className="relative z-10 space-y-6">
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
                    className={`group/bar flex flex-col gap-2 ${item.expected ? "opacity-40 grayscale" : ""} transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-crosshair`}
                  >
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.15em]">
                      <span className="text-foreground/80 group-hover/bar:text-foreground">{item.label}</span>
                      <span className="text-foreground">{item.score}%</span>
                    </div>
                    <div className="flex h-1.5 w-full overflow-hidden rounded-none bg-muted shadow-inner">
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

              <div className="z-10 mt-8 border-t border-border/50 pt-6 text-[11px] font-bold leading-relaxed text-muted-foreground">
                <span className="mr-2 inline-block bg-forest/10 px-2 py-0.5 font-black uppercase tracking-widest text-forest">
                  Insight
                </span>
                Organizations consistently rate their readiness 2-3x higher
                than reality before objective assessment.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative z-50 mb-8 mt-8 hidden w-full flex-col md:flex"
            >
              <div className="absolute bottom-0 left-6 right-0 top-10 -z-10 bg-foreground shadow-[12px_12px_0px_0px_hsl(var(--forest))] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="ease-[cubic-bezier(0.19,1,0.22,1)] relative ml-0 mr-6 flex flex-col border-[3px] border-foreground bg-card outline outline-1 outline-offset-4 outline-foreground/10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="relative h-[280px] overflow-hidden border-b-[3px] border-forest bg-black">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt=""
                    fill
                    className="ease-[cubic-bezier(0.19,1,0.22,1)] object-cover grayscale-[70%] contrast-125 brightness-90 mix-blend-luminosity opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-[20%]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-[35%] top-0 w-px border-r border-dashed border-forest/40 bg-forest/40" />
                  <div className="absolute left-0 right-0 top-[60%] h-px bg-forest/40" />
                  <div className="absolute left-[35%] top-[60%] h-3 w-3 -translate-x-1.5 -translate-y-1.5 rounded-none bg-forest shadow-[0_0_15px_rgba(34,197,94,0.5)]" />

                  <div className="absolute bottom-5 left-6 z-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-forest text-forest-foreground shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                      <Activity size={24} strokeWidth={2.5} />
                    </div>
                    <div className="border border-forest/30 bg-black/80 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-forest">
                        Signal Lost
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute right-4 top-4 select-none text-[4.5rem] font-black leading-none tracking-tighter text-white/5">
                    NOISE
                  </div>
                </div>

                <div className="relative bg-card px-8 py-8">
                  <div className="absolute right-8 top-0 -translate-y-1/2 bg-foreground px-3 py-1 text-[10px] font-black uppercase tracking-widest text-background">
                    Critical
                  </div>

                  <h4 className="mb-4 flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.3em] text-forest">
                    <span className="h-px w-6 bg-forest"></span>
                    Architectural Entropy
                  </h4>
                  <p className="mb-4 text-[1.6rem] font-black uppercase leading-[0.9] tracking-tight text-foreground">
                    Complexity{" "}
                    <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent">
                      Scales
                    </span>{" "}
                    Exponentially.
                  </p>
                  <p className="border-l-[3px] border-border pl-5 text-sm font-bold leading-relaxed text-muted-foreground">
                    Without deliberate realignment, your enterprise data layer
                    degrades into a massive, fragile web of undocumented
                    workarounds.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col pt-10 md:w-[65%] lg:pt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideAndPop}
              className="group relative z-10 w-full overflow-hidden rounded-none border-2 border-foreground bg-card p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:-translate-y-2 hover:translate-x-2 sm:p-10 md:w-[90%] lg:p-12 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
            >
              <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[6rem] font-black leading-[0.75] text-rose-500/10 transition-colors duration-500 group-hover:text-rose-500/15 sm:text-[8rem] md:-rotate-12 md:text-[18rem]">
                01
              </div>
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-14 w-14 -rotate-2 items-center justify-center bg-rose-500 text-white shadow-[5px_5px_0px_0px_rgba(244,63,94,0.3)]">
                    <Activity size={28} />
                  </div>
                  <p className="bg-rose-500/10 px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-rose-500">
                    Infrastructure Risk
                  </p>
                </div>
                <h4 className="mb-6 text-2xl font-black uppercase leading-[0.9] tracking-tight sm:text-3xl lg:text-4xl">
                  The Pipeline That Fails Every Monday
                </h4>
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  Your Data Factory pipeline fails again. The error says
                  &quot;null reference in CustomerID transformation.&quot;
                  Someone added a new customer type in the source ERP that
                  your pipeline doesn&apos;t handle. This is the third time
                  this month. There&apos;s no schema drift detection, no data
                  quality rules, no proactive alerting.
                </p>
                <div className="mt-8 border-l-4 border-rose-500 bg-rose-500/10 p-6">
                  <p className="text-lg font-bold text-rose-600 dark:text-rose-400">
                    You find out when Finance calls asking why the Power BI
                    dashboard is blank.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideAndPop}
              className="group relative z-20 mt-6 w-full self-end overflow-hidden rounded-none bg-foreground p-6 text-background shadow-[12px_12px_0px_0px_hsl(var(--forest))] transition-all duration-500 hover:-translate-y-2 hover:-translate-x-2 sm:-mt-12 sm:p-8 md:w-[95%] lg:-mt-32 lg:p-12"
            >
              <div className="pointer-events-none absolute -bottom-8 -left-6 select-none text-[6rem] font-black leading-[0.75] text-background/10 transition-colors duration-500 group-hover:text-background/15 sm:text-[8rem] md:rotate-12 md:text-[18rem]">
                02
              </div>
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-14 w-14 rotate-1 items-center justify-center bg-amber-500 text-foreground shadow-[5px_5px_0px_0px_rgba(245,158,11,0.5)]">
                    <AlertCircle size={28} />
                  </div>
                  <p className="border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-amber-500">
                    Data Management
                  </p>
                </div>
                <h4 className="mb-6 text-2xl font-black uppercase leading-[0.9] tracking-tight text-background sm:text-3xl lg:text-4xl">
                  Six Customer IDs, Zero Master Data
                </h4>
                <p className="text-xl font-medium leading-relaxed text-background/80">
                  You need to join customers from Salesforce with orders from
                  your ERP. Simple, right? Except Salesforce uses
                  &quot;AccountID,&quot; the ERP uses
                  &quot;CustomerNumber,&quot; and there&apos;s no master data
                  management.
                </p>
                <div className="mt-8 border-l-4 border-amber-500 bg-black/30 p-6 shadow-inner">
                  <p className="text-lg font-bold text-amber-400">
                    The same customer appears 47 different ways across
                    systems. Your Data Engineer spent three days building a
                    fuzzy match that&apos;s 85% accurate. Everyone pretends
                    that&apos;s good enough.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideAndPop}
              className="group relative z-30 mt-6 w-full overflow-hidden rounded-none border-2 border-foreground bg-card p-6 shadow-[12px_12px_0px_0px_rgba(249,115,22,1)] transition-all duration-500 hover:-translate-y-2 hover:translate-x-2 sm:-mt-10 sm:p-8 md:w-[90%] lg:-mt-20 lg:w-[85%] lg:p-12 dark:shadow-[12px_12px_0px_0px_rgba(249,115,22,1)]"
            >
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[6rem] font-black leading-[0.75] text-orange-500/10 transition-transform duration-700 group-hover:scale-110 sm:text-[8rem] md:text-[20rem]">
                03
              </div>
              <div className="relative z-10 md:w-4/5">
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-14 w-14 rotate-2 items-center justify-center bg-orange-500 text-white shadow-[5px_5px_0px_0px_rgba(249,115,22,0.3)]">
                    <Target size={28} />
                  </div>
                  <p className="bg-orange-500/10 px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                    Semantic Governance
                  </p>
                </div>
                <h4 className="mb-6 text-2xl font-black uppercase leading-[0.9] tracking-tight sm:text-3xl lg:text-4xl">
                  Nobody Knows Where the Number Came From
                </h4>
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  Finance asks why the revenue number in the executive Power
                  BI dashboard doesn&apos;t match the revenue in the sales
                  report. Both are technically &quot;correct.&quot; The
                  executive dashboard excludes returns that haven&apos;t been
                  processed. The sales report includes pending orders.
                </p>
                <div className="mt-8 border-l-4 border-r border-orange-500 border-orange-500/20 bg-orange-500/10 p-6">
                  <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
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
  );
}
