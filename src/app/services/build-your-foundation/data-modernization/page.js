"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ServerCrash, Database, CloudCog, ShieldCheck, HardDrive, ArrowRightLeft } from "lucide-react";
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

export default function DataModernization() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Build Your Foundation", href: "/services/build-your-foundation" },
          { label: "Data Modernization", href: "/services/build-your-foundation/data-modernization" },
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
                Data Platform <br />
                <span className="text-[hsl(var(--secondary))]">
                  Modernization
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Move from the constraints of legacy SQL databases and fragmented architectures to the scale of Microsoft Fabric. We execute complex migrations without breaking the business.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=modernization" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)] group">
                    Discuss Your Migration Plan
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Migration Visual) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/data_modernization_fabric.png"
                  alt="Legacy SQL to Microsoft Fabric Data Modernization"
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
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">The cost of legacy systems.</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Holding onto outdated architecture isn't just about technical debt—it's actively preventing your business from operating with agility and costing you significantly in maintenance.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border border-border/60 p-10 rounded-[2rem] hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ServerCrash size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Nightly Batch Run That Now Takes 14 Hours</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Your SQL Server used to process everything overnight. As data volume grew, "overnight" stretched into the morning. Now, the 6:00 AM refresh finishes at 10:30 AM. Business users wait half the day for yesterday's data, and your engineers receive frantic emails every morning.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border border-border/60 p-10 rounded-[2rem] hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HardDrive size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The Cost of Maintaining Server Hardware</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">You're paying for peak capacity 24/7. When the finance team runs complex quarterly reporting, the server grinds to a halt. When nobody is querying the system on Sunday, you're still paying the same compute costs. Scaling up means painful downtime and budget approvals.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md border border-border/60 p-10 rounded-[2rem] hover:border-emerald-500/30 hover:shadow-glow shadow-sm transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Talent Drain</h4>
                <p className="text-lg text-foreground/80 leading-relaxed">Your best data engineers are spending 80% of their time maintaining brittle ETL pipelines and tuning indexes on over-burdened servers. They want to build AI and advanced analytics, but they're stuck doing plumbing. Modern talent demands modern tools.</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-32 bg-background relative overflow-hidden border-y border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">A clean transition to modern data.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <CloudCog className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Migration Strategy & Architecture</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  A detailed plan mapping current source systems to Microsoft Fabric Lakehouse architecture, including security, governance, and capacity sizing. We don't just lift and shift; we re-architect for the cloud.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-blue-500/30 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Fabric Workspace & Security</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Landing zones, Medallion Architecture (Bronze, Silver, Gold), row-level security, and Purview data catalog configuration established on day one.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 border border-border/60 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Database className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Automated Data Ingestion</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Data Factory pipelines moving data from legacy SQL, Oracle, or APIs into the Fabric OneLake, designed for incremental loading and schema evolution.
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
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <ArrowRightLeft className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Refactored Models & Validated Reports</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Legacy stored procedures converted to Fabric Notebooks (PySpark/SQL) optimizing for distributed compute. We re-point existing Power BI dashboards to the new semantic models with automated testing to prove the numbers match the legacy system exactly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process - Bento grid */}
      <section className="py-32 bg-muted/30 relative border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Our migration methodology</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Assessment, architecture, wave-based migration, and validation — typically delivered in 30-day waves for a full enterprise data warehouse migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-sm border border-emerald-500/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: Medical Device Manufacturing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                Migrating a global manufacturer from legacy SQL to Fabric.
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">The Situation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A medical device manufacturer relied on a 15-year-old on-premise SQL Server data warehouse. Daily processing of IoT device telemetry and global SAP ERP data took 12 hours. Any failure meant supply chain analysts ran daily planning without current inventory data. Hardware upgrades were quoted at $250K just to maintain current performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">The Solution</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Replaced 800+ legacy SSIS packages with metadata-driven Fabric Data Factory pipelines.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Refactored complex, nested Stored Procedures into PySpark Notebooks, parallelizing execution.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      Implemented Purview to map lineage from source SAP tables to final FDA compliance reports.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">45m</p>
                  <p className="text-muted-foreground font-medium">Nightly load down from 12 hours</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-2 mt-1">$250k+</p>
                  <p className="text-muted-foreground font-medium">Capital expenditure avoided</p>
                </div>
                <div className="flex flex-col justify-end">
                   <Link href="/industries/medical-device-manufacturing" className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group text-lg">
                    See Manufacturing Work
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
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 backdrop-blur-md rounded-[3rem] p-12 md:p-16 text-center shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Leave legacy behind.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop paying for performance you aren't getting. Let's design a modernization plan that moves you to Microsoft Fabric without disrupting your business.
            </p>
            <Link href="/contact?service=modernization" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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
