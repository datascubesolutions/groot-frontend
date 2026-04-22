// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  ServerCrash,
  Database,
  CloudCog,
  ShieldCheck,
  HardDrive,
  ArrowRightLeft,
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

export default function DataModernization() {
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
            label: "Data Modernization",
            href: "/services/build-your-foundation/data-modernization",
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
                Data Platform <br />
                <span className="text-[hsl(var(--secondary))]">
                  Modernization
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                Move from the constraints of legacy SQL databases and fragmented
                architectures to the scale of Microsoft Fabric. We execute
                complex migrations without breaking the business.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?service=modernization" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    Discuss Your Migration Plan
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Migration Visual) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/data_modernization_fabric.png"
                  alt="Legacy SQL to Microsoft Fabric Data Modernization"
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
                  The cost of legacy systems.
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  Holding onto outdated architecture isn&apos;t just about
                  technical debt—it&apos;s actively preventing your business
                  from operating with agility and costing you significantly in
                  maintenance.
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
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 transition-transform group-hover:scale-110">
                  <ServerCrash size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The Nightly Batch Run That Now Takes 14 Hours
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Your SQL Server used to process everything overnight. As data
                  volume grew, &quot;overnight&quot; stretched into the morning.
                  Now, the 6:00 AM refresh finishes at 10:30 AM. Business users
                  wait half the day for yesterday&apos;s data, and your
                  engineers receive frantic emails every morning.ning.ning.ning.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                  <HardDrive size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  The Cost of Maintaining Server Hardware
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You&apos;re paying for peak capacity 24/7. When the finance
                  team runs complex quarterly reporting, the server grinds to a
                  halt. When nobody is querying the system on Sunday,
                  you&apos;re still paying the same compute costs. Scaling up
                  means painful downtime and budget approvals.vals.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
                  <Database size={28} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Talent Drain
                </h4>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Your best data engineers are spending 80% of their time
                  maintaining brittle ETL pipelines and tuning indexes on
                  over-burdened servers. They want to build AI and advanced
                  analytics, but they&apos;re stuck doing plumbing. Modern
                  talent demands modern tools.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="relative overflow-hidden border-y border-border/40 bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              A clean transition to modern data.
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
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20 dark:text-emerald-400">
                  <CloudCog className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Migration Strategy & Architecture
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  A detailed plan mapping current source systems to Microsoft
                  Fabric Lakehouse architecture, including security, governance,
                  and capacity sizing. We don&apos;t just lift and shift; we
                  re-architect for the cloud.
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
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:bg-blue-500/20">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Fabric Workspace & Security
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Landing zones, Medallion Architecture (Bronze, Silver, Gold),
                  row-level security, and Purview data catalog configuration
                  established on day one.
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
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/20 dark:text-emerald-400">
                  <Database className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Automated Data Ingestion
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Data Factory pipelines moving data from legacy SQL, Oracle, or
                  APIs into the Fabric OneLake, designed for incremental loading
                  and schema evolution.
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
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-500/20">
                  <ArrowRightLeft className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Refactored Models & Validated Reports
                </h4>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Legacy stored procedures converted to Fabric Notebooks
                  (PySpark/SQL) optimizing for distributed compute. We re-point
                  existing Power BI dashboards to the new semantic models with
                  automated testing to prove the numbers match the legacy system
                  exactly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process - Bento grid */}
      <section className="relative overflow-hidden border-y border-border/40 bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400">
              Methodology
            </h2>
            <h3 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our migration methodology
            </h3>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/80">
              Assessment, architecture, wave-based migration, and validation —
              typically delivered in 30-day waves for a full enterprise data
              warehouse migration.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <MethodCard
              step={1}
              week="Phase 1"
              title="Assessment & Sizing"
              desc="We catalog existing objects (tables, views, stored procedures), identify technical debt that shouldn't be migrated, and size the Microsoft Fabric capacity required for your actual workloads."
            />
            <MethodCard
              step={2}
              week="Phase 2"
              title="Foundation & Governance Build"
              desc="Before moving data, we stand up the Fabric environment, configure Purview data catalog, and establish Azure Active Directory (Entra ID) security patterns."
            />
            <MethodCard
              step={3}
              week="Phase 3"
              title="Wave-Based Migration"
              desc="We migrate by functional subject area (e.g., Sales, then Finance), running the old and new systems in parallel. This allows business continuity while validation occurs."
            />
            <MethodCard
              step={4}
              week="Phase 4"
              title="Validation & Cutover"
              desc="Automated data reconciliation scripts verify that calculations in Fabric match the legacy system. Once signed off by business owners, we cut over reporting and deprecate the legacy servers."
            />
          </div>
        </div>
      </section>

      {/* Real Example - Premium Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-emerald-500/20 bg-primary/5 p-6 text-foreground shadow-sm md:p-10 lg:p-16">
            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Case Study: Medical Device Manufacturing
              </div>
              <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Migrating a global manufacturer from legacy SQL to Fabric.
              </h2>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    The Situation
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A medical device manufacturer relied on a 15-year-old
                    on-premise SQL Server data warehouse. Daily processing of
                    IoT device telemetry and global SAP ERP data took 12 hours.
                    Any failure meant supply chain analysts ran daily planning
                    without current inventory data. Hardware upgrades were
                    quoted at $250K just to maintain current performance.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    The Solution
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Replaced 800+ legacy SSIS packages with metadata-driven
                      Fabric Data Factory pipelines.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Refactored complex, nested Stored Procedures into PySpark
                      Notebooks, parallelizing execution.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      Implemented Purview to map lineage from source SAP tables
                      to final FDA compliance reports.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-emerald-500/20 pt-10 sm:grid-cols-3">
                <div>
                  <p className="mb-2 text-5xl font-black text-emerald-600 dark:text-emerald-400">
                    45m
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Nightly load down from 12 hours
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-1 text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    $250k+
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Capital expenditure avoided
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <Link
                    href="/industries/medical-device-manufacturing"
                    className="group flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    See Manufacturing Work
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
              q="Do we have to re-write all our stored procedures?"
              a="Not necessarily. While migrating complex logic to Notebooks (PySpark) often yields better performance in Fabric, we evaluate your existing T-SQL. Many procedures can run effectively in Fabric Data Warehouses. We choose the compute engine (Lakehouse vs Warehouse) based on your team's skills and the specific workload."
            />
            <FAQItem
              q="Will this break our existing Power BI reports?"
              a="No. We run the legacy system and Fabric in parallel. We re-point existing Power BI reports to the new Fabric semantic models and validate data accuracy before turning off the old connections. Your business users won't experience downtime."
            />
            <FAQItem
              q="How long does a migration take?"
              a="Timeline depends heavily on technical debt and total objects. A targeted migration of a specific subject area takes 8-10 weeks. A full enterprise data warehouse migration typically spans 4-6 months, delivered in 30-day waves."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-sm backdrop-blur-md md:p-10 lg:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Leave legacy behind.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Stop paying for performance you aren&apos;t getting. Let&apos;s
              design a modernization plan that moves you to Microsoft Fabric
              without disrupting your business.
            </p>
            <Link href="/contact?service=modernization" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Discuss Your Migration Plan
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
