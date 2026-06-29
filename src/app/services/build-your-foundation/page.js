// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Database,
  HardDrive,
  Layers,
  Server,
  Settings,
  Workflow,
  ChevronRight,
  Code2,
  Terminal,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function BuildYourFoundation() {
  return (
    <main className="min-h-screen bg-background pt-20 selection:bg-emerald-500/30">
      {/* Blueprint Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-10 lg:pt-8 flex lg:min-h-[calc(100vh-80px)] items-center">
        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
          
          <div className="border-[4px] border-foreground bg-card shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.15)] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 border-b-[4px] border-l-[4px] border-foreground bg-emerald-600/10">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">SYS.ARCH.01</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-background/80 backdrop-blur-sm"
              >
                <motion.div variants={fadeIn} className="mb-6 inline-block">
                   <div className="px-3 py-1 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
                     <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     20+ Microsoft Fabric & Azure Implementations
                   </div>
                </motion.div>

                <motion.h1 
                  variants={fadeIn} 
                  className="mb-6 text-[2.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]"
                >
                  <span className="text-emerald-600 block mb-2">Build Your</span>
                  Data Foundation
                  <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent block text-[2rem] sm:text-[2.5rem] lg:text-[3rem] mt-2">On Microsoft Fabric.</span>
                </motion.h1>

                <motion.p variants={fadeIn} className="max-w-xl text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-8">
                  Before dashboards. Before Copilot. Before AI. You need data that&apos;s unified in OneLake, governed with Purview, and trustworthy. We build that foundation.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?service=foundation" passHref>
                    <Button variant="hero" size="lg" className="h-14 sm:h-16 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-foreground px-6 sm:px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">Get a Foundation Assessment</span>
                      <ChevronRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button variant="outline" size="lg" className="h-14 sm:h-16 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-transparent px-6 sm:px-8 text-foreground transition-all duration-300 hover:bg-foreground/5">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em]">Talk to Our Team</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[400px] border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-muted/40 overflow-hidden flex items-center justify-center p-6 lg:p-8 h-full">
                <motion.div 
                   initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
                   transition={{ duration: 1, delay: 0.3 }}
                   className="relative w-full aspect-square max-w-[400px] border-[4px] border-foreground shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.2)] bg-card"
                >
                   <Image 
                     src="/fabric_foundation_blueprint.png" 
                     alt="Data Architecture Foundation" 
                     fill 
                     className="object-cover contrast-110 opacity-90 p-4" 
                   />
                   <div className="absolute top-0 bottom-0 left-6 border-l border-dashed border-foreground/30 pointer-events-none"></div>
                   <div className="absolute left-0 right-0 top-6 border-t border-dashed border-foreground/30 pointer-events-none"></div>
                   <div className="absolute top-2 right-4 text-[10px] font-mono font-bold text-emerald-600">ONELAKE_ARCH_1</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="relative z-20 py-24 border-y-[6px] border-foreground bg-card">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 border-b-[4px] border-foreground pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
                [ THE SITUATION ]
              </span>
              <h2 className="text-[3rem] sm:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
                Why foundations matter.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="border-[3px] border-foreground bg-background p-8 md:p-10 shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] relative"
            >
              <div className="absolute right-4 top-4 text-xs font-black uppercase tracking-widest text-emerald-600">ERR_01</div>
              <Settings className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">The Root Cause</h3>
              <p className="text-[1.05rem] font-semibold text-muted-foreground leading-relaxed">
                Every Power BI dashboard nobody trusts, every Copilot that hallucinates, every AI initiative that stalls — trace it back far enough and you&apos;ll find the same root cause: the data foundation wasn&apos;t there. Data scattered across Azure storage accounts. No single source of truth — or five competing &quot;sources of truth.&quot; Governance added after problems surfaced.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="border-[3px] border-foreground bg-muted/40 p-8 md:p-10 shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] relative"
            >
              <div className="absolute left-4 top-4 text-xs font-black uppercase tracking-widest text-emerald-600">ERR_02</div>
              <Server className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">Tools Aren&apos;t Solutions</h3>
              <p className="text-[1.05rem] font-semibold text-muted-foreground leading-relaxed">
                Microsoft Fabric doesn&apos;t fix this automatically. OneLake doesn&apos;t fix it. Power BI definitely doesn&apos;t fix it. Tools on a weak foundation just create faster ways to get the wrong answer. Foundations take longer to build. They&apos;re less exciting than Copilot demos. But without them, everything else is noise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative z-30 bg-background py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center">
         <div className="container mx-auto px-6 max-w-[1400px] w-full">
           <div className="mb-10 lg:mb-12 text-center">
             <h2 className="mb-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-emerald-600">What&apos;s Included</h2>
             <h3 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground max-w-4xl mx-auto">
               Three ways to build on Microsoft Fabric
             </h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {/* Card 1 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col group overflow-hidden border-[4px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--emerald-600)/0.2)] hover:shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-3 lg:p-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">SVCS_01</span>
                  <HardDrive className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h4 className="text-xl lg:text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">Data Modernization</h4>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-max px-2 py-0.5 lg:py-1 border border-emerald-200">12-20 weeks</div>
                  <p className="text-sm lg:text-[15px] font-semibold text-muted-foreground mb-6 leading-relaxed">
                    Migrate from legacy systems to Microsoft Fabric. Whether you&apos;re moving off SQL Server 2012, Azure Synapse, or Azure Analysis Services — we handle the migration with minimal business disruption.
                  </p>
                  <Link href="/services/build-your-foundation/data-modernization" className="mt-auto inline-flex items-center text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
                     Learn More <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col group overflow-hidden border-[4px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--emerald-600)/0.2)] hover:shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-3 lg:p-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">SVCS_02</span>
                  <Database className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h4 className="text-xl lg:text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">Foundation Build</h4>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-max px-2 py-0.5 lg:py-1 border border-emerald-200">10-16 weeks</div>
                  <p className="text-sm lg:text-[15px] font-semibold text-muted-foreground mb-6 leading-relaxed">
                    Build your data platform from scratch on Microsoft Fabric. Lakehouse with medallion architecture, Data Factory pipelines, Purview governance, security configuration, CI/CD with Azure DevOps — implemented production-ready from day one.
                  </p>
                  <Link href="/services/build-your-foundation/foundation-build" className="mt-auto inline-flex items-center text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
                     Learn More <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col group overflow-hidden border-[4px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--emerald-600)/0.2)] hover:shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-3 lg:p-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">SVCS_03</span>
                  <Workflow className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h4 className="text-xl lg:text-2xl font-black uppercase leading-[1.1] tracking-tight mb-4">Data Integration</h4>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-max px-2 py-0.5 lg:py-1 border border-emerald-200">4-8 weeks per source</div>
                  <p className="text-sm lg:text-[15px] font-semibold text-muted-foreground mb-6 leading-relaxed">
                    Connect your source systems to Fabric. ERP, CRM, field service applications, REST APIs — we build the Data Factory pipelines that keep your Lakehouse current and consistent.
                  </p>
                  <Link href="/services/build-your-foundation/data-integration" className="mt-auto inline-flex items-center text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
                     Learn More <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
           </div>
         </div>
      </section>

      {/* Engineering Principles */}
      <section className="relative py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center bg-foreground text-background border-y-[6px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px] w-full">
           <div className="mb-10 lg:mb-12 md:flex justify-between items-end border-b-[4px] border-background pb-6">
              <div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-3">Our Approach</span>
                <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter">
                  How we build<br/>Fabric foundations.
                </h2>
              </div>
           </div>

           <div className="flex flex-col border-t-[3px] border-background/20">
             <PrincipleSlice num="01" title="Governance From Day One" desc="We don't build the Lakehouse and add governance later. Purview data catalog, sensitivity labels, lineage tracking, access policies — they're part of the initial implementation. Governance isn't a phase; it's a principle." />
             <PrincipleSlice num="02" title="Production-Ready Architecture" desc="We build for production, not proof-of-concept. Proper Fabric workspaces (dev/test/prod), deployment pipelines, Notebook error handling, Data Factory monitoring, and documentation. You inherit a platform that won't collapse when the consultant leaves." />
             <PrincipleSlice num="03" title="Knowledge Transfer Built In" desc="We don't create dependency. Every engagement includes architecture documentation, operational runbooks, and hands-on training for your Data Engineers and Power BI developers." />
           </div>
        </div>
      </section>

      {/* Who this is for & Starting Point */}
      <section className="relative py-12 lg:py-0 flex lg:min-h-[calc(100vh-80px)] items-center bg-card border-y-[6px] border-foreground">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
               {/* Left Side: Scenarios */}
               <div className="lg:col-span-6 flex flex-col justify-center">
                 <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
                   Who this is for
                 </span>
                 <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-8">
                   Is this right for you?
                 </h2>
                 <div className="space-y-4">
                    <ScenarioItem title="The Modernization Mandate" text="Legacy infrastructure approaching end-of-life. Fabric is the answer — you need a partner who can execute the migration." />
                    <ScenarioItem title="Post-Acquisition Integration" text="You've acquired a company. You need a unified data platform in Fabric that consolidates without forcing source system changes." />
                    <ScenarioItem title="The Greenfield Opportunity" text="You're starting fresh. No legacy constraints. You want to build on Fabric correctly the first time." />
                 </div>
               </div>

               {/* Right Side: Options */}
               <div className="lg:col-span-6 border-[3px] border-foreground bg-background p-6 md:p-10 shadow-[10px_10px_0px_0px_hsl(var(--emerald-600)/0.2)] relative flex flex-col justify-center">
                 <div className="absolute top-0 right-0 border-b-[3px] border-l-[3px] border-foreground bg-emerald-600/10 px-3 py-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">STARTING POINT</span>
                 </div>
                 
                 <h2 className="text-[2rem] md:text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-emerald-600 mb-8 mt-2">
                   Where to start.
                 </h2>

                 <div className="relative pl-10 space-y-8">
                    {/* The continuous vertical line */}
                    <div className="absolute left-4 top-2 bottom-4 w-[4px] bg-foreground"></div>
                    
                    <TimelineItem title="Foundation Assessment" time="2-3 weeks" desc="Assess Azure state, design Fabric architecture, scope implementation." />
                    <TimelineItem title="Proof of Value" time="6-8 weeks" desc="Demonstrate results before scaling. Implement one or two data sources and use cases." />
                    <TimelineItem title="Full Implementation" time="10-20 weeks" desc="Complete Fabric foundation: Lakehouse, pipelines, Purview, security, CI/CD." isLast />
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Brutalist CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32 border-t-[8px] border-emerald-600">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
            Build your Fabric foundation right.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
            Your data foundation determines everything built on top of it. Let&apos;s make it solid — on Microsoft Fabric.
          </p>
          <Link href="/contact?service=foundation" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Schedule a Foundation Conversation
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function PrincipleSlice({ num, title, desc }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} 
      className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b-[3px] border-background/20 py-6 lg:py-10 transition-colors hover:bg-background/5 px-2 lg:px-4"
    >
      <div className="lg:col-span-2 text-[3rem] font-black leading-[0.8] tracking-tighter text-emerald-400/50 group-hover:text-emerald-400 transition-colors flex items-center">
        {num}
      </div>
      <div className="lg:col-span-3 flex items-center">
        <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-[1] text-background">{title}</h3>
      </div>
      <div className="lg:col-span-7 flex items-center">
        <p className="text-sm lg:text-base font-medium text-background/80 leading-relaxed border-l-[3px] border-emerald-400/30 pl-4 lg:pl-6 group-hover:border-emerald-400 transition-colors">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function ScenarioItem({ title, text }) {
  return (
    <div className="flex flex-row gap-4 border-[3px] border-foreground bg-background p-4 md:p-6 shadow-[6px_6px_0px_0px_hsl(var(--emerald-600)/0.15)] transition-transform hover:-translate-y-1">
      <div className="shrink-0 flex items-center justify-center">
        <div className="flex h-8 w-8 items-center justify-center border-[2px] border-foreground bg-emerald-500 text-background">
          <CheckCircle2 size={16} strokeWidth={3} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="mb-1 text-base md:text-lg font-black uppercase tracking-tight text-foreground leading-tight">{title}</h4>
        <p className="text-sm font-semibold leading-snug text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function TimelineItem({ title, time, desc, isLast }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="relative z-10 pl-2">
      {/* Centered square on the vertical line */}
      <div className="absolute left-[-34px] top-1 w-6 h-6 border-[3px] border-foreground bg-emerald-500 rounded-none shadow-[2px_2px_0px_0px_hsl(var(--foreground))] z-20"></div>
      <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground mb-1">{title}</h4>
      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 bg-emerald-50 border border-emerald-200 px-2 py-0.5 w-max">{time}</div>
      <p className={`text-sm md:text-base font-semibold text-muted-foreground leading-snug ${isLast ? '' : 'border-b-[2px] border-foreground/10 pb-6'}`}>{desc}</p>
    </motion.div>
  );
}
