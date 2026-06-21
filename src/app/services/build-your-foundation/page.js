// @ts-nocheck
"use client";

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
 ShieldCheck
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
 <main className="overflow-x-clip min-h-screen bg-background pt-16 md:pt-20 selection:bg-emerald-500/30">
 

 {/* Blueprint Canvas Background */}
 <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
 </div>

 {/* Hero Section - The Schematic Layout */}
 <section className="relative overflow-hidden pt-12 pb-8 lg:pb-12 lg:pt-8 lg:pt-12 lg:pb-8 lg:pb-12">
 <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
 
 <div className="border-[4px] border-foreground bg-card shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.15)] md:shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.15)] overflow-hidden relative">
 <div className="absolute top-0 right-0 p-4 border-b-[4px] border-l-[4px] border-foreground bg-emerald-600/10 hidden sm:block">
 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">SYS.ARCH.01</span>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12">
 <motion.div 
 initial="hidden" animate="visible" variants={staggerContainer}
 className="lg:col-span-7 p-8 md:p-6 lg:p-8 flex flex-col justify-center relative z-10 bg-background/80 backdrop-blur-sm"
 >
 <motion.div variants={fadeIn} className="mb-8 inline-block">
 <div className="px-3 py-1 border-[2px] border-foreground text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
 <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
 20+ Microsoft Fabric & Azure Implementations
 </div>
 </motion.div>

 <motion.h1 
 variants={fadeIn} 
 className="mb-8 text-[3rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-[4rem] md:text-[5rem] xl:text-[6rem]"
 >
 Build Your <br /> Data Foundation <br />
 <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent block mt-2 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] xl:text-[5rem]">on Microsoft Fabric</span>
 </motion.h1>

 <motion.p variants={fadeIn} className="max-w-xl text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-10">
 Before dashboards. Before Copilot. Before AI. You need data that's unified in OneLake, governed with Purview, and trustworthy. We build that foundation.
 </motion.p>

 <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
 <Link href="/contact?service=foundation" passHref className="w-full sm:w-auto">
 <Button variant="hero" size="lg" className="h-16 w-full rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[6px_6px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
 <span className="text-sm font-black uppercase tracking-[0.15em] whitespace-nowrap">Get a Foundation Assessment</span>
 <ChevronRight className="ml-3 h-5 w-5 shrink-0" />
 </Button>
 </Link>
 <Link href="/contact" passHref className="w-full sm:w-auto">
 <Button variant="outline" size="lg" className="h-16 w-full rounded-none border-[3px] border-foreground bg-transparent px-8 text-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.1)] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-muted hover:shadow-none">
 <span className="text-sm font-black uppercase tracking-[0.15em] whitespace-nowrap">Talk to Our Team</span>
 </Button>
 </Link>
 </motion.div>
 </motion.div>

 <div className="lg:col-span-5 relative border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-muted/40 overflow-hidden flex items-center justify-center p-8">
 {/* Framed Image mimicking a schematic */}
 <motion.div 
 initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
 animate={{ opacity: 1, rotate: 0, scale: 1 }}
 transition={{ duration: 1, delay: 0.3 }}
 className="relative w-full aspect-square max-w-[500px] border-[4px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[15px_15px_0px_0px_hsl(var(--emerald-600)/0.2)] bg-card"
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

 {/* The Situation */}
 <section className="overflow-x-clip relative z-20 py-16 lg:py-24 border-y-[6px] border-foreground bg-card">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 lg:gap-24">
 <div className="max-w-2xl lg:w-1/2">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
 [ DIAGNOSTIC REPORT ]
 </span>
 <h2 className="text-[3rem] sm:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-8">
 Why foundations matter.
 </h2>
 </div>
 
 <div className="lg:w-1/2">
 <div className="border-l-[4px] border-emerald-600 pl-6 lg:pl-10 space-y-6 text-lg font-semibold text-muted-foreground leading-relaxed">
 <p>
 <strong className="text-foreground">Every Power BI dashboard nobody trusts, every Copilot that hallucinates, every AI initiative that stalls</strong> — trace it back far enough and you'll find the same root cause: the data foundation wasn't there.
 </p>
 <p>
 Data scattered across Azure storage accounts. No single source of truth — or five competing "sources of truth." Governance added after problems surfaced. Microsoft Purview purchased but never configured. Teams spending more time finding and reconciling data than analyzing it.
 </p>
 <p className="bg-muted/50 p-6 border-l-[4px] border-foreground mt-8 text-foreground">
 Microsoft Fabric doesn't fix this automatically. OneLake doesn't fix it. Power BI definitely doesn't fix it. Tools on a weak foundation just create faster ways to get the wrong answer.
 </p>
 <p>
 Foundations take longer to build. They're less exciting than Copilot demos. But without them, everything else is noise.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* What's Included - Three ways to build */}
 <section className="overflow-x-clip relative z-30 bg-background pb-8 lg:pb-12 pt-8 lg:pt-12">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <h2 className="mb-4 text-sm font-black uppercase tracking-[0.4em] text-emerald-600">Three ways to build on Microsoft Fabric</h2>
 <h3 className="text-[3rem] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground">What's Included.</h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-[4px] border-[4px] border-foreground bg-foreground shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]">
 {/* Panel 1 */}
 <SubServiceCard 
 num="SVCS_01" 
 icon={<Database />}
 title="Data Modernization to Microsoft Fabric"
 desc="Migrate from legacy systems to Microsoft Fabric. Whether you're moving off SQL Server 2012, Azure Synapse, or Azure Analysis Services — we handle the migration with minimal business disruption."
 timeline="12-20 weeks"
 href="/services/build-your-foundation/data-modernization"
 />

 {/* Panel 2 */}
 <SubServiceCard 
 num="SVCS_02" 
 icon={<Server />}
 title="Fabric Foundation Build"
 desc="Build your data platform from scratch on Microsoft Fabric. Lakehouse with medallion architecture, Data Factory pipelines, Purview governance, security configuration, CI/CD with Azure DevOps — implemented production-ready from day one."
 timeline="10-16 weeks"
 href="/services/build-your-foundation/foundation-build"
 />
 
 {/* Panel 3 */}
 <SubServiceCard 
 num="SVCS_03" 
 icon={<Workflow />}
 title="Data Integration & Pipeline Development"
 desc="Connect your source systems to Fabric. ERP, CRM, field service applications, REST APIs — we build the Data Factory pipelines that keep your Lakehouse current and consistent."
 timeline="4-8 weeks per major integration"
 href="/services/build-your-foundation/data-integration"
 />
 </div>
 </div>
 </section>

 {/* Engineering Principles */}
 <section className="overflow-x-clip relative py-16 lg:py-24 bg-foreground text-background border-y-[6px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 md:flex justify-between items-end border-b-[4px] border-background pb-8">
 <div>
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4">How we build Fabric foundations</span>
 <h2 className="text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter">
 Our<br/>Approach.
 </h2>
 </div>
 </div>

 <div className="flex flex-col border-t-[3px] border-background/20">
 <PrincipleSlice num="01" title="Governance From Day One with Microsoft Purview" desc="We don't build the Lakehouse and add governance later. Purview data catalog, sensitivity labels, lineage tracking, access policies — they're part of the initial implementation. Governance isn't a phase; it's a principle." />
 <PrincipleSlice num="02" title="Production-Ready Architecture" desc="We build for production, not proof-of-concept. Proper Fabric workspaces (dev/test/prod), deployment pipelines, Notebook error handling, Data Factory monitoring, and documentation. You inherit a platform that won't collapse when the consultant leaves." />
 <PrincipleSlice num="03" title="Knowledge Transfer Built In" desc="We don't create dependency. Every engagement includes architecture documentation, operational runbooks, and hands-on training for your Data Engineers and Power BI developers." />
 </div>
 </div>
 </section>

 {/* Scenarios and Starting Point */}
 <section className="overflow-x-clip relative py-16 lg:py-24 bg-card">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
 <div className="lg:col-span-5">
 <h2 className="text-[3rem] md:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-6 lg:mb-8">
 Is this right for you?
 </h2>
 <div className="space-y-6">
 <ScenarioItem title="The Modernization Mandate" text="You're running on legacy infrastructure approaching end-of-life. Azure Analysis Services is showing its age. Azure Synapse feels overengineered. Microsoft Fabric is the answer — you need a partner who can execute the migration." />
 <ScenarioItem title="The Post-Acquisition Integration" text="You've acquired a company (or several). Each has different ERPs, different Azure resources, different Power BI reports. You need a unified data platform in Fabric that consolidates without forcing every company to change their source systems." />
 <ScenarioItem title="The Greenfield Opportunity" text="You're starting fresh — new company, new division, or clean-slate mandate. No legacy constraints. You want to build on Fabric correctly the first time." />
 </div>
 </div>

 <div className="lg:col-span-7 border-[4px] border-foreground bg-background p-8 md:p-6 lg:p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.1)] md:shadow-[15px_15px_0px_0px_hsl(var(--foreground)/0.1)] relative">
 <div className="absolute top-0 right-0 border-b-[4px] border-l-[4px] border-foreground bg-emerald-600/10 px-4 py-2">
 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">ACTION PLAN</span>
 </div>
 
 <h2 className="text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-emerald-600 mb-6 lg:mb-8 mt-4">
 Where to start.
 </h2>

 <div className="relative pl-8 sm:pl-12 border-l-[4px] border-foreground space-y-12">
 <TimelineItem title="Foundation Assessment (2-3 weeks)" desc="Best if you need clarity before commitment. We assess your current Azure state, design target Fabric architecture, and scope the implementation." />
 <TimelineItem title="Proof of Value (6-8 weeks)" desc="Best if you need to demonstrate results before scaling. We implement one or two data sources and one use case to prove Fabric works in your environment." />
 <TimelineItem title="Full Implementation (10-20 weeks)" desc="Best if you have buy-in and clear mandate. Complete Fabric foundation: capacity configuration, Lakehouse, pipelines, Purview, security, CI/CD, and initial analytics layer." isLast />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Brutalist CTA */}
 <section className="overflow-x-clip bg-foreground py-16 lg:py-24 text-background lg:py-16 lg:py-24 border-t-[8px] border-emerald-600">
 <div className="container mx-auto max-w-4xl px-6 text-center flex flex-col items-center">
 <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5.5rem]">
 Build your Fabric foundation right.
 </h2>
 <p className="mx-auto mb-6 lg:mb-8 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
 Your data foundation determines everything built on top of it. Let's make it solid — on Microsoft Fabric.
 </p>
 <Link href="/contact?service=foundation" passHref className="w-full sm:w-auto block text-center">
 <Button
 variant="hero"
 size="lg"
 className="group h-16 w-full sm:w-auto rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none mx-auto flex items-center justify-center"
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

function SubServiceCard({ num, icon, title, desc, timeline, href }) {
 return (
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
 className="bg-card flex flex-col justify-between group overflow-hidden relative "
 >
 <div className="border-b-[4px] border-foreground bg-muted/30 p-4 flex justify-between items-center z-10">
 <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">{num}</span>
 </div>
 <div className="p-8 md:p-6 lg:p-8 flex-1 flex flex-col z-10">
 <div className="w-16 h-16 border-[3px] border-foreground flex items-center justify-center mb-6 bg-emerald-600/10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
 <div className="w-8 h-8 text-foreground group-hover:text-white transition-colors [&>svg]:w-full [&>svg]:h-full">{icon}</div>
 </div>
 <h4 className="text-3xl font-black uppercase leading-[0.9] tracking-tight mb-4 group-hover:text-emerald-600 transition-colors">{title}</h4>
 <p className="text-base font-bold text-muted-foreground mb-8 flex-grow">
 {desc}
 </p>
 
 <div className="mt-auto border-t-[3px] border-border pt-6">
 <span className="inline-block bg-muted px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-foreground border border-border mb-4">
 Timeline: {timeline}
 </span>
 <Link href={href} className="flex items-center justify-between text-sm font-black uppercase tracking-[0.2em] text-foreground hover:text-emerald-600 transition-colors">
 <span>Learn More</span>
 <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </div>
 </Link>
 </div>
 </div>
 {/* Decorative hover background */}
 <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all duration-500 z-0 pointer-events-none"></div>
 </motion.div>
 );
}

function PrincipleSlice({ num, title, desc }) {
 return (
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} 
 className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b-[3px] border-background/20 py-20 lg:py-32 lg:py-24 transition-colors hover:bg-background/5 px-4"
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
 <ShieldCheck size={24} strokeWidth={2.5} />
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
 <p className={`text-lg font-bold text-muted-foreground ${!isLast ? "border-b border-foreground/10 pb-12" : ""}`}>{desc}</p>
 </motion.div>
 );
}
