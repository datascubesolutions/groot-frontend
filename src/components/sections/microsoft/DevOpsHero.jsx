// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
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

          {/* Right visualization - Azure DevOps Pipeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[600px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(0,116,204,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0074cc0A_1px,transparent_1px),linear-gradient(to_bottom,#0074cc0A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0074CC]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0074CC]/20 blur-[80px]"
              />
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center z-10 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0074CC]/5 to-transparent blur-3xl" />

              {/* DevOps Core */}
              <div className="relative z-20 flex w-full max-w-sm flex-col gap-6">
                
                {/* Header with Azure Icon */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0074CC]/10">
                    <Image src="/svg/azure-2.svg" alt="Azure DevOps" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Azure DevOps</h3>
                    <p className="text-xs font-medium text-muted-foreground">Continuous Integration</p>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-auto h-2 w-2 rounded-full bg-emerald-500"
                  />
                </div>

                {/* Pipeline Steps */}
                <div className="relative flex flex-col gap-4 pl-6">
                  {/* Vertical Line */}
                  <div className="absolute bottom-6 left-[2.2rem] top-6 w-0.5 bg-border">
                    <motion.div
                      animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 w-full bg-[#0074CC]"
                    />
                  </div>

                  {[
                    { name: "Source Control", status: "sync", delay: 0 },
                    { name: "Build Pipeline", status: "run", delay: 0.5 },
                    { name: "Data Validation", status: "check", delay: 1 },
                    { name: "Deploy to Prod", status: "done", delay: 1.5 },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="relative z-10 flex items-center gap-4 pl-8"
                    >
                      {/* Node Indicator */}
                      <motion.div
                        animate={{
                          borderColor: ["#e5e7eb", "#0074CC", "#e5e7eb"],
                          backgroundColor: ["#ffffff", "rgba(0,116,204,0.1)", "#ffffff"],
                        }}
                        transition={{ duration: 3, delay: step.delay, repeat: Infinity }}
                        className="absolute left-[-1.15rem] flex h-5 w-5 items-center justify-center rounded-full border-2 border-border bg-white"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#0074CC]" />
                      </motion.div>

                      {/* Step Card */}
                      <div className="flex w-full items-center justify-between rounded-xl border border-border bg-white px-4 py-3 shadow-sm transition-colors hover:border-[#0074CC]/50">
                        <span className="text-sm font-semibold text-foreground">{step.name}</span>
                        {step.status === "done" ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-4 w-4 rounded-full border-2 border-muted-foreground/30 border-t-[#0074CC]"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
