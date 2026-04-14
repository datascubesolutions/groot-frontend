"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChevronRight, LineChart, Briefcase, Network, ArrowRightLeft, Database, Target } from "lucide-react";
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

export default function PrivateEquityMAPage() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Private Equity & M&A", href: "/industries/private-equity-ma" },
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
              <div className="mb-6 inline-flex border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]">
                Industry Expertise
              </div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                Private Equity <br />
                <span className="text-[hsl(var(--secondary))]">
                  &amp; M&amp;A
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                You bought the thesis. Now you need to visualize the reality. Turn fragmented portco data into unified performance dashboards and accelerate the hold period.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?industry=pe-ma" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-primary/25 shadow-xl group">
                    Discuss Your Portfolio
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <div className="absolute inset-0 bg-primary/5 border border-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl absolute" />
                  <Briefcase className="w-32 h-32 text-primary opacity-80" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real World Section - Bento Grid */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-20 text-foreground">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Execution</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Accelerating the hold period.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                  <Target className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Due Diligence</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Go beyond the data room. Rapidly assess target company data maturity, identify analytical gaps, and quantify the technology investment required to execute the value creation plan post-close.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                  <ArrowRightLeft className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Post-Merger Integration (PMI)</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stop managing integrations in Excel. We deploy rapid Azure/Fabric landing zones to consolidate reporting across newly merged entities in weeks, not months, establishing a single source of truth for the new leadership team.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-12 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                  <LineChart className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Portfolio Company Value Creation</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Execute specific use cases defined in the thesis: pricing optimization, customer churn prediction, or working capital dashboards. We provide the specialized data engineering talent your portco might not have in-house.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.05),transparent_40%)]" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Core Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Pricing Optimization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Identify margin leakage and cross-sell opportunities across disparate quoting and ERP systems in newly acquired companies. Harmonize product catalogs mathematically to surface immediate EBITDA improvements.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Unified Executive Dashboards</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Standardized Power BI reporting packs that provide operating partners with instant visibility into portfolio performance, removing dependency on manual portco updates and endless spreadsheet wrestling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to execute your data thesis?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop waiting for portfolio companies to build data capabilities organically. Deploy specialized talent to accelerate value creation.
            </p>
            <Link href="/contact?industry=pe-ma" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
