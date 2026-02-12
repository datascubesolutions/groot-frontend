"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart, CheckCircle2, Database, FileText, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";


export function DataReadinessSection() {
  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden text-foreground border-t border-border">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">

            {/* Left - Content */}
            <div className="lg:pr-12">
              <h2 className="heading-section mb-6 md:mb-8">
                Not sure where to start?
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-2xl">
                Take our 2-minute <span className="text-secondary font-semibold">Data Readiness Assessment</span>.
                You'll get a comprehensive score, a recommended starting point, and a roadmap tailored to your maturity level.
              </p>

              <div className="flex flex-nowrap items-stretch gap-4 w-full sm:w-auto">
                <Link href="/assessment">
                  <Button
                    variant="hero"
                    size="xl"
                    className="flex-1 sm:flex-none w-full sm:w-auto h-auto min-h-[3.5rem] py-3 px-3 sm:px-8 whitespace-normal text-center leading-tight shadow-xl shadow-forest/20 group font-bold tracking-wide cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Your Data Readiness Score
                      <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>

                <Link href="/resources/ai-roadmap" className="flex-1 sm:flex-none">
                  <Button
                    variant="hero-outline"
                    size="xl"
                    className="w-full sm:w-auto h-auto min-h-[3.5rem] py-3 px-3 sm:px-8 whitespace-normal text-center leading-tight bg-card hover:bg-secondary/5 border-2 text-forest hover:text-forest font-bold shadow-sm transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5 shrink-0" />
                      Download AI Roadmap
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 md:mt-10 flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free & Instant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No Credit Card
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Actionable PDF Report
                </div>
              </div>
            </div>

            {/* Right - Visual Element (The Report Card) */}
            <div className="relative flex justify-center lg:justify-end">

              {/* The Card Container - Tilted and Floated */}
              <motion.div
                initial={{ y: 20, rotateX: 5, opacity: 0 }}
                whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-charcoal px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BarChart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-birch text-sm font-bold">Maturity Score</div>
                      <div className="text-birch/70 text-xs">Generated for Acme Inc.</div>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded text-xs font-mono uppercase">
                    Unified
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div>
                      <div className="text-5xl font-bold text-foreground tracking-tight">87<span className="text-2xl text-muted-foreground font-medium">/100</span></div>
                      <div className="text-primary font-bold mt-1">Advanced Architecture</div>
                    </div>
                    <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Metrics List */}
                  <div className="space-y-4">
                    <MetricRow icon={Database} label="Data Integration" score="92%" color="bg-primary" width="w-[92%]" />
                    <MetricRow icon={ShieldCheck} label="Governance" score="65%" color="bg-forest/60" width="w-[65%]" />
                    <MetricRow icon={ArrowRight} label="AI Readiness" score="78%" color="bg-primary" width="w-[78%]" />
                  </div>

                  <div className="mt-6 md:mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>Analysis completed in 1.4s</span>
                    <span className="underline decoration-border underline-offset-2">View Full Report</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Backdrop Blobs */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
              <div className="absolute -bottom-10 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function MetricRow({ icon: Icon, label, score, color, width }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-muted p-2 rounded-lg text-muted-foreground">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="font-semibold text-foreground">{label}</span>
          <span className="text-muted-foreground">{score}</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className={`h-full ${width} ${color} rounded-full`} />
        </div>
      </div>
    </div>
  )
}
