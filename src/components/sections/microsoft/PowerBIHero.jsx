// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PowerBIHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background pt-28 pb-10 text-foreground">
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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground antialiased md:text-4xl lg:text-5xl xl:text-6xl"
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
              className="max-w-2xl text-balance py-2 text-base font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-lg"
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
                className="group w-full rounded-full bg-forest px-6 py-4 text-sm font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=powerbi-assessment">
                  Get Dashboard Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization - Custom Power BI Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[480px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(242,200,17,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f2c8110A_1px,transparent_1px),linear-gradient(to_bottom,#f2c8110A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Corner Dot Matrices */}
              <svg className="absolute right-8 top-8 text-[#F2C811] opacity-40" width="80" height="80" viewBox="0 0 80 80">
                <pattern id="dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr)" />
              </svg>
              <svg className="absolute bottom-8 left-8 text-[#F2C811] opacity-40" width="80" height="80" viewBox="0 0 80 80">
                <pattern id="dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-bl)" />
              </svg>

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F2C811]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F2C811]/20 blur-[80px]"
              />
            </div>

            <div className="relative flex h-full w-full flex-col items-center justify-center font-sans p-6 z-10">
              
              {/* Central Dashboard Frame */}
              <div className="group relative w-full max-w-sm rounded-3xl border border-border bg-white p-6 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#F2C811]/5 to-transparent" />
                
                {/* Header */}
                <div className="relative z-10 flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2C811]/10 ring-1 ring-[#F2C811]/20">
                      <Image src="/svg/power-bi-icon.svg" alt="Power BI" width={24} height={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Executive Summary</h3>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Real-time Analytics</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                  <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="rounded-2xl border border-border/50 bg-white/50 p-4 shadow-sm">
                    <div className="mb-2 h-1.5 w-8 rounded bg-muted" />
                    <div className="h-6 w-16 rounded bg-[#F2C811]/80" />
                  </motion.div>
                  <motion.div animate={{ y: [2, -2, 2] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="rounded-2xl border border-border/50 bg-white/50 p-4 shadow-sm">
                    <div className="mb-2 h-1.5 w-10 rounded bg-muted" />
                    <div className="h-6 w-20 rounded bg-emerald-500/80" />
                  </motion.div>
                </div>

                {/* Animated Bar Chart */}
                <div className="relative z-10 flex h-32 items-end justify-between gap-2 px-2">
                  {[40, 70, 45, 90, 60, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: height + "%", opacity: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5, type: "spring" }}
                      className="w-8 rounded-t-lg"
                      style={{
                        background: i === 5 ? "linear-gradient(to top, rgba(242,200,17,1), rgba(242,200,17,0.6))" : "linear-gradient(to top, var(--border), var(--muted))",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 rounded-2xl border border-border bg-white p-4 shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-1.5 w-12 rounded bg-muted mb-1" />
                    <div className="h-2 w-16 rounded bg-emerald-500/40" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
