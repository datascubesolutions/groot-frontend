// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function PowerBIHero() {
  const reduceMotion = useReducedMotion();

  return (
    <>

      <section className="relative w-full flex flex-col lg:h-[calc(100vh-80px)]">
        {/* Main container - 50/50 Split */}
        <div className="relative flex flex-col lg:flex-row w-full flex-1 overflow-hidden">
          
          {/* Left side: Content */}
          <div className="relative flex w-full flex-col justify-center bg-[#f0f4f8] lg:w-1/2 z-10 overflow-hidden min-h-[55vh] lg:min-h-0">
            {/* Left side geometric pattern */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 opacity-60"
              style={{
                backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: '-1px -1px'
              }}
            />

            {/* Inner constraint to align with 1400px container */}
            <div className="w-full max-w-[850px] mx-auto lg:ml-auto lg:mr-0 px-5 sm:px-6 lg:pl-10 xl:pl-16 lg:pr-10 py-8 lg:py-12 relative z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10"
              >
                {/* Eyebrow */}
                <motion.div variants={fadeIn} className="mb-4 lg:mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#1b2b36] sm:text-sm lg:text-[15px]">
                  <div className="h-3 w-3 bg-[#F2C811]"></div>
                  BUSINESS INTELLIGENCE
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeIn} className="mb-6 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-[#1b2b36] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.2rem]">
                  Power BI
                </motion.h1>

                {/* Subtext */}
                <motion.p variants={fadeIn} className="mb-6 lg:mb-8 max-w-[650px] text-base leading-relaxed text-[#1b2b36] sm:text-lg lg:text-xl xl:text-[1.5rem] xl:leading-[1.6]">
                  Dashboards people actually use. Self-service analytics with the guardrails that keep Finance from losing sleep.
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeIn}>
                  <Link href="/contact?service=powerbi-assessment" passHref>
                    <Button className="h-14 lg:h-16 rounded-none bg-[#1b2b36] hover:bg-[#1b2b36]/90 px-8 sm:px-12 lg:px-14 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest text-white shadow-none border-none">
                      Get Dashboard Assessment <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="relative flex w-full items-center justify-center bg-[#f8f9fa] lg:w-1/2 z-0 overflow-hidden min-h-[45vw] sm:min-h-[40vw] lg:min-h-0">
            {/* Right side geometric pattern */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 opacity-40"
              style={{
                backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: '-1px -1px'
              }}
            />

            {/* Inner constraint to align with 1400px container */}
            <div className="w-full max-w-[850px] mx-auto lg:mr-auto lg:ml-0 px-5 sm:px-6 lg:pl-0 lg:pr-10 xl:pr-16 py-6 lg:py-12 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full"
              >
                {/* Modern frame for the visualization */}
                <div className="relative w-full rounded-3xl bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 p-2 lg:p-3">
                  <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl bg-slate-50/50 overflow-hidden flex items-center justify-center border border-slate-100">
                    
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

                    <div className="relative flex h-full w-full flex-col items-center justify-center font-sans p-6 z-10 scale-90">
                      
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

                    {/* Small star icon at bottom right of image */}
                    <div className="absolute bottom-4 right-4 text-[#1b2b36] opacity-30 mix-blend-overlay">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

