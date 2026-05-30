// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  LineChart,
  Briefcase,
  Network,
  ArrowRightLeft,
  Database,
  Target,
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

export default function PrivateEquityMAPage() {
  return (
    <main className="relative min-h-screen bg-background pt-20">
      <Breadcrumb
        items={[
          { label: "Industries", href: "/industries" },
          {
            label: "Private Equity & M&A",
            href: "/industries/private-equity-ma",
          },
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
              <div className="mb-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-emerald-600 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)] dark:text-emerald-400">
                Industry Expertise
              </div>
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                Private Equity <br />
                <span className="text-[hsl(var(--secondary))]">
                  &amp; M&amp;A
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-6 text-lg font-light leading-relaxed text-foreground/90 md:text-2xl"
              >
                You bought the thesis. Now you need to visualize the reality.
                Turn fragmented portco data into unified performance dashboards
                and accelerate the hold period.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/contact?industry=pe-ma" passHref>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group px-8 shadow-xl shadow-primary/25"
                  >
                    Discuss Your Portfolio
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
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <div className="absolute h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                  <Briefcase
                    className="h-32 w-32 text-primary opacity-80"
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
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              Execution
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Accelerating the hold period.
            </h3>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-4"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:bg-primary/20">
                  <Target className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Due Diligence
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Go beyond the data room. Rapidly assess target company data
                  maturity, identify analytical gaps, and quantify the
                  technology investment required to execute the value creation
                  plan post-close.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-8"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:bg-primary/20">
                  <ArrowRightLeft className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Post-Merger Integration (PMI)
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Stop managing integrations in Excel. We deploy rapid
                  Azure/Fabric landing zones to consolidate reporting across
                  newly merged entities in weeks, not months, establishing a
                  single source of truth for the new leadership team.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 md:col-span-12"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:bg-primary/20">
                  <LineChart className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-foreground">
                  Portfolio Company Value Creation
                </h4>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                  Execute specific use cases defined in the thesis: pricing
                  optimization, customer churn prediction, or working capital
                  dashboards. We provide the specialized data engineering talent
                  your portco might not have in-house.
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
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Pricing Optimization
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Identify margin leakage and cross-sell opportunities across
                disparate quoting and ERP systems in newly acquired companies.
                Harmonize product catalogs mathematically to surface immediate
                EBITDA improvements.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="rounded-[2rem] border border-border/60 bg-muted/20 p-6 lg:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Unified Executive Dashboards
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Standardized Power BI reporting packs that provide operating
                partners with instant visibility into portfolio performance,
                removing dependency on manual portco updates and endless
                spreadsheet wrestling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-background py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-12 text-center shadow-lg shadow-primary/5 md:p-16">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to execute your data thesis?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Stop waiting for portfolio companies to build data capabilities
              organically. Deploy specialized talent to accelerate value
              creation.
            </p>
            <Link href="/contact?industry=pe-ma" passHref>
              <Button
                variant="hero"
                size="lg"
                className="h-14 rounded-full px-10 text-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
