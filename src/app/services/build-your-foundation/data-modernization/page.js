"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  CloudCog,
  CheckCircle2,
  ChevronRight,
  Database,
  FileCheck,
  FileQuestion,
  Lightbulb,
  Network,
  ListChecks,
  ShieldCheck,
  ServerCrash,
  Target,
  XCircle,
  HardDrive
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
      {/* Hero Section */}
      <section className="relative pt-4 pb-10 lg:pt-8 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        
        <div className="container w-full relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-[3px] border-foreground bg-card shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]"
          >
            {/* Main Hero Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
              
              {/* Main Title Block */}
              <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14 relative overflow-hidden bg-background">
                 <div className="absolute right-[-5%] bottom-[-15%] text-[10rem] sm:text-[15rem] font-black leading-none text-muted-foreground/5 select-none pointer-events-none">AAS</div>
                 
                 <motion.h1 
                   variants={staggerContainer}
                   initial="hidden" animate="visible"
                   className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-6 relative z-10"
                 >
                   <motion.span variants={fadeIn} className="block text-emerald-600">Data Modernization</motion.span>
                   <motion.span variants={fadeIn} className="block">To Microsoft Fabric.</motion.span>
                 </motion.h1>
                 
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="max-w-2xl text-base sm:text-lg lg:text-xl font-bold leading-snug text-foreground mb-8 border-l-[4px] border-emerald-600 pl-6 relative z-10 bg-gradient-to-r from-emerald-500/5 to-transparent py-2"
                 >
                   Migrate from legacy Azure services or on-premises systems to Microsoft Fabric. We handle the complexity so your business keeps running.
                 </motion.div>
                 
                 <Link href="/contact?service=modernization" passHref>
                    <Button
                      variant="hero"
                      size="lg"
                      className="group relative h-14 sm:h-16 rounded-none border-[3px] border-foreground bg-foreground px-6 sm:px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                      <span className="text-sm font-black uppercase tracking-[0.15em]">
                        Schedule a Migration Assessment
                      </span>
                      <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
              </div>

              {/* Visual / Data Block */}
              <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10 h-full">
                 <div className="relative h-[220px] sm:h-[300px] lg:flex-1 overflow-hidden bg-emerald-50/50 p-4 flex items-center justify-center">
                   <div className="absolute inset-0 z-0">
                     <Image 
                       src="/data_modernization_fabric_v2.png" 
                       alt="Fabric Architecture Modernization" 
                       fill 
                       className="object-cover object-center opacity-90" 
                     />
                   </div>
                   
                   {/* Reticle/Data Overlay */}
                   <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 bg-white/80 px-2 py-1 backdrop-blur-md border border-emerald-500/30">
                      [ FABRIC_MIGRATION ]
                   </div>
                   <div className="absolute bottom-6 left-6 h-12 w-12 border-l-[3px] border-b-[3px] border-emerald-600 shadow-[-5px_5px_15px_rgba(5,150,105,0.2)]"></div>
                   <div className="absolute top-6 right-6 h-12 w-12 border-r-[3px] border-t-[3px] border-emerald-600 shadow-[5px_-5px_15px_rgba(5,150,105,0.2)]"></div>
                 </div>
                 
                 <div className="p-6 sm:p-8 bg-card flex flex-col justify-center">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6 flex items-center gap-3">
                       <Activity size={14} className="text-emerald-600"/> Current Trajectory
                    </h4>
                    <div className="space-y-6">
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2">
                           <span className="text-muted-foreground">Legacy Tech Debt</span>
                           <span className="text-rose-600 bg-rose-500/10 px-2 py-0.5">Critical</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-rose-500"></motion.div>
                         </div>
                       </div>
                       
                       <div>
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-2 mt-6">
                           <span className="text-muted-foreground">Fabric Readiness</span>
                           <span className="text-emerald-700 bg-emerald-600/10 px-2 py-0.5">Initiating</span>
                         </div>
                         <div className="h-2 w-full bg-border overflow-hidden rounded-none border border-foreground/10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-emerald-600"></motion.div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-30 flex flex-col justify-center bg-muted/20 py-10 lg:py-0 lg:min-h-[calc(100vh-80px)] border-t-2 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 py-10 lg:py-8 xl:py-10">
          <div className="mb-8 lg:mb-10 border-l-8 border-emerald-600 bg-card p-6 lg:p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] md:w-3/4 lg:w-2/3 xl:w-[60%]">
            <h2 className="mb-3 flex items-center gap-4 text-xs lg:text-sm font-black uppercase tracking-[0.3em] text-emerald-600">
              <span className="h-1 w-12 bg-emerald-600"></span>
              Why modernizations fail
            </h2>
            <h3 className="text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[3rem] lg:text-[3.5rem]">
              The Cost of Standing Still.
            </h3>
          </div>

          <div className="grid gap-6 lg:gap-8 xl:gap-12 lg:grid-cols-3 items-start">
            {/* Problem 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-rose-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-rose-500/10 pointer-events-none">01</div>
              <ServerCrash className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-rose-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                The Migration Nobody Wants to Own
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  Your data warehouse runs on SQL Server 2014 on-premises. Or Azure Synapse that felt like the right choice three years ago. Or Azure Analysis Services that Microsoft is clearly de-prioritizing.
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">What&apos;s Missing</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Clear migration path</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Confidence in avoiding disruption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Modern data governance</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-rose-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-rose-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       Everyone agrees Fabric is the future. But the migration project has been &quot;next quarter&quot; for years because the risk feels too high.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Problem 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-amber-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-8 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-amber-500/10 pointer-events-none">02</div>
              <Network className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-amber-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                Hidden Dependencies Everywhere
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  That legacy warehouse has 200+ Power BI reports pointing at it. Stored procedures that call other stored procedures. SSIS packages someone built in 2016.
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">The Symptoms</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Undocumented logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Spaghetti ADF pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Logic Apps chained blindly</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-amber-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-amber-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       You can&apos;t migrate until you map everything — and mapping everything manually feels impossible.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Problem 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="group relative bg-card border-t-4 border-indigo-500 p-6 xl:p-8 shadow-xl transition-transform hover:-translate-y-2 lg:mt-16 flex flex-col overflow-hidden"
            >
              <div className="absolute right-4 top-4 select-none text-[5rem] font-black leading-none text-indigo-500/10 pointer-events-none">03</div>
              <Activity className="mb-5 h-10 w-10 lg:h-12 lg:w-12 text-indigo-500 relative z-10" />
              
              <h4 className="mb-3 text-xl lg:text-2xl font-black uppercase leading-[1] tracking-tight relative z-10 text-slate-900">
                The Business Can&apos;t Pause
              </h4>
              
              <div className="mb-5 relative z-10">
                <p className="text-[13px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  Finance can&apos;t wait. Monthly close happens. Power BI dashboards need to keep refreshing. You need to switch engines while the plane is flying.
                </p>
              </div>

              <div className="mb-5 relative z-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">The Root Cause</h5>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Lack of dual-write strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Cost constraints on Azure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] font-bold text-slate-800">Rigid business cycles</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 relative z-10 bg-indigo-50/80 -mx-6 px-6 xl:-mx-8 xl:px-8 -mb-6 pb-6 xl:-mb-8 xl:pb-8">
                <div className="flex items-start gap-3 mt-2">
                   <AlertTriangle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-[11px] uppercase tracking-wider text-indigo-700 mb-1">The Reality</strong>
                     <p className="text-[13px] lg:text-sm font-bold text-slate-900 leading-snug">
                       A &quot;big bang&quot; migration over a weekend isn&apos;t realistic. But running parallel systems for months creates its own complexity and Azure cost.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section - Balanced Compact Grid */}
      <section className="relative flex flex-col border-t-2 border-b-2 border-foreground bg-muted/20 py-10 lg:py-10 lg:min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-[1536px] px-4 xl:px-8 2xl:px-12 lg:my-auto">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b-4 border-emerald-600 pb-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-3 inline-block border border-emerald-600/30 bg-emerald-600/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-emerald-600 lg:text-sm">
                [ DELIVERABLES ]
              </h2>
              <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                Complete Modernization.
              </h3>
            </div>
            <p className="max-w-sm border-l-[3px] border-emerald-600 bg-background/50 p-4 pl-5 text-sm font-bold leading-relaxed text-slate-700 backdrop-blur-sm lg:text-base">
              We don&apos;t just lift and shift. We architect, migrate, and validate every piece of your data estate to ensure a stable future on Microsoft Fabric.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[2px] border-[3px] border-foreground bg-foreground p-[2px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 lg:grid-cols-5 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
            {/* Cell 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-emerald-600/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <ListChecks
                  className="h-10 w-10 text-emerald-600 transition-colors duration-500 group-hover:text-emerald-400 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-emerald-500/20 dark:mix-blend-screen lg:text-[4rem]">
                  D-01
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-emerald-600/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-600 transition-colors duration-500 group-hover:border-emerald-400/50 group-hover:text-emerald-400">
                    Full Inventory
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-emerald-700 lg:text-[1.25rem] break-words text-slate-900">
                  Migration Assessment
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-emerald-900">
                  Complete inventory: tables, stored procedures, ADF pipelines, SSIS packages, Power BI reports, and downstream consumers. Nothing left behind.
                </p>
              </div>
            </motion.div>

            {/* Cell 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-cyan-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <CloudCog
                  className="h-10 w-10 text-cyan-600 transition-colors duration-500 group-hover:text-cyan-400 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-cyan-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-02
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-cyan-600/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-600 transition-colors duration-500 group-hover:border-cyan-400/50 group-hover:text-cyan-400">
                    Future State
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-cyan-700 lg:text-[1.25rem] break-words text-slate-900">
                  Target Architecture
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-cyan-900">
                  Lakehouse design with medallion architecture, workspace structure, security model, and integration patterns mapped to Microsoft Fabric.
                </p>
              </div>
            </motion.div>

            {/* Cell 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-blue-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Activity
                  className="h-10 w-10 text-blue-600 transition-colors duration-500 group-hover:text-blue-400 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-blue-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-03
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-blue-600/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-600 transition-colors duration-500 group-hover:border-blue-400/50 group-hover:text-blue-400">
                    Step-by-Step
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-blue-700 lg:text-[1.25rem] break-words text-slate-900">
                  Phased Migration Plan
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-blue-900">
                  Balanced plan with cutover criteria, rollback procedures, and parallel running strategy. We migrate in waves to eliminate risk.
                </p>
              </div>
            </motion.div>

            {/* Cell 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-card p-5 transition-colors duration-500 hover:bg-amber-500/5 lg:min-h-[400px] lg:p-6"
            >
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <Database
                  className="h-10 w-10 text-amber-500 transition-colors duration-500 group-hover:text-amber-600 lg:h-12 lg:w-12"
                  strokeWidth={1.5}
                />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-foreground/5 mix-blend-multiply transition-colors duration-500 group-hover:text-amber-500/30 dark:mix-blend-screen lg:text-[4rem]">
                  D-04
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-amber-500/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-amber-600 transition-colors duration-500 group-hover:border-amber-600/50 group-hover:text-amber-600">
                    Deployment
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight transition-colors duration-500 group-hover:text-amber-700 lg:text-[1.25rem] break-words text-slate-900">
                  Migrated Fabric Platform
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-amber-900">
                  Your data migrated to Fabric Lakehouse with proper architecture, Purview governance, and documentation. Ready for Copilot and AI.
                </p>
              </div>
            </motion.div>

            {/* Cell 5 - Light Theme Override */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative col-span-1 md:col-span-2 lg:col-span-1 flex min-h-[280px] flex-col overflow-hidden bg-emerald-50 p-5 text-slate-900 transition-colors duration-500 lg:min-h-[400px] lg:p-6"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,hsl(var(--emerald-600)/0.15),transparent_60%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <ShieldCheck className="h-10 w-10 text-emerald-600 lg:h-12 lg:w-12" strokeWidth={1.5} />
                <span className="text-[3rem] font-black leading-none tracking-tighter text-emerald-600/10 lg:text-[4rem]">
                  D-05
                </span>
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="inline-block border-b-2 border-emerald-600/30 pb-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                    No Surprises
                  </p>
                </div>
                <h4 className="mb-4 text-[1.15rem] font-black uppercase leading-[1.1] tracking-tight text-slate-900 lg:text-[1.25rem] break-words">
                  Validated Migration
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-slate-700">
                  Automated reconciliation between legacy and Fabric. We don&apos;t declare success until the numbers match perfectly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Twisted Horizontal Flow */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-background py-12 lg:py-12 lg:min-h-[calc(100vh-80px)]">
        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:my-auto flex flex-col">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b-4 border-foreground pb-8 md:flex-row md:items-center md:gap-10">
            <h3 className="mb-0 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tighter text-emerald-600">
              Our process
            </h3>
            <p className="max-w-sm border border-emerald-600/40 bg-emerald-600/15 p-4 text-sm font-black uppercase tracking-[0.2em] text-slate-900 md:text-right">
              Methodical, phased delivery —{" "}
              <span className="text-emerald-700">Zero business disruption.</span>
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-4 border-foreground bg-muted/20 lg:flex-row">
            {/* Method Panels */}
            <MethodPanel
              step={1}
              week="Week 1-3"
              title="Assessment & Planning"
              desc="Inventory source systems, map dependencies, assess data quality. Design target Fabric architecture."
              color="emerald"
            />
            <MethodPanel
              step={2}
              week="Week 4-6"
              title="Fabric Platform Build"
              desc="Configure Fabric capacity, build Lakehouse with medallion architecture, set up workspaces and security."
              color="cyan"
            />
            <MethodPanel
              step={3}
              week="Week 7-16"
              title="Iterative Migration"
              desc="Migrate data in waves. Each wave: migrate → validate → parallel run → cutover. No wave starts until prior wave is stable."
              color="blue"
            />
            <MethodPanel
              step={4}
              week="Week 16-20"
              title="Cutover & Decommission"
              desc="Final cutover, decommission legacy, transition support. Legacy turned off only after success criteria met."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Bento Box Case Study Section (Light Theme Updated) */}
      <section className="relative z-30 border-y-[3px] border-foreground bg-white py-12 lg:py-16 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container w-full relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-slate-900 sm:text-[3.5rem] md:text-[4rem] max-w-5xl">
              From AAS to Fabric
            </h2>
          </div>

          <div className="border-[3px] border-foreground bg-foreground grid grid-cols-1 lg:grid-cols-12 gap-[3px] shadow-[15px_15px_0px_0px_hsl(var(--emerald-600))]">
            {/* Left Column: Stats & Meta (Span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-[3px]">
              <div className="bg-emerald-50 p-6 lg:p-8 transition-colors hover:bg-emerald-100">
                <div className="mb-4 flex items-center justify-between border-b-[3px] border-emerald-600/30 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                    Use Case 04
                  </span>
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-slate-900">
                  AAS Modernization
                </h3>
                <p className="text-sm font-semibold text-slate-600">
                  Technology & SaaS Industry
                </p>
              </div>

              <div className="flex-1 bg-card p-6 lg:p-8 transition-colors hover:bg-emerald-50">
                <h4 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                  Business Impact
                </h4>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-black leading-none tracking-tighter text-slate-900">
                        3x
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Improvement in refresh performance
                    </p>
                  </div>
                  <div>
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-black leading-none tracking-tighter text-slate-900">
                        100%
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Elimination of manual scaling runbooks
                    </p>
                  </div>
                  <div>
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-black leading-none tracking-tighter text-slate-900">
                        85+
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Reports migrated without breaking changes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[3px]">
              <div className="bg-card p-6 lg:p-8 transition-colors hover:bg-emerald-50">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-rose-500/30 bg-rose-500/10">
                  <Activity className="h-6 w-6 text-rose-600" />
                </div>
                <h4 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                  Situation
                </h4>
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  A software company relied on Azure Analysis Services (AAS) for enterprise data modeling. But AAS was showing its age: no autoscaling, frequent refresh failures, complex disaster recovery, and increasing disconnect from Power BI Premium features. Leadership wanted to modernize to Microsoft Fabric.
                </p>
              </div>

              <div className="bg-card p-6 lg:p-8 transition-colors hover:bg-emerald-50">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-amber-500/30 bg-amber-500/10">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                  What We Found
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    12 AAS models serving 85+ Power BI reports
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    Complex DAX measures that needed preservation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    No documentation of refresh dependencies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    Two previous migration attempts had failed
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 lg:p-8 transition-colors hover:bg-emerald-50">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-blue-500/30 bg-blue-500/10">
                  <HardDrive className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                  What We Built
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-blue-500" />
                    Fabric workspace structure mirroring AAS model organization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-blue-500" />
                    Migration using Power BI Service&apos;s AAS migration tool
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-blue-500" />
                    XMLA endpoint configuration for backward compatibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-blue-500" />
                    CI/CD pipeline with Azure DevOps for ongoing deployments
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-100 p-6 lg:p-8 transition-colors hover:bg-emerald-200">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-emerald-600 bg-emerald-600/10">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="mb-4 text-xl font-black uppercase tracking-tight text-slate-900">
                  Outcome
                </h4>
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  Migration completed in 8 weeks with zero business disruption. Autoscaling now handles peak loads automatically. Refresh failures dropped from weekly to zero. BI team can now leverage Power BI deployment pipelines and Fabric notebooks for advanced analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - High Impact Neo-Brutalist */}
      <section className="relative flex flex-col overflow-hidden border-t-2 border-b-2 border-foreground bg-muted/20 py-12 lg:py-20 lg:min-h-[calc(100vh-80px)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:my-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
            {/* Left Column: Sticky Title */}
            <div className="md:col-span-5 lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32 z-10 pr-4 lg:pr-8">

                {/* Background 01 Watermark */}
                <div className="absolute -top-16 -left-8 -z-10 select-none text-[16rem] font-black leading-none tracking-tighter text-slate-50/80">
                  FAQ
                </div>

                {/* Clean Eyebrow Badge */}
                <div className="mb-6 inline-flex items-center gap-2 border border-emerald-600 px-3 py-1.5 bg-white/50 backdrop-blur-sm">
                  <FileQuestion size={16} className="text-emerald-600" strokeWidth={2} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-600">
                    Clarification
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-[2.5rem] font-black uppercase leading-[1] tracking-tight sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] text-slate-900">
                  Know
                  <br />
                  <span className="text-emerald-600">
                    Before
                  </span>
                  <br />
                  You Go
                </h2>

                {/* Separator Line */}
                <div className="h-0.5 w-16 bg-emerald-600 mt-6 mb-8"></div>

                {/* Description Text */}
                <p className="text-base font-medium leading-relaxed text-slate-600 mb-8 max-w-[85%]">
                  Clear answers to common questions about our modernization methodology and capabilities.
                </p>

                {/* Neo-Brutalist Callout Card */}
                <div className="relative border-2 border-foreground bg-card shadow-[8px_8px_0_0_rgba(5,150,105,1)] w-full sm:w-[95%] transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-600"></div>
                  <div className="flex items-center gap-5 p-5 sm:p-6 pl-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-emerald-600 bg-emerald-50">
                      <FileCheck className="h-6 w-6 text-emerald-600" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-1">
                        3 KEY QUESTIONS
                      </h4>
                      <p className="text-sm font-bold text-slate-600">
                        Everything you need to know.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: FAQ Items */}
            <div className="md:col-span-7 lg:col-span-8 relative z-20">
              <div className="flex flex-col gap-6 pt-4 lg:pt-12">
                {[
                  {
                    q: "What platforms do you migrate from?",
                    a: "Azure Analysis Services, Azure Synapse, SQL Server (on-prem or Azure), and custom Azure Data Lake implementations. We also consolidate multiple legacy sources into unified Fabric Lakehouses."
                  },
                  {
                    q: "How long does modernization take?",
                    a: "A typical migration takes 12-20 weeks, depending on the number of dependent systems and reports. Complex environments with strict regulatory requirements may take slightly longer."
                  },
                  {
                    q: "What about our existing Power BI reports?",
                    a: "We map all report dependencies during the assessment phase and ensure they continue working seamlessly. Switching to Fabric's Direct Lake mode often improves report performance with minimal changes required."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* Blank Space Filler - Perfect Icons */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t-[3px] border-slate-200/60">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-600 group-hover:text-emerald-600 group-hover:shadow-[6px_6px_0_0_rgba(5,150,105,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">Safe Migration</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-600 group-hover:text-emerald-600 group-hover:shadow-[6px_6px_0_0_rgba(5,150,105,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Target size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">Zero Disruption</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border-[3px] border-slate-300 bg-white text-slate-700 group-hover:border-emerald-600 group-hover:text-emerald-600 group-hover:shadow-[6px_6px_0_0_rgba(5,150,105,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <Lightbulb size={28} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-wide text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">Future Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme Updated */}
      <section className="bg-card py-24 text-slate-900 lg:py-32 border-t-[8px] border-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,hsl(var(--emerald-600)),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Modernize to Microsoft Fabric without disruption.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-slate-600">
            Your legacy Azure services have served their purpose. Let&apos;s move to Fabric without breaking what&apos;s working.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=modernization" passHref>
              <Button
                variant="hero"
                size="lg"
                className="group h-16 rounded-none border-[3px] border-emerald-600 bg-emerald-600 px-10 text-white shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-emerald-700 hover:shadow-none"
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Schedule a Migration Assessment
                </span>
              </Button>
            </Link>
            <Link href="/services/build-your-foundation/data-integration" passHref>
              <Button
                variant="outline"
                size="lg"
                className="group h-16 rounded-none border-[3px] border-foreground bg-transparent px-10 text-slate-900 transition-all hover:bg-foreground hover:text-white"
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Explore Data Integration
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const METHOD_PANEL_ACCENT = {
  emerald: {
    bar: "group-hover/panel:bg-emerald-600",
    num: "group-hover/panel:text-emerald-600/10",
  },
  cyan: {
    bar: "group-hover/panel:bg-cyan-600",
    num: "group-hover/panel:text-cyan-600/10",
  },
  blue: {
    bar: "group-hover/panel:bg-blue-600",
    num: "group-hover/panel:text-blue-600/10",
  },
  indigo: {
    bar: "group-hover/panel:bg-indigo-600",
    num: "group-hover/panel:text-indigo-600/10",
  },
};

// Complex methodology panel implementing twisted writing mode
function MethodPanel({ step, week, title, desc, color }) {
  const num = String(step).padStart(2, "0");
  const accent = METHOD_PANEL_ACCENT[color] ?? METHOD_PANEL_ACCENT.emerald;
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
        <div className="mt-auto rotate-180 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-foreground/40 transition-colors [writing-mode:horizontal-tb] group-hover/panel:text-white lg:[writing-mode:vertical-rl]">
          {week}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-5 transition-transform duration-500 group-hover/panel:-translate-y-2 md:p-6 lg:p-8">
        <h4 className="mb-4 pr-2 text-lg font-black uppercase leading-[1] tracking-tight lg:text-xl text-slate-900">
          {title}
        </h4>
        <p className="mt-auto text-[0.85rem] font-semibold leading-relaxed text-slate-700 lg:text-sm">
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
    <details className="group relative cursor-pointer overflow-hidden border-[3px] border-foreground bg-card transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] shadow-none [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between gap-3 p-5 outline-none md:p-8">
        <div className="flex items-center gap-6">
          <span className="hidden text-5xl font-black text-emerald-600/30 sm:block">{num}</span>
          <span className="text-base font-black uppercase leading-[1.25] tracking-normal text-slate-900 sm:text-xl md:text-2xl">{q}</span>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-transparent text-foreground transition-all duration-300 group-open:bg-emerald-600 group-open:text-white md:h-12 md:w-12">
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-open:rotate-90 md:h-6 md:w-6" />
        </div>
      </summary>

      <div className="relative z-10 border-t-[3px] border-foreground bg-emerald-50 p-6 md:p-8 text-base font-semibold leading-relaxed text-slate-800 md:text-lg duration-300 animate-in fade-in slide-in-from-top-4">
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-emerald-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
          Answer
        </div>
        <p className="border-l-[3px] border-emerald-600 pl-5">
          {a}
        </p>
      </div>
    </details>
  );
}
