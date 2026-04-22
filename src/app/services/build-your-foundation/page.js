// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2,
  Database,
  HardDrive,
  Layers,
  Server,
  Settings,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function BuildYourFoundation() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <main className="min-h-screen bg-background pt-20 selection:bg-primary/20">
      <div className="container mx-auto px-6 py-4">
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
          ]}
        />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-16 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
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
                Build a Data <br />
                <span className="text-[hsl(var(--secondary))]">
                  Foundation
                </span>{" "}
                That Scales
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-muted-foreground md:text-2xl"
              >
                Stop firefighting broken pipelines. We engineer Microsoft Fabric
                and Azure data platforms that are automated, governed, and
                designed for tomorrow&apos;s AI workloads.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="mb-10 flex inline-flex items-center gap-3 rounded-2xl border border-border/50 bg-muted/40 p-4 text-sm font-medium text-muted-foreground"
              >
                <div className="rounded-full bg-primary/20 p-1.5 text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <span>Architecture that survives contact with reality</span>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact?service=foundation"
                  passHref
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full px-8 shadow-xl shadow-primary/25 sm:w-auto"
                  >
                    Talk to an Architect
                  </Button>
                </Link>
                <Link href="#problem" passHref className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-border bg-background/50 backdrop-blur-sm sm:w-auto"
                  >
                    Explore Architecture
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/build_your_foundation_hero.png"
                  alt="Build Your Foundation Enterprise Data Architecture"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section - The Problem */}
      <section
        id="problem"
        className="relative bg-muted/20 py-16 md:py-24 lg:py-32"
        ref={targetRef}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sticky Sidebar */}
            <div className="pl-0 lg:col-span-4 lg:pl-4">
              <div className="sticky top-32">
                <motion.p
                  style={{ opacity }}
                  className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] dark:text-emerald-400"
                >
                  The Status Quo
                </motion.p>
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Why foundations crumble.
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Most mid-market data infrastructure looks the same: a
                    brittle web of legacy SQL servers, untested Python scripts,
                    and direct Power BI connections that fail every morning at
                    7:00 AM.
                  </p>
                  <p className="border-l-4 border-emerald-500 py-1 pl-5 font-medium text-foreground">
                    You cannot build advanced analytics or AI on a shaky
                    foundation. Modernizing your platform isn&apos;t an IT
                    project — it&apos;s the prerequisite for becoming a
                    data-driven business.
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col gap-8 lg:col-span-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/40 md:p-10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400">
                  <Settings size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Exhausted Data Engineers
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  They spend 80% of their time fixing broken ETL pipelines and
                  writing complex workarounds for source system changes. They
                  don&apos;t have time to build new capabilities because
                  they&apos;re too busy keeping the lights on.s on.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="hover:shadow-glow group rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-emerald-500/40 md:p-10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400">
                  <Server size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Frustrated Business Users
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &quot;Why is it so hard to just add one field from
                  Salesforce?&quot; they ask. They don&apos;t see the fragile
                  architecture beneath the surface. They just see that data is
                  slow, expensive, and often wrong.rong.rong.rong.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative border-y border-border/40 bg-background py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Implementation Services
            </h2>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Core engineering services
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
          >
            <SubServiceCard
              icon={<Database />}
              title="Data Platform Modernization"
              description="Migrate from legacy on-prem SQL or fragmented cloud setups to a unified Microsoft Fabric Lakehouse. We handle the architecture, the migration plan, and the execution without disrupting business operations."
              href="/services/build-your-foundation/data-modernization"
              featured
            />
            <SubServiceCard
              icon={<Workflow />}
              title="Automated Data Integration"
              description="Replace brittle ETL with metadata-driven pipelines. We build robust integration patterns that handle schema drift, automate quality checks, and alert on anomalies before business users notice."
              href="/services/build-your-foundation/data-integration"
            />
          </motion.div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="relative overflow-hidden bg-muted/30 py-16 text-foreground md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Methodology
            </h2>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Engineering principles
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How we build resilient systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ApproachCard
              step="01"
              title="Simplicity First"
              desc="Complex architectures look impressive until you have to maintain them. We favor native Microsoft Fabric capabilities over custom code wherever possible. Less code means less maintenance and fewer points of failure."
            />
            <ApproachCard
              step="02"
              title="Metadata-Driven"
              desc="We don't write 50 pipelines for 50 tables. We write one metadata-driven engine that reads configuration. When a new table needs to be ingested, you update a config file — you don't write more code."
            />
            <ApproachCard
              step="03"
              title="Security by Design"
              desc="Governance isn't an afterthought. We implement row-level security, Purview data classification, and automated CI/CD deployment pipelines from day one. You're audit-ready from the start."
            />
          </div>
        </div>
      </section>

      {/* Is this right for you & Starting Point combined */}
      <section className="border-y border-border/40 bg-background py-16 text-foreground md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Is this right for you?
              </h2>
              <div className="space-y-6">
                <ScenarioItem
                  title="The Overwhelmed Data Team"
                  text="Your data team spends all their time answering tickets about broken dashboards. They need a modernized platform that automates the plumbing so they can focus on delivering insights."
                />
                <ScenarioItem
                  title="The Scaling Mid-Market Core"
                  text="Your business is growing fast, but your SQL Server data warehouse is hitting a wall. Nightly processing is bleeding into business hours, and adding new data sources takes months."
                />
                <ScenarioItem
                  title="The AI Hopeful"
                  text="Leadership wants to implement Copilot and custom AI solutions, but you know your data is a disorganized mess. You need to build the clean, governed data layer that makes AI actually work."
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hover:shadow-glow rounded-[2.5rem] border border-border/60 bg-muted/20 p-6 shadow-sm transition-shadow duration-500 md:p-10 lg:col-span-7"
            >
              <h2 className="mb-10 text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                How we start
              </h2>
              <div className="relative space-y-6">
                {/* Timeline Line */}
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-border sm:block" />

                <div className="group relative z-10 sm:pl-16">
                  <div className="absolute left-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform group-hover:scale-125 sm:flex" />
                  <StartingPointCard
                    title="Architecture Review (2 weeks)"
                    text="Before tearing anything down, we review your current codebase, pipelines, and Azure configuration to identify the most critical bottlenecks."
                  />
                </div>
                <div className="group relative z-10 sm:pl-16">
                  <div className="absolute left-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform group-hover:scale-125 sm:flex" />
                  <StartingPointCard
                    title="Proof of Value Build (4-6 weeks)"
                    text="We select one high-impact, high-complexity data source (like your core ERP) and build the end-to-end modern pipeline in Fabric to prove the architecture works."
                  />
                </div>
                <div className="group relative z-10 sm:pl-16">
                  <div className="absolute left-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform group-hover:scale-125 sm:flex" />
                  <StartingPointCard
                    title="Full Platform Migration (Phased)"
                    text="A structured migration moving workloads from legacy systems to the new Fabric architecture in waves, running in parallel until validation is complete."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 rounded-[3rem] border border-primary/20 bg-background/80 p-12 text-center shadow-sm shadow-primary/5 backdrop-blur-xl md:flex-row md:p-20 md:text-left">
            <div className="flex-1">
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Stop fixing pipelines.
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Let&apos;s build a foundation that runs quietly in the
                background so you can focus on the business.
              </p>
            </div>
            <div className="flex shrink-0 justify-center">
              <Link href="/contact?service=foundation" passHref>
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-emerald-500 px-10 text-lg font-bold text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400"
                >
                  Talk to an Architect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SubServiceCard({ href, title, description, icon, featured = false }) {
  return (
    <motion.div variants={fadeIn} className="h-full">
      <Link
        href={href}
        className={`group flex h-full flex-col border bg-background ${featured ? "border-primary/50 shadow-[0_10px_30px_rgba(var(--primary),0.1)]" : "border-border/60 hover:border-primary/40"} relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 md:p-10`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 ${featured ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"} `}
        >
          {icon}
        </div>

        <h3 className="z-10 mb-4 text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="z-10 mb-10 flex-grow text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="z-10 mt-auto flex items-center border-t border-border/40 pt-6 font-semibold text-primary/70 transition-colors group-hover:text-primary">
          Explore capabilities
          <div className="ml-auto rounded-full bg-primary/10 p-2 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            <Layers
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ApproachCard({ step, title, desc }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="h-full rounded-[2rem] border border-emerald-500/20 bg-background/80 p-6 backdrop-blur-sm transition-colors hover:bg-muted/50 md:p-10"
    >
      <div className="-ml-2 mb-6 font-mono text-5xl font-black text-emerald-500/20">
        {step}
      </div>
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function ScenarioItem({ title, text }) {
  return (
    <div className="flex flex-col gap-6 rounded-[1.5rem] border border-border/60 bg-background p-8 shadow-sm transition-colors hover:border-emerald-500/30 sm:flex-row">
      <div className="mt-1 shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Database size={20} />
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-xl font-bold text-foreground">{title}</h4>
        <p className="text-lg leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function StartingPointCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-colors hover:border-emerald-500/30">
      <h4 className="mb-3 text-xl font-bold text-foreground">{title}</h4>
      <p className="text-lg leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
