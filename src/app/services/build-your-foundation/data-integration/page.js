// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
 Workflow,
 Server,
 Database,
 Activity,
 RefreshCw,
 ChevronRight,
 ArrowRight,
 AlertCircle,
 ShieldCheck,
 Bell,
 FileText,
 Package,
 Zap,
 ExternalLink,
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

export default function DataIntegration() {
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
 <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">Module 02.3 // Data Integration</span>
 </div>
 <div className="p-4 md:p-6 md:col-span-2 flex items-center justify-between">
 <span className="text-xs font-black uppercase tracking-[0.3em]">Timeline: 4–8 Weeks Per Integration</span>
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:inline-block">Pipelines Running</span>
 <div className="h-2.5 w-2.5 rounded-none bg-emerald-500 animate-pulse"></div>
 </div>
 </div>
 </div>

 {/* Main hero */}
 <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-foreground">
 <div className="lg:col-span-8 p-8 sm:p-6 lg:p-8 lg:p-6 lg:p-8 relative overflow-hidden bg-background">
 <div className="absolute right-[-5%] bottom-[-10%] text-[8rem] sm:text-[13rem] font-black leading-none text-muted-foreground/4 select-none pointer-events-none">ERP</div>
 <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
 <motion.div variants={fadeIn} className="mb-6">
 <div className="px-3 py-1 border-[2px] border-foreground text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
 <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
 ERP · CRM · REST APIs · Field Service
 </div>
 </motion.div>
 <motion.h1
 variants={fadeIn}
 className="mb-8 text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground"
 >
 Data Integration<br />
 <span className="text-emerald-600">&amp; Pipeline</span><br />
 Development.
 </motion.h1>
 <motion.p variants={fadeIn} className="max-w-xl text-xl font-bold leading-relaxed text-muted-foreground border-l-[4px] border-emerald-600 pl-6 mb-10">
 Connect your source systems to Microsoft Fabric. ERP, CRM, field service applications, REST APIs — we build the Data Factory pipelines that keep your Lakehouse current and consistent.
 </motion.p>
 <motion.div variants={fadeIn}>
 <Link href="/contact?service=integration" passHref>
 <Button
 variant="hero"
 size="lg"
 className="group relative h-16 rounded-none border-[3px] border-foreground bg-foreground px-8 text-background shadow-[8px_8px_0px_0px_hsl(var(--emerald-600))] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
 >
 <span className="text-sm font-black uppercase tracking-[0.15em]">Schedule an Integration Conversation</span>
 <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
 </Button>
 </Link>
 </motion.div>
 </motion.div>
 </div>

 {/* Visual panel */}
 <div className="lg:col-span-4 flex flex-col divide-y-[3px] divide-foreground bg-muted/10">
 <div className="relative h-[280px] sm:h-[360px] lg:flex-1 overflow-hidden bg-black">
 <Image
 src="/data_integration_pipeline.png"
 alt="Data Integration Pipeline"
 fill
 className="object-cover grayscale contrast-[1.2] opacity-60"
 />
 <div className="absolute inset-0 bg-emerald-600/20 mix-blend-overlay"></div>
 <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 bg-black/50 px-2 py-1 backdrop-blur-sm border border-emerald-500/30">
 [ PIPELINE ACTIVE ]
 </div>
 <div className="absolute bottom-6 left-6 h-12 w-12 border-l-[3px] border-b-[3px] border-emerald-500 shadow-[-5px_5px_15px_rgba(16,185,129,0.3)]"></div>
 <div className="absolute top-6 right-6 h-12 w-12 border-r-[3px] border-t-[3px] border-emerald-500 shadow-[5px_-5px_15px_rgba(16,185,129,0.3)]"></div>
 </div>
 <div className="p-8 bg-card space-y-3">
 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-4">Source Systems We Connect</h4>
 {["SAP · NetSuite · QuickBooks · Sage", "Salesforce · HubSpot · Dynamics 365", "ServiceTitan · Jobber · Samsara", "REST APIs · Flat Files · SharePoint"].map((p) => (
 <div key={p} className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0"></div>
 {p}
 </div>
 ))}
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── THE PROBLEM ───────────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-20 py-16 lg:py-24 border-y-[6px] border-foreground bg-card">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">[ THE REALITY ]</span>
 <h2 className="text-[3rem] sm:text-[4rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">Why integration is harder than it looks.</h2>
 </div>
 <div className="grid gap-8 lg:grid-cols-3">
 <PainCard
 num="01"
 colorClass="border-rose-500 text-rose-500"
 icon={<AlertCircle className="h-10 w-10" />}
 title="The Export-to-Excel Workflow"
 text="Data exists in your ERP. But the only way to get it into Power BI is: run a report, download to Excel, clean up the headers, upload to SharePoint. Someone does this every week. It takes 4 hours. This is your 'integration.'"
 />
 <PainCard
 num="02"
 colorClass="border-amber-500 text-amber-500"
 icon={<RefreshCw className="h-10 w-10" />}
 title="The One-Time Load That Became Critical"
 text="Someone did a one-time data pull for a board presentation. It worked, so it became the 'official' process. Now critical Power BI dashboards depend on a Python script that runs on someone's laptop."
 />
 <PainCard
 num="03"
 colorClass="border-indigo-500 text-indigo-500"
 icon={<Database className="h-10 w-10" />}
 title="Full Refresh at Scale"
 text="The Data Factory pipeline does a full refresh every night — truncate and reload. It worked with 100K rows. Now you have 15M rows. The refresh takes 6 hours and blocks morning reports. You need incremental loads, but the pipeline wasn't built for change data capture."
 />
 </div>
 </div>
 </section>

 {/* ── DELIVERABLES ─────────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-30 bg-background py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">What You Get</span>
 <h2 className="text-[3rem] md:text-[4.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground">Deliverables.</h2>
 </div>

 <div className="grid grid-cols-1 gap-[4px] border-[4px] border-foreground bg-foreground shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)] md:grid-cols-2">
 <DeliverableCard
 code="D-01"
 icon={<FileText className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />}
 title="Integration Architecture"
 desc="Documented approach for each source: connectivity method (REST API, database connection, file drop), refresh pattern (full, incremental, CDC), schedule, and monitoring approach."
 />
 <DeliverableCard
 code="D-02"
 icon={<Workflow className="h-10 w-10 text-blue-500" strokeWidth={1.5} />}
 title="Data Factory Pipelines"
 desc="Production pipelines that extract, load, and transform data into your Fabric Lakehouse — parameterized for reuse, with error handling and retry logic, incremental loading using watermarks or change tracking, and data quality validation at ingestion."
 />
 <DeliverableCard
 code="D-03"
 icon={<Bell className="h-10 w-10 text-indigo-500" strokeWidth={1.5} />}
 title="Monitoring & Alerting"
 desc="Pipeline monitoring integrated with Teams or your incident system. You know when something fails within minutes — not the next morning when a business user notices stale data."
 />
 <DeliverableCard
 code="D-04"
 icon={<Package className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />}
 title="Documentation & Runbooks"
 desc="Technical documentation covering data flows, Notebook transformation logic, schedules, and troubleshooting procedures. Your team can maintain and extend every pipeline."
 highlight
 />
 </div>
 </div>
 </section>

 {/* ── PROCESS ──────────────────────────────────────────────── */}
 <section className="overflow-x-clip relative py-16 lg:py-24 bg-foreground text-background border-y-[6px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 md:flex justify-between items-end border-b-[4px] border-background/20 pb-8">
 <div>
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400 block mb-4">Our Process</span>
 <h2 className="text-[3.5rem] md:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter">
 How we<br />build pipelines.
 </h2>
 </div>
 <p className="max-w-md text-lg font-bold text-background/60 mt-8 md:mt-0">
 Discovery, development, testing, and handoff. Each integration tested before deployment.
 </p>
 </div>
 <div className="flex flex-col border-t-[3px] border-background/20">
 <ProcessSlice num="01" timeline="Week 1–2" title="Discovery" desc="Analyze source systems: data structures, volumes, API capabilities, refresh requirements. Document connection methods, authentication approaches, and data quality constraints before designing a single pipeline." />
 <ProcessSlice num="02" timeline="Week 2–6" title="Pipeline Development" desc="Build pipelines iteratively, starting with priority sources. Each integration is parameterized, includes error handling with retry logic, and is validated against production data volumes before moving to the next." />
 <ProcessSlice num="03" timeline="Week 6–7" title="Testing & Optimization" desc="Test under production conditions: full data volumes, concurrent loads, failure scenarios. Validate incremental load logic, CDC change capture, and data quality gate behaviour." />
 <ProcessSlice num="04" timeline="Week 7–8" title="Deployment & Handoff" desc="Deploy to production, configure monitoring and alerting, train your team on operations and extension. You receive full documentation and runbooks — no black boxes." isLast />
 </div>
 </div>
 </section>

 {/* ── CASE STUDY 1 ─────────────────────────────────────────── */}
 <section className="overflow-x-clip relative bg-card pb-0 pt-8 lg:pt-12">
 <div className="container mx-auto max-w-[1400px] px-6">
 <div className="mb-6 lg:mb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
 [ UC1 — Real Example ]
 </span>
 <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
 How we automated vendor spend categorization<br className="hidden md:block" /> with Fabric Notebooks.
 </h2>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[4px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--emerald-600)/0.2)] md:shadow-[20px_20px_0px_0px_hsl(var(--emerald-600)/0.2)]">
 <div className="lg:col-span-5 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-foreground bg-background p-8 md:p-6 lg:p-8">
 <div className="flex items-center gap-3 mb-6">
 <span className="h-4 w-4 bg-emerald-600"></span>
 <span className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600">Construction & Fleet</span>
 </div>
 <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-foreground mb-4">The Situation</h3>
 <p className="text-base font-bold text-muted-foreground leading-relaxed mb-6">
 A construction company's procurement team struggled with credit card spend analysis. Vendor names appeared in inconsistent formats — "Home Depot," "THE HOME DEPOT #4521," "HD Supply." Impossible to track total vendor spend, enforce preferred vendors, or analyze spending by category.
 </p>
 <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-foreground mb-3">Technical Approach</h3>
 <div className="space-y-2 text-sm font-bold text-muted-foreground font-mono bg-muted/50 p-4 border border-border">
 <div className="text-emerald-600 mb-2">// Fabric Notebook Pipeline</div>
 <div>PySpark · Fuzzy Matching (Levenshtein)</div>
 <div>Level 1 + Level 2 Spend Categorization</div>
 <div>SharePoint lookup tables (business-owned)</div>
 <div>Incremental processing of new transactions</div>
 </div>
 </div>
 <div className="lg:col-span-7 flex flex-col divide-y-[4px] divide-foreground">
 <div className="p-8 md:p-6 lg:p-8 bg-muted/30 flex-1">
 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground mb-6">What We Built</h4>
 <div className="space-y-3">
 {[
 "Fabric Notebook pipeline — Python-based vendor name normalization using intelligent string matching and fuzzy logic",
 "Categorization engine — automated Level 1 and Level 2 spend categorization (e.g., 'Building Materials' → 'Lumber & Wood Products')",
 "Power BI Semantic Model — clean, categorized data for self-service spend analysis",
 "Power App for exceptions — embedded in Power BI, business users normalize unmatched vendors without technical intervention",
 ].map((item) => (
 <div key={item} className="flex items-start gap-3 text-sm font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0 mt-1.5"></div>
 {item}
 </div>
 ))}
 </div>
 </div>
 <div className="p-8 md:p-6 lg:p-8 bg-background">
 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground mb-6">Outcome</h4>
 <p className="text-sm font-bold text-muted-foreground leading-relaxed mb-6">
 Unified view of vendor spend across all credit card transactions. Procurement identified $180K in spend fragmentation that could be consolidated to fewer vendors for volume discounts.
 </p>
 <div className="grid grid-cols-3 gap-6 border-t-[3px] border-border pt-6">
 <div>
 <div className="text-3xl font-black tracking-tighter text-emerald-600 mb-1">$180K</div>
 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Fragmentation Identified</div>
 </div>
 <div>
 <div className="text-3xl font-black tracking-tighter text-foreground mb-1">100%</div>
 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Self-Service Exceptions</div>
 </div>
 <div>
 <Link href="/industries/construction-fleet" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] text-emerald-600 hover:text-emerald-500 transition-colors mt-2">
 Construction Work <ExternalLink className="h-3 w-3" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── CASE STUDY 2 ─────────────────────────────────────────── */}
 <section className="overflow-x-clip relative bg-card pb-8 lg:pb-12 pt-12">
 <div className="container mx-auto max-w-[1400px] px-6">
 <div className="mb-6 lg:mb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4 border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 w-max">
 [ UC2 — Real Example ]
 </span>
 <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
 How we built real-time inventory tracking<br className="hidden md:block" /> across 12 job sites.
 </h2>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[4px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.08)] md:shadow-[20px_20px_0px_0px_hsl(var(--foreground)/0.08)]">
 <div className="lg:col-span-7 flex flex-col divide-y-[4px] divide-foreground order-2 lg:order-1">
 <div className="p-8 md:p-6 lg:p-8 bg-muted/30 flex-1">
 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground mb-6">What We Built</h4>
 <div className="space-y-3">
 {[
 "Data integration connecting procurement system, delivery tracking, and usage logs into Fabric Lakehouse",
 "Fabric Notebooks — transformation pipeline creating inventory snapshots with full movement history",
 "Power BI Dashboard — real-time stock levels, reorder alerts, vendor delivery performance, and cross-site material availability",
 "Mobile access — Power BI mobile app for project managers to check inventory on-site",
 ].map((item) => (
 <div key={item} className="flex items-start gap-3 text-sm font-bold text-muted-foreground">
 <div className="h-1.5 w-1.5 bg-emerald-500 shrink-0 mt-1.5"></div>
 {item}
 </div>
 ))}
 </div>
 </div>
 <div className="p-8 md:p-6 lg:p-8 bg-background">
 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground mb-6">Outcome</h4>
 <p className="text-sm font-bold text-muted-foreground leading-relaxed mb-6">
 Single source of truth for inventory across all sites. Operations now redistributes excess materials between sites proactively, eliminating both over-ordering and project delays from material shortages.
 </p>
 <div className="grid grid-cols-3 gap-6 border-t-[3px] border-border pt-6">
 <div>
 <div className="text-3xl font-black tracking-tighter text-emerald-600 mb-1">−25%</div>
 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Over-ordering</div>
 </div>
 <div>
 <div className="text-3xl font-black tracking-tighter text-foreground mb-1">−40%</div>
 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Delay from Shortages</div>
 </div>
 <div>
 <Link href="/industries/construction-fleet" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] text-emerald-600 hover:text-emerald-500 transition-colors mt-2">
 Construction Work <ExternalLink className="h-3 w-3" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 <div className="lg:col-span-5 border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-foreground bg-background p-8 md:p-6 lg:p-8 order-1 lg:order-2">
 <div className="flex items-center gap-3 mb-6">
 <span className="h-4 w-4 bg-foreground"></span>
 <span className="text-sm font-black uppercase tracking-[0.3em] text-foreground">Construction & Fleet</span>
 </div>
 <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-foreground mb-4">The Situation</h3>
 <p className="text-base font-bold text-muted-foreground leading-relaxed mb-6">
 A construction firm managed material inventory across 12 active job sites using Excel spreadsheets. Project managers tracked their own inventory locally. Central operations had zero visibility into what materials existed where. Result: over-ordering at some sites while others delayed projects waiting for materials.
 </p>
 <div className="bg-muted/50 border border-border p-4">
 <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-3">Before vs After</h4>
 <div className="space-y-3">
 {[
 { before: "12 separate Excel files", after: "1 unified Fabric Lakehouse" },
 { before: "Weekly email updates", after: "Real-time Power BI dashboard" },
 { before: "No cross-site visibility", after: "Proactive material redistribution" },
 ].map((r) => (
 <div key={r.before} className="grid grid-cols-2 gap-2 text-xs font-bold">
 <div className="text-rose-500 line-through opacity-70">{r.before}</div>
 <div className="text-emerald-600">{r.after}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── FAQ ──────────────────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-20 bg-background py-16 lg:py-24 border-t-[6px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <div className="mb-6 lg:mb-8 border-b-[4px] border-foreground pb-8">
 <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 block mb-4">[ FAQ ]</span>
 <h2 className="text-[3rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground">Common Questions.</h2>
 </div>
 <div className="grid gap-0 border-[4px] border-foreground">
 <FAQItem
 q="What source systems can you integrate?"
 a="Common ERPs (SAP, NetSuite, QuickBooks, Sage), CRMs (Salesforce, HubSpot, Dynamics 365), field service software (ServiceTitan, Jobber), fleet management (Samsara), and SaaS applications with REST APIs. If it has an API or database connection, we can integrate it."
 />
 <FAQItem
 q="What about real-time streaming?"
 a="Fabric Eventstream supports real-time patterns. But batch (daily/hourly) covers 90%+ of use cases and is simpler to operate and maintain. We recommend streaming when the business case justifies the added complexity — not as a default."
 />
 <FAQItem
 q="What about systems with poor data quality?"
 a="This is the common problem, not the exception. We build data quality checks into pipelines at ingestion: null detection, range validation, referential integrity checks. Bad data gets flagged and quarantined — not silently loaded into your Lakehouse where it undermines downstream reports."
 />
 </div>
 </div>
 </section>

 {/* ── RELATED SERVICES ─────────────────────────────────────── */}
 <section className="overflow-x-clip relative z-20 bg-card py-16 lg:py-24 border-t-[4px] border-foreground">
 <div className="container mx-auto px-6 max-w-[1400px]">
 <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-8">Related Services</h3>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-[4px] border-[3px] border-foreground bg-foreground">
 {[
 { label: "Foundation Build", href: "/services/build-your-foundation/foundation-build" },
 { label: "Data Modernization", href: "/services/build-your-foundation/data-modernization" },
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
 Connect your data to Microsoft Fabric.
 </h2>
 <p className="mx-auto mb-6 lg:mb-8 max-w-2xl text-xl font-bold leading-relaxed text-background/80">
 Stop exporting to Excel. Build Data Factory integrations that keep your Fabric Lakehouse current and consistent.
 </p>
 <Link href="/contact?service=integration" passHref className="w-full sm:w-auto block">
 <Button
 variant="hero"
 size="lg"
 className="group h-16 w-full sm:w-auto rounded-none border-[3px] border-background bg-transparent px-10 text-background shadow-[8px_8px_0px_0px_hsl(var(--background))] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-background hover:text-foreground hover:shadow-none mx-auto flex items-center justify-center gap-3"
 >
 <span className="text-sm font-black uppercase tracking-[0.2em]">Schedule an Integration Conversation</span>
 <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
 </Button>
 </Link>
 </div>
 </section>
 </main>
 );
}

// ── Sub-components ────────────────────────────────────────────────

function PainCard({ num, colorClass, icon, title, text }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-80px" }}
 variants={fadeIn}
 className="group relative bg-card border-[3px] border-foreground p-8 shadow-[6px_6px_0px_0px_hsl(var(--foreground)/0.1)] transition-transform hover:-translate-y-1"
 >
 <div className="absolute right-6 top-4 select-none text-[5rem] font-black leading-none text-foreground/5">{num}</div>
 <div className={`mb-6 ${colorClass}`}>{icon}</div>
 <h4 className="mb-4 text-2xl font-black uppercase leading-[0.9] tracking-tight text-foreground">{title}</h4>
 <p className="font-bold text-muted-foreground leading-relaxed">{text}</p>
 </motion.div>
 );
}

function DeliverableCard({ code, icon, title, desc, highlight }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className={`group relative flex flex-col justify-between overflow-hidden ${highlight ? "bg-foreground" : "bg-card"} p-8 md:p-6 lg:p-8 min-h-[260px]`}
 >
 <div className="flex items-start justify-between mb-6">
 <div>{icon}</div>
 <span className={`text-[4rem] font-black leading-none tracking-tighter select-none ${highlight ? "text-background/5" : "text-foreground/5"}`}>{code}</span>
 </div>
 <div>
 <h4 className={`text-2xl font-black uppercase leading-[0.9] tracking-tight mb-3 ${highlight ? "text-background" : "text-foreground"}`}>{title}</h4>
 <p className={`text-base font-bold leading-relaxed ${highlight ? "text-background/70" : "text-muted-foreground"}`}>{desc}</p>
 </div>
 </motion.div>
 );
}

function ProcessSlice({ num, timeline, title, desc, isLast }) {
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 ${isLast ? "" : "border-b-[3px] border-background/20"} py-10 lg:py-14 transition-colors hover:bg-background/5 px-2`}
 >
 <div className="lg:col-span-1 text-[3.5rem] font-black leading-[0.8] tracking-tighter text-emerald-400/40 group-hover:text-emerald-400 transition-colors">{num}</div>
 <div className="lg:col-span-3 flex flex-col justify-center">
 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400/60 mb-2">{timeline}</span>
 <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-[0.9] text-background">{title}</h3>
 </div>
 <div className="lg:col-span-8 flex items-center">
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
 <div className="flex h-10 w-10 shrink-0 items-center justify-center border-[2px] border-foreground bg-muted text-foreground transition-transform duration-300 group-open:rotate-45 group-open:bg-emerald-600 group-open:text-white group-open:border-emerald-600">
 <ChevronRight className="h-5 w-5" />
 </div>
 </summary>
 <div className="px-8 pb-8 pt-2 text-lg font-bold leading-relaxed text-muted-foreground border-t-[2px] border-border">
 {a}
 </div>
 </details>
 );
}
