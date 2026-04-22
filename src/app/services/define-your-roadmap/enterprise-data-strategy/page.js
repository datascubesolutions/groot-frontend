// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertTriangle,
  ChevronRight,
  Target,
  Map,
  Signpost,
  LineChart,
  FileText,
  PieChart,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function EnterpriseDataStrategy() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          {
            label: "Define Your Roadmap",
            href: "/services/define-your-roadmap",
          },
          {
            label: "Enterprise Data Strategy",
            href: "/services/define-your-roadmap/enterprise-data-strategy",
          },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
              >
                <span className="text-foreground">Enterprise </span>
                <br />
                <span className="text-[hsl(var(--secondary))]">
                  Data Strategy
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light"
              >
                A comprehensive strategy that aligns your Microsoft Fabric and
                Azure investments with business outcomes. Not a vision deck — a
                plan that gets executive buy-in.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact?service=data-strategy" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="px-8 shadow-primary/25 shadow-xl group"
                  >
                    Start a Strategy Conversation
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-[4/5] max-w-lg mx-auto rounded-[2rem] overflow-hidden border border-border/50 shadow-[0_0_80px_-20px_rgba(16,185,129,0.3)]">
                <Image
                  src="/images/data-strategy/hero_data_strategy.png"
                  alt="Executive pointing to roadmap"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="py-16 lg:py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">
                  The Challenge
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                  Why data strategies fail.
                </h3>
                <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                  A strategy without execution is just an expensive
                  presentation. Most data strategies lack the pragmatic
                  prioritization needed to survive CFO scrutiny.
                </p>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <Image
                    src="/images/data-strategy/strategy_challenge.png"
                    alt="Frustrated executive team reviewing data"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-emerald-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <FileText size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  The Vision Deck Nobody Opens
                </h4>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  You have a slide deck titled &quot;Data Strategy&quot; on
                  SharePoint. It describes a &quot;data-driven culture&quot; and
                  lists &quot;key initiatives.&quot; But when a new Power BI
                  project starts, nobody references it. When someone proposes a
                  Fabric implementation, the deck stays closed. The strategy
                  exists. Execution doesn&apos;t.os;t.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-emerald-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Signpost size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  Competing Priorities, No Framework
                </h4>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Finance wants faster monthly close. Marketing wants customer
                  analytics. Operations wants real-time Power BI dashboards. IT
                  wants to modernize the data warehouse to Fabric. Everyone has
                  legitimate needs and executive sponsors. Nobody has a
                  framework for deciding &quot;this first, that later, this
                  never.&quot;
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-border/60 hover:border-emerald-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <AlertTriangle size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  No Business Case That Survives CFO Scrutiny
                </h4>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  You know you need to invest in Microsoft Fabric. But the CFO
                  wants numbers. What&apos;s the ROI on a Lakehouse? What&apos;s
                  the cost of inaction? What&apos;s the total investment over 18
                  months? Without a business case that answers these questions
                  with credible numbers, data initiatives compete for budget
                  against projects with clearer returns — and lose.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">
              Deliverables
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              What a real strategy looks like.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Target className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">
                  Current State Assessment
                </h4>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                  A clear-eyed view of your existing data landscape: Azure
                  resources, data flows, Power BI reports, capabilities, gaps,
                  and technical debt.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Signpost className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  Prioritized Roadmap
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  A phased implementation plan with 90-day milestones,
                  dependencies, and decision points. Each phase delivers
                  measurable business value.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <LineChart className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  Business Case
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Financial analysis quantifying investment and expected return.
                  Includes cost of current state, Fabric capacity costs,
                  implementation investment, and expected benefits.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-6 md:p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <FileText className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">
                  Governance Model
                </h4>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                  A governance framework using Microsoft Purview: data
                  ownership, quality standards, sensitivity labels, and lineage
                  tracking.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process - Vertical Timeline */}
      {/* Methodology - Bento grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">
              Methodology
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              How we build a strategy
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Interviews, architectural design, and financial modeling —
              typically 6–8 weeks from kickoff to final presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <MethodCard
              step={1}
              week="Week 1–3"
              title="Discovery"
              desc="We interview stakeholders, review Azure consumption, audit existing Power BI content, and assess current state. We map business objectives to data requirements."
            />
            <MethodCard
              step={2}
              week="Week 3–5"
              title="Strategy Development"
              desc="We design the target state architecture on Fabric, prioritize initiatives, and build the roadmap via working sessions with your team — not in isolation."
            />
            <MethodCard
              step={3}
              week="Week 5–6"
              title="Business Case Development"
              desc="We quantify Fabric capacity costs, implementation services, internal effort, and expected returns. We document assumptions so the business case is deeply credible."
            />
            <MethodCard
              step={4}
              week="Week 6–8"
              title="Validation & Alignment"
              desc="We present the strategy to leadership, incorporate feedback, and finalize deliverables. Our goal is organizational buy-in, not just documentation."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="rounded-[3rem] border border-border bg-card p-6 md:p-10 lg:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)] overflow-hidden relative transition-shadow duration-500 hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)]">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top_right,hsl(var(--primary)),transparent_40%)] dark:opacity-20" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]">
                Case Study: Construction & Fleet
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                How we built a data strategy for a multi-company construction
                group.
              </h2>

              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border/60 shadow-sm mb-12">
                <Image
                  src="/images/data-strategy/strategy_case_study.png"
                  alt="Data Strategy Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    The Situation
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    A PE-backed fire protection contractor had grown through
                    acquisition. Five regional business units, each with their
                    own ERP (mix of QuickBooks, Sage, and ServiceTitan for field
                    ops), different job costing practices, and no consolidated
                    financial view. The CFO needed unified reporting for board
                    meetings but couldn&apos;t get consistent numbers. Manual
                    report compilation took two weeks — and nobody trusted the
                    final numbers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    What We Built
                  </h3>
                  <ul className="space-y-3 text-foreground/80 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Current State Map: 7 source systems, 14 different
                      definitions of &quot;revenue,&quot; zero shared data
                      infrastructure.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Target State Architecture: Microsoft Fabric with OneLake
                      as unified storage. Lakehouse for consolidated data. Power
                      BI semantic model for consistent metrics.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Business Case: $340K annual savings from eliminated
                      reconciliation. $180K implementation. 18-month payback.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-emerald-500 mb-2">
                    2 Hours
                  </p>
                  <p className="text-foreground/70 font-medium">
                    Board deck generation time (down from 2 weeks)
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-emerald-500 mb-2 mt-1">
                    16 Weeks
                  </p>
                  <p className="text-foreground/70 font-medium">
                    Phase 1 completed
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <Link
                    href="/industries/construction-fleet"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors uppercase tracking-wider group"
                  >
                    See how we work with construction companies
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="How long does a strategy engagement take?"
              a="5-8 weeks for a comprehensive enterprise strategy. Smaller scopes for specific divisions can be completed in 3-4 weeks."
            />
            <FAQItem
              q="Do we need a maturity assessment first?"
              a="Not always. We include a current state capability assessment naturally within the strategy engagement."
            />
            <FAQItem
              q="What makes a strategy actually get implemented?"
              a="Three things: executive sponsorship, clear 90-day execution phases, and governance that assigns actual ownership. We build all three into your roadmap."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
              Continue Your Journey
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Explore related services to help you define and execute your data
              strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/services/define-your-roadmap/maturity-assessment"
              className="group block h-full"
            >
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Map size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                    Maturity Assessment
                  </h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">
                    Evaluate your current data capabilities and identify gaps
                    before building your strategy.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-500 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                    LEARN MORE{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/services/define-your-roadmap/stack-evaluation"
              className="group block h-full"
            >
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <PieChart size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                    Platform Evaluation
                  </h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">
                    Objective analysis to select the right tools and
                    architecture for your specific needs.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-500 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                    LEARN MORE{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/services/build-your-foundation/foundation-build"
              className="group block h-full"
            >
              <div className="bg-muted/20 backdrop-blur-md rounded-[2rem] p-8 border border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                    Foundation Build
                  </h3>
                  <p className="text-foreground/80 text-[0.95rem] leading-relaxed mb-8">
                    Implement a robust, scalable data architecture that serves
                    as the bedrock for analytics.
                  </p>
                </div>
                <div className="pt-6 border-t border-border/50 relative z-10 mt-auto">
                  <span className="text-emerald-500 font-bold flex items-center gap-2 text-[0.85rem] uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                    LEARN MORE{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-10 lg:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Strategy that gets executed.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              You don&apos;t need another vision deck. You need a Microsoft
              Fabric strategy that aligns stakeholders, justifies investment,
              and guides implementation.
            </p>
            <Link href="/contact?service=data-strategy" passHref>
              <Button
                variant="hero"
                size="lg"
                className="px-10 text-lg h-14 rounded-full"
              >
                Start a Strategy Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * @param {{ step: number|string, week: string, title: string, desc: string }} props
 */
function MethodCard({ step, week, title, desc }) {
  const num = String(step).padStart(2, "0");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeIn}
      className="group relative bg-background border border-border/60 rounded-[1.75rem] p-8 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
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

/**
 * @param {{ q: string, a: import("react").ReactNode }} props
 */
function FAQItem({ q, a }) {
  return (
    <details className="group bg-background p-8 rounded-[2rem] border border-border/60 hover:border-primary/30 transition-all duration-300 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex justify-between items-center text-xl font-bold outline-none select-none">
        {q}
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-open:rotate-90 transition-transform duration-300">
          <ChevronRight className="w-5 h-5" />
        </div>
      </summary>
      <div className="mt-6 text-lg text-foreground/80 leading-relaxed border-t border-border pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
        {a}
      </div>
    </details>
  );
}
