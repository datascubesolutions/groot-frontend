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
  Terminal
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
      <div className="container mx-auto px-6 py-4 relative z-20">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
            { label: "Build Your Foundation", href: "/services/build-your-foundation" },
          ]}
        />
      </div>

      {/* Blueprint Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Hero Section - The Schematic Layout */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
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
                <motion.div variants={fadeIn} className="mb-8 inline-block">
                   <div className="px-3 py-1 border-[2px] border-foreground text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
                     <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     Foundation Protocol
                   </div>
                </motion.div>

                <motion.h1 
                  variants={fadeIn} 
                  className="mb-8 text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem]"
                >
                  <span className="text-emerald-600 block mb-2">Architect</span>
                  Data That
                  <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent block">Scales.</span>
                </motion.h1>

                <motion.p variants={fadeIn} className="max-w-xl text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-10">
                  Stop firefighting broken pipelines. We engineer Microsoft Fabric and Azure data platforms that are automated, governed, and designed for tomorrow's AI workloads.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?service=foundation" passHref>
                    <Button variant="hero" size="lg" className="h-16 w-full sm:w-auto rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                      <span className="text-sm font-black uppercase tracking-[0.15em]">Deploy Foundation</span>
                      <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <div className="lg:col-span-5 relative min-h-[400px] border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-muted/40 overflow-hidden flex items-center justify-center p-8">
                {/* Framed Image mimicking a schematic */}
                <motion.div 
                   initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
                   transition={{ duration: 1, delay: 0.3 }}
                   className="relative w-full aspect-square max-w-[500px] border-[4px] border-foreground shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.2)] bg-card"
                >
                   <Image 
                     src="/build_your_foundation_hero.png" 
                     alt="Data Architecture" 
                     fill 
                     className="object-cover grayscale contrast-125 mix-blend-multiply opacity-80 p-4" 
                   />
                   {/* Measurement Lines */}
                   <div className="absolute top-0 bottom-0 left-8 border-l border-dashed border-foreground/30 pointer-events-none"></div>
                   <div className="absolute left-0 right-0 top-8 border-t border-dashed border-foreground/30 pointer-events-none"></div>
                   <div className="absolute top-2 right-4 text-[10px] font-mono font-bold text-emerald-600">DIM_SYS_X1</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Quo - The Staircase Problem Layout */}
      <section className="relative z-20 py-24 border-y-[6px] border-foreground bg-card">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 border-b-[4px] border-foreground pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
                [ DIAGNOSTIC REPORT ]
              </span>
              <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
                Why Foundations Crumble.
              </h2>
            </div>
            <p className="max-w-md font-bold text-lg text-muted-foreground border-l-[3px] border-emerald-600 pl-6">
              You cannot build advanced analytics on a shaky foundation. Modernization isn't an IT project — it's a prerequisite for AI.
            </p>
          </div>

          <div className="flex flex-col gap-0 md:gap-0 pl-0 md:pl-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="w-full md:w-[65%] border-[3px] border-foreground bg-background p-8 md:p-12 shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] relative z-10"
            >
              <div className="absolute right-4 top-4 text-xs font-black uppercase tracking-widest text-emerald-600">ERR_01</div>
              <Settings className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tight mb-4">Exhausted Engineers</h3>
              <p className="text-lg font-semibold text-muted-foreground">They spend 80% of their time fixing broken ETL pipelines and writing complex workarounds. They don't have time to build new capabilities because they're too busy keeping the lights on.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="w-full md:w-[65%] md:ml-auto border-[3px] border-foreground bg-muted/40 p-8 md:p-12 shadow-[10px_10px_0px_0px_hsl(var(--foreground)/0.1)] relative z-20 -mt-2 md:-mt-8"
            >
              <div className="absolute left-4 top-4 text-xs font-black uppercase tracking-widest text-emerald-600">ERR_02</div>
              <Server className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tight mb-4">Frustrated Business Users</h3>
              <p className="text-lg font-semibold text-muted-foreground">"Why is it so hard to just add one field from Salesforce?" they ask. They don't see the fragile architecture beneath the surface. They just see that data is slow, expensive, and wrong.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Core Services Layout */}
      <section className="relative z-30 bg-background pb-32 pt-24">
         <div className="container mx-auto px-6 max-w-[1400px]">
           <div className="mb-16 text-center">
             <h2 className="mb-4 text-sm font-black uppercase tracking-[0.4em] text-emerald-600">Implementation Services</h2>
             <h3 className="text-[3rem] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground">Core Engineering</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] border-[4px] border-foreground bg-foreground shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]">
              {/* Panel 1 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-4 flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">SVCS_01</span>
                  <Code2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 border-[3px] border-foreground flex items-center justify-center mb-8 bg-emerald-600/10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Database className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-4xl font-black uppercase leading-[0.9] tracking-tight mb-6">Data Platform Modernization</h4>
                  <p className="text-lg font-bold text-muted-foreground mb-12">
                    Migrate from legacy on-prem SQL or fragmented cloud setups to a unified Microsoft Fabric Lakehouse. We handle the architecture, migration plan, and execution without disrupting business operations.
                  </p>
                  <Link href="/services/build-your-foundation/data-modernization" className="mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
                     View Specifications <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Panel 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-card flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="border-b-[4px] border-foreground bg-muted/30 p-4 flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">SVCS_02</span>
                  <Terminal className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 border-[3px] border-foreground flex items-center justify-center mb-8 bg-emerald-600/10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Workflow className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-4xl font-black uppercase leading-[0.9] tracking-tight mb-6">Automated Data Integration</h4>
                  <p className="text-lg font-bold text-muted-foreground mb-12">
                    Replace brittle ETL with metadata-driven pipelines. We build robust integration patterns that handle schema drift, automate quality checks, and alert on anomalies before business users notice.
                  </p>
                  <Link href="/services/build-your-foundation/data-integration" className="mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
                     View Specifications <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
           </div>
         </div>
      </section>

      {/* Engineering Principles - Horizontal Slices Layout */}
      <section className="relative py-24 bg-foreground text-background border-y-[6px] border-foreground">
        <div className="container mx-auto px-6 max-w-[1400px]">
           <div className="mb-20 md:flex justify-between items-end border-b-[4px] border-background pb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4">Methodology</span>
                <h2 className="text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter">
                  Engineering<br/>Principles.
                </h2>
              </div>
              <p className="max-w-md font-bold text-lg text-background/70 border-l-[3px] border-emerald-400 pl-6 mt-8 md:mt-0">
                How we build resilient systems.
              </p>
           </div>

           <div className="flex flex-col border-t-[3px] border-background/20">
             <PrincipleSlice num="01" title="Simplicity First" desc="Complex architectures look impressive until you have to maintain them. We favor native Microsoft Fabric capabilities over custom code wherever possible. Less code means less maintenance and fewer points of failure." />
             <PrincipleSlice num="02" title="Metadata-Driven" desc="We don't write 50 pipelines for 50 tables. We write one metadata-driven engine that reads configuration. When a new table needs to be ingested, you update a config file — you don't write more code." />
             <PrincipleSlice num="03" title="Security by Design" desc="Governance isn't an afterthought. We implement row-level security, Purview data classification, and automated CI/CD deployment pipelines from day one. You're audit-ready from the start." />
           </div>
        </div>
      </section>

      {/* Flowchart Roadmap / How We Start */}
      <section className="relative py-32 bg-card">
         <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-5">
                 <h2 className="text-[3rem] md:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-12">
                   Is this right for you?
                 </h2>
                 <div className="space-y-6">
                    <ScenarioItem title="The Overwhelmed Data Team" text="Your data team spends all their time answering tickets about broken dashboards. They need a modernized platform that automates the plumbing so they can focus on delivering insights." />
                    <ScenarioItem title="The Scaling Mid-Market Core" text="Your business is growing fast, but your SQL Server data warehouse is hitting a wall. Nightly processing is bleeding into business hours, and adding new data sources takes months." />
                    <ScenarioItem title="The AI Hopeful" text="Leadership wants to implement Copilot and custom AI solutions, but you know your data is a disorganized mess. You need to build the clean, governed data layer that makes AI actually work." />
                 </div>
               </div>

               <div className="lg:col-span-7 border-[4px] border-foreground bg-background p-8 md:p-16 shadow-[15px_15px_0px_0px_hsl(var(--foreground)/0.1)] relative">
                 <div className="absolute top-0 right-0 border-b-[4px] border-l-[4px] border-foreground bg-emerald-600/10 px-4 py-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">DEPLOYMENT SEQUENCE</span>
                 </div>
                 
                 <h2 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-emerald-600 mb-12 mt-4">
                   How we start.
                 </h2>

                 <div className="relative pl-8 sm:pl-12 border-l-[4px] border-foreground space-y-12">
                    <TimelineItem title="Architecture Review (2 weeks)" desc="Before tearing anything down, we review your current codebase, pipelines, and Azure configuration to identify the most critical bottlenecks." />
                    <TimelineItem title="Proof of Value Build (4-6 weeks)" desc="We select one high-impact, high-complexity data source (like your core ERP) and build the end-to-end modern pipeline in Fabric to prove the architecture works." />
                    <TimelineItem title="Full Platform Migration (Phased)" desc="A structured migration moving workloads from legacy systems to the new Fabric architecture in waves, running in parallel until validation is complete." isLast />
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Brutalist CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32 border-t-[8px] border-emerald-600">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5.5rem]">
            Stop Fixing Pipelines.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
            Let's build a foundation that runs quietly in the background so you can focus on the business.
          </p>
          <Link href="/contact?service=foundation" passHref>
            <Button
              variant="hero"
              size="lg"
              className="group h-16 rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Talk To An Architect
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
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b-[3px] border-background/20 py-10 lg:py-16 transition-colors hover:bg-background/5 px-4"
    >
      <div className="lg:col-span-2 text-[4rem] font-black leading-[0.8] tracking-tighter text-emerald-400/50 group-hover:text-emerald-400 transition-colors">
        {num}
      </div>
      <div className="lg:col-span-4 flex items-center">
        <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[0.9] text-background">{title}</h3>
      </div>
      <div className="lg:col-span-6 flex items-center">
        <p className="text-lg font-bold text-background/70 leading-relaxed border-l-[3px] border-emerald-400/30 pl-6 group-hover:border-emerald-400 transition-colors">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function ScenarioItem({ title, text }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 border-[3px] border-foreground bg-card p-8 shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.1)] transition-transform hover:-translate-y-1">
      <div className="mt-1 shrink-0">
        <div className="flex h-12 w-12 items-center justify-center border-[2px] border-foreground bg-emerald-600/10 text-emerald-600">
          <Database size={20} />
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-xl font-black uppercase tracking-tight text-foreground">{title}</h4>
        <p className="text-base font-bold leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function TimelineItem({ title, desc, isLast }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="relative">
      <div className="absolute left-[-42px] sm:left-[-58px] top-0 w-8 h-8 sm:w-10 sm:h-10 border-[3px] border-foreground bg-emerald-500 rounded-none shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"></div>
      <h4 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 pt-1 sm:pt-2">{title}</h4>
      <p className="text-lg font-bold text-muted-foreground border-b border-foreground/10 pb-12">{desc}</p>
    </motion.div>
  );
}
