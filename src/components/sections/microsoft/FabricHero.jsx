// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Database, Cloud, ChevronRight } from "lucide-react";
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

export function FabricHero() {
  const reduceMotion = useReducedMotion();

  const technologies = [
    {
      name: "Microsoft",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="11" height="11" fill="#F25022" />
          <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
          <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
          <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
        </svg>
      ),
    },
    {
      name: "Azure",
      icon: (
        <Image
          src="/svg/azure-2.svg"
          alt="Azure"
          width={20}
          height={20}
          className="h-auto w-5 object-contain"
          priority
        />
      ),
    },
    {
      name: "Fabric",
      icon: (
        <Image
          src="/svg/fabric_48_color.svg"
          alt="Fabric"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
          priority
        />
      ),
    },
    {
      name: "Purview",
      icon: (
        <Image
          src="/svg/microsoft-purview-seeklogo.svg"
          alt="Purview"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
          priority
        />
      ),
    },
    {
      name: "Power BI",
      icon: (
        <Image
          src="/svg/power-bi-icon.svg"
          alt="Power BI"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
          priority
        />
      ),
    },
    {
      name: "Copilot",
      icon: (
        <Image
          src="/svg/copilot-icon.svg"
          alt="Copilot"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
          priority
        />
      ),
    },
  ];

  return (
    <>

      <section className="relative w-full flex flex-col lg:min-h-[calc(100vh-80px)]">
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
                  <div className="h-3 w-3 bg-[#00A4EF]"></div>
                  ONE PLATFORM. ONE TRUTH.
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeIn} className="mb-6 text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-[#1b2b36] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.2rem]">
                  Microsoft Fabric
                </motion.h1>

                {/* Subtext */}
                <motion.p variants={fadeIn} className="mb-6 lg:mb-8 max-w-[650px] text-base leading-relaxed text-[#1b2b36] sm:text-lg lg:text-xl xl:text-[1.5rem] xl:leading-[1.6]">
                  Stop chasing the same number. From raw ingestion to board-ready dashboards — unified, governed, and ready for AI. <span className="font-bold text-[#1b2b36]">In 10 weeks.</span>
                </motion.p>

                {/* Core Technologies List */}
                <motion.div variants={fadeIn} className="mb-6 lg:mb-8">
                  <h3 className="mb-3 lg:mb-4 text-xs lg:text-sm font-bold uppercase tracking-widest text-[#1b2b36]">
                    Platform & Ecosystem:
                  </h3>
                  <div className="grid max-w-lg grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 lg:gap-y-4">
                    {technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#00A4EF]/15">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-[#1b2b36]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeIn}>
                  <Link href="/contact?service=fabric-assessment" passHref>
                    <Button className="h-14 lg:h-16 rounded-none bg-[#1b2b36] hover:bg-[#1b2b36]/90 px-8 sm:px-12 lg:px-14 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest text-white shadow-none border-none">
                      Get Readiness Assessment <ChevronRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right side: Visualization */}
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
                    <div className="absolute inset-2 z-0 transform overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(0,130,114,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-4">
                      {/* Inner Architectural Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082720A_1px,transparent_1px),linear-gradient(to_bottom,#0082720A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

                      {/* Corner Dot Matrices */}
                      <svg className="absolute right-8 top-8 text-[#008272] opacity-40" width="80" height="80" viewBox="0 0 80 80">
                        <pattern id="dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr)" />
                      </svg>
                      <svg className="absolute bottom-8 left-8 text-[#008272] opacity-40" width="80" height="80" viewBox="0 0 80 80">
                        <pattern id="dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="80" height="80" fill="url(#dots-bl)" />
                      </svg>

                      {/* Soft Internal Glowing Orbs */}
                      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00A4EF]/20 blur-[80px]" />
                      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#008272]/20 blur-[80px]" />
                    </div>

                    <div className="relative flex h-full w-full flex-col items-center justify-center font-sans scale-90">
                      {/* Top Layer - Ingestion */}
                      <div className="mb-6 flex gap-3 xl:mb-8 xl:gap-6">
                        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="z-10 flex w-36 items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-xl xl:w-40">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A4EF]/10 text-[#00A4EF]">
                            <Image src="/svg/azure-2.svg" alt="Azure Data Factory" width={16} height={16} priority />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 h-1.5 w-full rounded bg-muted" />
                            <div className="h-1.5 w-2/3 rounded bg-[#00A4EF]/30" />
                          </div>
                        </motion.div>
                        <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="z-10 flex w-36 items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-xl xl:w-40">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                            <Database className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 h-1.5 w-full rounded bg-muted" />
                            <div className="h-1.5 w-2/3 rounded bg-emerald-500/30" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Middle Layer - OneLake & Fabric Core */}
                      <div className="group relative z-20 flex w-64 flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-white p-6 shadow-2xl">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#008272]/5 to-transparent" />
                        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-[#008272]/10 ring-1 ring-[#008272]/20 transition-transform duration-500 group-hover:scale-110">
                          <Image src="/svg/fabric_48_color.svg" alt="Microsoft Fabric" width={32} height={32} className="relative z-10" priority />
                        </div>
                        <div className="relative z-10 text-center">
                          <h3 className="text-lg font-bold text-[#1b2b36]">OneLake Base</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#008272]">Delta Parquet</p>
                        </div>
                        {/* Data streaming animation */}
                        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#008272]" />
                        </div>
                      </div>

                      {/* Bottom Layer - Consumption */}
                      <div className="z-10 mt-6 flex max-w-[400px] flex-wrap justify-center gap-3 xl:mt-8 xl:gap-4">
                        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg">
                          <Image src="/svg/power-bi-icon.svg" alt="Power BI" width={16} height={16} priority />
                          <span className="text-xs font-semibold text-[#1b2b36] xl:text-sm">Power BI</span>
                        </motion.div>
                        <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg">
                          <div className="flex h-4 w-4 items-center justify-center rounded-sm text-blue-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-[#1b2b36] xl:text-sm">Synapse</span>
                        </motion.div>
                        <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg">
                          <Image src="/svg/copilot-icon.svg" alt="Copilot" width={16} height={16} priority />
                          <span className="text-xs font-semibold text-[#1b2b36] xl:text-sm">Copilot</span>
                        </motion.div>
                        <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg">
                          <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" width={16} height={16} priority />
                          <span className="text-xs font-semibold text-[#1b2b36] xl:text-sm">Purview</span>
                        </motion.div>
                      </div>

                      {/* Connecting Lines background SVG */}
                      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-40" viewBox="0 0 400 400">
                        {/* Lines from top to middle */}
                        <motion.path animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 120 120 Q 200 150 200 180" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                        <motion.path animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 280 120 Q 200 150 200 180" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />

                        {/* Lines from middle to bottom */}
                        <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 100 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                        <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 200 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                        <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 300 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />

                        {/* Floating Abstract Plus Signs to fill whitespace */}
                        <g className="text-[#008272]/30">
                          <motion.path animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} d="M 80 200 L 90 200 M 85 195 L 85 205" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <motion.path animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} d="M 320 250 L 330 250 M 325 245 L 325 255" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <motion.circle animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} cx="300" cy="180" r="3" fill="currentColor" />
                          <motion.circle animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} cx="120" cy="280" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </g>
                      </svg>
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
