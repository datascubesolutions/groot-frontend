"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { AlertCircle, CheckCircle2, ChevronRight, DatabaseZap, Network, BoxSelect, Gauge, Sigma } from "lucide-react";
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

export default function SemanticModeling() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
          { label: "Decision Intelligence", href: "/services/decision-intelligence" },
          { label: "Semantic Modeling", href: "/services/decision-intelligence/semantic-modeling" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
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
                Semantic <br />
                <span className="text-[hsl(var(--secondary))]">
                  Modeling
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                The foundation underneath your dashboards. Built for performance, consistency, and scale. We create the certified Power BI datasets your organization trusts.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=modeling" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl group">
                    Schedule a Model Review
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (Abstract Star Schema/Model) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <Image
                  src="/semantic_modeling_star_schema.png"
                  alt="Semantic Modeling and Star Schema"
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
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">The Anti-Patterns</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Why models break at scale.</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  A dataset that works perfectly for 100,000 rows will completely collapse when pointing to 40 million. Self-taught modeling habits destroy enterprise performance.
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-10">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-red-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gauge size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The "Wait and See" Dashboard</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">You click a filter. You wait 45 seconds for the visual to update. The report is unusable, not because of the visualization, but because the underlying DAX measures run table-scans over massive, unoptimized datasets.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-amber-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">A Million Silos</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Every Power BI dashboard contains its own dataset. When the definition of "Active Customer" changes, you have to find and update 40 different PBIX files. You inevitably miss three, leading to conflicting numbers in executive meetings.</p>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                className="bg-background/80 backdrop-blur-md p-10 rounded-[2rem] border border-border/60 hover:border-indigo-500/40 shadow-sm hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DatabaseZap size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">The One Big Flat Table</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">Instead of a Star Schema, the dataset is one massive, imported table with 300 columns meant to act like an Excel sheet. The refresh fails every morning because it exceeds Premium capacity memory limits during processing.</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Deliverables</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Built for the VertiPaq Engine.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Large Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Network className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Enterprise Star Schema Design</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  True dimensional models optimized mathematically for the Power BI engine. Fact and dimension tables correctly structured for rapid filtering, aggregation, and future-proof flexibility.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-blue-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] group-hover:bg-blue-500/20 transition-all duration-300">
                  <Sigma className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Optimized DAX Measures</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Complex calculations and time intelligence written cleanly using variables, tuned in DAX Studio for split-second rendering times.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Certified Deployments</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Deployed securely into Fabric with "Certified" endorsement, ready for self-service consumption by the broader organization.
                </p>
              </div>
            </motion.div>

            {/* Large Feature 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-muted/20 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-indigo-500/40 transition-colors shadow-sm relative overflow-hidden flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300">
                  <BoxSelect className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Granular Security Architecture</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Row-Level Security (RLS) and Object-Level Security (OLS) implemented deeply at the model connection layer, ensuring security rules are automatically inherited by absolutely every dashboard built on top.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology - Bento Grid */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">How we build gold models</h3>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Requirements, dimensional modeling, DAX engineering, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-primary/5 text-foreground rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-sm border border-primary/20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Case Study: Retail & E-Commerce
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight text-foreground">
                Fixing a 14-hour daily report refresh cycle.
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">The Situation</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A multi-channel retailer built their core sales dashboard using a single, flattened table importing daily transactions. At 80 million rows, the dataset maxed out Power BI Premium memory limits. Refreshes failed multiple times a week, successful runs took 14 hours, and visual clicks took 30+ seconds to calculate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">What We Delivered</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Split the flat table into a strict Star Schema (1 Fact table, 8 highly optimized Dimensions).
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Replaced 150 redundant hard-coded DAX measures with 5 clean Calculation Group items.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      Configured automated Incremental Refresh patterns over history.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-primary/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black text-primary mb-2">12 Min</p>
                  <p className="text-muted-foreground font-medium">New refresh duration</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-2 mt-1">-85%</p>
                  <p className="text-muted-foreground font-medium">Model RAM usage reduction</p>
                </div>
                <div className="flex flex-col justify-end">
                   <Link href="/industries/retail-ecommerce" className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center gap-2 group text-lg">
                    See Retail Work
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/decision-intelligence/executive-analytics" className="group">
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">Executive Analytics</h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
            <Link href="/services/decision-intelligence/self-service-enablement" className="group">
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">Self-Service Enablement</h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
            <Link href="/services/build-your-foundation/data-modernization" className="group">
              <div className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">Data Modernization</h3>
                <span className="text-primary font-bold flex items-center gap-2 text-sm mt-4 uppercase tracking-wider">Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Build models, not just reports.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop creating a new dataset for every dashboard. Let's build a certified, lightning-fast semantic model your entire organization can rely on.
            </p>
            <Link href="/contact?service=modeling" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full">
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
