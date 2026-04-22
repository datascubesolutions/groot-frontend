// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  AlertCircle,
  ChevronRight,
  Workflow,
  Server,
  Database,
  Activity,
  RefreshCw,
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

export default function DataIntegration() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          {
            label: "Services",
            href: "/services/define-your-roadmap/maturity-assessment",
          },
          {
            label: "Build Your Foundation",
            href: "/services/build-your-foundation",
          },
          {
            label: "Data Integration",
            href: "/services/build-your-foundation/data-integration",
          },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
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
                Automated Data <br />
                <span className="text-[hsl(var(--secondary))]">
                  Integration & Pipelines
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                Stop manually maintaining brittle point-to-point connections. We
                build metadata-driven ingestion architectures that automatically
                adapt to change and handle errors gracefully.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?service=integration" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    Talk About Your Integrations
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Pipeline Network) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/data_integration_pipeline.png"
                  alt="Automated Data Integration and Pipelines"
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
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400">
                  The Challenge
                </h2>
                <h3 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  The problem with traditional ETL.
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  Data pipelines shouldn&apos;t require a dedicated engineering
                  team just to keep them running. When every new source is a
                  custom script, your architecture becomes a liability.
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
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                  <AlertCircle size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The Spaghetti Architecture
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Your systems are connected point-to-point. The CRM talks
                  directly to the billing system via a script someone wrote
                  three years ago. The ERP exports to a shared folder. When one
                  connection breaks, troubleshooting takes days because there is
                  no central orchestration.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                  <RefreshCw size={28} className="animate-spin-slow" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Pipelines that Break on Minor Changes
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Someone in sales added a new custom field in Salesforce. The
                  next morning, the financial reporting pipeline fails because
                  the hardcoded schema expected 42 columns, not 43. Your data
                  engineering team spends hours adjusting code for tiny
                  operational changes.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400">
                  <Database size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Data Quality is an Afterthought
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You ingest data successfully, but the data itself is useless.
                  Null values where primary keys should be, negative revenue
                  amounts, dates in the wrong format. You don&apos;t know the
                  data is bad until a business user points it out in a
                  dashboard.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="relative overflow-hidden border-t border-border/40 bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              A modern approach to ingestion.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Large Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm transition-colors hover:border-emerald-500/30 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
              <div className="relative z-10">
                <Workflow
                  className="mb-6 h-12 w-12 text-emerald-600 dark:text-emerald-400"
                  strokeWidth={1.5}
                />
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Metadata-Driven Framework
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  A central control table in Fabric that drives ingestion. Want
                  to add a new table from the ERP? You add a row to the
                  configuration table. You don&apos;t write new Data Factory
                  pipeline code.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm transition-colors hover:border-blue-500/30 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <Activity
                  className="mb-6 h-10 w-10 text-blue-500"
                  strokeWidth={1.5}
                />
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  API & System Accelerators
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Pre-built integration patterns for common systems (Salesforce,
                  SAP, HubSpot) that handle API pagination, token refreshes, and
                  rate limiting smoothly.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm transition-colors hover:border-emerald-500/30 md:col-span-4 md:p-10"
            >
              <div className="relative z-10">
                <RefreshCw
                  className="mb-6 h-10 w-10 text-emerald-600 dark:text-emerald-400"
                  strokeWidth={1.5}
                />
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Schema Drift Handling
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Engineering that automatically detects when source columns
                  change, ensuring pipelines continue to run while intelligently
                  alerting administrators.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border/60 bg-muted/20 p-6 shadow-sm transition-colors hover:border-indigo-500/30 md:col-span-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="relative z-10">
                <Server
                  className="mb-6 h-12 w-12 text-indigo-500"
                  strokeWidth={1.5}
                />
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Automated Quality Gates & Orchestration
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Validation checks run during processing. Bad records are
                  quarantined without failing the entire batch. Centralized
                  scheduling using Fabric Data Factory notifies teams exactly
                  why a failure occurred.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento Grid */}
      <section className="relative overflow-hidden border-t border-border/40 bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400">
              Methodology
            </h2>
            <h3 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              How we build pipelines
            </h3>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/80">
              Profiling, architecture, development, and operational handoff.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <MethodCard
              step={1}
              week="Phase 1"
              title="Source System Profiling"
              desc="We analyze the source applications—APIs, databases, flat files—to understand access methods, volume, velocity, and data quality constraints before designing the connection."
            />
            <MethodCard
              step={2}
              week="Phase 2"
              title="Architecture Design"
              desc="We design the specific metadata framework and incremental loading strategy (CDC, watermark columns) tailored to Microsoft Fabric's Lakehouse capabilities."
            />
            <MethodCard
              step={3}
              week="Phase 3"
              title="Pipeline Development"
              desc="We build the ingestion engine, configuring Data Factory, PySpark Notebooks, and security credentials mapping out Azure Key Vault implementations."
            />
            <MethodCard
              step={4}
              week="Phase 4"
              title="Testing & Operational Handoff"
              desc="We conduct stress testing, implement error-handling runbooks, and train your team on how to manage and extend the dynamic metadata framework."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-emerald-500/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-10 lg:p-16">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Case Study: PE Aggregator
              </div>
              <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Orchestrating data for a private equity healthcare roll-up.
              </h2>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    The Situation
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A PE firm acquired eight healthcare clinics in 18 months.
                    Each clinic used a different EMR system and accounting
                    software. The central analytics team was spending 60 hours a
                    month manually downloading reports and manipulating Excel
                    files, resulting in broken data transfers and zero
                    operational visibility.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    The Solution
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Implemented a metadata-driven ingestion framework on
                      Microsoft Fabric.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Standardized API connectors for the three most common EMR
                      systems.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Built automated data quality gates that quarantine bad
                      patient records.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-emerald-500/20 pt-10 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-5xl font-black text-emerald-600 dark:text-emerald-400">
                    60+
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Hours saved per month
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-1 text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    Days, not Weeks
                  </p>
                  <p className="font-medium text-muted-foreground">
                    To integrate new M&A targets
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <Link
                    href="/industries/private-equity-ma"
                    className="group flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    See PE Industry Work
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              q="What is a 'metadata-driven' pipeline?"
              a="Instead of building individual pipelines for each specific table (e.g., 'Copy_Sales_Table', 'Copy_Customer_Table'), we build one dynamic pipeline ('Copy_Any_Table'). This pipeline reads a configuration database (metadata) that tells it which tables to copy, from where, and how. This reduces maintenance overhead exponentially."
            />
            <FAQItem
              q="Do you use outside ETL tools or native Microsoft Fabric?"
              a="We prioritize native Microsoft Fabric tools. Fabric Data Factory, Dataflows Gen2, and PySpark Notebooks provide complete integration capabilities for 95% of use cases. This keeps licensing costs low and architecture simple."
            />
            <FAQItem
              q="Can you handle real-time or streaming data?"
              a="Yes. While batch processing solves most business problems, we implement Fabric Real-Time Intelligence (Eventstream, KQL) for use cases that require streaming data, like IoT telemetry or live operational dashboards."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-sm backdrop-blur-md md:p-10 lg:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Connect your data sources properly.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Stop writing custom scripts for every new system. Let&apos;s build
              a robust, scalable ingestion framework to centralize your data on
              Microsoft Fabric.
            </p>
            <Link href="/contact?service=integration" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Talk About Your Integrations
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
    <details className="group cursor-pointer rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-emerald-500/30 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex select-none items-center justify-between text-xl font-bold text-foreground outline-none">
        {q}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 transition-transform duration-300 group-open:rotate-90 dark:text-emerald-400">
          <ChevronRight className="h-5 w-5" />
        </div>
      </summary>
      <div className="mt-6 border-t border-border/40 pt-6 text-lg leading-relaxed text-muted-foreground duration-300 animate-in fade-in slide-in-from-top-4">
        {a}
      </div>
    </details>
  );
}
