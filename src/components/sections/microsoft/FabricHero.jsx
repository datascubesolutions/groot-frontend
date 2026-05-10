// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Database, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

      {/* Decorative dots top right (subtle) */}
      <div className="pointer-events-none absolute right-12 top-32 hidden opacity-20 lg:block">
        <svg
          width="150"
          height="100"
          viewBox="0 0 150 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="#164e3c" />
          </pattern>
          <rect x="0" y="0" width="150" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto w-full px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-6 lg:pr-8">
            {/* Arrows decorative top */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center text-forest opacity-80"
            >
              <svg
                width="64"
                height="24"
                viewBox="0 0 64 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-auto"
              >
                <path d="M0 4L8 12L0 20V4Z" fill="currentColor" />
                <path d="M12 4L20 12L12 20V4Z" fill="currentColor" />
                <path d="M24 4L32 12L24 20V4Z" fill="currentColor" />
                <path d="M36 4L44 12L36 20V4Z" fill="currentColor" />
                <path d="M48 4L56 12L48 20V4Z" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground antialiased md:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-forest">
                One Platform. One Truth.
              </span>
              Microsoft Fabric
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-lg font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-xl"
            >
              Stop chasing the same number. From raw ingestion to board-ready
              dashboards — unified, governed, and ready for AI.{" "}
              <span className="font-medium text-foreground">In 10 weeks.</span>
            </motion.p>

            {/* Core Technologies List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-foreground">
                Platform & Ecosystem:
              </h3>

              <div className="grid max-w-lg grid-cols-2 gap-x-8 gap-y-4">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest/5">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <Button
                asChild
                className="group w-full rounded-full bg-forest px-8 py-7 text-base font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=fabric-assessment">
                  Get Readiness Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization - Custom Microsoft Fabric Architecture UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[600px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(0,130,114,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082720A_1px,transparent_1px),linear-gradient(to_bottom,#0082720A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Corner Dot Matrices */}
              <svg
                className="absolute right-8 top-8 text-[#008272] opacity-40"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <pattern
                  id="dots-tr"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr)" />
              </svg>
              <svg
                className="absolute bottom-8 left-8 text-[#008272] opacity-40"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <pattern
                  id="dots-bl"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-bl)" />
              </svg>

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00A4EF]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#008272]/20 blur-[80px]"
              />
            </div>

            <div className="relative flex h-full w-full flex-col items-center justify-center font-sans">
              {/* Top Layer - Ingestion */}
              <div className="mb-8 flex gap-4 xl:mb-12 xl:gap-8">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="z-10 flex w-36 items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-xl xl:w-40"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A4EF]/10 text-[#00A4EF]">
                    <Image
                      src="/svg/azure-2.svg"
                      alt="Azure Data Factory"
                      width={16}
                      height={16}
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 h-1.5 w-full rounded bg-muted" />
                    <div className="h-1.5 w-2/3 rounded bg-[#00A4EF]/30" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="z-10 flex w-36 items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-xl xl:w-40"
                >
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
                  <Image
                    src="/svg/fabric_48_color.svg"
                    alt="Microsoft Fabric"
                    width={32}
                    height={32}
                    className="relative z-10"
                    priority
                  />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    OneLake Base
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#008272]">
                    Delta Parquet
                  </p>
                </div>
                {/* Data streaming animation */}
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#008272]"
                  />
                </div>
              </div>

              {/* Bottom Layer - Consumption */}
              <div className="z-10 mt-8 flex max-w-[400px] flex-wrap justify-center gap-3 xl:mt-12 xl:gap-4">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg"
                >
                  <Image
                    src="/svg/power-bi-icon.svg"
                    alt="Power BI"
                    width={16}
                    height={16}
                    priority
                  />
                  <span className="text-xs font-semibold text-foreground xl:text-sm">
                    Power BI
                  </span>
                </motion.div>
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{
                    duration: 2.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-sm text-blue-500">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-foreground xl:text-sm">
                    Synapse
                  </span>
                </motion.div>
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{
                    duration: 3.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg"
                >
                  <Image
                    src="/svg/copilot-icon.svg"
                    alt="Copilot"
                    width={16}
                    height={16}
                    priority
                  />
                  <span className="text-xs font-semibold text-foreground xl:text-sm">
                    Copilot
                  </span>
                </motion.div>
                <motion.div
                  animate={{ y: [3, -3, 3] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-lg"
                >
                  <Image
                    src="/svg/microsoft-purview-seeklogo.svg"
                    alt="Purview"
                    width={16}
                    height={16}
                    priority
                  />
                  <span className="text-xs font-semibold text-foreground xl:text-sm">
                    Purview
                  </span>
                </motion.div>
              </div>

              {/* Connecting Lines background SVG */}
              <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-40"
                viewBox="0 0 400 400"
              >
                {/* Lines from top to middle */}
                <motion.path
                  animate={{ strokeDashoffset: [0, -12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  d="M 120 120 Q 200 150 200 180"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#008272]"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.path
                  animate={{ strokeDashoffset: [0, -12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  d="M 280 120 Q 200 150 200 180"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#008272]"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Lines from middle to bottom */}
                <motion.path
                  animate={{ strokeDashoffset: [0, 12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  d="M 200 280 Q 200 320 100 340"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#008272]"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.path
                  animate={{ strokeDashoffset: [0, 12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  d="M 200 280 Q 200 320 200 340"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#008272]"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.path
                  animate={{ strokeDashoffset: [0, 12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  d="M 200 280 Q 200 320 300 340"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#008272]"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Floating Abstract Plus Signs to fill whitespace */}
                <g className="text-[#008272]/30">
                  <motion.path
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    d="M 80 200 L 90 200 M 85 195 L 85 205"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <motion.path
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    d="M 320 250 L 330 250 M 325 245 L 325 255"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <motion.circle
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    cx="300"
                    cy="180"
                    r="3"
                    fill="currentColor"
                  />
                  <motion.circle
                    animate={{ y: [5, -5, 5] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    cx="120"
                    cy="280"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
