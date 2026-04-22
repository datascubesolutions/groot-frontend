// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Database,
  FileText,
  Server,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

export function PurviewHero() {
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
              Microsoft Purview
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl leading-relaxed text-muted-foreground"
            >
              Data governance that gets used. Discovery, lineage,
              classification, and policy — across your actual data estate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link href="/contact?service=purview-assessment">
                <Button className="group w-full rounded-full bg-brand-red px-8 py-6 text-lg font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red/90 sm:w-auto">
                  Get Governance Assessment
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
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent blur-3xl" />

                {/* Central Shield */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-20 flex h-40 w-40 items-center justify-center rounded-3xl border border-border bg-white shadow-2xl"
                >
                  <ShieldAlert className="h-16 w-16 text-brand-red" />

                  {/* Scanning radar line */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                  >
                    <div className="h-1/2 w-1/2 origin-bottom-right bg-gradient-to-br from-brand-red/20 to-transparent" />
                  </motion.div>
                </motion.div>

                {/* Floating Data Assets being scanned */}
                {[
                  { icon: FileText, x: -140, y: -80, delay: 0 },
                  { icon: Database, x: 140, y: -40, delay: 0.5 },
                  { icon: Cloud, x: -120, y: 100, delay: 1 },
                  { icon: Server, x: 120, y: 120, delay: 1.5 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [item.y - 10, item.y + 10, item.y - 10],
                      borderColor: [
                        "#e5e7eb",
                        "rgba(139,29,29, 0.5)",
                        "#e5e7eb",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      delay: item.delay,
                      repeat: Infinity,
                    }}
                    className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-border bg-white shadow-md"
                    style={{
                      left: "calc(50% + " + item.x + "px)",
                      top: "calc(50% + " + item.y + "px)",
                    }}
                  >
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 4,
                        delay: item.delay + 0.5,
                        repeat: Infinity,
                      }}
                      className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-500"
                    />
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30">
                  <motion.path
                    d="M 50% 50% L 20% 30% M 50% 50% L 80% 40% M 50% 50% L 25% 75% M 50% 50% L 75% 80%"
                    stroke="rgb(139,29,29)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
