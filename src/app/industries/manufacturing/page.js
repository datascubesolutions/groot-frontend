// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  Factory,
  PackageOpen,
  Truck,
  Settings,
  Layers,
  Box,
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

export default function ManufacturingPage() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
        ]}
      />

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-background py-10 lg:py-16">
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
              <div className="mb-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-orange-600 shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)] dark:text-orange-400">
                Industry Expertise
              </div>
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                <span className="text-[hsl(var(--secondary))]">
                  Manufacturing
                </span>{" "}
                <br />
                &amp; Supply Chain
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-6 text-lg font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                Connect the shop floor to the top floor. We build centralized
                data foundations that optimize production yields, slash supply
                chain bottlenecks, and unify siloed ERPs.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?industry=manufacturing" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                  >
                    Connect Your Supply Chain
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
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
                  <div className="absolute h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
                  <Factory
                    className="h-32 w-32 text-orange-500 opacity-80"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real World Section - Bento Grid */}
      <section className="relative overflow-hidden bg-muted/20 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center text-foreground">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]">
              Execution
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Engineering across the value chain.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-orange-500/40 md:col-span-4"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 transition-all duration-300 group-hover:bg-orange-500/20">
                  <Layers className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  ERP Consolidation
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Extracting logic out of locked legacy systems (SAP, Oracle,
                  Epicor) into a scalable Azure Lakehouse, creating a unified
                  semantic model across global operations.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-orange-500/40 md:col-span-8"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 transition-all duration-300 group-hover:bg-orange-500/20">
                  <Settings className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Overall Equipment Effectiveness (OEE)
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Stream streaming data from IoT devices natively into Fabric to
                  calculate Real-Time OEE. Move from reactive maintenance to
                  predictive insights, reducing unexpected downtime.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-orange-500/40 md:col-span-12"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 transition-all duration-300 group-hover:bg-orange-500/20">
                  <Truck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  End-to-End Traceability
                </h4>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                  Tracing serialized inventory from raw material procurement to
                  finished goods delivery. We architect supply chain control
                  towers that provide executives complete visibility over
                  inventory levels and logistics performance in real-time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="relative overflow-hidden border-t border-border/50 bg-background py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.05),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center text-foreground">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Core Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <Box className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Inventory Optimization
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Reduce working capital by intelligently balancing stock levels.
                We build models that analyze historical consumption, lead times,
                and demand signals to prescribe optimized safety stock per SKU.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <PackageOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Yield & Scrap Analysis
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Connect quality management systems with production data to
                pinpoint exactly which batches, machines, or environmental
                conditions are correlating with increased scrap rates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-orange-500/20 bg-orange-500/5 p-12 text-center shadow-lg shadow-orange-500/5 md:p-16">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Modernize your manufacturing data.
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Stop running your production lines on outdated Excel reports.
              Let&apos;s architect a scalable, real-time data foundation.
            </p>
            <Link href="/contact?industry=manufacturing" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full bg-orange-600 px-10 text-lg text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-500"
              >
                Connect Your Supply Chain
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
