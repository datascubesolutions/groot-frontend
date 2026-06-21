// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import {
 ArrowRight,
 DatabaseZap,
 LayoutDashboard,
 Target,
 Users,
 AlertTriangle,
 SearchX,
 LineChart,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
 hidden: { opacity: 0, y: 20 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
 },
};

const includedCapabilities = [
 {
 id: "01",
 title: "Executive Analytics",
 desc: "Actionable dashboards designed for C-level & VP leaders.",
 details:
 "High-level, actionable dashboards designed for C-level and VP leaders. We focus on the KPIs that drive the business, not just creating pretty charts. Stop wading through uncurated data.",
 icon: LayoutDashboard,
 link: "/services/decision-intelligence/executive-analytics",
 },
 {
 id: "02",
 title: "Semantic Modeling",
 desc: "Centralized business logic for absolute truth.",
 details:
 "The invisible foundation of good BI. We build enterprise-grade Power BI datasets that define business logic centrally so every report tells the same truth, eliminating conflicting numbers.",
 icon: DatabaseZap,
 link: "/services/decision-intelligence/semantic-modeling",
 },
 {
 id: "03",
 title: "Self-Service Enablement",
 desc: "Train business users to build safely on certified data.",
 details:
 "Training and governance frameworks that empower business users to build their own reports safely, using certified data models without breaking the underlying architecture.",
 icon: Users,
 link: "/services/decision-intelligence/self-service-enablement",
 },
];

const methodology = [
 {
 step: "01",
 title: "Measure What Matters",
 desc: "We don't build generic reports. We align every visual and KPI directly to your strategic goals, ignoring vanity metrics.",
 },
 {
 step: "02",
 title: "Single Version of Truth",
 desc: "By centralizing business logic in semantic models, we eliminate the 'spreadsheet wars' between departments.",
 },
 {
 step: "03",
 title: "Adoption Focused",
 desc: "A dashboard is useless if nobody looks at it. We prioritize user experience, performance, and comprehensive training.",
 },
];

export default function DecisionIntelligencePage() {
 const [activeAccordion, setActiveAccordion] = useState(null);

 return (
 <main className="min-h-screen overflow-x-clip bg-background pt-16 md:pt-20 font-sans selection:bg-forest/30">
 {/* 1. The Monolith Hero */}
 <section className="overflow-x-clip relative flex min-h-[calc(100vh-60px)] flex-col border-b-[8px] border-foreground bg-[#0c1214] lg:flex-row">
 

 {/* Left - Engineering Core */}
 <div className="relative flex flex-col justify-center overflow-hidden px-8 py-16 lg:py-24 text-white md:py-16 lg:py-24 lg:w-1/2 lg:px-20 lg:py-16 lg:py-24">
 <div className="pointer-events-none absolute -right-[20%] top-1/2 origin-center -translate-y-1/2 rotate-90 transform select-none font-mono text-[4rem] font-black leading-none text-white/5 sm:text-[6rem] lg:rotate-0 lg:text-[14rem]">
 INTL
 </div>

 <motion.div
 initial={{ opacity: 0, x: -40 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="relative z-10 w-full max-w-2xl"
 >
 <div className="mb-10 inline-flex items-center gap-4">
 <div className="h-1 w-12 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
 <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400">
 Data & Strategy
 </span>
 </div>

 <h1 className="mb-10 text-[3rem] font-black uppercase leading-[0.85] tracking-tighter drop-shadow-sm md:text-[4rem] lg:text-[6rem] xl:text-[6.5rem]">
 Decision <br />
 <span className="bg-gradient-to-r from-emerald-400 to-white/40 bg-clip-text text-transparent">
 Intelligence.
 </span>
 </h1>

 <p className="border-l-[3px] border-emerald-400 pl-6 text-xl font-bold leading-relaxed text-white/70">
 Turn scattered data into a clear strategic advantage. We design
 executive analytics, standardized semantic models, and
 self-service enablement that allow leaders to trust the numbers
 and make decisions faster.
 </p>

 <div className="mt-12 flex flex-col gap-6 sm:flex-row">
 <Link href="/contact?service=decision-intelligence" passHref>
 <Button
 variant="hero"
 size="lg"
 className="rounded-none border-2 border-emerald-400 bg-emerald-400/10 font-black uppercase tracking-widest text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-[#0c1214]"
 >
 Discuss Strategy
 <ArrowRight className="ml-3 h-5 w-5" />
 </Button>
 </Link>
 </div>
 </motion.div>
 </div>

 {/* Right - Architectural Vision */}
 <div className="relative flex min-h-[50vh] items-center justify-center bg-card lg:min-h-screen lg:w-1/2">
 <motion.div
 initial={{ opacity: 0, scale: 1.05 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="group absolute inset-0 transform-gpu overflow-hidden outline outline-1 outline-border"
 >
 <div className="absolute inset-0 z-10 bg-[#0a1012] mix-blend-multiply" />
 <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,hsl(var(--emerald-500))/0.05,transparent_70%)]" />

 {/* Geometric Grid Background */}
 <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

 {/* Dashboard / Architecture Wireframe Placeholder */}
 <div className="absolute left-1/2 top-1/2 z-20 flex aspect-square w-3/4 max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-6 border-2 border-emerald-400/20 bg-background/5 p-8 backdrop-blur-sm">
 <div className="h-4 w-1/3 bg-emerald-400/40"></div>
 <div className="flex w-full flex-1 items-end gap-4 border border-emerald-400/20 p-4">
 <div className="h-[40%] w-1/4 bg-white/5"></div>
 <div className="h-[70%] w-1/4 bg-white/10"></div>
 <div className="h-[50%] w-1/4 bg-white/5"></div>
 <div className="h-[90%] w-1/4 bg-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
 </div>
 <div className="h-2 w-1/2 bg-emerald-400/20"></div>
 </div>

 <div className="absolute bottom-8 right-8 rounded-none border border-emerald-400/30 bg-black/80 px-4 py-2 backdrop-blur-md">
 <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
 [ DIAGNOSTIC HUB ]
 </span>
 </div>
 </motion.div>
 </div>
 </section>

 {/* 2. The Problem (The Ledger Style) */}
 <section className="overflow-x-clip relative border-b border-border/50 bg-background py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24 lg:py-48">
 <div className="absolute right-10 top-0 h-full w-[1px] bg-border/50"></div>
 <div className="absolute right-20 top-0 hidden h-full w-[1px] bg-border/50 md:block"></div>

 <div className="container relative mx-auto max-w-[1400px] px-6">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className="grid grid-cols-1 items-start gap-12 lg:gap-16 lg:grid-cols-12 lg:gap-10 lg:gap-24"
 >
 <div className="lg:sticky lg:top-32 lg:col-span-5">
 <h2 className="mb-8 text-sm font-black uppercase tracking-[0.4em] text-red-500">
 The Problem
 </h2>
 <div className="mb-6 lg:mb-8 hidden h-[4px] w-24 bg-red-500/50 lg:block"></div>

 <h3 className="mb-8 text-balance text-4xl font-black leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
 You have data, but you don&apos;t have{" "}
 <span className="text-red-500">answers.</span>
 </h3>

 <p className="border-l-[3px] border-red-500/50 pl-6 text-xl font-bold leading-relaxed text-foreground/60 md:text-2xl">
 You deployed Power BI, but you are still arguing in board
 meetings about which dashboard is correct because Finance and
 Sales define &quot;Revenue&quot; differently.
 </p>
 </div>

 <div className="mt-12 flex flex-col gap-12 lg:gap-16 lg:col-span-7 lg:mt-0">
 <div className="border-l-[4px] border-foreground py-2 pl-8">
 <div className="mb-4 flex items-center gap-4">
 <AlertTriangle
 className="h-8 w-8 text-foreground"
 strokeWidth={2.5}
 />
 <h4 className="text-3xl font-black uppercase tracking-tight">
 Conflicting Numbers
 </h4>
 </div>
 <p className="max-w-2xl text-xl font-bold leading-relaxed text-foreground/70">
 Different departments pull from different spreadsheets. Nobody
 knows which number is the &quot;official&quot; metric, leading
 to distrust in the data platform as a whole.
 </p>
 </div>

 <div className="border-l-[4px] border-foreground py-2 pl-8">
 <div className="mb-4 flex items-center gap-4">
 <SearchX
 className="h-8 w-8 text-foreground"
 strokeWidth={2.5}
 />
 <h4 className="text-3xl font-black uppercase tracking-tight">
 Slow Time-to-Insight
 </h4>
 </div>
 <p className="max-w-2xl text-xl font-bold leading-relaxed text-foreground/70">
 When an executive asks a new question, it takes the data team
 three weeks to build a dashboard to answer it. The opportunity
 window closes before the data arrives.
 </p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* 3. The Expansion Bellows (What's Included) */}
 <section className="overflow-x-clip border-b-[8px] border-foreground bg-background pb-8 lg:pb-12 pt-8 lg:pt-12">
 <div className="container mx-auto max-w-[1400px] px-6">
 <div className="mb-6 lg:mb-8">
 <h2 className="mb-4 border-l-2 border-forest pl-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-foreground/50">
 Platform Blueprint
 </h2>
 <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter md:text-5xl lg:text-7xl">
 What&apos;s <br /> Included.
 </h3>
 <p className="mt-6 max-w-2xl text-xl font-bold text-foreground/70 md:text-2xl">
 A comprehensive approach to building an intelligence layer your
 entire organization can trust.
 </p>
 </div>

 <div className="flex flex-col border-t-[3px] border-foreground">
 {includedCapabilities.map((cap, index) => {
 const isActive = activeAccordion === index;
 return (
 <motion.div
 key={index}
 initial={false}
 animate={{
 backgroundColor: isActive
 ? "hsl(var(--card))"
 : "hsl(var(--background))",
 borderColor: isActive
 ? "hsl(var(--foreground))"
 : "hsl(var(--border))",
 }}
 className={`group relative flex cursor-pointer flex-col justify-center overflow-hidden border-b-[3px] transition-colors duration-500`}
 onMouseEnter={() => setActiveAccordion(index)}
 onMouseLeave={() => setActiveAccordion(null)}
 >
 <div
 className={`absolute inset-0 bg-gradient-to-r from-forest/5 to-transparent opacity-0 transition-opacity duration-500 ${isActive ? "opacity-100" : ""}`}
 />

 <div className="relative z-10 flex w-full items-center justify-between px-6 py-10 lg:px-12">
 <div className="flex w-full items-center gap-8 lg:w-2/3 lg:gap-10 lg:gap-12 lg:gap-16">
 <span
 className={`font-mono text-2xl font-black transition-colors duration-500 ${isActive ? "text-forest" : "text-muted-foreground"}`}
 >
 {cap.id}
 </span>
 <h4
 className={`text-3xl font-black uppercase tracking-tight transition-colors duration-500 lg:text-5xl ${isActive ? "text-foreground" : "text-foreground/70"}`}
 >
 {cap.title}
 </h4>
 </div>
 <div className="hidden w-1/3 items-center justify-end gap-6 lg:flex">
 <p
 className={`max-w-xs text-right text-lg font-bold transition-all duration-500 ${isActive ? "translate-x-0 text-foreground opacity-100" : "translate-x-4 text-muted-foreground opacity-0"}`}
 >
 {cap.desc}
 </p>
 <div
 className={`flex h-12 w-12 items-center justify-center border-[2px] transition-all duration-500 ${isActive ? "scale-110 border-forest bg-forest text-forest-foreground" : "border-muted-foreground/30 bg-transparent text-muted-foreground"}`}
 >
 <cap.icon size={24} />
 </div>
 </div>
 </div>

 <AnimatePresence>
 {isActive && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="relative z-10 w-full px-6 pb-10 lg:px-12"
 >
 <div className="w-full pl-[4rem] lg:w-2/3 lg:pl-[6.5rem]">
 <div className="mb-6 h-[2px] w-16 bg-forest"></div>
 <p className="mb-6 max-w-2xl text-xl font-bold leading-relaxed text-muted-foreground">
 {cap.details}
 </p>
 <Link
 href={cap.link}
 className="group/link inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-forest transition-colors hover:text-foreground"
 >
 Explore Detail
 <ArrowRight
 size={16}
 className="transition-transform group-hover/link:translate-x-1"
 />
 </Link>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* 4. Methodology (Dark block) */}
 <section className="overflow-x-clip bg-[#0c1214] py-16 lg:py-24 text-white md:py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto max-w-[1400px] px-6">
 <h2 className="mb-4 border-l-2 border-emerald-400 pl-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-emerald-400">
 Methodology
 </h2>
 <h3 className="mb-6 lg:mb-8 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl">
 Our Approach.
 </h3>

 <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-3 lg:gap-8">
 {methodology.map((item, i) => (
 <div
 key={i}
 className="group flex cursor-default flex-col border-t-2 border-white/20 pt-8"
 >
 <div className="mb-6 font-mono text-5xl font-black text-white/10 transition-colors group-hover:text-emerald-400/50">
 {item.step}
 </div>
 <h4 className="mb-4 text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-emerald-400">
 {item.title}
 </h4>
 <p className="text-lg font-medium leading-relaxed text-white/60 transition-colors group-hover:text-white/80">
 {item.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 5. The Filter (Who this is for) */}
 <section className="overflow-x-clip relative border-b-2 border-border/80 bg-background py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24">
 <div className="container mx-auto max-w-[1400px] px-6">
 <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
 <div>
 <h2 className="mb-4 border-l-2 border-forest pl-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-foreground/50">
 The Filter
 </h2>
 <h3 className="mb-6 lg:mb-8 text-4xl font-black uppercase leading-[0.9] tracking-tighter md:text-6xl">
 Who This <br /> Is For.
 </h3>

 <ul className="space-y-6">
 {[
 "Organizations struggling with 'multiple versions of the truth'.",
 "Companies with conflicting departmental reports where metrics don't align.",
 "Teams experiencing slow time-to-insight when business questions arise.",
 "Leaders who want to transition from gut-feel decisions to data-backed strategy.",
 ].map((text, i) => (
 <li key={i} className="flex items-start gap-4">
 <div className="mt-2.5 h-2 w-2 shrink-0 bg-forest" />
 <p className="text-xl font-bold leading-relaxed text-foreground/80">
 {text}
 </p>
 </li>
 ))}
 </ul>
 </div>

 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="group relative border-4 border-foreground bg-card p-6 shadow-[16px_16px_0_hsl(var(--forest))] md:p-6 lg:p-8 lg:p-6 lg:p-8"
 >
 <div className="absolute right-0 top-0 p-4">
 <LineChart
 className="h-12 w-12 text-foreground/10"
 strokeWidth={1}
 />
 </div>
 <h4 className="mb-8 text-sm font-black uppercase tracking-[0.2em] text-forest">
 Starting Point
 </h4>
 <blockquote className="mb-8 text-3xl font-black uppercase leading-[1.1] tracking-tight text-foreground transition-colors group-hover:text-forest md:text-4xl">
 &quot;We have Power BI but nobody uses it or trusts the
 data.&quot;
 </blockquote>
 <p className="mb-10 text-lg font-bold text-foreground/70">
 If this sounds familiar, it&apos;s time to rethink your
 intelligence layer.
 </p>
 <Link
 href="/services/decision-intelligence/executive-analytics"
 className="inline-flex items-center gap-2 bg-foreground px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-background transition-colors hover:bg-forest"
 >
 Explore Executive Analytics
 <ArrowRight size={16} />
 </Link>
 </motion.div>
 </div>
 </div>
 </section>

 {/* 6. The Geometric Anchor (Extreme CTA) */}
 <section
 className="relative z-[50] overflow-hidden bg-background"
 style={{ paddingBottom: "60px" }}
 >
 <div className="relative flex flex-col items-center pt-8 lg:pt-8 lg:pt-12">
 <div className="group relative flex h-[320px] w-[320px] flex-col items-center justify-center text-forest-foreground sm:h-[480px] sm:w-[480px] md:h-[560px] md:h-[640px] md:w-[560px] md:w-[640px] lg:h-[720px] lg:w-[720px]">
 <div className="ease-[cubic-bezier(0.16,1,0.3,1)] absolute inset-0 z-0 transform-gpu rounded-full bg-forest shadow-[0_0_80px_rgba(34,197,94,0.12)] transition-transform duration-1000 group-hover:scale-[1.02]"></div>

 <div className="relative z-10 -mt-8 lg:mt-12 w-full px-8 text-center">
 <div className="mx-auto mb-6 h-[2px] w-16 bg-forest-foreground/50"></div>
 <h2 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-5xl lg:text-[4rem]">
 Ready to trust <br /> your numbers?
 </h2>
 <p className="mx-auto mb-8 max-w-sm text-base font-bold leading-relaxed text-forest-foreground/80 md:text-lg">
 Stop arguing over data accuracy and start making informed
 decisions based on a singular unified architecture.
 </p>

 <Link href="/contact?service=decision-intelligence" passHref>
 <Button
 variant="hero"
 size="lg"
 className="rounded-none border-4 border-forest-foreground bg-forest-foreground px-8 py-6 text-lg font-black uppercase tracking-[0.2em] text-forest shadow-none transition-all duration-300 hover:bg-transparent hover:text-forest-foreground"
 >
 ENGAGE GROOT
 <ArrowRight className="ml-3 h-5 w-5" />
 </Button>
 </Link>
 </div>

 <div className="pointer-events-none absolute left-8 top-[30%] z-0 origin-left rotate-90 select-none font-mono text-[4rem] font-black text-forest-foreground/10 md:left-14 lg:text-[6rem]">
 TRUST
 </div>
 <div className="pointer-events-none absolute right-8 top-[30%] z-0 origin-right -rotate-90 select-none font-mono text-[4rem] font-black text-forest-foreground/10 md:right-14 lg:text-[6rem]">
 DATA
 </div>
 </div>
 </div>
 </section>
 </main>
 );
}
