// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
 Layers,
 ShieldCheck,
 GitBranch,
 Workflow,
 Server,
 Database,
 Settings,
 ChevronRight,
 ArrowRight,
 Code2,
 Lock,
 BarChart3,
 HardDrive,
 CheckCircle2,
 ExternalLink,
 Package,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function FoundationBuild() {
 return (
 <main className="relative min-h-screen overflow-x-hidden bg-background pt-16 md:pt-20 selection:bg-emerald-500/30">
 {/* Blueprint grid background */}
 <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
 </div>

 

 {/* ── HERO ─────────────────────────────────────────────────── */}
 <section className="overflow-x-clip relative pt-8 lg:pt-8 lg:pt-12 pb-8 lg:pb-12">
 <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="border-[4px] border-foreground bg-card shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]"
 >
 {/* Status bar */}
 <div className="border-b-[3px] border-foreground grid grid-cols-1 md:grid-cols-3 bg-muted/30">
 <div className="p-4 md:p-6 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground flex items-center bg-card">
 <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Module 02.2 // Foundation Build</span>
 </div>
 <div className="p-4 md:p-6 md:col-span-2 flex items-center justify-between">
 <span className="text-xs font-black uppercase tracking-[0.3em]">Timeline: 10–16 Weeks · Production-Ready</span>
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline-block">Greenfield Ready</span>
 <div className="h-2.5 w-2.5 rounded-none bg-emerald-500 animate-pulse"></div>
 </div>
 </div>
 </div>

 {/* Main hero row */}
 <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
 {/* Title block */}
 <div className="lg:col-span-8 p-8 sm:p-6 lg:p-8 lg:p-6 lg:p-8 relative overflow-hidden bg-background">
 <div className="absolute right-[-3%] bottom-[-10%] text-[8rem] sm:text-[13rem] font-black leading-none text-muted-foreground/4 select-none pointer-events-none">BYF</div>
 <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
 <motion.div variants={fadeIn} className="mb-6">
 <div className="px-3 py-1 border-[2px] border-foreground text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
 <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
 Production-Ready from Day One
 </div>
 </motion.div>
 <motion.h1
 variants={fadeIn}
 className="mb-8 text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground"
 >
 Fabric Foundation<br />
 <span className="text-emerald-600">Build.</span>
 </motion.h1>
 <motion.p variants={fadeIn} className="max-w-xl text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-10">
 Build your data platform from scratch on Microsoft Fabric. Lakehouse with medallion architecture, Data Factory pipelines, Purview governance, security configuration, CI/CD with Azure DevOps — implemented production-ready from day one.
 </motion.p>
 <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
 <Link href="/contact?service=foundation-build" passHref>
 <Button
 variant="hero"
 size="lg"
 className="group relative h-16 rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
 >
 <span className="text-sm font-black uppercase tracking-[0.15em]">Start Your Foundation</span>
 <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
 </Button>
 </Link>
 <Link href="/contact" passHref>
 <Button
 variant="outline"
 size="lg"
 className="h-16 rounded-none border-[3px] border-foreground bg-transparent px-8 text-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-muted hover:shadow-none"
 >
 <span className="text-sm font-black uppercase tracking-[0.15em]">Talk to Our Team</span>
 </Button>
 </Link>
 </motion.div>
 </motion.div>
 </div>

 {/* Architecture diagram / stack panel */}
 <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10">
 {/* Stack visualization */}
 <div className="p-8 bg-card flex-1">
 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6 flex items-center gap-2">
 <Layers className="h-3 w-3 text-emerald-600" />
 What Gets Built
 </h4>
 <div className="space-y-[3px]">
 {[
 { layer: "CI/CD & DevOps", color: "bg-emerald-600", label: "Azure DevOps · Git" },
 { layer: "Governance", color: "bg-blue-500", label: "Microsoft Purview" },
 { layer: "Analytics Layer", color: "bg-indigo-500", label: "Power BI · Semantic Models" },
 { layer: "Gold Layer", color: "bg-amber-500", label: "Business-ready tables" },
 { layer: "Silver Layer", color: "bg-slate-400", label: "Cleansed + conformed" },
 { layer: "Bronze Layer", color: "bg-amber-700/60", label: "Raw ingestion zone" },
 { layer: "Data Factory", color: "bg-emerald-600/70", label: "Pipelines + Notebooks" },
 { layer: "OneLake", color: "bg-foreground", label: "Unified storage" },
 ].map((item, i) => (
 <motion.div
 key={item.layer}
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
 className="flex items-center gap-3 border-[2px] border-foreground/10 bg-muted/20 px-3 py-2.5 group hover:border-emerald-600/30 hover:bg-emerald-600/5 transition-all"
 >
 <div className={`h-3 w-3 shrink-0 ${item.color}`}></div>
 <div className="flex-1">
 <div className="text-[11px] font-black uppercase tracking-widest text-foreground">{item.layer}</div>
 <div className="text-[10px] font-bold text-muted-foreground">{item.label}</div>
 </div>
 <CheckCircle2 className="h-3 w-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
 </motion.div>
 ))}
 </div>
 </div>
 {/* Capacity stat */}
 <div className="p-6 bg-muted/30 border-t-[3px] border-foreground">
 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-2">Typical Capacity</div>
 <div className="text-3xl font-black tracking-tighter text-foreground">F2 → F64</div>
 <div className="text-xs font-bold text-muted-foreground mt-1">Fabric SKU · right-sized for your workload</div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── THE PROBLEM — WHO THIS IS FOR ─────────────────────────── */}
 <section className="overflow-x-clip relative z-20 py-16 lg:py-24 border-y-[6px] border-foreground bg-card">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 lg:gap-24">
 <div className="lg:w-1/3">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">[ STARTING POINT ]</span>
 <h2 className="text-[3rem] sm:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
 Is this right<br />for you?
 </h2>
 </div>
 <div className="lg:w-2/3 space-y-6">
 <ScenarioCard
 num="01"
 title="The Greenfield Opportunity"
 text="You're starting fresh — new company, new division, or clean-slate mandate. No legacy constraints. You want to build on Fabric correctly the first time, with production-grade architecture from day one rather than retrofitting governance and security later."
 tag="Best fit for Foundation Build"
 highlight
 />
 <ScenarioCard
 num="02"
 title="The Clean-Slate Mandate"
 text="Leadership has decided the current patchwork isn't worth extending. You have executive buy-in to build properly. You need a partner who can design the full architecture — workspaces, security, CI/CD, governance — and implement it end-to-end."
 tag="Strong fit"
 />
 <ScenarioCard
 num="03"
 title="The Post-Acquisition Integration"
 text="You've acquired companies with different ERPs and Azure resources. Rather than modernizing legacy systems one by one, you want a unified Fabric platform that new entities connect into — a clean target state for all future M&A."
 tag="Strong fit"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ── DELIVERABLES — WHAT GETS BUILT ───────────────────────── */}
 <section className="overflow-x-clip relative z-30 bg-background py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">Everything Included</span>
 <h2 className="text-[3rem] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground">What Gets Built.</h2>
 <p className="mt-4 text-lg font-bold text-muted-foreground max-w-2xl">
 A complete, production-ready Fabric platform — not a proof-of-concept that collapses when the consultant leaves.
 </p>
 </div>

 <div className="grid grid-cols-1 gap-[4px] border-[4px] border-foreground bg-foreground shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)] md:grid-cols-2 lg:grid-cols-3">
 <BuildCard
 code="B-01"
 icon={<HardDrive className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />}
 title="Fabric Capacity & Workspace Setup"
 desc="Right-sized Fabric capacity (F-SKU) configuration. Separate workspaces for dev, test, and production with proper access controls — the structural foundation everything else lives on."
 items={["F-SKU sizing & capacity config", "Dev / Test / Prod workspace structure", "Workspace access & role assignments"]}
 />
 <BuildCard
 code="B-02"
 icon={<Layers className="h-10 w-10 text-blue-500" strokeWidth={1.5} />}
 title="Lakehouse with Medallion Architecture"
 desc="Three-tier Lakehouse: Bronze (raw ingestion), Silver (cleansed, conformed), Gold (business-ready aggregates). Delta Lake format throughout for time-travel and schema evolution."
 items={["Bronze / Silver / Gold layers", "Delta Lake table format", "Folder structure & naming conventions"]}
 />
 <BuildCard
 code="B-03"
 icon={<Workflow className="h-10 w-10 text-indigo-500" strokeWidth={1.5} />}
 title="Data Factory Pipelines"
 desc="Parameterized, metadata-driven ingestion pipelines connecting your priority source systems. Incremental loading patterns, error handling with retry logic, and data quality validation at ingestion."
 items={["Metadata-driven pipeline framework", "Incremental load / watermark patterns", "Error handling & retry logic"]}
 />
 <BuildCard
 code="B-04"
 icon={<ShieldCheck className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />}
 title="Microsoft Purview Governance"
 desc="Purview configured from day one — not bolted on after problems surface. Data catalog with sensitivity labels, lineage tracking, and access policies integrated into the initial build."
 items={["Data catalog & asset registration", "Sensitivity labels & classification", "Data lineage tracking"]}
 />
 <BuildCard
 code="B-05"
 icon={<Lock className="h-10 w-10 text-amber-500" strokeWidth={1.5} />}
 title="Security Configuration"
 desc="Row-level security in semantic models, column-level security in Lakehouse tables, Azure Key Vault for credentials, and Entra ID integration for identity-based access control throughout."
 items={["Row & column-level security", "Azure Key Vault for secrets", "Entra ID / AAD integration"]}
 />
 <BuildCard
 code="B-06"
 icon={<GitBranch className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />}
 title="CI/CD with Azure DevOps"
 desc="Deployment pipelines connecting Git repositories to Fabric workspaces. Notebooks, semantic models, and lakehouse schemas version-controlled and deployable with automated promotion across environments."
 items={["Git integration for all Fabric items", "Deployment pipeline automation", "Environment promotion gates"]}
 highlight
 />
 </div>

 {/* Additional deliverable: Documentation */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className="mt-[4px] border-[4px] border-foreground bg-foreground"
 >
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-background/20">
 <div className="lg:col-span-4 p-8 md:p-6 lg:p-8 bg-card">
 <div className="flex items-start justify-between mb-6">
 <Package className="h-10 w-10 text-foreground" strokeWidth={1.5} />
 <span className="text-[4rem] font-black leading-none tracking-tighter select-none text-foreground/5">B-07</span>
 </div>
 <h4 className="text-2xl font-black uppercase leading-[0.9] tracking-tight mb-3 text-foreground">Architecture Documentation & Training</h4>
 <p className="text-base font-bold leading-relaxed text-muted-foreground">
 We don't create dependency. Every engagement closes with documentation that lets your team operate and extend the platform without us.
 </p>
 </div>
 <div className="lg:col-span-8 p-8 md:p-6 lg:p-8 bg-card grid grid-cols-1 sm:grid-cols-3 gap-8">
 {[
 { title: "Architecture Docs", items: ["Full architecture decision records", "Data model documentation", "Security & access matrix"] },
 { title: "Operational Runbooks", items: ["Pipeline monitoring procedures", "Failure recovery playbooks", "Capacity management guide"] },
 { title: "Hands-On Training", items: ["Data Engineer platform walkthrough", "Power BI Developer onboarding", "Purview governance training"] },
 ].map((block) => (
 <div key={block.title}>
 <h5 className="text-xs font-black uppercase tracking-[0.25em] text-foreground mb-3">{block.title}</h5>
 <div className="space-y-2">
 {block.items.map((item) => (
 <div key={item} className="flex items-start gap-2 text-sm font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0 mt-1.5"></div>
 {item}
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── OUR APPROACH ─────────────────────────────────────────── */}
 <section className="overflow-x-clip relative py-16 lg:py-24 bg-foreground text-background border-y-[6px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 md:flex justify-between items-end border-b-[4px] border-background/20 pb-8">
 <div>
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4">Our Principles</span>
 <h2 className="text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter">
 How we<br />build.
 </h2>
 </div>
 <p className="max-w-md text-lg font-bold text-background/60 mt-8 md:mt-0">
 Three principles that separate a foundation that lasts from one that collapses the moment the consultant leaves.
 </p>
 </div>
 <div className="flex flex-col border-t-[3px] border-background/20">
 <PrincipleSlice
 num="01"
 title="Governance From Day One with Microsoft Purview"
 desc="We don't build the Lakehouse and add governance later. Purview data catalog, sensitivity labels, lineage tracking, access policies — they're part of the initial implementation. Governance isn't a phase; it's a principle."
 />
 <PrincipleSlice
 num="02"
 title="Production-Ready Architecture"
 desc="We build for production, not proof-of-concept. Proper Fabric workspaces (dev/test/prod), deployment pipelines, Notebook error handling, Data Factory monitoring, and documentation. You inherit a platform that won't collapse when the consultant leaves."
 />
 <PrincipleSlice
 num="03"
 title="Knowledge Transfer Built In"
 desc="We don't create dependency. Every engagement includes architecture documentation, operational runbooks, and hands-on training for your Data Engineers and Power BI developers."
 isLast
 />
 </div>
 </div>
 </section>

 {/* ── PROCESS ──────────────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-30 bg-background py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">Engagement Phases</span>
 <h2 className="text-[3rem] md:text-[4rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground">The Implementation Path.</h2>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
 {/* Phase timeline */}
 <div className="lg:col-span-7">
 <div className="relative pl-8 sm:pl-14 border-l-[4px] border-foreground space-y-12">
 {[
 {
 phase: "Phase 1",
 weeks: "Week 1–2",
 title: "Discovery & Architecture Design",
 steps: ["Stakeholder interviews and requirements mapping", "Existing Azure resource audit", "Target architecture design (Lakehouse, security, governance)", "Capacity sizing and cost modeling"],
 },
 {
 phase: "Phase 2",
 weeks: "Week 3–5",
 title: "Platform Foundation",
 steps: ["Fabric capacity provisioning", "Workspace structure (dev/test/prod)", "Lakehouse creation with medallion architecture", "Purview catalog configuration and sensitivity labels"],
 },
 {
 phase: "Phase 3",
 weeks: "Week 6–12",
 title: "Pipelines, Security & CI/CD",
 steps: ["Data Factory pipeline framework (parameterized)", "Priority source system integrations", "Security model: RLS, CLS, Key Vault, Entra ID", "Git integration and Azure DevOps deployment pipelines"],
 },
 {
 phase: "Phase 4",
 weeks: "Week 13–16",
 title: "Analytics Layer & Handoff",
 steps: ["Initial semantic models and Power BI reports", "End-to-end validation and UAT", "Documentation delivery", "Hands-on training sessions"],
 },
 ].map((phase, i, arr) => (
 <motion.div
 key={phase.phase}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 variants={fadeIn}
 className="relative"
 >
 <div className="absolute left-[-42px] sm:left-[-58px] top-0 w-8 h-8 sm:w-10 sm:h-10 border-[3px] border-foreground bg-emerald-500 shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"></div>
 <div className="flex items-center gap-4 mb-3">
 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 border border-emerald-600/30 bg-emerald-600/10 px-2 py-1">{phase.phase}</span>
 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{phase.weeks}</span>
 </div>
 <h4 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 pt-1">{phase.title}</h4>
 <div className={`space-y-2 ${i < arr.length - 1 ? "border-b border-foreground/10 pb-12" : ""}`}>
 {phase.steps.map((step) => (
 <div key={step} className="flex items-start gap-3 text-sm font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0 mt-1.5"></div>
 {step}
 </div>
 ))}
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Right: Architecture spec panel */}
 <div className="lg:col-span-5">
 <div className="border-[4px] border-foreground bg-card shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.1)] md:shadow-[15px_15px_0px_0px_hsl(var(--foreground)/0.1)] sticky top-28">
 <div className="border-b-[3px] border-foreground px-6 py-3 bg-muted/30 flex items-center justify-between">
 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Architecture Spec</span>
 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">PROD-READY</span>
 </div>
 <div className="p-6 space-y-6">
 {[
 {
 category: "Storage",
 specs: [
 { key: "Format", val: "Delta Lake / Parquet" },
 { key: "Zones", val: "Bronze · Silver · Gold" },
 { key: "Location", val: "OneLake (unified)" },
 ],
 },
 {
 category: "Compute",
 specs: [
 { key: "Engine", val: "Spark / T-SQL / DAX" },
 { key: "Scaling", val: "Autoscale on demand" },
 { key: "Environments", val: "Dev · Test · Prod" },
 ],
 },
 {
 category: "Governance",
 specs: [
 { key: "Catalog", val: "Microsoft Purview" },
 { key: "Lineage", val: "Full end-to-end" },
 { key: "Labels", val: "Sensitivity classification" },
 ],
 },
 {
 category: "Security",
 specs: [
 { key: "Identity", val: "Entra ID (AAD)" },
 { key: "Secrets", val: "Azure Key Vault" },
 { key: "Data", val: "RLS + CLS" },
 ],
 },
 {
 category: "DevOps",
 specs: [
 { key: "Version Control", val: "Azure DevOps / Git" },
 { key: "Deployment", val: "Fabric Deploy Pipelines" },
 { key: "Testing", val: "Pre-deploy validation gates" },
 ],
 },
 ].map((block) => (
 <div key={block.category}>
 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-2 border-b border-border pb-1">{block.category}</div>
 <div className="space-y-1.5">
 {block.specs.map((spec) => (
 <div key={spec.key} className="flex justify-between text-xs font-bold">
 <span className="text-muted-foreground">{spec.key}</span>
 <span className="text-foreground">{spec.val}</span>
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 <div className="border-t-[3px] border-foreground p-6 bg-muted/20">
 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-2">Engagement Options</div>
 <div className="space-y-2">
 {[
 "Foundation Assessment (2–3 weeks)",
 "Proof of Value (6–8 weeks)",
 "Full Implementation (10–16 weeks)",
 ].map((opt) => (
 <div key={opt} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0"></div>
 {opt}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── FAQ ──────────────────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-20 bg-card py-16 lg:py-24 border-t-[6px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">[ FAQ ]</span>
 <h2 className="text-[3rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">Common Questions.</h2>
 </div>
 <div className="grid gap-0 border-[4px] border-foreground">
 <FAQItem
 q="What Fabric capacity (F-SKU) do we need?"
 a="This depends on your workload: data volumes, number of concurrent users, and refresh frequency. We size capacity during the Discovery phase. Most mid-market implementations start at F8 or F16 and scale from there — Fabric's autoscaling means you pay for what you use, not peak capacity 24/7."
 />
 <FAQItem
 q="Do we need existing Azure infrastructure to start?"
 a="No. We can start from a net-new Microsoft 365 or Azure tenant. However, if you have existing Azure resources (storage accounts, Key Vault, DevOps organizations), we'll integrate with them rather than duplicate. We document all new infrastructure as part of the delivery."
 />
 <FAQItem
 q="What's the difference between a Proof of Value and Full Implementation?"
 a="A Proof of Value (6–8 weeks) connects one or two source systems and delivers one use case end-to-end. It proves Fabric works in your specific environment before you commit to the full build. A Full Implementation (10–16 weeks) delivers the complete platform with all core integrations, security, governance, and CI/CD. Many clients do a PoV first, then proceed to Full Implementation."
 />
 <FAQItem
 q="Will our team be able to maintain and extend this after you leave?"
 a="That's the explicit goal. Every engagement includes architecture documentation, operational runbooks, and hands-on training. We also build with standard Fabric patterns — not bespoke frameworks that only we understand. Your Data Engineers get trained on the pipeline framework and can add new integrations independently."
 />
 </div>
 </div>
 </section>

 {/* ── RELATED SERVICES ─────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-20 bg-background py-16 lg:py-24 border-t-[4px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-8">Related Services</h3>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-[4px] border-[3px] border-foreground bg-foreground">
 {[
 { label: "Data Modernization", href: "/services/build-your-foundation/data-modernization" },
 { label: "Data Integration", href: "/services/build-your-foundation/data-integration" },
 { label: "Semantic Modeling", href: "/services/decision-intelligence/semantic-modeling" },
 ].map((s) => (
 <Link
 key={s.label}
 href={s.href}
 className="group bg-card px-6 py-4 flex items-center justify-between hover:bg-emerald-600/10 transition-colors"
 >
 <span className="text-sm font-black uppercase tracking-[0.15em] text-foreground group-hover:text-emerald-600 transition-colors">{s.label}</span>
 <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* ── CTA ──────────────────────────────────────────────────── */}
 <section className="overflow-x-clip bg-foreground py-16 lg:py-24 text-background lg:py-16 lg:py-24 border-t-[8px] border-emerald-600">
 <div className="container mx-auto max-w-4xl px-6 text-center flex flex-col items-center">
 <h2 className="mb-8 text-[3rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-[4rem] md:text-[5rem]">
 Build your Fabric foundation right.
 </h2>
 <p className="mx-auto mb-6 lg:mb-8 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
 Your data foundation determines everything built on top of it. Let's make it solid — on Microsoft Fabric.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
 <Link href="/contact?service=foundation-build" passHref>
 <Button
 variant="hero"
 size="lg"
 className="group h-16 w-full sm:w-auto rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none flex items-center justify-center gap-3"
 >
 <span className="text-sm font-black uppercase tracking-[0.2em]">Start a Foundation Conversation</span>
 <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}

// ── Sub-components ────────────────────────────────────────────────

function ScenarioCard({ num, title, text, tag, highlight }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-50px" }}
 variants={fadeIn}
 className={`group flex flex-col sm:flex-row gap-6 border-[3px] p-8 transition-transform hover:-translate-y-0.5 ${highlight ? "border-emerald-600 bg-emerald-600/5 shadow-[6px_6px_0px_0px_hsl(var(--emerald-600)/0.3)]" : "border-foreground bg-card shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.08)]"}`}
 >
 <div className="shrink-0">
 <div className={`flex h-12 w-12 items-center justify-center border-[2px] font-black text-lg ${highlight ? "border-emerald-600 bg-emerald-600 text-white" : "border-foreground bg-muted/50 text-foreground"}`}>
 {num}
 </div>
 </div>
 <div>
 <div className="flex items-center gap-3 mb-2 flex-wrap">
 <h4 className={`text-xl font-black uppercase tracking-tight ${highlight ? "text-emerald-600" : "text-foreground"}`}>{title}</h4>
 {tag && (
 <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 ${highlight ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground"}`}>{tag}</span>
 )}
 </div>
 <p className="text-base font-bold leading-relaxed text-muted-foreground">{text}</p>
 </div>
 </motion.div>
 );
}

function BuildCard({ code, icon, title, desc, items, highlight }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className={`group relative flex flex-col justify-between overflow-hidden ${highlight ? "bg-foreground" : "bg-card"} p-8 md:p-6 lg:p-8 min-h-[320px]`}
 >
 <div className="flex items-start justify-between mb-6">
 <div>{icon}</div>
 <span className={`text-[3.5rem] font-black leading-none tracking-tighter select-none ${highlight ? "text-background/5" : "text-foreground/5"}`}>{code}</span>
 </div>
 <div className="flex-1">
 <h4 className={`text-2xl font-black uppercase leading-[0.9] tracking-tight mb-3 ${highlight ? "text-background" : "text-foreground"}`}>{title}</h4>
 <p className={`text-sm font-bold leading-relaxed mb-5 ${highlight ? "text-background/70" : "text-muted-foreground"}`}>{desc}</p>
 <div className="space-y-2">
 {items.map((item) => (
 <div key={item} className="flex items-center gap-2">
 <div className={`h-1.5 w-1.5 shrink-0 ${highlight ? "bg-emerald-400" : "bg-emerald-500"}`}></div>
 <span className={`text-xs font-black uppercase tracking-widest ${highlight ? "text-background/70" : "text-muted-foreground"}`}>{item}</span>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 );
}

function PrincipleSlice({ num, title, desc, isLast }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 ${isLast ? "" : "border-b-[3px] border-background/20"} py-20 lg:py-32 lg:py-24 transition-colors hover:bg-background/5 px-2`}
 >
 <div className="lg:col-span-2 text-[4rem] font-black leading-[0.8] tracking-tighter text-emerald-400/40 group-hover:text-emerald-400 transition-colors">{num}</div>
 <div className="lg:col-span-4 flex items-center">
 <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-[0.9] text-background">{title}</h3>
 </div>
 <div className="lg:col-span-6 flex items-center">
 <p className="text-lg font-bold text-background/70 leading-relaxed border-l-[3px] border-emerald-400/30 pl-6 group-hover:border-emerald-400 transition-colors">{desc}</p>
 </div>
 </motion.div>
 );
}

function FAQItem({ q, a }) {
 return (
 <details className="group cursor-pointer border-b-[4px] last:border-b-0 border-foreground bg-card [&_summary::-webkit-details-marker]:hidden">
 <summary className="flex select-none items-center justify-between p-8 text-xl font-black uppercase tracking-tight text-foreground outline-none">
 {q}
 <div className="flex h-10 w-10 shrink-0 items-center justify-center border-[2px] border-foreground bg-muted text-foreground transition-transform duration-300 group-open:rotate-45 group-open:bg-emerald-600 group-open:text-white group-open:border-emerald-600 ml-4">
 <ChevronRight className="h-5 w-5" />
 </div>
 </summary>
 <div className="px-8 pb-8 pt-2 text-lg font-bold leading-relaxed text-muted-foreground border-t-[2px] border-border">
 {a}
 </div>
 </details>
 );
}
