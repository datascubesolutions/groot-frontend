// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { domAnimation, LazyMotion, m } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  CheckCircle2,
  Database,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export function DataReadinessSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="section-padding relative overflow-hidden border-t border-border bg-muted/20 text-foreground">
        {/* Subtle Grid Background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container-padding container relative z-10 mx-auto">
          <div className="mx-auto max-w-7xl">
            {/* Split Layout */}
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2">
              {/* Left - Content */}
              <div className="lg:pr-12">
                <h2 className="heading-section mb-6 md:mb-8">
                  Not sure where to start?
                </h2>

                <p className="mb-8 max-w-2xl text-xl font-medium leading-relaxed text-foreground/85 md:mb-10 md:font-normal md:text-muted-foreground">
                  Take our 2-minute{" "}
                  <span className="font-semibold text-secondary">
                    Data Readiness Assessment
                  </span>
                  . You&apos;ll get a comprehensive score, a recommended
                  starting point, and a roadmap tailored to your maturity level.
                </p>

                <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link href="/assessment" className="w-full">
                    <Button
                      variant="hero"
                      size="xl"
                      className="group h-auto min-h-[4rem] w-full cursor-pointer px-6 py-4 text-center text-base font-bold leading-tight tracking-wide shadow-xl shadow-forest/20 md:text-lg"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Data Readiness Score
                        <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>

                  <Link href="/resources/ai-roadmap" className="w-full">
                    <Button
                      variant="hero-outline"
                      size="xl"
                      className="h-auto min-h-[4rem] w-full border-2 bg-card px-6 py-4 text-center text-base font-bold leading-tight text-forest shadow-sm transition-all duration-300 hover:bg-secondary/5 hover:text-forest md:text-lg"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <FileText className="h-5 w-5 shrink-0" />
                        Download AI Roadmap
                      </span>
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-foreground/70 md:mt-10 md:gap-6 md:text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Free & Instant
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    No Credit Card
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Actionable PDF Report
                  </div>
                </div>
              </div>

              {/* Right - Visual Element (The Report Card) */}
              <div className="relative flex justify-center lg:justify-end">
                {/* The Card Container - Tilted and Floated */}
                <m.div
                  initial={{ y: 20, rotateX: 5, opacity: 0 }}
                  whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl lg:mx-0"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between bg-charcoal px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                        <BarChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-birch">
                          Maturity Score
                        </div>
                        <div className="text-xs text-birch/70">
                          Generated for Acme Inc.
                        </div>
                      </div>
                    </div>
                    <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary">
                      Unified
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8">
                    <div className="mb-6 flex items-center justify-between md:mb-8">
                      <div>
                        <div className="text-5xl font-bold tracking-tight text-foreground">
                          87
                          <span className="text-2xl font-medium text-muted-foreground">
                            /100
                          </span>
                        </div>
                        <div className="mt-1 font-bold text-primary">
                          Advanced Architecture
                        </div>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/20 border-t-primary">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Metrics List */}
                    <div className="space-y-4">
                      <MetricRow
                        icon={Database}
                        label="Data Integration"
                        score="92%"
                        color="bg-primary"
                        width="w-[92%]"
                      />
                      <MetricRow
                        icon={ShieldCheck}
                        label="Governance"
                        score="65%"
                        color="bg-forest/60"
                        width="w-[65%]"
                      />
                      <MetricRow
                        icon={ArrowRight}
                        label="AI Readiness"
                        score="78%"
                        color="bg-primary"
                        width="w-[78%]"
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground md:mt-8">
                      <span>Analysis completed in 1.4s</span>
                      <span className="underline decoration-border underline-offset-2">
                        View Full Report
                      </span>
                    </div>
                  </div>
                </m.div>

                {/* Decorative Backdrop Blobs */}
                <div className="absolute -right-10 top-10 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-10 left-0 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function MetricRow({ icon: Icon, label, score, color, width }) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-muted p-2 text-muted-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="font-semibold text-foreground">{label}</span>
          <span className="text-muted-foreground">{score}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className={`h-full ${width} ${color} rounded-full`} />
        </div>
      </div>
    </div>
  );
}
