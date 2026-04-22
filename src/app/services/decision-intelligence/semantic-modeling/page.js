// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  DatabaseZap,
  Network,
  BoxSelect,
  Gauge,
  Sigma,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export default function SemanticModeling() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          {
            label: "Decision Intelligence",
            href: "/services/decision-intelligence",
          },
          {
            label: "Semantic Modeling",
            href: "/services/decision-intelligence/semantic-modeling",
          },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl lg:col-span-7"
            >
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
              >
                Semantic <br />
                <span className="text-[hsl(var(--secondary))]">Modeling</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                The foundation underneath your dashboards. Built for
                performance, consistency, and scale. We create the certified
                Power BI datasets your organization trusts.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?service=modeling" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-xl shadow-primary/25"
                  >
                    Schedule a Model Review
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Star Schema/Model) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/semantic_modeling_star_schema.png"
                  alt="Semantic Modeling and Star Schema"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - Sticky Scroll */}
      <section className="relative bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sticky Sidebar */}
            <div className="pl-0 lg:col-span-5 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  The Anti-Patterns
                </h2>
                <h3 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Why models break at scale.
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  A dataset that works perfectly for 100,000 rows will
                  completely collapse when pointing to 40 million. Self-taught
                  modeling habits destroy enterprise performance.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col gap-8 pt-10 lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-red-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                  <Gauge size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The &quot;Wait and See&quot; Dashboardboard
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You click a filter. You wait 45 seconds for the visual to
                  update. The report is unusable, not because of the
                  visualization, but because the underlying DAX measures run
                  table-scans over massive, unoptimized datasets.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                  <Network size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  A Million Silos
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Every Power BI dashboard contains its own dataset. When the
                  definition of &quot;Active Customer&quot; changes, you have to
                  find and update 40 different PBIX files. You inevitably miss
                  three, leading to conflicting numbers in executive
                  meetings.ings.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
                  <DatabaseZap size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The One Big Flat Table
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Instead of a Star Schema, the dataset is one massive, imported
                  table with 300 columns meant to act like an Excel sheet. The
                  refresh fails every morning because it exceeds Premium
                  capacity memory limits during processing.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Built for the VertiPaq Engine.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <Network className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Enterprise Star Schema Design
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  True dimensional models optimized mathematically for the Power
                  BI engine. Fact and dimension tables correctly structured for
                  rapid filtering, aggregation, and future-proof flexibility.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:bg-blue-500/20">
                  <Sigma className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Optimized DAX Measures
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Complex calculations and time intelligence written cleanly
                  using variables, tuned in DAX Studio for split-second
                  rendering times.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-emerald-500/40 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Certified Deployments
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Deployed securely into Fabric with &quot;Certified&quot;
                  endorsement, ready for self-service consumption by the broader
                  organization.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-500/40 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-500/20">
                  <BoxSelect className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Granular Security Architecture
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Row-Level Security (RLS) and Object-Level Security (OLS)
                  implemented deeply at the model connection layer, ensuring
                  security rules are automatically inherited by absolutely every
                  dashboard built on top.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento Grid */}
      <section className="relative overflow-hidden bg-muted/20 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Methodology
            </h2>
            <h3 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              How we build gold models
            </h3>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/80">
              Requirements, dimensional modeling, DAX engineering, and
              performance optimization.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <MethodCard
              step={1}
              week="Phase 1"
              title="Requirements & Metrics Mapping"
              desc="Identify all required business metrics, base aggregations, and dimensional filtering cuts. Formally document defining logic for contested KPIs."
            />
            <MethodCard
              step={2}
              week="Phase 2"
              title="Dimensional Modeling"
              desc="Engineer the semantic star schema. Resolve complexities like many-to-many paths, role-playing dimensions, and slowly changing dimensions."
            />
            <MethodCard
              step={3}
              week="Phase 3"
              title="Advanced DAX Engineering"
              desc="Build complex measures. Implement Calculation Groups to drastically reduce redundant 'Time Intelligence' measure sprawl across the model."
            />
            <MethodCard
              step={4}
              week="Phase 4"
              title="Performance Optimization"
              desc="Diagnose memory usage via VertiPaq Analyzer. Optimize sorting, drastically reduce cardinality, and configure incremental refresh partitions."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-10 lg:p-16">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
                Case Study: Retail & E-Commerce
              </div>
              <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Fixing a 14-hour daily report refresh cycle.
              </h2>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    The Situation
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A multi-channel retailer built their core sales dashboard
                    using a single, flattened table importing daily
                    transactions. At 80 million rows, the dataset maxed out
                    Power BI Premium memory limits. Refreshes failed multiple
                    times a week, successful runs took 14 hours, and visual
                    clicks took 30+ seconds to calculate.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    What We Delivered
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Split the flat table into a strict Star Schema (1 Fact
                      table, 8 highly optimized Dimensions).
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Replaced 150 redundant hard-coded DAX measures with 5
                      clean Calculation Group items.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Configured automated Incremental Refresh patterns over
                      history.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-primary/20 pt-10 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-5xl font-black text-primary">
                    12 Min
                  </p>
                  <p className="font-medium text-muted-foreground">
                    New refresh duration
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-1 text-4xl font-black text-primary">
                    -85%
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Model RAM usage reduction
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <Link
                    href="/industries/retail-ecommerce"
                    className="group flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    See Retail Work
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="What is a semantic model vs. a dataset?"
              a="Microsoft recently renamed 'Datasets' to 'Semantic Models' in Power BI and Fabric. They mean the same thing: the foundational data structure, relationships, and DAX calculations that power your visuals."
            />
            <FAQItem
              q="Do you build DirectQuery or Import models?"
              a="It depends entirely on architecture requirements. If you are on Microsoft Fabric, we strongly prefer Direct Lake mode (combining Import speed with DirectQuery scale). Otherwise, we recommend Import with Incremental Refresh for sub-second performance, reserving DirectQuery primarily for real-time edge cases."
            />
            <FAQItem
              q="Can you fix our existing slow DAX measures?"
              a="Yes. We frequently execute DAX performance tuning engagements. We utilize DAX Studio and VertiPaq Analyzer to locate engine bottlenecks and refactor the code for maximum evaluation efficiency."
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link
              href="/services/decision-intelligence/executive-analytics"
              className="group"
            >
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border/60 bg-muted/20 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  Executive Analytics
                </h3>
                <span className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Learn more{" "}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/services/decision-intelligence/self-service-enablement"
              className="group"
            >
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border/60 bg-muted/20 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  Self-Service Enablement
                </h3>
                <span className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Learn more{" "}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <Link
              href="/services/build-your-foundation/data-modernization"
              className="group"
            >
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border/60 bg-muted/20 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  Data Modernization
                </h3>
                <span className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Learn more{" "}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-lg shadow-primary/5 md:p-10 lg:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Build models, not just reports.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Stop creating a new dataset for every dashboard. Let&apos;s build
              a certified, lightning-fast semantic model your entire
              organization can rely on.
            </p>
            <Link href="/contact?service=modeling" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg"
              >
                Schedule a Model Review
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
      className="group relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-emerald-500/25 hover:shadow-lg"
    >
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500/5 blur-2xl transition-colors duration-300 group-hover:bg-emerald-500/10" />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center gap-4">
          <span className="text-[2.5rem] font-black tabular-nums leading-none tracking-tight text-foreground">
            {num}
          </span>
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-500 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
            {week}
          </span>
        </div>
        <h4 className="mb-3 text-xl font-bold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="flex-1 leading-relaxed text-foreground/90">{desc}</p>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group cursor-pointer rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/30 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between text-xl font-bold outline-none">
        {q}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-90">
          <ChevronRight className="h-5 w-5" />
        </div>
      </summary>
      <div className="mt-6 border-t border-border pt-6 text-lg leading-relaxed text-muted-foreground duration-300 animate-in fade-in slide-in-from-top-4">
        {a}
      </div>
    </details>
  );
}
