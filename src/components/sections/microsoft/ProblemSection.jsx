// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProblemSection({
  title = "When the Numbers Don't Line Up.",
  tagline = "Sound familiar?",
  bridgeText,
  problems = [],
}) {
  if (!problems || problems.length === 0) return null;

  return (
    <section className="relative flex flex-col justify-center overflow-hidden border-t border-border/50 bg-slate-50 py-12 lg:py-0 lg:min-h-[calc(100vh-80px)] text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Header Column */}
          <div className="space-y-4 antialiased lg:sticky lg:top-32 lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 block text-sm font-semibold uppercase tracking-widest text-forest"
            >
              The Problem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-balance border-l-4 border-forest pl-4 text-xl font-semibold italic leading-snug tracking-tight text-forest md:text-2xl"
            >
              {tagline}
            </motion.p>
            {bridgeText && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mb-6 text-base font-normal leading-relaxed text-muted-foreground/90 md:text-lg"
              >
                {bridgeText}
              </motion.p>
            )}
            {/* Fragmented Architecture Custom Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative mt-6 flex aspect-[4/3] max-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/40 bg-card p-6 font-sans shadow-2xl md:aspect-square lg:mt-8 xl:aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5" />

              {/* Corner Dot Matrices */}
              <svg
                className="pointer-events-none absolute right-6 top-6 text-red-500 opacity-30"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <pattern
                  id="dots-tr-prob"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  fill="url(#dots-tr-prob)"
                />
              </svg>
              <svg
                className="pointer-events-none absolute bottom-6 left-6 text-orange-500 opacity-30"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <pattern
                  id="dots-bl-prob"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  fill="url(#dots-bl-prob)"
                />
              </svg>

              <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-4 xl:py-8">
                {/* Disconnected Nodes */}
                <div className="flex w-full justify-between px-4">
                  <motion.div
                    animate={{ x: [-5, 5, -5] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="z-10 flex w-28 flex-col items-center gap-3 rounded-2xl border border-red-100 bg-white p-4 shadow-lg xl:w-32"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-500 ring-1 ring-red-100">
                      SQL
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-red-100" />
                  </motion.div>
                  <motion.div
                    animate={{ x: [5, -5, 5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="z-10 mt-12 flex w-28 flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-lg xl:w-32"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-500 ring-1 ring-orange-100">
                      CSV
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-orange-100" />
                  </motion.div>
                </div>

                {/* Broken Core */}
                <div className="relative z-10 flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-red-200 bg-white shadow-xl xl:h-48 xl:w-48">
                  <div className="absolute right-2 top-2 flex h-6 w-6 animate-pulse items-center justify-center rounded-full border-2 border-white bg-red-500 text-[12px] font-bold text-white shadow-lg">
                    !
                  </div>
                  <div className="absolute bottom-6 left-2 flex h-6 w-6 animate-bounce items-center justify-center rounded-full border-2 border-white bg-orange-500 text-[12px] font-bold text-white shadow-lg delay-700">
                    !
                  </div>
                  <svg
                    className="mb-2 h-12 w-12 text-muted-foreground/30 xl:h-16 xl:w-16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground xl:text-sm">
                    Siloed Data
                  </span>
                </div>

                {/* Failing Reports */}
                <div className="z-10 mt-8 flex w-full justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex w-56 items-center gap-4 rounded-2xl border border-red-100 bg-white p-4 shadow-lg xl:w-64"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                      <div className="h-4 w-4 rounded-sm bg-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 h-2 w-full rounded bg-muted" />
                      <div className="h-2 w-2/3 rounded bg-red-300" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Tangled Lines SVG */}
              <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-40"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
              >
                <path
                  d="M 100 100 Q 200 250 150 350 T 200 450"
                  fill="none"
                  stroke="currentColor"
                  className="text-red-400"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 300 150 Q 150 300 250 400"
                  fill="none"
                  stroke="currentColor"
                  className="text-orange-400"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </motion.div>
          </div>

          {/* Cards Column */}
          <div className="space-y-3 md:space-y-4 lg:col-span-7">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl bg-forest p-5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(22,78,60,0.3)] md:rounded-[1.5rem] md:p-6"
              >
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

                <div className="relative z-10 antialiased">
                  {/* Number indicator */}
                  <span className="mb-3 block text-[11px] font-semibold uppercase tracking-widest text-white/50 md:mb-4">
                    Problem {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mb-2 text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                    {problem.title}
                  </h3>

                  <p className="mb-3 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                    {problem.description}
                  </p>

                  {problem.outcome && (
                    <p className="text-sm font-medium leading-snug text-mint md:text-base">
                      → {problem.outcome}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
