"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Factory, PackageOpen, Truck, Settings, Layers, Box } from "lucide-react";
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

export default function ManufacturingPage() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
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
              <div className="mb-6 inline-flex border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)]">
                Industry Expertise
              </div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                <span className="text-[hsl(var(--secondary))]">
                  Manufacturing
                </span> <br />&amp; Supply Chain
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Connect the shop floor to the top floor. We build centralized data foundations that optimize production yields, slash supply chain bottlenecks, and unify siloed ERPs.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?industry=manufacturing" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-[0_0_20px_rgba(249,115,22,0.25)] group">
                    Connect Your Supply Chain
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
                <div className="absolute inset-0 bg-orange-500/5 border border-orange-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-orange-500/10 rounded-full blur-3xl absolute" />
                  <Factory className="w-32 h-32 text-orange-500 opacity-80" strokeWidth={1} />
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]">Execution</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Engineering across the value chain.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-orange-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 group-hover:bg-orange-500/20 transition-all duration-300">
                  <Layers className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">ERP Consolidation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Extracting logic out of locked legacy systems (SAP, Oracle, Epicor) into a scalable Azure Lakehouse, creating a unified semantic model across global operations.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-orange-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 group-hover:bg-orange-500/20 transition-all duration-300">
                  <Settings className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Overall Equipment Effectiveness (OEE)</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stream streaming data from IoT devices natively into Fabric to calculate Real-Time OEE. Move from reactive maintenance to predictive insights, reducing unexpected downtime.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-12 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-orange-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 group-hover:bg-orange-500/20 transition-all duration-300">
                  <Truck className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">End-to-End Traceability</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Tracing serialized inventory from raw material procurement to finished goods delivery. We architect supply chain control towers that provide executives complete visibility over inventory levels and logistics performance in real-time.
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
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-orange-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Inventory Optimization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reduce working capital by intelligently balancing stock levels. We build models that analyze historical consumption, lead times, and demand signals to prescribe optimized safety stock per SKU.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-orange-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <PackageOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Yield & Scrap Analysis</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect quality management systems with production data to pinpoint exactly which batches, machines, or environmental conditions are correlating with increased scrap rates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-orange-500/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Modernize your manufacturing data.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop running your production lines on outdated Excel reports. Let's architect a scalable, real-time data foundation.
            </p>
            <Link href="/contact?industry=manufacturing" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Connect Your Supply Chain
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
