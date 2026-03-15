"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { AlertCircle, ChevronRight, Workflow, Server, Database, Activity, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function DataIntegration() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Build Your Foundation", href: "/services/build-your-foundation" },
          { label: "Data Integration", href: "/services/build-your-foundation/data-integration" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
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
                Automated Data <br />
                <span className="text-[hsl(var(--secondary))]">
                  Integration & Pipelines
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Stop manually maintaining brittle point-to-point connections. We build metadata-driven ingestion architectures that automatically adapt to change and handle errors gracefully.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=integration" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)] group">
                    Talk About Your Integrations
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Pipeline Network) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/data_integration_pipeline.png"
                  alt="Automated Data Integration and Pipelines"
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
      <section className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">The Challenge</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">The problem with traditional ETL.</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Data pipelines shouldn't require a dedicated engineering team just to keep them running. When every new source is a custom script, your architecture becomes a liability.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border-border/60 p-10 rounded-[2rem] border hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Spaghetti Architecture</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Your systems are connected point-to-point. The CRM talks directly to the billing system via a script someone wrote three years ago. The ERP exports to a shared folder. When one connection breaks, troubleshooting takes days because there is no central orchestration.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border-border/60 p-10 rounded-[2rem] border hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw size={28} className="animate-spin-slow" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Pipelines that Break on Minor Changes</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Someone in sales added a new custom field in Salesforce. The next morning, the financial reporting pipeline fails because the hardcoded schema expected 42 columns, not 43. Your data engineering team spends hours adjusting code for tiny operational changes.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border-border/60 p-10 rounded-[2rem] border hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Database size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Data Quality is an Afterthought</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">You ingest data successfully, but the data itself is useless. Null values where primary keys should be, negative revenue amounts, dates in the wrong format. You don't know the data is bad until a business user points it out in a dashboard.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-32 bg-background relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">A modern approach to ingestion.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <Workflow className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-6" strokeWidth={1.5} />
                <h4 className="text-3xl font-bold mb-4 text-foreground">Metadata-Driven Framework</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  A central control table in Fabric that drives ingestion. Want to add a new table from the ERP? You add a row to the configuration table. You don't write new Data Factory pipeline code.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-blue-500/30 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <Activity className="w-10 h-10 text-blue-500 mb-6" strokeWidth={1.5} />
                <h4 className="text-2xl font-bold mb-4 text-foreground">API & System Accelerators</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Pre-built integration patterns for common systems (Salesforce, SAP, HubSpot) that handle API pagination, token refreshes, and rate limiting smoothly.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <RefreshCw className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-6" strokeWidth={1.5} />
                <h4 className="text-2xl font-bold mb-4 text-foreground">Schema Drift Handling</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Engineering that automatically detects when source columns change, ensuring pipelines continue to run while intelligently alerting administrators.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-indigo-500/30 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <Server className="w-12 h-12 text-indigo-500 mb-6" strokeWidth={1.5} />
                <h4 className="text-3xl font-bold mb-4 text-foreground">Automated Quality Gates & Orchestration</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Validation checks run during processing. Bad records are quarantined without failing the entire batch. Centralized scheduling using Fabric Data Factory notifies teams exactly why a failure occurred. 
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento Grid */}
      <section className="py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">How we build pipelines</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Profiling, architecture, development, and operational handoff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-sm border border-emerald-500/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: PE Aggregator
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                Orchestrating data for a private equity healthcare roll-up.
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">The Situation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A PE firm acquired eight healthcare clinics in 18 months. Each clinic used a different EMR system and accounting software. The central analytics team was spending 60 hours a month manually downloading reports and manipulating Excel files, resulting in broken data transfers and zero operational visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">The Solution</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Implemented a metadata-driven ingestion framework on Microsoft Fabric.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Standardized API connectors for the three most common EMR systems.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Built automated data quality gates that quarantine bad patient records.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">60+</p>
                  <p className="text-muted-foreground font-medium">Hours saved per month</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-2 mt-1">Days, not Weeks</p>
                  <p className="text-muted-foreground font-medium">To integrate new M&A targets</p>
                </div>
                <div className="flex flex-col justify-end">
                   <Link href="/industries/private-equity-ma" className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group text-lg">
                    See PE Industry Work
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
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
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 backdrop-blur-md rounded-[3rem] p-12 md:p-16 text-center shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Connect your data sources properly.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop writing custom scripts for every new system. Let's build a robust, scalable ingestion framework to centralize your data on Microsoft Fabric.
            </p>
            <Link href="/contact?service=integration" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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
      className="group relative bg-background border border-border/60 rounded-[1.75rem] p-8 shadow-sm hover:shadow-lg hover:border-emerald-500/25 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-300" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[2.5rem] font-black text-foreground tabular-nums leading-none tracking-tight">{num}</span>
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-emerald-500 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
            {week}
          </span>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-foreground mb-3">{title}</h4>
        <p className="text-foreground/90 leading-relaxed flex-1">{desc}</p>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group bg-background p-8 rounded-[2rem] border border-border/60 hover:border-emerald-500/30 transition-all duration-300 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
      <summary className="flex justify-between items-center text-xl font-bold outline-none select-none text-foreground">
        {q}
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-open:rotate-90 transition-transform duration-300 border border-emerald-500/20">
          <ChevronRight className="w-5 h-5" />
        </div>
      </summary>
      <div className="mt-6 text-lg text-muted-foreground leading-relaxed border-t border-border/40 pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
        {a}
      </div>
    </details>
  );
}
