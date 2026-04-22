// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  ShoppingCart,
  Store,
  BarChart3,
  TrendingUp,
  Tags,
  Users,
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

export default function RetailEcommercePage() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          {
            label: "Retail & E-Commerce",
            href: "/industries/retail-ecommerce",
          },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl lg:col-span-7"
            >
              <div className="mb-6 inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-pink-600 shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)] dark:text-pink-400">
                Industry Expertise
              </div>
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl"
              >
                Retail <br />
                <span className="text-[hsl(var(--secondary))]">
                  &amp; E-Commerce
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-10 text-xl font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                Omnichannel data strategy. We unite fragmented Shopify, POS, and
                digital marketing data into a single Lakehouse to identify your
                most valuable customers and drive margin.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?industry=retail" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-[0_0_20px_rgba(236,72,153,0.25)]"
                  >
                    Unlock Omnichannel Value
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg transform-gpu overflow-hidden rounded-3xl shadow-2xl shadow-[hsl(var(--primary))/0.15]">
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm">
                  <div className="absolute h-48 w-48 rounded-full bg-pink-500/10 blur-3xl" />
                  <ShoppingCart
                    className="h-32 w-32 text-pink-500 opacity-80"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real World Section - Bento Grid */}
      <section className="relative overflow-hidden bg-muted/20 py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center text-foreground">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]">
              Execution
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Solving the fragmented customer journey.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-10 shadow-sm backdrop-blur-sm transition-colors hover:border-pink-500/40 md:col-span-4"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 transition-all duration-300 group-hover:bg-pink-500/20">
                  <Users className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Customer 360
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Stitching together e-commerce platforms, loyalty programs,
                  in-store POS, and customer support tickets into a unified
                  identity graph to understand true Customer Lifetime Value
                  (CLV).
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-10 shadow-sm backdrop-blur-sm transition-colors hover:border-pink-500/40 md:col-span-8"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 transition-all duration-300 group-hover:bg-pink-500/20">
                  <BarChart3 className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Margin Analytics Architecture
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Moving beyond top-line revenue reporting. We design semantic
                  models that allocate digital ad spend, shipping costs, and
                  return rates down to the individual SKU and order level,
                  revealing your true profitability.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-10 shadow-sm backdrop-blur-sm transition-colors hover:border-pink-500/40 md:col-span-12"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 transition-all duration-300 group-hover:bg-pink-500/20">
                  <Store className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-3xl font-bold text-foreground">
                  Omnichannel Executive Dashboards
                </h4>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  Stop debating which number is right. We build certified Power
                  BI applications that allow executives to seamlessly drill down
                  from high-level omnichannel metrics into specific regional or
                  product category performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="relative overflow-hidden border-t border-border/50 bg-background py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center text-foreground">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Core Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Marketing Mix Modeling
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ingest data from Meta, Google Ads, TikTok, and direct mail to
                calculate true Return on Ad Spend (ROAS) and optimize your
                cross-channel marketing budget allocation.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                <Tags className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Dynamic Pricing Optimization
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Implement data pipelines that synthesize competitor pricing,
                inventory levels, and demand elasticity to recommend pricing
                adjustments that protect your margins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-pink-500/20 bg-pink-500/5 p-12 text-center shadow-lg shadow-pink-500/5 md:p-16">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Stop operating in silos.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              When your e-commerce platform doesn&apos;t talk to your physical
              stores, you lose. Let&apos;s architect a unified data strategy
              that scales.
            </p>
            <Link href="/contact?industry=retail" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full bg-pink-600 px-10 text-lg text-white shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-pink-500"
              >
                Unlock Omnichannel Value
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
