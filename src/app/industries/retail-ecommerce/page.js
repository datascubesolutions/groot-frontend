"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ShoppingCart, Store, BarChart3, TrendingUp, Tags, Users } from "lucide-react";
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

export default function RetailEcommercePage() {
  return (
    <main className="pt-20 min-h-screen relative bg-background">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
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
              <div className="mb-6 inline-flex border border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)]">
                Industry Expertise
              </div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
                Retail <br />
                <span className="text-[hsl(var(--secondary))]">
                  &amp; E-Commerce
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed font-light">
                Omnichannel data strategy. We unite fragmented Shopify, POS, and digital marketing data into a single Lakehouse to identify your most valuable customers and drive margin.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?industry=retail" passHref>
                  <Button variant="hero" size="lg" className="px-8 shadow-[0_0_20px_rgba(236,72,153,0.25)] group">
                    Unlock Omnichannel Value
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
                <div className="absolute inset-0 bg-pink-500/5 border border-pink-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-pink-500/10 rounded-full blur-3xl absolute" />
                  <ShoppingCart className="w-32 h-32 text-pink-500 opacity-80" strokeWidth={1} />
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]">Execution</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Solving the fragmented customer journey.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
            {/* Feature 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-4 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-pink-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 group-hover:bg-pink-500/20 transition-all duration-300">
                  <Users className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Customer 360</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Stitching together e-commerce platforms, loyalty programs, in-store POS, and customer support tickets into a unified identity graph to understand true Customer Lifetime Value (CLV).
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-8 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-pink-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 group-hover:bg-pink-500/20 transition-all duration-300">
                  <BarChart3 className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Margin Analytics Architecture</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Moving beyond top-line revenue reporting. We design semantic models that allocate digital ad spend, shipping costs, and return rates down to the individual SKU and order level, revealing your true profitability.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-12 bg-background/80 backdrop-blur-sm border border-border/60 rounded-[2rem] p-10 hover:border-pink-500/40 transition-colors shadow-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 group-hover:bg-pink-500/20 transition-all duration-300">
                  <Store className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-foreground">Omnichannel Executive Dashboards</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Stop debating which number is right. We build certified Power BI applications that allow executives to seamlessly drill down from high-level omnichannel metrics into specific regional or product category performance.
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
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-pink-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Marketing Mix Modeling</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ingest data from Meta, Google Ads, TikTok, and direct mail to calculate true Return on Ad Spend (ROAS) and optimize your cross-channel marketing budget allocation.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              className="p-10 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-border/60 hover:border-pink-500/30 transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Tags className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Dynamic Pricing Optimization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Implement data pipelines that synthesize competitor pricing, inventory levels, and demand elasticity to recommend pricing adjustments that protect your margins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-pink-500/5 border border-pink-500/20 rounded-[3rem] p-12 md:p-16 text-center shadow-lg shadow-pink-500/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Stop operating in silos.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              When your e-commerce platform doesn't talk to your physical stores, you lose. Let's architect a unified data strategy that scales.
            </p>
            <Link href="/contact?industry=retail" passHref>
              <Button variant="hero" size="lg" className="px-10 text-lg h-14 rounded-full bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                Unlock Omnichannel Value
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
