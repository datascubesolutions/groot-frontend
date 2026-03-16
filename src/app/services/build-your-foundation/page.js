"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Database, HardDrive, Layers, Server, Settings, Workflow } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function BuildYourFoundation() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <main className="pt-20 min-h-screen bg-background selection:bg-primary/20">
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Build Your Foundation", href: "/services/build-your-foundation" },
          ]}
        />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                Build a Data <br />
                <span className="text-[hsl(var(--secondary))]">
                  Foundation
                </span> That Scales
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
                Stop firefighting broken pipelines. We engineer Microsoft Fabric and Azure data platforms that are automated, governed, and designed for tomorrow's AI workloads.
              </motion.p>

              <motion.div variants={fadeIn} className="flex items-center gap-3 text-sm text-muted-foreground font-medium mb-10 bg-muted/40 p-4 rounded-2xl border border-border/50 inline-flex">
                <div className="bg-primary/20 p-1.5 rounded-full text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <span>Architecture that survives contact with reality</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=foundation" passHref className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl w-full sm:w-auto">
                    Talk to an Architect
                  </Button>
                </Link>
                <Link href="#problem" passHref className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-border">
                    Explore Architecture
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block lg:col-span-5"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/build_your_foundation_hero.png"
                  alt="Build Your Foundation Enterprise Data Architecture"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section - The Problem */}
      <section id="problem" className="py-32 bg-muted/20 relative" ref={targetRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <motion.p style={{ opacity }} className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  The Status Quo
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                  Why foundations crumble.
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>Most mid-market data infrastructure looks the same: a brittle web of legacy SQL servers, untested Python scripts, and direct Power BI connections that fail every morning at 7:00 AM.</p>
                  <p className="font-medium text-foreground border-l-4 border-emerald-500 pl-5 py-1">
                    You cannot build advanced analytics or AI on a shaky foundation. Modernizing your platform isn't an IT project — it's the prerequisite for becoming a data-driven business.
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-emerald-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="h-16 w-16 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Exhausted Data Engineers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">They spend 80% of their time fixing broken ETL pipelines and writing complex workarounds for source system changes. They don't have time to build new capabilities because they're too busy keeping the lights on.</p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-emerald-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="h-16 w-16 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Server size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Frustrated Business Users</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">"Why is it so hard to just add one field from Salesforce?" they ask. They don't see the fragile architecture beneath the surface. They just see that data is slow, expensive, and often wrong.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-background relative border-y border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 text-center">Implementation Services</h2>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Core engineering services</h2>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
      <section className="py-32 bg-muted/30 relative text-foreground overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">Methodology</h2>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Engineering principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">How we build resilient systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-32 bg-background text-foreground border-y border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-foreground">Is this right for you?</h2>
              <div className="space-y-6">
                <ScenarioItem title="The Overwhelmed Data Team" text="Your data team spends all their time answering tickets about broken dashboards. They need a modernized platform that automates the plumbing so they can focus on delivering insights." />
                <ScenarioItem title="The Scaling Mid-Market Core" text="Your business is growing fast, but your SQL Server data warehouse is hitting a wall. Nightly processing is bleeding into business hours, and adding new data sources takes months." />
                <ScenarioItem title="The AI Hopeful" text="Leadership wants to implement Copilot and custom AI solutions, but you know your data is a disorganized mess. You need to build the clean, governed data layer that makes AI actually work." />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-muted/20 border border-border/60 p-10 rounded-[2.5rem] shadow-sm hover:shadow-glow transition-shadow duration-500"
            >
              <h2 className="text-3xl font-bold mb-10 tracking-tight text-emerald-600 dark:text-emerald-400">How we start</h2>
              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" />

                <div className="relative z-10 sm:pl-16 group">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                  <StartingPointCard title="Architecture Review (2 weeks)" text="Before tearing anything down, we review your current codebase, pipelines, and Azure configuration to identify the most critical bottlenecks." />
                </div>
                <div className="relative z-10 sm:pl-16 group">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                  <StartingPointCard title="Proof of Value Build (4-6 weeks)" text="We select one high-impact, high-complexity data source (like your core ERP) and build the end-to-end modern pipeline in Fabric to prove the architecture works." />
                </div>
                <div className="relative z-10 sm:pl-16 group">
                  <div className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                  <StartingPointCard title="Full Platform Migration (Phased)" text="A structured migration moving workloads from legacy systems to the new Fabric architecture in waves, running in parallel until validation is complete." />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="border border-primary/20 bg-background/80 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 max-w-5xl mx-auto shadow-sm shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Stop fixing pipelines.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's build a foundation that runs quietly in the background so you can focus on the business.
              </p>
            </div>
            <div className="shrink-0 flex justify-center">
              <Link href="/contact?service=foundation" passHref>
                <Button size="lg" className="bg-emerald-500 text-black hover:bg-emerald-400 text-lg px-10 h-16 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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
      <Link href={href} className={`group flex flex-col h-full bg-background border ${featured ? 'border-primary/50 shadow-[0_10px_30px_rgba(var(--primary),0.1)]' : 'border-border/60 hover:border-primary/40'} rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`
          mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
          ${featured ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'}
        `}>
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight z-10">{title}</h3>
        <p className="text-muted-foreground mb-10 leading-relaxed flex-grow text-lg z-10">{description}</p>

        <div className="mt-auto flex items-center font-semibold text-primary/70 group-hover:text-primary transition-colors z-10 border-t border-border/40 pt-6">
          Explore capabilities
          <div className="bg-primary/10 p-2 rounded-full ml-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <Layers size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ApproachCard({ step, title, desc }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="bg-background/80 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-[2rem] h-full hover:bg-muted/50 transition-colors"
    >
      <div className="text-5xl font-black text-emerald-500/20 mb-6 font-mono -ml-2">{step}</div>
      <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
    </motion.div>
  );
}

function ScenarioItem({ title, text }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-8 rounded-[1.5rem] bg-background border border-border/60 shadow-sm hover:border-emerald-500/30 transition-colors">
      <div className="mt-1 shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Database size={20} />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3 text-foreground">{title}</h4>
        <p className="text-muted-foreground leading-relaxed text-lg">{text}</p>
      </div>
    </div>
  );
}

function StartingPointCard({ title, text }) {
  return (
    <div className="p-8 bg-background border border-border/60 hover:border-emerald-500/30 shadow-sm rounded-2xl transition-colors">
      <h4 className="text-xl font-bold mb-3 text-foreground">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-lg">{text}</p>
    </div>
  );
}
