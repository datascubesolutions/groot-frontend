// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
 AlertCircle,
 BarChart3,
 CheckCircle2,
 ChevronRight,
 Presentation,
 TrendingUp
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

export default function ExecutiveAnalytics() {
 return (
 <main className="overflow-x-clip pt-16 md:pt-20 min-h-screen relative bg-background">
 

 {/* Hero Section - Split Layout */}
 <section className="relative py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24 overflow-hidden bg-background">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
 <div className="container mx-auto px-6 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:gap-16 items-center">
 {/* Left Content */}
 <motion.div
 initial="hidden"
 animate="visible"
 variants={staggerContainer}
 className="lg:col-span-7 max-w-2xl"
 >
 <motion.h1
 variants={fadeIn}
 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground"
 >
 Executive <br />
 <span className="text-[hsl(var(--secondary))]">Analytics</span>
 </motion.h1>
 <motion.p
 variants={fadeIn}
 className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light"
 >
 Stop looking at 40 different charts to find the truth. We build
 high-signal, zero-noise Power BI dashboards designed
 specifically for the C-Suite and Board of Directors.
 </motion.p>

 <motion.div
 variants={fadeIn}
 className="flex flex-col sm:flex-row gap-4"
 >
 <Link href="/contact?service=executive-analytics" passHref>
 <Button
 variant="hero"
 size="lg"
 className="px-8 shadow-primary/25 shadow-xl group"
 >
 Schedule a UX Review
 <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Button>
 </Link>
 </motion.div>
 </motion.div>

 {/* Right Visual (Abstract Dashboard/Chart) */}
 <motion.div
 initial={{ opacity: 0, x: 40 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="lg:col-span-5 relative hidden lg:block"
 >
 <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
 <Image
 src="/executive_analytics_dashboard.png"
 alt="Executive Analytics Dashboard"
 fill
 className="object-cover hover:scale-105 transition-transform duration-700"
 priority
 />
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* The Problem - Sticky Scroll */}
 <section className="overflow-x-clip py-16 lg:py-24 lg:py-16 lg:py-24 bg-muted/20 relative">
 <div className="container mx-auto px-6">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:gap-16">
 {/* Sticky Sidebar */}
 <div className="lg:col-span-5 pl-0 lg:pl-4">
 <div className="sticky top-32">
 <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
 The Challenge
 </h2>
 <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
 Data rich, insight poor.
 </h3>
 <p className="text-xl text-muted-foreground leading-relaxed mb-8">
 Most executive dashboards fail because they are designed by
 analysts, not executives. They answer &quot;what
 happened&quot; instead of &quot;what requires my attention
 right now.&quot;
 </p>
 </div>
 </div>

 {/* Scrollable Content */}
 <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className="bg-background/80 backdrop-blur-md p-6 md:p-6 lg:p-8 rounded-[2rem] border border-border/60 hover:border-red-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
 >
 <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <BarChart3 size={28} />
 </div>
 <h4 className="text-2xl font-bold mb-4 text-foreground">
 The Cognitive Overload Screen
 </h4>
 <p className="text-lg text-muted-foreground leading-relaxed">
 Your dashboard has 14 different visuals, 8 slicers, and a
 matrix table with 40 columns. It takes an executive 5 minutes
 just to figure out what they are looking at. When everything
 is highlighted, nothing is important.
 </p>
 </motion.div>

 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className="bg-background/80 backdrop-blur-md p-6 md:p-6 lg:p-8 rounded-[2rem] border border-border/60 hover:border-amber-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
 >
 <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <AlertCircle size={28} />
 </div>
 <h4 className="text-2xl font-bold mb-4 text-foreground">
 Numbers Without Context
 </h4>
 <p className="text-lg text-muted-foreground leading-relaxed">
 The giant KPI card says &quot;$4.2M Revenue.&quot; Is that
 good? Bad? Are we ahead of plan? Are we losing to a
 competitor? Showing a number without comparing it to a target,
 forecast, or historical benchmark renders it meaningless.
 </p>
 </motion.div>

 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 variants={fadeIn}
 className="bg-background/80 backdrop-blur-md p-6 md:p-6 lg:p-8 rounded-[2rem] border border-border/60 hover:border-indigo-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
 >
 <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <Presentation size={28} />
 </div>
 <h4 className="text-2xl font-bold mb-4 text-foreground">
 The Frankenstein Board Deck
 </h4>
 <p className="text-lg text-muted-foreground leading-relaxed">
 You have thousands of dollars invested in Power BI licenses,
 but your analysts still spend 3 days before every board
 meeting copying screenshots into PowerPoint because the actual
 dashboards &quot;don&apos;t look right for the board.&quot;
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 </section>

 {/* Deliverables - Bento Grid */}
 <section className="py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24 bg-background relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
 <div className="container mx-auto px-6 relative z-10 max-w-7xl">
 <div className="text-center mb-6 lg:mb-8">
 <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
 Deliverables
 </h2>
 <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
 Actionable intelligence.
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
 {/* Large Feature 1 */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-6 lg:p-8 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
 >
 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
 <BarChart3 className="w-7 h-7" strokeWidth={1.5} />
 </div>
 <h4 className="text-3xl font-bold mb-4 text-foreground">
 The &quot;One-Pager&quot; Executive Summary
 </h4>
 <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
 A high-level landing page utilizing IBCS (International
 Business Communication Standards). Clean, consistent visuals
 that instantly show performance vs. target, year-over-year
 growth, and top-tier KPIs.
 </p>
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-6 lg:p-8 hover:border-blue-500/40 transition-colors shadow-sm relative overflow-hidden"
 >
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
 <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
 </div>
 <h4 className="text-2xl font-bold mb-4 text-foreground">
 Board Reporting Packages
 </h4>
 <p className="text-muted-foreground leading-relaxed">
 Power BI reports designed specifically for export to
 PowerPoint and PDF, perfectly formatted for your board
 presentation templates.
 </p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-6 lg:p-8 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
 >
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
 <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
 </div>
 <h4 className="text-2xl font-bold mb-4 text-foreground">
 Automated Narratives
 </h4>
 <p className="text-muted-foreground leading-relaxed">
 Smart Narrative visuals that auto-generate text summaries of
 the data. Executives read sentences first, view charts second.
 </p>
 </div>
 </motion.div>

 {/* Large Feature 4 */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeIn}
 className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-6 lg:p-8 hover:border-indigo-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
 >
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
 <div className="relative z-10">
 <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
 <BarChart3 className="w-7 h-7" strokeWidth={1.5} />
 </div>
 <h4 className="text-3xl font-bold mb-4 text-foreground">
 Deep Dive Capabilities
 </h4>
 <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
 Drill-through actions configured so an executive can click a
 red KPI and instantly jump to the operational level to see the
 &quot;why&quot; — without switching reports or logging into
 another system.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Methodology - Bento Grid */}
 <section className="py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24 bg-muted/20 relative overflow-hidden">
 <div className="container mx-auto px-6 max-w-6xl">
 <div className="text-center mb-6 lg:mb-8">
 <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
 Methodology
 </h2>
 <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
 How we build for leaders.
 </h3>
 <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
 KPI definition, UX design, data plumbing, and executive handover.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
 <MethodCard
 step={1}
 week="Phase 1"
 title="KPI Definition Workshops"
 desc="We don't ask what charts you want. We ask what decisions you need to make. We define the exact metrics, required dimensions, and necessary targets."
 />
 <MethodCard
 step={2}
 week="Phase 2"
 title="Wireframing & UX Design"
 desc="Dashboard mockups in Figma/whiteboard before we touch Power BI. We align on layout, navigation flow, and visual hierarchy first."
 />
 <MethodCard
 step={3}
 week="Phase 3"
 title="Data & DAX Plumbing"
 desc="Connecting to semantic models, writing complex time-intelligence DAX measures (YTD, YoY), and ensuring sub-second visual rendering."
 />
 <MethodCard
 step={4}
 week="Phase 4"
 title="Polishing & Training"
 desc="Applying corporate themes, configuring mobile layouts, and a 30-minute handover session directly with leadership to ensure high adoption."
 />
 </div>
 </div>
 </section>

 {/* Real Example - Premium Section */}
 <section className="py-16 lg:py-24 md:py-16 lg:py-24 lg:py-16 lg:py-24 bg-background relative overflow-hidden">
 <div className="container mx-auto px-6 max-w-6xl relative z-10">
 <div className="bg-primary/5 text-foreground rounded-[3rem] p-6 md:p-6 lg:p-8 lg:p-6 lg:p-8 relative overflow-hidden shadow-sm border border-primary/20">
 {/* Decorative background glow */}
 <div className="absolute top-0 right-0 w-[500px] max-w-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

 <div className="relative z-10">
 <div className="mb-8 inline-flex border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
 Case Study: Medical Device Manufacturer
 </div>
 <h2 className="text-3xl md:text-5xl font-bold mb-6 lg:mb-8 max-w-3xl leading-tight text-foreground">
 Transforming a 40-page PDF into an interactive board report.
 </h2>

 <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
 <div>
 <h3 className="text-xl font-bold mb-4 text-primary">
 The Situation
 </h3>
 <p className="text-muted-foreground leading-relaxed text-lg">
 The CFO and FP&A team spent 5 full days every month
 compiling a 40-page PDF for the board. The data came from 6
 different systems. During meetings, if a board member asked
 a question not covered in the static PDF (e.g., &quot;What
 was the margin on Product Line B in Germany?&quot;), the CFO
 had to say &quot;I&apos;ll get back to you next week.&quot;
 </p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-4 text-primary">
 What We Delivered
 </h3>
 <ul className="space-y-3 text-muted-foreground text-lg">
 <li className="flex items-start gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
 An Executive application housing Revenue, Cost to Serve,
 and OPEX.
 </li>
 <li className="flex items-start gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
 Paginated Report integration for pixel-perfect PDF exports
 that matched old templates.
 </li>
 <li className="flex items-start gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
 Drill-through functionality allowing the CFO to answer
 ad-hoc questions live during the board meeting.
 </li>
 </ul>
 </div>
 </div>

 <div className="mt-8 lg:mt-12 pt-10 border-t border-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
 <div>
 <p className="text-5xl font-black text-primary mb-2">
 5 Days
 </p>
 <p className="text-muted-foreground font-medium">
 Monthly time saved
 </p>
 </div>
 <div>
 <p className="text-4xl font-black text-primary mb-2 mt-1">
 1 App
 </p>
 <p className="text-muted-foreground font-medium">
 Replaced 40 pages
 </p>
 </div>
 <div className="flex flex-col justify-end">
 <Link
 href="/industries/healthcare-lifesciences"
 className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group text-lg"
 >
 See Healthcare Work
 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="overflow-x-clip py-16 lg:py-24 lg:py-16 lg:py-24 bg-muted/20">
 <div className="container mx-auto px-6 max-w-4xl">
 <div className="text-center mb-6 lg:mb-8">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
 Frequently Asked Questions
 </h2>
 </div>
 <div className="space-y-4">
 <FAQItem
 q="Does this require an underlying data warehouse?"
 a="Not strictly, but it usually implies one. If you want a dashboard showing multi-system data (ERP + CRM + HR), the data needs to be integrated first. We often build the underlying data foundation (Lakehouse) before painting the executive layer."
 />
 <FAQItem
 q="Do you design for mobile?"
 a="Yes. Every executive dashboard we build includes a dedicated layout configured for the Power BI mobile app. Executives want to pull up the numbers on their iPhone before a flight, not boot up a laptop."
 />
 <FAQItem
 q="Can you redesign our existing, ugly dashboards?"
 a="Absolutely. We offer UX/UI makeovers. We take your existing semantic models and rebuild the visualizations from scratch using UI/UX best practices."
 />
 </div>
 </div>
 </section>

 {/* Related Services */}
 <section className="overflow-x-clip py-16 lg:py-24 lg:py-16 lg:py-24 bg-background">
 <div className="container mx-auto px-6 max-w-5xl">
 <h2 className="text-3xl font-bold mb-10 text-center">
 Related Services
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <Link
 href="/services/decision-intelligence/semantic-modeling"
 className="group"
 >
 <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
 Semantic Modeling
 </h3>
 <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
 Learn more{" "}
 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </div>
 </Link>
 <Link
 href="/services/decision-intelligence/self-service-enablement"
 className="group"
 >
 <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
 Self-Service Enablement
 </h3>
 <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
 Learn more{" "}
 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </div>
 </Link>
 <Link
 href="/services/build-your-foundation/data-modernization"
 className="group"
 >
 <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
 Data Modernization
 </h3>
 <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">
 Learn more{" "}
 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </div>
 </Link>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="overflow-x-clip py-16 lg:py-24 lg:py-16 lg:py-24 bg-background border-t border-border">
 <div className="container mx-auto px-6 max-w-5xl">
 <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-6 lg:p-8 md:p-6 lg:p-8 lg:p-6 lg:p-8 text-center shadow-lg shadow-primary/5">
 <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
 See clearly. Act decisively.
 </h2>
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
 Stop digging through complex reports to find basic answers.
 Provide your leadership with zero-friction clarity.
 </p>
 <Link href="/contact?service=executive-analytics" passHref>
 <Button
 variant="hero"
 size="lg"
 className="px-10 text-lg h-14 rounded-full"
 >
 Schedule a UX Review
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}

function MethodCard({ step, week, title, desc }) {
 const num = String(step).padStart(2, "0");
 return (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-40px" }}
 variants={fadeIn}
 className="group relative bg-background border border-border/60 rounded-[1.75rem] p-8 shadow-sm hover:shadow-lg hover:border-emerald-500/25 transition-all duration-300 overflow-hidden"
 >
 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-300" />
 <div className="relative flex flex-col h-full">
 <div className="flex items-center gap-4 mb-5">
 <span className="text-[2.5rem] font-black text-foreground tabular-nums leading-none tracking-tight">
 {num}
 </span>
 <span className="text-[0.72rem] font-bold uppercase tracking-widest text-emerald-500 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
 {week}
 </span>
 </div>
 <h4 className="text-xl font-bold tracking-tight text-foreground mb-3">
 {title}
 </h4>
 <p className="text-foreground/90 leading-relaxed flex-1">{desc}</p>
 </div>
 </motion.div>
 );
}

function FAQItem({ q, a }) {
 return (
 <details className="group bg-background p-8 rounded-[2rem] border border-border/60 hover:border-primary/30 transition-all duration-300 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
 <summary className="flex justify-between items-center text-xl font-bold outline-none select-none">
 {q}
 <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-open:rotate-90 transition-transform duration-300">
 <ChevronRight className="w-5 h-5" />
 </div>
 </summary>
 <div className="mt-6 text-lg text-muted-foreground leading-relaxed border-t border-border pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
 {a}
 </div>
 </details>
 );
}
