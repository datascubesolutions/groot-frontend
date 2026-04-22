// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PowerBIHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background pb-16 pt-32 text-foreground md:pb-24 md:pt-40 lg:pb-32 lg:pt-48">
      {/* Animated Cinematic Background Accents */}
      <motion.div
        animate={
          reduceMotion
            ? { scale: 1, opacity: 0.65 }
            : { scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-forest/5 blur-[150px]"
      />
      <motion.div
        animate={
          reduceMotion
            ? { scale: 1, opacity: 0.55 }
            : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }
        className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-forest/5 blur-[150px]"
      />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground antialiased md:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-forest">
                Business Intelligence
              </span>
              Power BI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-lg font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-xl"
            >
              Dashboards people actually use. Self-service analytics with the
              guardrails that keep Finance from losing sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Button
                asChild
                className="group w-full rounded-full bg-forest px-8 py-7 text-base font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=powerbi-assessment">
                  Get Dashboard Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
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
              <div className="relative mt-4 flex h-[350px] w-full items-end justify-center gap-4 pb-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-forest/5 to-transparent blur-3xl" />

                {[40, 70, 45, 90, 60, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: height + "%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1 + 0.5,
                      type: "spring",
                    }}
                    className="group relative w-12 rounded-t-lg bg-gradient-to-t"
                    style={{
                      background:
                        i === 5
                          ? "linear-gradient(to top, rgba(22,78,60,1), rgba(42,157,143,1))"
                          : "linear-gradient(to top, var(--border), var(--muted))",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + i * 0.1 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {height}%
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-10 top-10 rounded-2xl border border-border bg-white p-4 shadow-xl"
                >
                  <div className="h-16 w-16 rounded-full border-4 border-forest border-r-forest/50 border-t-forest/50" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
