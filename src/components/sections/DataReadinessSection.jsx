"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, CheckCircle2, Database, FileText, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export function DataReadinessSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden text-foreground border-t border-slate-200">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left - Content */}
            <div className="lg:pr-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Not sure where to start?
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                Take our 2-minute <span className="text-indigo-600 font-semibold">Data Readiness Assessment</span>.
                You'll get a comprehensive score, a recommended starting point, and a roadmap tailored to your maturity level.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment" className="inline-flex">
                  <button className="group relative h-14 px-8 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 w-full sm:w-auto overflow-hidden flex items-center justify-center gap-3 shadow-lg shadow-indigo-200">
                    Get Your Data Readiness Score
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/resources/ai-roadmap" className="inline-flex">
                  <button className="h-14 px-8 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-3">
                    <FileText className="w-5 h-5 text-slate-500" />
                    Download AI Roadmap
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Free & Instant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  No Credit Card
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
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
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <BarChart className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">Maturity Score</div>
                      <div className="text-slate-400 text-xs">Generated for Acme Inc.</div>
                    </div>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-xs font-mono uppercase">
                    Unified
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-5xl font-bold text-slate-900 tracking-tight">87<span className="text-2xl text-slate-400 font-medium">/100</span></div>
                      <div className="text-indigo-600 font-semibold mt-1">Advanced Architecture</div>
                    </div>
                    <div className="h-16 w-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>

                  {/* Metrics List */}
                  <div className="space-y-4">
                    <MetricRow icon={Database} label="Data Integration" score="92%" color="bg-indigo-500" width="w-[92%]" />
                    <MetricRow icon={ShieldCheck} label="Governance" score="65%" color="bg-amber-400" width="w-[65%]" />
                    <MetricRow icon={ArrowRight} label="AI Readiness" score="78%" color="bg-emerald-500" width="w-[78%]" />
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Analysis completed in 1.4s</span>
                    <span className="underline decoration-slate-300 underline-offset-2">View Full Report</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Backdrop Blobs */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
              <div className="absolute -bottom-10 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />

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
      <div className="bg-slate-50 p-2 rounded-lg text-slate-500">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="font-semibold text-slate-700">{label}</span>
          <span className="text-slate-500">{score}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full ${width} ${color} rounded-full`} />
        </div>
      </div>
    </div>
  )
}
