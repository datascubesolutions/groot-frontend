// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ServerCrash,
  Database,
  CloudCog,
  ShieldCheck,
  HardDrive,
  ChevronRight,
  Activity,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function DataModernization() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pt-20 selection:bg-emerald-500/30">
      <div className="container mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
            { label: "Build Your Foundation", href: "/services/build-your-foundation" },
            { label: "Data Modernization", href: "/services/build-your-foundation/data-modernization" },
          ]}
        />
      </div>

      {/* Hero Section - Architectural Grid / Data Core */}
      <section className="relative pt-8 lg:pt-16 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-[3px] border-foreground bg-card shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]"
          >
            {/* Top Header Row */}
            <div className="border-b-[3px] border-foreground grid grid-cols-1 md:grid-cols-3 bg-muted/30">
              <div className="p-4 md:p-6 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground flex items-center bg-card relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(var(--emerald-600)/0.1),transparent_70%)]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 relative z-10">Module 02 // Foundation</span>
              </div>
              <div className="p-4 md:p-6 md:col-span-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.3em]">Status: Legacy Phase-Out</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline-block">System Active</span>
                  <div className="h-2.5 w-2.5 rounded-none bg-rose-500 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Main Hero Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
              
              {/* Main Title Block (Col 8) */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-background">
                 {/* Huge watermark */}
                 <div className="absolute right-[-5%] bottom-[-15%] text-[10rem] sm:text-[15rem] font-black leading-none text-muted-foreground/5 select-none pointer-events-none">SQL</div>
                 
                 <motion.h1 
                   variants={staggerContainer}
                   initial="hidden" animate="visible"
                   className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-10 relative z-10"
                 >
                   <motion.span variants={fadeIn} className="block">Legacy Data</motion.span>
                   <motion.span variants={fadeIn} className="block text-emerald-600 drop-shadow-[0_0_15px_rgba(5,150,105,0.2)]">Slowing</motion.span> 
                   <motion.span variants={fadeIn} className="block">You Down.</motion.span>
                 </motion.h1>
                 
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="max-w-2xl text-xl sm:text-2xl font-bold leading-snug text-foreground mb-12 border-l-[4px] border-emerald-600 pl-6 relative z-10 bg-gradient-to-r from-emerald-500/5 to-transparent py-2"
                 >
                   Move from the constraints of fragmented on-premise architectures to the infinite scale of Microsoft Fabric. We architect migrations with <span className="text-emerald-600 underline decoration-emerald-500/30 underline-offset-4">zero business disruption.</span>
                 </motion.div>
                 
                 <Link href="/contact?service=modernization" passHref>
                    <Button
                      variant="hero"
                      size="lg"
                      className="group relative h-16 rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                      <span className="text-sm font-black uppercase tracking-[0.15em]">
                        Initiate Migration Protocol
                      </span>
                      <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
              </div>

              {/* Visual / Data Block (Col 4) */}
              <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10">
                 <div className="relative h-[250px] sm:h-[350px] lg:flex-1 overflow-hidden bg-black p-4">
                   <div className="absolute inset-0 z-0">
                     <Image 
                       src="/data_modernization_fabric.png" 
                       alt="Fabric Architecture" 
                       fill 
                       className="object-cover grayscale contrast-[1.2] opacity-60" 
                     />
                     <div className="absolute inset-0 bg-emerald-600/20 mix-blend-overlay"></div>
                   </div>
                   
                   {/* Reticle/Data Overlay */}
                   <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 bg-black/50 px-2 py-1 backdrop-blur-sm border border-emerald-500/30">
                      [ TGT_ACQUIRED ]
                   </div>
                   <div className="absolute bottom-6 left-6 h-12 w-12 border-l-[3px] border-b-[3px] border-emerald-500 shadow-[-5px_5px_15px_rgba(16,185,129,0.3)]"></div>
                   <div className="absolute top-6 right-6 h-12 w-12 border-r-[3px] border-t-[3px] border-emerald-500 shadow-[5px_-5px_15px_rgba(16,185,129,0.3)]"></div>
                   
                   <div className="absolute bottom-4 right-4 text-xs font-mono text-emerald-500/70">
                     SYS.MEM.ALLOC...OK<br/>
                     DB.CONNECT...FAIL
                   </div>
                 </div>
                 
                 <div className="p-8 bg-card">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6 flex items-center gap-3">
                       <Activity size={14} className="text-emerald-600"/> Current Trajectory
                    </h4>
                    <div className="space-y-6">
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2">
                           <span className="text-muted-foreground">Compute Costs</span>
                           <span className="text-rose-500 bg-rose-500/10 px-2 py-0.5">+45% YoY</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></motion.div>
                         </div>
                       </div>
                       
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2 mt-6">
                           <span className="text-muted-foreground">Fabric Readiness</span>
                           <span className="text-emerald-600 bg-emerald-600/10 px-2 py-0.5">Pending Validation</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "15%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)]"></motion.div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section - Interlocking Geometric Cards */}
      <section className="relative z-30 bg-muted/20 pb-32 pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 border-l-8 border-emerald-600 bg-card p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] md:w-2/3">
            <h2 className="mb-4 flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-emerald-600">
              <span className="h-1 w-12 bg-emerald-600"></span>
              The Reality Check
            </h2>
            <h3 className="text-[3rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[4rem]">
              The compound interest of technical debt.
            </h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-8 shadow-xl transition-transform hover:-translate-y-2"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10">01</div>
              <ServerCrash className="mb-6 h-12 w-12 text-rose-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">14-Hour Batch Runs</h4>
              <p className="font-semibold text-muted-foreground">Your SQL Server used to process everything overnight. As data grew, "overnight" stretched into the morning. Business users wait half the day for yesterday's data.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-12"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10">02</div>
              <HardDrive className="mb-6 h-12 w-12 text-amber-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">CapEx Black Hole</h4>
              <p className="font-semibold text-muted-foreground">Paying for peak capacity 24/7. When complex reports run, the server halts. Scaling up means painful downtime and months of budget approvals.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-24"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-indigo-500/10">03</div>
              <Database className="mb-6 h-12 w-12 text-indigo-500" />
              <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">Talent Drain</h4>
              <p className="font-semibold text-muted-foreground">Engineers spend 80% of their time maintaining brittle ETL pipelines. They want to build AI, but they're stuck doing plumbing. Modern talent demands modern tools.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Dense Blueprint Layout */}
      <section className="relative border-y-[8px] border-foreground bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b-4 border-emerald-600 pb-8 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <h2 className="mb-6 inline-block border border-emerald-600/30 bg-emerald-600/10 px-4 py-2 text-sm font-black uppercase tracking-[0.4em] text-emerald-600">
                [ THE SOLUTION ]
              </h2>
              <h3 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
                A unified foundation
                <br />
                for AI.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.3)] md:grid-cols-2 lg:grid-cols-4">
            
            {/* Cell 1: 2-columns wide */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative col-span-1 flex min-h-[350px] flex-col justify-between overflow-hidden bg-card p-8 md:col-span-2 lg:p-12"
            >
              <div className="relative z-10 mb-16 flex items-start justify-between">
                <CloudCog className="h-16 w-16 text-emerald-600" strokeWidth={1.5} />
                <span className="text-[5rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply">M-01</span>
              </div>
              <div className="relative z-10 max-w-xl">
                <h4 className="mb-4 text-3xl font-black uppercase leading-[0.9] tracking-tight">Migration Strategy</h4>
                <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
                  A detailed plan mapping current source systems to Microsoft Fabric Lakehouse architecture, including security, Medallion Architecture (Bronze, Silver, Gold), and governance. We re-architect for the cloud.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative flex min-h-[350px] flex-col justify-between bg-card p-8 lg:p-12"
            >
              <div className="relative z-10 mb-14 flex items-start justify-between">
                <Activity className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
                <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply">M-02</span>
              </div>
              <div className="relative z-10">
                <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">Real-Time Ingestion</h4>
                <p className="text-base font-semibold leading-relaxed text-muted-foreground">
                  Data Factory pipelines and CDC moving data from legacy SQL into Fabric OneLake, designed for incremental loading and schema evolution.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative flex min-h-[350px] flex-col justify-between bg-card p-8 lg:p-12"
            >
              <div className="relative z-10 mb-14 flex items-start justify-between">
                <Zap className="h-12 w-12 text-indigo-500" strokeWidth={1.5} />
                <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply">M-03</span>
              </div>
              <div className="relative z-10">
                <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight">Refactored Models</h4>
                <p className="text-base font-semibold leading-relaxed text-muted-foreground">
                  Legacy stored procedures converted to Fabric Notebooks (PySpark/SQL) optimizing for distributed compute power.
                </p>
              </div>
            </motion.div>

            {/* Cell 4: Full width */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group relative col-span-1 flex flex-col items-center justify-between gap-12 overflow-hidden bg-foreground p-8 text-background md:col-span-2 lg:col-span-4 lg:flex-row lg:p-16"
            >
              <div className="relative z-10 max-w-4xl">
                <div className="mb-8 flex items-center gap-6">
                  <ShieldCheck className="h-14 w-14 text-emerald-400" />
                </div>
                <h4 className="mb-8 text-[2rem] font-black uppercase leading-[0.85] tracking-tight text-background lg:text-[4rem]">
                  Zero-Downtime Validation
                </h4>
                <p className="max-w-3xl border-l-[3px] border-emerald-500 pl-6 text-xl font-bold leading-relaxed text-background/80">
                  We run the old and new systems in parallel. Automated data reconciliation scripts verify that calculations in Fabric match the legacy system exactly. You sign off before we ever flip the switch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative overflow-x-clip bg-muted/20 pb-40 pt-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-start lg:gap-0">
            
            <div className="z-10 flex h-full flex-col lg:col-span-8 lg:col-start-1 lg:row-start-1">
              <div className="relative h-[400px] min-h-[400px] overflow-hidden border-[6px] border-foreground bg-black sm:h-[500px] lg:h-[650px]">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
                  alt="Industrial Data Center"
                  fill
                  className="object-cover opacity-60 grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                />
                <div className="absolute left-4 top-10 rotate-180 text-[3rem] font-black uppercase leading-[0.8] tracking-tighter text-white/10 [writing-mode:vertical-rl] md:-left-6 md:text-[8rem]">
                  MANUFACTURING
                </div>
              </div>
            </div>

            <div className="relative z-20 mx-auto -mt-16 w-[92%] min-w-0 max-w-lg border-[3px] border-foreground bg-card/95 p-6 shadow-[10px_10px_0px_0px_hsl(var(--emerald-600))] backdrop-blur-2xl sm:-mt-20 sm:w-[95%] sm:border-4 sm:p-10 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mx-0 lg:mt-24 lg:w-auto lg:max-w-none lg:self-start lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-4 w-4 bg-emerald-600 shadow-[2px_2px_0px_0px_foreground]"></span>
                <span className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600">Global Manufacturing</span>
              </div>

              <h2 className="mb-8 text-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl">
                Escaping a 15-year SQL Monolith
                <span className="mt-2 inline-block bg-emerald-600 px-2 py-1 text-white">.</span>
              </h2>

              <p className="mb-8 border-l-[3px] border-emerald-600 bg-muted/40 p-4 pl-5 text-lg font-bold leading-relaxed text-foreground/80">
                A medical device manufacturer relied on an aging on-premise SQL Server. Daily processing of IoT telemetry took 12 hours. Any failure meant supply chain analysts ran daily planning blind. Hardware upgrades were quoted at $250K just to maintain status quo.
              </p>

              <div className="mb-10 space-y-4 font-semibold text-muted-foreground">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
                  <p>Replaced 800+ legacy SSIS packages with metadata-driven Fabric pipelines.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
                  <p>Refactored complex Stored Procedures into parallel PySpark Notebooks.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t-[3px] border-border/80 pt-8">
                <div>
                  <div className="text-4xl font-black uppercase tracking-tighter text-emerald-600">45m</div>
                  <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Nightly Load (vs 12h)</div>
                </div>
                <div>
                  <div className="text-4xl font-black uppercase tracking-tighter text-foreground">$250k</div>
                  <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">CapEx Avoided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Leave Legacy Behind.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
            Stop paying for performance you aren't getting. Let's design a modernization plan that moves you to Microsoft Fabric without disrupting your business.
          </p>
          <Link href="/contact?service=modernization" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-2 border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Discuss Architecture
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
