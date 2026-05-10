// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
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
      <div className="container mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            {
              label: "Services",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
            {
              label: "Define Your Roadmap",
              href: "/services/define-your-roadmap",
            },
            {
              label: "Maturity Assessment",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
          ]}
        />
      </div>

      {/* Hero Section - Dense, Overlapping Layout */}
      <section className="relative pb-20 pt-12 lg:pb-32 lg:pt-16">
        {/* Abstract structural shape */}
        <div
          className="absolute right-0 top-0 -z-10 hidden h-full w-[55vw] bg-muted/40 backdrop-blur-3xl lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
        />

        <div className="container relative z-20 mx-auto max-w-7xl px-6">
          <div className="relative grid grid-cols-1 items-center gap-0 lg:grid-cols-12">
            {/* Absolute positioning of the image to overlap wildly behind text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="right-0 top-5 -z-10 mb-10 h-[350px] overflow-hidden rounded-br-[5rem] rounded-tl-none border-b-8 border-l-8 border-forest/30 shadow-2xl contrast-125 grayscale-[40%] lg:absolute lg:mb-0 lg:h-[550px] lg:w-[65vw] lg:max-w-[850px]"
            >
              <Image
                src="/images/maturity/live_radar.png"
                alt="Data Professionals Analyzing Digital Radar"
                fill
                className="object-cover opacity-90 mix-blend-overlay"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent lg:w-[15%]" />
            </motion.div>

            {/* Twisted Text Layer */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative flex flex-col items-start gap-8 pt-8 md:flex-row lg:col-span-12"
            >
              {/* Vertical Badge / Twisted presentation */}
              <motion.div
                variants={fadeIn}
                className="hidden flex-col items-center pl-2 md:flex"
              >
                <div className="mb-6 h-32 w-px bg-gradient-to-b from-transparent to-forest/60"></div>
                <div className="flex rotate-180 items-center justify-center gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-forest [writing-mode:vertical-rl]">
                  Stop Guessing. Start Scaling.
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/80 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-forest"></span>
                  </span>
                </div>
              </motion.div>

              <div className="max-w-[1050px]">
                <motion.h1
                  variants={fadeIn}
                  className="mb-8 indent-0 text-[2rem] font-black uppercase leading-[0.95] tracking-tighter text-white mix-blend-difference drop-shadow-[0_0_30px_hsl(var(--forest)/0.3)] sm:text-[3rem] sm:leading-[0.85] md:text-[5rem] lg:text-[7.5rem]"
                >
                  <span className="stroke-text isolate inline-block bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent mix-blend-normal">
                    Data
                  </span>{" "}
                  <span className="text-mint isolate mix-blend-normal">&amp;</span>{" "}
                  Analytics
                  <br />
                  <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
                    Maturity Assessment
                  </span>
                </motion.h1>

                <div className="relative mt-8 grid max-w-5xl gap-6 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:gap-8 sm:rounded-[2rem] sm:p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:gap-16">
                  <div className="absolute -inset-[2px] -z-10 rounded-[2rem] bg-gradient-to-b from-forest/30 to-transparent" />

                  <motion.p
                    variants={fadeIn}
                    className="text-xl font-semibold leading-snug text-foreground md:text-2xl"
                  >
                    Before you can close the gap, you need to know where the gap
                    is. We assess your current data capabilities across six
                    dimensions and show you exactly where you stand —{" "}
                    <span className="pointer-events-none text-forest underline decoration-forest/30 underline-offset-4">
                      with evidence, not assumptions.
                    </span>
                  </motion.p>

                  <div className="flex flex-col justify-between">
                    <motion.p
                      variants={fadeIn}
                      className="mb-8 text-base leading-relaxed text-muted-foreground"
                    ></motion.p>
                    <motion.div variants={fadeIn}>
                      <Link
                        href="/contact?service=maturity-assessment"
                        passHref
                      >
                        <Button
                          variant="hero"
                          size="lg"
                          className="group relative h-16 w-full overflow-hidden rounded-none border-2 border-foreground bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:translate-x-[8px] hover:translate-y-[8px] hover:bg-forest hover:text-forest-foreground hover:shadow-none md:w-auto dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
                        >
                          <span className="relative z-10 flex h-full w-full items-center justify-center px-12 text-center text-xs font-black uppercase tracking-wider sm:px-16 sm:text-sm sm:tracking-[0.15em]">
                            <span>Schedule Assessment</span>
                            <ChevronRight className="absolute right-4 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 sm:right-6 sm:h-5 sm:w-5" />
                          </span>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Asymmetric, Watermarked Overlaps */}
      <section className="relative z-30 bg-background pb-32 pt-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-10 lg:gap-24">
            {/* Extreme sticky side column with data-viz to fill empty space */}
            <div className="top-32 z-40 -mt-16 ml-0 flex flex-col gap-6 md:sticky md:ml-4 md:w-[35%]">
              {/* Main Title Block */}
              <div className="rounded-bl-[3rem] rounded-tr-[3rem] border-y border-l-8 border-r border-forest bg-card/95 p-8 shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl md:p-10 lg:p-6">
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

              {/* Enhanced Visual Graph Block to Utilize Empty Space */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative hidden flex-col overflow-hidden rounded-br-[3rem] border-x border-b border-t-4 border-t-forest bg-card p-8 shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.08)] md:flex"
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
                      className={`flex flex-col gap-2 ${item.expected ? "opacity-40 grayscale" : ""}`}
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

                <div className="z-10 mt-8 border-t border-border/50 pt-6 text-[11px] font-bold leading-relaxed text-muted-foreground">
                  <span className="mr-2 inline-block bg-forest/10 px-2 py-0.5 font-black uppercase tracking-widest text-forest">
                    Insight
                  </span>
                  Organizations consistently rate their readiness 2-3x higher
                  than reality before objective assessment.
                </div>
              </motion.div>

              {/* Premium Asymmetric Editorial Image Block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-50 mb-8 mt-8 hidden w-full flex-col md:flex"
              >
                {/* Structural Offset Background */}
                <div className="absolute bottom-0 left-6 right-0 top-10 -z-10 bg-foreground shadow-[20px_20px_0px_0px_hsl(var(--forest))] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />

                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] relative ml-0 mr-6 flex flex-col border-[3px] border-foreground bg-card outline outline-1 outline-offset-4 outline-foreground/10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="relative h-[280px] overflow-hidden border-b-[3px] border-forest bg-black">
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

                    <div className="absolute bottom-5 left-6 z-10 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center bg-forest text-forest-foreground shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
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

            {/* Overlapping, cascading problem cards with massive twisted watermarks */}
            <div className="flex flex-col pt-10 md:w-[65%] lg:pt-0">
              {/* Problem 01 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-10 w-full overflow-hidden rounded-br-[2.5rem] rounded-tl-[2.5rem] border-2 border-foreground bg-card p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:-translate-y-2 hover:translate-x-2 sm:rounded-br-[3rem] sm:rounded-tl-[3rem] sm:p-10 md:w-[90%] lg:p-12 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[6rem] font-black leading-[0.75] text-rose-500/10 transition-colors duration-500 group-hover:text-rose-500/15 sm:text-[8rem] md:-rotate-12 md:text-[18rem]">
                  01
                </div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-6">
                    <div className="flex h-14 w-14 -rotate-6 items-center justify-center bg-rose-500 text-white shadow-[5px_5px_0px_0px_rgba(244,63,94,0.3)]">
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

              {/* Problem 02 - Highly Overlapped */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-20 mt-6 w-full self-end overflow-hidden rounded-bl-[2.5rem] rounded-tr-[2.5rem] bg-foreground p-6 text-background shadow-[12px_12px_0px_0px_hsl(var(--forest))] transition-all duration-500 hover:-translate-y-2 hover:-translate-x-2 sm:-mt-12 sm:rounded-bl-[3rem] sm:rounded-tr-[3rem] sm:p-8 md:w-[95%] lg:-mt-32 lg:p-12"
              >
                <div className="pointer-events-none absolute -bottom-8 -left-6 select-none text-[6rem] font-black leading-[0.75] text-background/10 transition-colors duration-500 group-hover:text-background/15 sm:text-[8rem] md:rotate-12 md:text-[18rem]">
                  02
                </div>
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-6">
                    <div className="flex h-14 w-14 rotate-3 items-center justify-center bg-amber-500 text-foreground shadow-[5px_5px_0px_0px_rgba(245,158,11,0.5)]">
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

              {/* Problem 03 - Dense nested overlap */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideAndPop}
                className="group relative z-30 mt-6 w-full overflow-hidden rounded-br-[2.5rem] rounded-tl-[2.5rem] border-2 border-foreground bg-card p-6 shadow-[12px_12px_0px_0px_rgba(249,115,22,1)] transition-all duration-500 hover:-translate-y-2 hover:translate-x-2 sm:-mt-10 sm:rounded-br-[3rem] sm:rounded-tl-[3rem] sm:p-8 md:w-[90%] lg:-mt-20 lg:w-[85%] lg:p-12 dark:shadow-[12px_12px_0px_0px_rgba(249,115,22,0.5)]"
              >
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[6rem] font-black leading-[0.75] text-orange-500/10 transition-transform duration-700 group-hover:scale-110 sm:text-[8rem] md:text-[20rem]">
                  03
                </div>
                <div className="relative z-10 md:w-4/5">
                  <div className="mb-8 flex items-center gap-6">
                    <div className="flex h-14 w-14 rotate-6 items-center justify-center bg-orange-500 text-white shadow-[5px_5px_0px_0px_rgba(249,115,22,0.3)]">
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

      {/* Deliverables Section - Zero Gap Interlocking Grid (Hardcore Blueprint Style) */}
      <section className="relative border-b-2 border-t-[8px] border-foreground bg-muted/20 py-16 lg:py-24">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b-4 border-forest pb-8 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <h2 className="mb-6 inline-block border border-forest/30 bg-forest/10 px-4 py-2 text-sm font-black uppercase tracking-[0.4em] text-forest">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[2.5rem] md:text-[4.5rem]">
                Clarity over
                <br />
                assumptions.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-forest bg-background/50 p-4 pl-6 text-base font-bold leading-relaxed text-foreground/80 backdrop-blur-sm">
              Every assessment produces the same high-quality artifacts — no
              shortcuts, no templated scores. You get evidence, priorities, and
              a path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-4 dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)]">
            {/* Cell 1: 2-columns wide */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[300px] flex-col justify-between overflow-hidden bg-card p-6 transition-colors duration-500 hover:bg-forest/5 sm:min-h-[350px] sm:p-8 md:col-span-2 lg:p-12"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-16 flex items-start justify-between">
                <PieChart
                  className="h-16 w-16 text-forest transition-colors duration-500 group-hover:text-emerald-300"
                  strokeWidth={1}
                />
                <span className="text-[6rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen">
                  D-01
                </span>
              </div>
              <div className="relative z-10 max-w-xl">
                <p className="mb-4 inline-block border-b-2 border-forest/30 pb-1 text-sm font-black uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:border-emerald-300/50 group-hover:text-emerald-300">
                  Six dimensions, evidence-based scores
                </p>
                <h4 className="mb-6 text-4xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                  Maturity Scorecard
                </h4>
                <p className="text-lg font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-emerald-50">
                  A scored assessment across six dimensions: Data Management,
                  Analytics Capability, Governance, Technology, Organization,
                  and Culture. Each dimension rated with clear evidence from
                  interviews and technical review — not gut feel.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative flex min-h-[300px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-cyan-500/5 sm:min-h-[350px] sm:p-8 lg:p-12"
            >
              <div className="relative z-10 mb-14 flex items-start justify-between">
                <Target
                  className="h-12 w-12 text-cyan-500 transition-colors duration-500 group-hover:text-cyan-300"
                  strokeWidth={1}
                />
                <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen">
                  D-02
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-4 inline-block border-b border-cyan-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-cyan-500 transition-colors duration-500 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                  Current state vs. target
                </p>
                <h4 className="mb-6 text-3xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                  Gap Analysis
                </h4>
                <p className="text-base font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cyan-50">
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
              className="group relative flex min-h-[300px] flex-col justify-between bg-card p-6 transition-colors duration-500 hover:bg-blue-500/5 sm:min-h-[350px] sm:p-8 lg:p-12"
            >
              <div className="relative z-10 mb-14 flex items-start justify-between">
                <ShieldCheck
                  className="h-12 w-12 text-blue-500 transition-colors duration-500 group-hover:text-blue-300"
                  strokeWidth={1}
                />
                <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen">
                  D-03
                </span>
              </div>
              <div className="relative z-10">
                <p className="mb-4 inline-block border-b border-blue-500/30 pb-1 text-[0.7rem] font-black uppercase tracking-[0.2em] text-blue-500 transition-colors duration-500 group-hover:border-blue-300/50 group-hover:text-blue-300">
                  Architecture review
                </p>
                <h4 className="mb-6 text-3xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-500 group-hover:text-white">
                  Technical Findings
                </h4>
                <p className="text-base font-semibold leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-blue-50">
                  Specific observations from our architecture review:
                  Fabric/Azure configuration, pipeline reliability, Power BI
                  semantic model design, Purview governance implementation,
                  security configuration, and technical debt.
                </p>
              </div>
            </motion.div>

            {/* Cell 4: Full width span below */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex flex-col items-center justify-between gap-12 overflow-hidden bg-foreground p-8 text-background sm:p-10 md:col-span-2 md:flex-row lg:col-span-4 lg:p-16 lg:px-6"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full max-w-[800px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10 max-w-4xl">
                <div className="mb-8 flex items-center gap-6">
                  <CheckCircle2 className="h-14 w-14 text-mint" />
                  <span className="text-[4rem] font-black leading-none tracking-tighter text-background/10 md:text-[6rem]">
                    D-04
                  </span>
                </div>
                <h4 className="mb-8 text-[2rem] font-black uppercase leading-[0.85] tracking-tight text-background lg:text-[4.5rem]">
                  Prioritized Recommendations &amp; Exec Summary
                </h4>
                <p className="max-w-3xl border-l-[3px] border-forest pl-6 text-xl font-bold leading-relaxed text-background/80">
                  A prioritized set of recommendations with rationale and rough
                  effort estimates. We explain why and in what order. Delivered
                  alongside a one-page summary for leadership that drives
                  decisions, not just informs.
                </p>
              </div>

              {/* Twisted typography accent in the corner */}
              <div className="relative z-10 hidden pr-4 lg:block">
                <div className="rotate-180 select-none text-[4rem] font-black uppercase leading-[0.75] tracking-tighter text-background/5 transition-colors [writing-mode:vertical-rl] group-hover:text-background/10 sm:text-[6rem] xl:text-[8rem]">
                  ROADMAP
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-20 flex flex-col justify-between gap-8 border-b-8 border-foreground pb-12 md:flex-row md:items-center md:gap-10">
            <h3 className="mb-0 text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-none tracking-tighter text-forest">
              Our process
            </h3>
            <p className="max-w-sm border border-forest/40 bg-forest/15 p-6 text-base font-black uppercase tracking-[0.2em] text-foreground md:text-right">
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

      {/* FAQ */}
      <section className="relative overflow-hidden border-t-2 border-border/60 bg-muted/40 py-16 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-forest/5 blur-[100px]" />
        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <div className="mb-16 border-b-4 border-foreground pb-8">
            <h2 className="text-[2rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[2.5rem] md:text-[5rem]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="How is this different from a Microsoft assessment?"
              a="Microsoft's assessments focus on Azure adoption. We evaluate your organization's capabilities independent of tool vendor. We'll tell you if Fabric isn't the right choice — Microsoft won't."
            />
            <FAQItem
              q="Who should be involved from our side?"
              a="Typically 8-12 stakeholders: CDO or equivalent, IT leadership, business unit leaders, and 3-4 key data practitioners (your Data Engineers, Power BI developers, analysts)."
            />
            <FAQItem
              q="What if we already know our gaps?"
              a="You might know some. But assessments consistently reveal blind spots — capabilities teams assume exist but don't, or problems that look technical but are actually organizational."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative overflow-hidden border-t border-border/60 bg-background py-16 lg:py-24">
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          {/* Editorial Next Steps Header */}
          <div className="relative mb-24 grid grid-cols-1 items-end gap-10 md:grid-cols-12 lg:gap-10 lg:gap-16">
            {/* Background absolute elements */}
            <div className="absolute -top-12 right-[30%] -z-10 hidden h-[150%] w-[1px] bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <div className="relative z-10 pb-4 pt-8 md:col-span-12 lg:col-span-7">
              <div className="absolute -left-12 bottom-0 top-0 hidden w-2 origin-bottom bg-forest transition-transform duration-700 hover:scale-y-110 lg:block"></div>
              <h2 className="mb-8 flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-forest">
                <span className="h-[2px] w-12 bg-forest"></span> Next Steps
              </h2>
              <h3 className="mb-8 text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground drop-shadow-[5px_5px_0_rgba(0,0,0,0.02)] sm:mb-10 sm:text-[2.5rem] sm:leading-[0.85] md:text-[5rem] lg:text-[6rem]">
                Continue <br />
                <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent mix-blend-normal">
                  Your
                </span>
                <br />
                Journey
              </h3>
              <p className="max-w-xl border-l-[4px] border-forest bg-muted/30 p-6 text-base font-bold leading-relaxed text-foreground/80 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.03)] backdrop-blur-md transition-colors selection:bg-forest/30 hover:bg-muted/50 sm:p-8 sm:text-xl sm:shadow-[15px_15px_0px_0px_rgba(0,0,0,0.03)]">
                Data maturity is not a static destination. Explore related
                services to help you define and execute a resilient, scalable,
                and high-impact enterprise data strategy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 mt-12 hidden h-full items-end justify-end md:col-span-12 md:flex lg:col-span-5 lg:mt-0 lg:justify-center"
            >
              <div className="group relative flex w-full max-w-[480px] flex-col overflow-visible bg-foreground text-background shadow-[30px_30px_0px_0px_hsl(var(--forest)/0.2)]">
                {/* Accent Corner */}
                <div className="absolute -right-6 -top-6 z-30 h-20 w-20 border-r-[4px] border-t-[4px] border-forest transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2" />

                {/* Severe Cropped Image Grid */}
                <div className="relative h-[280px] w-full bg-background p-1.5 pb-0">
                  <div className="relative h-full w-full overflow-hidden bg-black outline outline-1 outline-border/20">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                      alt="Future Readiness"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="ease-[cubic-bezier(0.19,1,0.22,1)] object-cover opacity-80 grayscale-[80%] transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-forest/20 mix-blend-overlay transition-colors duration-1000 group-hover:bg-transparent" />

                    {/* High tech overlay elements */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="h-6 w-1.5 bg-forest shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                      <div className="mt-auto h-4 w-1.5 bg-forest/60" />
                      <div className="mt-auto h-8 w-1.5 bg-forest/30" />
                    </div>

                    <div className="absolute right-4 top-4 border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-md">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                        Telemetry: Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 md:p-10">
                  {/* Decorative watermark */}
                  <div className="pointer-events-none absolute right-6 top-10 rotate-90 select-none text-[3.5rem] font-black tracking-tighter text-background/10 transition-colors duration-700 group-hover:text-background/20">
                    FWD
                  </div>

                  <div className="relative z-10 mb-8 flex w-fit items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-forest bg-transparent text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-foreground">
                      <Target size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-forest">
                      Future Readiness
                    </span>
                  </div>
                  <p className="relative z-10 border-l-[3px] border-forest/40 pl-5 text-[1.05rem] font-bold leading-relaxed text-background/80">
                    The core capability that enables your organization to
                    compound value, integrate AI sustainably, and operate with
                    absolute clarity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-0 border-4 border-foreground bg-foreground p-1 md:grid-cols-3">
            <Link
              href="/services/define-your-roadmap/enterprise-data-strategy"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-forest md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-forest/30 bg-forest/10 text-forest shadow-[4px_4px_0_0_hsl(var(--forest)/0.2)] transition-transform duration-500 group-hover:scale-110">
                <Target size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-forest">
                Enterprise
                <br />
                Data Strategy
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Align your data initiatives with business outcomes and build a
                comprehensive roadmap.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-forest/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-forest transition-colors group-hover:text-forest/90">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            <Link
              href="/services/define-your-roadmap/stack-evaluation"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-cyan-500 md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-[4px_4px_0_0_rgba(6,182,212,0.2)] transition-transform duration-500 group-hover:scale-110 dark:text-cyan-400">
                <PieChart size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                Platform
                <br />
                Evaluation
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Objective analysis to select the right tools and architecture
                for your specific needs.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-cyan-500/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-600 transition-colors group-hover:text-cyan-500 dark:text-cyan-400">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            <Link
              href="/services/build-your-foundation/foundation-build"
              className="group block h-full border border-transparent bg-card p-6 transition-colors duration-500 hover:border-blue-500 md:p-10"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-none border border-blue-500/30 bg-blue-500/10 text-blue-600 shadow-[4px_4px_0_0_rgba(59,130,246,0.2)] transition-transform duration-500 group-hover:scale-110 dark:text-blue-400">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Foundation
                <br />
                Build
              </h3>
              <p className="mb-10 text-[0.95rem] font-medium leading-relaxed text-foreground/80">
                Implement a robust, scalable data architecture that serves as
                the bedrock for analytics.
              </p>
              <div className="border-t-[3px] border-border pt-6 transition-colors group-hover:border-blue-500/50">
                <span className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400">
                  LEARN MORE{" "}
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="relative overflow-hidden border-t-[12px] border-forest bg-muted/30 py-16 text-foreground md:py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_40%)] blur-[100px]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mb-8 select-none text-4xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:mb-10 sm:text-[2.5rem] md:text-[7rem]">
              <span className="text-forest underline decoration-forest/50 underline-offset-8">
                Know
              </span>
              <br /> Where you
              <br />
              Stand.
            </h2>

            <div className="relative mx-auto max-w-4xl border-[4px] border-foreground bg-card/95 p-6 shadow-[16px_16px_0_0_rgba(0,0,0,1)] backdrop-blur-xl sm:p-8 md:p-12 dark:shadow-[16px_16px_0_0_rgba(255,255,255,0.1)]">
              <div className="absolute -left-4 -top-4 h-8 w-8 border-l-4 border-t-4 border-forest"></div>
              <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-4 border-r-4 border-forest"></div>

              <p className="mx-auto mb-6 text-xl font-black uppercase leading-relaxed tracking-wide text-foreground md:text-2xl">
                A maturity assessment gives you the baseline you need to make
                confident Microsoft Fabric and Azure investments.
              </p>
              <p className="mx-auto mb-10 border-t-2 border-border/50 pt-6 text-lg font-bold leading-relaxed text-muted-foreground md:text-xl">
                Let&apos;s find your gaps before they find you.
              </p>

              <div className="flex w-full justify-center">
                <Link href="/contact?service=maturity-assessment" passHref className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group relative flex w-full items-center justify-center rounded-none border-4 border-foreground bg-transparent py-6 text-center text-base font-black uppercase tracking-wider text-foreground shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-3 hover:translate-y-3 hover:border-forest hover:bg-forest hover:text-forest-foreground hover:shadow-none sm:w-auto sm:py-8 sm:text-xl sm:tracking-[0.2em] dark:shadow-[12px_12px_0_0_rgba(255,255,255,0.2)] dark:hover:shadow-none"
                  >
                    <span className="flex h-full w-full items-center justify-center px-12 sm:px-16">Schedule Assessment</span>
                    <ChevronRight className="absolute right-4 h-6 w-6 transition-transform group-hover:translate-x-3 sm:right-6 sm:h-8 sm:w-8" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      className={`group/panel relative flex h-auto flex-1 flex-col overflow-hidden border-b border-l border-foreground/30 bg-card shadow-sm transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:translate-x-2 hover:border-foreground hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] lg:min-h-[350px] lg:flex-row lg:border-b-0 lg:border-l-0 lg:border-t dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.2)]`}
    >
      {/* Twisted Vertical Bar */}
      <div
        className={`flex items-center justify-between border-r border-border/50 bg-muted/40 p-6 lg:flex-col ${accent.bar} min-w-[80px] transition-colors duration-500 group-hover/panel:text-white`}
      >
        <span className="text-4xl font-black text-foreground/30 opacity-80 transition-colors group-hover/panel:text-white">
          {num}
        </span>
        <div className="mt-auto rotate-180 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-6 transition-transform duration-500 group-hover/panel:-translate-y-2 md:p-10">
        <h4 className="mb-6 pr-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">
          {title}
        </h4>
        <p className="mt-auto text-base font-bold leading-relaxed text-foreground/70">
          {desc}
        </p>
      </div>

      {/* Massive subtle background number */}
      <div
        className={`pointer-events-none absolute -bottom-8 -right-8 select-none text-[12rem] font-black leading-[0.7] text-foreground/5 dark:text-foreground/10 ${accent.num} transition-all duration-700 group-hover/panel:scale-110`}
      >
        {num}
      </div>
    </motion.div>
  );
}

export function FAQItem({ q, a }) {
  return (
    <details className="group relative -mt-[3px] cursor-pointer rounded-none border-[3px] border-border/80 bg-card p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-foreground hover:shadow-[10px_10px_0_0_foreground] md:p-10 dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-6 text-2xl font-black uppercase tracking-tight outline-none">
        <span className="flex-1">{q}</span>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-forest/10 text-forest shadow-[4px_4px_0_0_hsl(var(--forest)/0.3)] transition-all duration-300 group-open:rotate-90 group-open:bg-forest group-open:text-forest-foreground group-open:shadow-[2px_2px_0_0_foreground]">
          <ChevronRight className="h-6 w-6" />
        </div>
      </summary>
      <div className="mt-8 border-l-4 border-t-4 border-foreground border-l-forest bg-muted/30 px-6 pt-8 text-lg font-bold leading-relaxed text-muted-foreground duration-300 animate-in fade-in slide-in-from-top-4">
        {a}
      </div>
    </details>
  );
}
