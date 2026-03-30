"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SERVICES_ENTRY_HREF } from "@/lib/constants/services";
import { motion } from "framer-motion";
import { Activity, AlertCircle, CheckCircle2, ChevronRight, PieChart, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function MaturityAssessment() {
  return (
    <main className="pt-20 min-h-screen relative bg-background overflow-x-hidden selection:bg-forest/30">
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Services", href: SERVICES_ENTRY_HREF },
            { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
            { label: "Maturity Assessment", href: "/services/define-your-roadmap/maturity-assessment" },
          ]}
        />
      </div>

      {/* Hero Section - Dense, Overlapping Layout */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32">
        {/* Abstract structural shape */}
        <div className="absolute top-0 right-0 w-[55vw] h-full bg-muted/40 backdrop-blur-3xl -z-10 hidden lg:block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center">

            {/* Absolute positioning of the image to overlap wildly behind text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:absolute top-5 right-0 lg:w-[48vw] lg:max-w-[700px] h-[400px] lg:h-[650px] -z-10 mb-10 lg:mb-0 rounded-tl-none rounded-br-[6rem] overflow-hidden grayscale-[40%] contrast-125 border-l-8 border-b-8 border-forest/30 shadow-2xl"
            >
              <Image
                src="/images/maturity/live_radar.png"
                alt="Data Professionals Analyzing Digital Radar"
                fill
                className="object-cover mix-blend-overlay opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:w-[60%]" />
            </motion.div>

            {/* Twisted Text Layer */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-12 relative flex flex-col md:flex-row gap-8 items-start pt-8"
            >
              {/* Vertical Badge / Twisted presentation */}
              <motion.div variants={fadeIn} className="hidden md:flex flex-col items-center pl-2">
                <div className="w-px h-32 bg-gradient-to-b from-transparent to-forest/60 mb-6"></div>
                <div className="[writing-mode:vertical-rl] text-sm font-black tracking-[0.4em] uppercase text-forest rotate-180 flex items-center justify-center gap-6 whitespace-nowrap">
                  Stop Guessing. Start Scaling.
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint/80 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-forest"></span>
                  </span>
                </div>
              </motion.div>

              <div className="max-w-[1050px]">
                <motion.h1 variants={fadeIn} className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-black mb-8 tracking-tighter leading-[0.85] indent-0 uppercase mix-blend-difference text-white drop-shadow-[0_0_30px_hsl(var(--forest)/0.3)]">
                  <span className="inline-block isolate mix-blend-normal text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 stroke-text">Data</span>{" "}
                  <span className="text-mint">&amp;</span>{" "}
                  <span className="inline-block isolate mix-blend-normal text-black">A</span>
                  nalytics
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 stroke-text">Maturity Assessment</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mt-8 bg-background/85 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-border/60 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] relative">
                  <div className="absolute -inset-[2px] bg-gradient-to-b from-forest/30 to-transparent rounded-[2rem] -z-10" />

                  <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground font-semibold leading-snug">
                    Before you can close the gap, you need to know where the gap is. We assess your current data capabilities across six dimensions and show you exactly where you stand — <span className="text-forest underline decoration-forest/30 underline-offset-4 pointer-events-none">with evidence, not assumptions.</span>
                  </motion.p>

                  <div className="flex flex-col justify-between">
                    <motion.p variants={fadeIn} className="text-base text-muted-foreground leading-relaxed mb-8">
                      Evidence-based scoring, gap analysis, and prioritized recommendations so you can invest in Fabric and Azure with confidence — <strong className="text-foreground bg-forest/10 px-2 py-0.5 whitespace-nowrap">no guesswork, no vendor bias.</strong>
                    </motion.p>
                    <motion.div variants={fadeIn}>
                      <Link href="/contact?service=maturity-assessment">
                        <Button variant="hero" size="lg" className="px-8 h-16 w-full md:w-auto overflow-hidden group relative bg-foreground text-background hover:bg-forest hover:text-forest-foreground transition-all duration-500 rounded-none border-2 border-foreground shadow-[10px_10px_0px_0px_hsl(var(--forest)/0.3)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px]">
                          <span className="relative z-10 flex items-center font-black tracking-[0.15em] uppercase text-sm">
                            Schedule Assessment
                            <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
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
      <section className="pt-10 pb-32 bg-background relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-24 items-start">

            {/* Extreme sticky side column with data-viz to fill empty space */}
            <div className="md:w-[35%] md:sticky top-32 z-40 flex flex-col gap-6 -mt-16 ml-0 md:ml-4">
              
              {/* Main Title Block */}
              <div className="bg-card/95 backdrop-blur-xl p-8 lg:p-10 border-l-8 border-y border-r border-forest shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-tr-[3rem] rounded-bl-[3rem]">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-forest mb-6 flex items-center gap-4">
                  <span className="w-12 h-1 bg-forest"></span>
                  Field Observations
                </h2>
                <h3 className="text-[3.5rem] md:text-[4rem] font-black leading-[0.85] tracking-tighter text-foreground mb-8 uppercase">The cost of assuming readiness.</h3>
                <p className="text-xl text-foreground/80 font-bold leading-relaxed mb-8">
                  Most organizations drastically overestimate their data maturity. When you build advanced analytics on a fractured foundation, the results are predictably chaotic.
                </p>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-0 bg-muted/50 p-4 border-l-2 border-forest/50">
                  These patterns show up in every industry we assess — from pipeline failures and master-data chaos to conflicting definitions that block trust in numbers.
                </p>
              </div>
              
              {/* Enhanced Visual Graph Block to Utilize Empty Space */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:flex flex-col bg-card border-x border-b border-t-4 border-t-forest shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.08)] p-8 relative overflow-hidden group rounded-br-[3rem]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50 mb-8 z-10 flex items-center gap-2">
                  <Target size={14}/> Baseline Disconnect Telemetry
                </h4>
                
                <div className="space-y-6 z-10 relative">
                  {[
                    { label: "Perceived Tech Readiness", score: 85, color: "bg-forest", expected: true },
                    { label: "Actual Tech Readiness", score: 32, color: "bg-rose-500", expected: false },
                    { label: "Perceived Data Trust", score: 70, color: "bg-forest", expected: true },
                    { label: "Actual Data Quality", score: 28, color: "bg-amber-500", expected: false },
                    { label: "Governance Coverage", score: 15, color: "bg-orange-500", expected: false },
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col gap-2 ${item.expected ? 'opacity-40 grayscale' : ''}`}>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.15em]">
                        <span className="text-foreground/80">{item.label}</span>
                        <span className="text-foreground">{item.score}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full flex shadow-inner">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${item.score}%` }}
                           transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                           viewport={{ once: true }}
                           className={`h-full ${item.color} relative`}
                         >
                         </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-[11px] font-bold text-muted-foreground leading-relaxed z-10">
                  <span className="text-forest inline-block mr-2 font-black uppercase tracking-widest bg-forest/10 px-2 py-0.5">Insight</span>
                  Organizations consistently rate their readiness 2-3x higher than reality before objective assessment.
                </div>
              </motion.div>

              {/* Premium Asymmetric Editorial Image Block */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex flex-col relative w-full lg:w-[120%] -ml-0 lg:-ml-[10%] mt-8 mb-8 z-50 group"
              >
                {/* Structural Offset Background */}
                <div className="absolute top-10 bottom-0 left-6 right-0 bg-foreground shadow-[20px_20px_0px_0px_hsl(var(--forest))] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />

                <div className="relative border-[3px] border-foreground bg-card ml-0 mr-6 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col outline outline-1 outline-offset-4 outline-foreground/10">
                  
                  <div className="h-[280px] relative overflow-hidden bg-black border-b-[3px] border-forest">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                      alt="Data Analytics Complexity"
                      fill
                      className="object-cover mix-blend-luminosity opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                      sizes="(min-width: 768px) 420px, 100vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {/* Data Viz Overlay elements */}
                    <div className="absolute top-0 bottom-0 left-[35%] w-px bg-forest/40 border-r border-dashed border-forest/40" />
                    <div className="absolute top-[60%] left-0 right-0 h-px bg-forest/40" />
                    <div className="absolute top-[60%] left-[35%] w-3 h-3 bg-forest -translate-x-1.5 -translate-y-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    
                    <div className="absolute bottom-5 left-6 flex items-center gap-4 z-10">
                      <div className="w-12 h-12 bg-forest flex items-center justify-center text-forest-foreground shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
                        <Activity size={24} strokeWidth={2.5} />
                      </div>
                      <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 border border-forest/30">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-forest">Signal Lost</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 text-[4.5rem] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter">
                      NOISE
                    </div>
                  </div>
                  
                  <div className="px-8 py-8 relative bg-card">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-foreground text-background text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                      Critical
                    </div>
                    
                    <h4 className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-forest mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-forest"></span>
                      Architectural Entropy
                    </h4>
                    <p className="text-[1.6rem] font-black uppercase tracking-tight leading-[0.9] mb-4 text-foreground">
                      Complexity <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/30 stroke-text">Scales</span> Exponentially.
                    </p>
                    <p className="text-sm font-bold text-muted-foreground leading-relaxed border-l-[3px] border-border pl-5">
                      Without deliberate realignment, your enterprise data layer degrades into a massive, fragile web of undocumented workarounds.
                    </p>
                  </div>
                  
                </div>
              </motion.div>

            </div>

            {/* Overlapping, cascading problem cards with massive twisted watermarks */}
            <div className="md:w-[65%] flex flex-col pt-10 lg:pt-0">

              {/* Problem 01 */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="relative bg-card border-2 border-border p-10 lg:p-14 shadow-2xl z-10 w-full md:w-[90%] hover:scale-[1.02] hover:border-forest/30 transition-all duration-500 overflow-hidden group rounded-tl-[4rem] rounded-br-[4rem]"
              >
                <div className="absolute -top-10 -right-4 text-[12rem] md:text-[18rem] font-black text-rose-500/10 leading-[0.75] select-none pointer-events-none group-hover:text-rose-500/15 transition-colors duration-500 md:-rotate-12">01</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-rose-500 text-white flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(244,63,94,0.3)] -rotate-6">
                      <Activity size={28} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-500 bg-rose-500/10 px-3 py-1">Infrastructure Risk</p>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight uppercase leading-[0.9]">The Pipeline That Fails Every Monday</h4>
                  <p className="text-xl text-foreground font-medium leading-relaxed">
                    Your Data Factory pipeline fails again. The error says &quot;null reference in CustomerID transformation.&quot; Someone added a new customer type in the source ERP that your pipeline doesn&apos;t handle. This is the third time this month. There&apos;s no schema drift detection, no data quality rules, no proactive alerting.
                  </p>
                  <div className="mt-8 bg-rose-500/10 border-l-4 border-rose-500 p-6">
                    <p className="text-rose-600 dark:text-rose-400 font-bold text-lg">
                      You find out when Finance calls asking why the Power BI dashboard is blank.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Problem 02 - Highly Overlapped */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="relative bg-foreground text-background p-10 lg:p-14 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)] z-20 w-full md:w-[95%] self-end -mt-16 sm:-mt-24 lg:-mt-32 hover:scale-[1.02] transition-transform duration-500 overflow-hidden group rounded-tr-[4rem] rounded-bl-[4rem]"
              >
                <div className="absolute -bottom-8 -left-6 text-[12rem] md:text-[18rem] font-black text-background/10 leading-[0.75] select-none pointer-events-none group-hover:text-background/15 transition-colors duration-500 md:rotate-12">02</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-amber-500 text-foreground flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(245,158,11,0.5)] rotate-3">
                      <AlertCircle size={28} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-500 bg-amber-500/10 px-3 py-1 border border-amber-500/20">Data Management</p>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight uppercase leading-[0.9] text-background">Six Customer IDs, Zero Master Data</h4>
                  <p className="text-xl text-background/80 font-medium leading-relaxed">
                    You need to join customers from Salesforce with orders from your ERP. Simple, right? Except Salesforce uses &quot;AccountID,&quot; the ERP uses &quot;CustomerNumber,&quot; and there&apos;s no master data management.
                  </p>
                  <div className="mt-8 bg-black/30 border-l-4 border-amber-500 p-6 shadow-inner">
                    <p className="text-amber-400 font-bold text-lg">
                      The same customer appears 47 different ways across systems. Your Data Engineer spent three days building a fuzzy match that&apos;s 85% accurate. Everyone pretends that&apos;s good enough.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Problem 03 - Dense nested overlap */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="relative bg-card border-x-4 border-y border-orange-500 p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] z-30 w-full md:w-[90%] lg:w-[85%] -mt-16 sm:-mt-24 lg:-mt-20 hover:scale-[1.02] transition-transform duration-500 overflow-hidden group"
              >
                <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[12rem] md:text-[20rem] font-black text-orange-500/10 leading-[0.75] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">03</div>
                <div className="relative z-10 md:w-4/5">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(249,115,22,0.3)] rotate-6">
                      <Target size={28} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500 bg-orange-500/10 px-3 py-1">Semantic Governance</p>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight uppercase leading-[0.9]">Nobody Knows Where the Number Came From</h4>
                  <p className="text-xl text-foreground font-medium leading-relaxed">
                    Finance asks why the revenue number in the executive Power BI dashboard doesn&apos;t match the revenue in the sales report. Both are technically &quot;correct.&quot; The executive dashboard excludes returns that haven&apos;t been processed. The sales report includes pending orders.
                  </p>
                  <div className="mt-8 bg-orange-500/10 border-l-4 border-orange-500 p-6 border-r border-orange-500/20">
                    <p className="text-orange-600 dark:text-orange-400 font-bold text-lg">
                      Neither is wrong, but there&apos;s no canonical definition documented anywhere in your semantic model.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Zero Gap Interlocking Grid (Hardcore Blueprint Style) */}
      <section className="py-24 bg-muted/20 relative border-t-[8px] border-b-2 border-foreground">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-forest pb-8">
            <div className="max-w-4xl">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-forest mb-6 bg-forest/10 inline-block px-4 py-2 border border-forest/30">
                [ THE SOLUTION: DELIVERABLES ]
              </h2>
              <h3 className="text-[3.5rem] md:text-[5.5rem] font-black tracking-tighter text-foreground uppercase leading-[0.85]">Clarity over<br />assumptions.</h3>
            </div>
            <p className="text-foreground/80 max-w-sm text-base font-bold leading-relaxed border-l-[3px] border-forest pl-6 bg-background/50 backdrop-blur-sm p-4">
              Every assessment produces the same high-quality artifacts — no shortcuts, no templated scores. You get evidence, priorities, and a path forward.
            </p>
          </div>

          <div className="border-[3px] border-foreground bg-foreground gap-[2px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[2px] shadow-[20px_20px_0px_0px_hsl(var(--forest)/0.3)]">

            {/* Cell 1: 2-columns wide */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="col-span-1 md:col-span-2 bg-card p-10 lg:p-16 relative group overflow-hidden hover:bg-forest/5 transition-colors duration-500 flex flex-col justify-between min-h-[450px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)] pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between mb-16">
                <PieChart className="w-16 h-16 text-forest group-hover:text-emerald-300 transition-colors duration-500" strokeWidth={1} />
                <span className="text-[6rem] font-black text-foreground/5 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-screen group-hover:text-emerald-500/20 transition-colors duration-500">D-01</span>
              </div>
              <div className="relative z-10 max-w-xl">
                <p className="text-sm font-black tracking-[0.2em] uppercase text-forest group-hover:text-emerald-300 group-hover:border-emerald-300/50 transition-colors duration-500 mb-4 inline-block border-b-2 border-forest/30 pb-1">Six dimensions, evidence-based scores</p>
                <h4 className="text-4xl font-black mb-6 uppercase tracking-tight leading-[0.9] group-hover:text-white transition-colors duration-500">Maturity Scorecard</h4>
                <p className="text-lg text-muted-foreground group-hover:text-emerald-50 transition-colors duration-500 font-semibold leading-relaxed">
                  A scored assessment across Data Management, Analytics Capability, Governance, Technology, Organization, and Culture. Each dimension is rated with clear evidence — not gut feel. <strong className="text-foreground bg-forest/10 group-hover:text-white group-hover:bg-white/20 transition-colors duration-500 px-1">Scores are defensible and repeatable.</strong>
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card p-10 lg:p-12 relative group hover:bg-cyan-500/5 transition-colors duration-500 flex flex-col justify-between min-h-[450px]">
              <div className="relative z-10 flex items-start justify-between mb-14">
                <Target className="w-12 h-12 text-cyan-500 group-hover:text-cyan-300 transition-colors duration-500" strokeWidth={1} />
                <span className="text-[4rem] font-black text-foreground/5 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-screen group-hover:text-cyan-500/30 transition-colors duration-500">D-02</span>
              </div>
              <div className="relative z-10">
                <p className="text-[0.7rem] font-black tracking-[0.2em] uppercase text-cyan-500 group-hover:text-cyan-300 group-hover:border-cyan-300/50 transition-colors duration-500 mb-4 border-b border-cyan-500/30 pb-1 inline-block">Current state vs. target</p>
                <h4 className="text-3xl font-black mb-6 tracking-tight uppercase leading-[0.9] group-hover:text-white transition-colors duration-500">Gap Analysis &amp; Strategy</h4>
                <p className="text-base text-muted-foreground group-hover:text-cyan-50 transition-colors duration-500 font-semibold leading-relaxed">
                  Document where you are today vs. where you need to be. Gaps are <strong className="text-foreground group-hover:text-white transition-colors duration-500">prioritized by business impact</strong> and dependency order — not ease of implementation.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card p-10 lg:p-12 relative group hover:bg-blue-500/5 transition-colors duration-500 flex flex-col justify-between min-h-[450px]">
              <div className="relative z-10 flex items-start justify-between mb-14">
                <ShieldCheck className="w-12 h-12 text-blue-500 group-hover:text-blue-300 transition-colors duration-500" strokeWidth={1} />
                <span className="text-[4rem] font-black text-foreground/5 leading-none tracking-tighter mix-blend-multiply dark:mix-blend-screen group-hover:text-blue-500/30 transition-colors duration-500">D-03</span>
              </div>
              <div className="relative z-10">
                <p className="text-[0.7rem] font-black tracking-[0.2em] uppercase text-blue-500 group-hover:text-blue-300 group-hover:border-blue-300/50 transition-colors duration-500 mb-4 border-b border-blue-500/30 pb-1 inline-block">Architecture review</p>
                <h4 className="text-3xl font-black mb-6 tracking-tight uppercase leading-[0.9] group-hover:text-white transition-colors duration-500">Technical Findings</h4>
                <p className="text-base text-muted-foreground group-hover:text-blue-50 transition-colors duration-500 font-semibold leading-relaxed">
                  Concrete observations: Fabric/Azure config, pipeline reliability, semantics, Purview, and security — <strong className="text-foreground group-hover:text-white transition-colors duration-500">with specific improvement opportunities.</strong>
                </p>
              </div>
            </motion.div>

            {/* Cell 4: Full width span below */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="col-span-1 md:col-span-2 lg:col-span-4 bg-foreground text-background p-10 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-8">
                  <CheckCircle2 className="w-14 h-14 text-mint" />
                  <span className="text-[4rem] md:text-[6rem] font-black text-background/10 leading-none tracking-tighter">D-04</span>
                </div>
                <h4 className="text-[2.5rem] lg:text-[4.5rem] font-black mb-8 uppercase tracking-tight leading-[0.85] text-background">Prioritized Recommendations &amp; Exec Summary</h4>
                <p className="text-xl text-background/80 font-bold leading-relaxed max-w-3xl border-l-[3px] border-forest pl-6">
                  A prioritized set of recommendations with rationale and rough effort estimates. Delivered alongside a one-page executive summary so <span className="p-1 px-3 bg-white text-black font-black uppercase tracking-wider text-sm mx-1 shadow-[5px_5px_0px_0px_hsl(var(--forest))]">leadership can make decisions</span> — not just get informed.
                </p>
              </div>

              {/* Twisted typography accent in the corner */}
              <div className="hidden lg:block relative z-10 pr-4">
                <div className="[writing-mode:vertical-rl] text-[8rem] xl:text-[10rem] font-black text-background/5 select-none rotate-180 uppercase tracking-tighter leading-[0.75] group-hover:text-background/10 transition-colors">
                  ROADMAP
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="border-b-8 border-foreground pb-12 mb-20 flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-10">
            <h3 className="text-[clamp(2rem,10vw,7.5rem)] font-black tracking-tighter text-forest uppercase leading-none mb-0">
              Methodology
            </h3>
            <p className="text-foreground font-black max-w-sm text-base uppercase tracking-[0.2em] md:text-right bg-forest/15 p-6 border border-forest/40">
              Interviews, technical review, and evidence-based scoring — <span className="text-forest">3–4 weeks to presentation.</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 border-4 border-border/60 bg-muted/20">
            <MethodPanel step={1} week="Week 1–2" title="Stakeholder Interviews" desc="We interview 8–12 stakeholders across business and IT to surface gaps between belief and reality." color="forest" />
            <MethodPanel step={2} week="Week 2–3" title="Technical Review" desc="We review actual implemented architecture (Fabric, DF, Semantics) against documented design." color="cyan" />
            <MethodPanel step={3} week="Week 3" title="Analysis & Scoring" desc="Synthesis into defensible scores. Concrete evidence from your environment—no generic checklists." color="blue" />
            <MethodPanel step={4} week="Week 3–4" title="Presentation & Alignment" desc="Present to leadership. Clear alignment on priorities—no sugar-coating, no buried findings." color="indigo" />
          </div>
        </div>
      </section>

      {/* Case Study — grid keeps image + overlapping card; stats stay inside the card column */}
      <section className="pt-12 pb-40 bg-background relative overflow-x-clip">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:gap-0 lg:items-start">
            {/* Left side: Image + Relatable Value Box */}
            <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1 flex flex-col h-full z-10">
              <div className="relative h-[500px] min-h-[500px] lg:h-[800px] lg:min-h-[800px] shrink-0 overflow-hidden grayscale-[40%] contrast-[1.1] border-8 border-foreground">
                <Image
                  src="/images/maturity/live_enterprise_alignment.png"
                  alt="Executive Team Discussing Data Strategy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/20 to-transparent" />
  
                <div className="absolute top-10 left-10 md:-left-10 text-[6rem] md:text-[14rem] font-black text-foreground/5 md:text-foreground/5 uppercase tracking-tighter leading-[0.8] mix-blend-multiply [writing-mode:vertical-rl] rotate-180">
                  CASE STUDY
                </div>
              </div>

              {/* Relatable Space Filler for the Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex flex-1 mt-12 bg-card border border-border shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] mr-[10%] relative overflow-hidden group rounded-bl-[3rem] p-10 h-full"
              >
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                  <PieChart size={280} strokeWidth={1} />
                </div>
                
                <div className="relative z-10 w-full flex flex-col justify-center">
                  <h3 className="text-lg font-black uppercase tracking-[0.25em] text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-forest inline-block shrink-0"></span>
                    The ROI of Reality
                  </h3>
                  
                  <p className="font-bold text-muted-foreground leading-relaxed text-base mb-8 border-l-[3px] border-forest/30 pl-6 h-full">
                    A maturity assessment isn&apos;t about pointing fingers. It&apos;s about eliminating invisible <strong className="text-foreground">technical debt constraints</strong> so you can stop wrestling with fractured pipelines and start scaling advanced analytics securely.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mt-auto pt-6 border-t border-border/80 relative">
                    <div className="absolute top-6 bottom-0 left-1/2 w-px bg-border/60"></div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-rose-500 uppercase tracking-tighter leading-[0.8]">- $1.2M</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50 mt-2">Tech Debt Avoided</span>
                    </div>
                    
                    <div className="flex flex-col pl-4">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-forest uppercase tracking-tighter leading-[0.8]">+ 40%</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50 mt-2">Team Velocity Lift</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative z-20 -mt-32 w-[95%] max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-auto lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mt-32 lg:self-start min-w-0 bg-card/95 backdrop-blur-2xl border-4 border-foreground shadow-[30px_30px_0px_0px_hsl(var(--forest))] p-8 sm:p-10 lg:p-12 overflow-visible">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-4 h-4 bg-forest shrink-0 rounded-none shadow-[2px_2px_0px_0px_foreground]"></span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-forest">Technology &amp; SaaS</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase leading-[0.9] mb-10">
                How a PE portfolio company realized their true <span className="bg-forest text-forest-foreground px-2 py-1 inline-block mt-2">data maturity gap.</span>
              </h2>

              <p className="text-xl font-bold text-foreground/80 leading-relaxed mb-10 border-l-[4px] border-forest pl-6 bg-muted/40 p-4">
                They invested in Azure Analysis Services (AAS). Leadership believed they were “data mature.” But refresh failures increased, autoscaling failed, and the BI team was operating AAS and Power BI as separated siloes. Then came the assessment.
              </p>

              <div className="mb-12 border-l-[4px] border-forest pl-4 sm:pl-6 min-w-0">
                <div className="border-y-4 border-forest py-8 sm:py-10 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--forest)/0.05)_25%,hsl(var(--forest)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--forest)/0.05)_75%,hsl(var(--forest)/0.05)_100%)] bg-[length:20px_20px]">
                  <div className="grid grid-cols-2 gap-6 sm:gap-8 min-w-0 px-1 sm:px-0">
                    <div className="min-w-0 text-center md:text-left">
                      <p className="text-[clamp(2.25rem,7vw,3.75rem)] md:text-[4.5rem] font-black text-foreground leading-none tracking-tighter pb-3 mb-3 drop-shadow-[5px_5px_0px_hsl(var(--forest)/0.2)]">3x</p>
                      <p className="text-[0.65rem] sm:text-xs font-black uppercase tracking-widest text-mint bg-foreground px-2 sm:px-3 py-1 inline-block max-w-full">Faster refresh after remediation</p>
                    </div>
                    <div className="min-w-0 text-center md:text-left">
                      <p className="text-[clamp(2.25rem,7vw,3.75rem)] md:text-[4.5rem] font-black text-foreground leading-none tracking-tighter pb-3 mb-3 drop-shadow-[5px_5px_0px_hsl(var(--forest)/0.2)]">8W</p>
                      <p className="text-[0.65rem] sm:text-xs font-black uppercase tracking-widest text-mint bg-foreground px-2 sm:px-3 py-1 inline-block max-w-full">To Complete Fabric Migration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-sm font-bold mb-12 text-muted-foreground border-l-2 border-forest/25 pl-4">
                <p><span className="text-foreground uppercase tracking-widest bg-forest/10 py-1 px-3 text-xs mr-3 border border-forest/30">Tech</span> AAS models were solid, hitting scale limits. Coordinated through brittle runbooks.</p>
                <p><span className="text-foreground uppercase tracking-widest bg-forest/10 py-1 px-3 text-xs mr-3 border border-forest/30">Gov</span> No Purview integration, lineage, or labels—impact analysis on schema changes impossible.</p>
                <p><span className="text-foreground uppercase tracking-widest bg-forest/10 py-1 px-3 text-xs mr-3 border border-forest/30">Org</span> One senior dev owned the stack. Undocumented knowledge = single point of failure.</p>
              </div>

              <Link
                href="/industries/technology-saas"
                className="inline-flex items-center gap-4 text-sm font-black text-background bg-foreground hover:bg-forest hover:text-forest-foreground px-8 py-5 transition-all uppercase tracking-[0.2em] group border-[3px] border-transparent hover:border-foreground"
              >
                Read SaaS Work
                <ChevronRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/40 border-t-2 border-border/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="border-b-4 border-foreground pb-8 mb-16">
            <h2 className="text-[3.5rem] md:text-[5rem] font-black tracking-tighter uppercase leading-[0.9]">Frequently<br />Asked Questions</h2>
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
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/60">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Editorial Next Steps Header */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-end relative">
            {/* Background absolute elements */}
            <div className="hidden lg:block absolute -top-12 right-[30%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-border to-transparent -z-10" />
            
            <div className="md:col-span-12 lg:col-span-7 relative z-10 pt-8 pb-4">
              <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-2 bg-forest transition-transform duration-700 hover:scale-y-110 origin-bottom"></div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-forest mb-8 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-forest"></span> Next Steps
              </h2>
              <h3 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black mb-10 tracking-tighter text-foreground uppercase leading-[0.85] drop-shadow-[5px_5px_0_rgba(0,0,0,0.02)]">
                Continue <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/30 stroke-text mix-blend-normal">Your</span><br />
                Journey
              </h3>
              <p className="text-foreground/80 text-xl font-bold bg-muted/30 p-8 border-l-[4px] border-forest backdrop-blur-md max-w-xl leading-relaxed shadow-[15px_15px_0px_0px_rgba(0,0,0,0.03)] selection:bg-forest/30 transition-colors hover:bg-muted/50">
                Data maturity is not a static destination. Explore related services to help you define and execute a resilient, scalable, and high-impact enterprise data strategy.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex md:col-span-12 lg:col-span-5 relative z-20 justify-end lg:justify-center h-full items-end mt-12 lg:mt-0"
            >
              <div className="w-full max-w-[480px] bg-foreground text-background relative flex flex-col overflow-visible shadow-[30px_30px_0px_0px_hsl(var(--forest)/0.2)] group">
                {/* Accent Corner */}
                <div className="absolute -top-6 -right-6 w-20 h-20 border-t-[4px] border-r-[4px] border-forest z-30 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                
                {/* Severe Cropped Image Grid */}
                <div className="relative h-[280px] w-full bg-background p-1.5 pb-0">
                  <div className="relative w-full h-full overflow-hidden bg-black outline outline-1 outline-border/20">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                      alt="Future Readiness"
                      fill
                      className="object-cover grayscale-[80%] opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                      sizes="480px"
                    />
                    <div className="absolute inset-0 bg-forest/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-1000" />
                    
                    {/* High tech overlay elements */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                       <div className="w-1.5 h-6 bg-forest shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                       <div className="w-1.5 h-4 bg-forest/60 mt-auto" />
                       <div className="w-1.5 h-8 bg-forest/30 mt-auto" />
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 border border-white/20">
                       <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">Telemetry: Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 relative">
                  {/* Decorative watermark */}
                  <div className="absolute right-6 top-10 text-[3.5rem] text-background/10 font-black tracking-tighter rotate-90 select-none pointer-events-none group-hover:text-background/20 transition-colors duration-700">
                    FWD
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8 relative z-10 w-fit">
                    <div className="w-10 h-10 bg-transparent border-2 border-forest flex items-center justify-center group-hover:bg-forest group-hover:text-foreground text-forest transition-colors duration-500">
                      <Target size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-forest">Future Readiness</span>
                  </div>
                  <p className="text-[1.05rem] font-bold text-background/80 leading-relaxed relative z-10 border-l-[3px] border-forest/40 pl-5">
                    The core capability that enables your organization to compound value, integrate AI sustainably, and operate with absolute clarity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-foreground bg-foreground p-1">
            <Link href="/services/define-your-roadmap/enterprise-data-strategy" className="group block bg-card h-full p-10 border border-transparent hover:border-forest transition-colors duration-500">
              <div className="w-16 h-16 bg-forest/10 flex items-center justify-center text-forest mb-10 border border-forest/30 group-hover:scale-110 transition-transform duration-500 rounded-none shadow-[4px_4px_0_0_hsl(var(--forest)/0.2)]">
                <Target size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight uppercase leading-[0.9] group-hover:text-forest transition-colors">Enterprise<br />Data Strategy</h3>
              <p className="text-foreground/80 text-[0.95rem] font-medium leading-relaxed mb-10">Align your data initiatives with business outcomes and build a comprehensive roadmap.</p>
              <div className="pt-6 border-t-[3px] border-border group-hover:border-forest/50 transition-colors">
                <span className="text-forest font-black flex items-center gap-3 text-sm uppercase tracking-[0.2em] group-hover:text-forest/90 transition-colors">
                  LEARN MORE <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            <Link href="/services/define-your-roadmap/stack-evaluation" className="group block bg-card h-full p-10 border border-transparent hover:border-cyan-500 transition-colors duration-500">
              <div className="w-16 h-16 bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-10 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500 rounded-none shadow-[4px_4px_0_0_rgba(6,182,212,0.2)]">
                <PieChart size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight uppercase leading-[0.9] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Stack<br />Evaluation</h3>
              <p className="text-foreground/80 text-[0.95rem] font-medium leading-relaxed mb-10">Objective platform analysis to select the right tools and architecture for your specific needs.</p>
              <div className="pt-6 border-t-[3px] border-border group-hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-600 dark:text-cyan-400 font-black flex items-center gap-3 text-sm uppercase tracking-[0.2em] group-hover:text-cyan-500 transition-colors">
                  LEARN MORE <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            <Link href="/services/build-your-foundation/foundation-build" className="group block bg-card h-full p-10 border border-transparent hover:border-blue-500 transition-colors duration-500">
              <div className="w-16 h-16 bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-10 border border-blue-500/30 group-hover:scale-110 transition-transform duration-500 rounded-none shadow-[4px_4px_0_0_rgba(59,130,246,0.2)]">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight uppercase leading-[0.9] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Foundation<br />Build</h3>
              <p className="text-foreground/80 text-[0.95rem] font-medium leading-relaxed mb-10">Implement a robust, scalable data architecture that serves as the bedrock for analytics.</p>
              <div className="pt-6 border-t-[3px] border-border group-hover:border-blue-500/50 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 font-black flex items-center gap-3 text-sm uppercase tracking-[0.2em] group-hover:text-blue-500 transition-colors">
                  LEARN MORE <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="py-32 bg-muted/30 text-foreground relative overflow-hidden border-t-[12px] border-forest">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_40%)] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center">

            <h2 className="text-[4rem] md:text-[9rem] font-black mb-10 tracking-tighter text-foreground uppercase leading-[0.8] select-none">
              <span className="text-forest underline decoration-forest/50 underline-offset-8">Know</span><br /> Where you<br />Stand.
            </h2>

            <div className="bg-card/70 backdrop-blur-xl border border-border/80 p-8 md:p-12 max-w-4xl mx-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-forest"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-forest"></div>

              <p className="text-xl md:text-2xl text-foreground mx-auto mb-6 leading-relaxed font-black uppercase tracking-wide">
                A maturity assessment gives you the baseline you need to make confident Microsoft Fabric and Azure investments.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-bold mx-auto mb-10 leading-relaxed border-t-2 border-border/50 pt-6">
                Evidence-based scores, gap analysis, and prioritized recommendations — no vendor bias, no guesswork. Let&apos;s find your gaps before they find you.
              </p>

              <Link href="/contact?service=maturity-assessment">
                <Button variant="hero" size="lg" className="relative px-12 py-8 text-xl rounded-none border-4 border-foreground bg-transparent text-foreground hover:bg-forest hover:text-forest-foreground hover:border-forest transition-all duration-300 font-black uppercase tracking-[0.2em] shadow-[10px_10px_0_0_rgba(0,0,0,0.8)] dark:shadow-[10px_10px_0_0_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 group w-full sm:w-auto">
                  Schedule Assessment
                  <ChevronRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const METHOD_PANEL_ACCENT = {
  forest: { bar: "group-hover/panel:bg-forest", num: "group-hover/panel:text-forest/10" },
  cyan: { bar: "group-hover/panel:bg-cyan-500", num: "group-hover/panel:text-cyan-500/10" },
  blue: { bar: "group-hover/panel:bg-blue-500", num: "group-hover/panel:text-blue-500/10" },
  indigo: { bar: "group-hover/panel:bg-indigo-500", num: "group-hover/panel:text-indigo-500/10" },
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
      className={`flex-1 relative bg-card border-l lg:border-l-0 lg:border-t lg:border-b-0 border-b border-border/80 hover:border-foreground transition-colors duration-500 overflow-hidden group/panel flex flex-col lg:flex-row h-auto lg:h-[450px] shadow-sm hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0_0_rgba(255,255,255,0.2)] hover:z-10`}
    >
      {/* Twisted Vertical Bar */}
      <div className={`bg-muted/40 p-6 flex lg:flex-col items-center justify-between border-r border-border/50 ${accent.bar} group-hover/panel:text-white transition-colors duration-500 min-w-[80px]`}>
        <span className="text-4xl font-black text-foreground/30 group-hover/panel:text-white transition-colors opacity-80">{num}</span>
        <div className="[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] text-sm font-black tracking-[0.4em] uppercase text-foreground/40 group-hover/panel:text-white rotate-180 whitespace-nowrap transition-colors mt-auto">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-10 flex-1 flex flex-col relative z-10 group-hover/panel:-translate-y-2 transition-transform duration-500">
        <h4 className="text-2xl font-black tracking-tight uppercase leading-[0.9] mb-6 pr-4">{title}</h4>
        <p className="text-base text-foreground/70 font-bold leading-relaxed mt-auto">{desc}</p>
      </div>

      {/* Massive subtle background number */}
      <div className={`absolute -bottom-8 -right-8 text-[12rem] font-black text-foreground/5 dark:text-foreground/10 leading-[0.7] select-none pointer-events-none ${accent.num} group-hover/panel:scale-110 transition-all duration-700`}>{num}</div>
    </motion.div>
  );
}

export function FAQItem({ q, a }) {
  return (
    <details className="group bg-card p-10 rounded-none border-[3px] border-border/80 hover:border-foreground transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0_0_foreground] [&_summary::-webkit-details-marker]:hidden cursor-pointer relative -mt-[3px]">
      <summary className="flex justify-between items-center text-2xl font-black outline-none select-none uppercase tracking-tight pr-12">
        {q}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-forest/10 text-forest flex items-center justify-center shrink-0 group-open:rotate-90 group-open:bg-forest group-open:text-forest-foreground transition-all duration-300 shadow-[4px_4px_0_0_hsl(var(--forest)/0.3)] group-open:shadow-[2px_2px_0_0_foreground]">
          <ChevronRight className="w-6 h-6" />
        </div>
      </summary>
      <div className="mt-8 text-lg font-bold text-muted-foreground leading-relaxed border-t-4 border-foreground pt-8 px-6 bg-muted/30 border-l-4 border-l-forest animate-in fade-in slide-in-from-top-4 duration-300">
        {a}
      </div>
    </details>
  );
}
