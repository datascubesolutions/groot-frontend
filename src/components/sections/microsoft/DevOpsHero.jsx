// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function DevOpsHero() {
  return (
    <section className="bg-grid-slate-50/50 relative flex min-h-[85vh] items-center overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 bg-background/90" />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Azure DevOps (DataOps)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl leading-relaxed text-muted-foreground"
            >
              Engineering discipline for analytics. Version control, CI/CD, and
              testing — because &apos;I&apos;ll just update production&apos;
              isn&apos;t a deployment strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link href="/contact?service=devops-assessment">
                <Button className="group w-full rounded-full bg-brand-red px-8 py-6 text-lg font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red/90 sm:w-auto">
                  Assess DataOps Maturity
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="pointer-events-none absolute inset-0 rotate-3 scale-105 transform rounded-3xl bg-white opacity-50 shadow-xl" />
            <div className="pointer-events-none absolute inset-0 -rotate-2 scale-105 transform rounded-3xl bg-white/50 opacity-50 shadow-xl" />
            <div className="relative h-[400px] overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-2xl">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-50 blur-3xl" />

                {/* Animated Pipeline path */}
                <svg
                  className="absolute inset-0 mt-12 h-[300px] w-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    id="pipelinePath"
                    d="M 50 100 Q 150 20 200 100 T 350 100"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M 50 100 Q 150 20 200 100 T 350 100"
                    fill="none"
                    stroke="rgb(139,29,29)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.5 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>

                {/* Pipeline stages */}
                <div className="absolute bottom-24 z-10 flex w-[300px] justify-between">
                  {["Dev", "Test", "Prod"].map((stage, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 rounded-lg border border-border bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-red bg-white shadow-md">
                        <CheckCircle className="h-4 w-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Moving data packets */}
                <motion.div
                  animate={{
                    x: [0, 250],
                    y: [0, -40, 0, 40, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-[calc(50%-125px)] top-[calc(50%-20px)] z-20 h-6 w-6 rounded-md bg-brand-red shadow-lg shadow-brand-red/40"
                />
                <motion.div
                  animate={{
                    x: [0, 250],
                    y: [0, -40, 0, 40, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-[calc(50%-125px)] top-[calc(50%-20px)] z-20 h-6 w-6 rounded-md bg-brand-red/70 shadow-lg shadow-brand-red/40"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
