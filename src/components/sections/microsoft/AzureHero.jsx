// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AzureHero() {
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
                Cloud Infrastructure
              </span>
              Azure Data Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-base font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-lg"
            >
              The foundation beneath your data platform. Storage, networking,
              security — configured for enterprise analytics.
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
                <Link href="/contact?service=azure-assessment">
                  Get Infrastructure Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization - Azure Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[480px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(0,164,239,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00a4ef0A_1px,transparent_1px),linear-gradient(to_bottom,#00a4ef0A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Corner Dot Matrices */}
              <svg className="absolute right-8 top-8 text-[#00A4EF] opacity-40" width="80" height="80" viewBox="0 0 80 80">
                <pattern id="dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr)" />
              </svg>

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#00A4EF]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#00A4EF]/20 blur-[80px]"
              />
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center font-sans z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A4EF]/5 to-transparent blur-2xl" />

              {/* Central Azure Node */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 z-20 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#00A4EF]/20 bg-white shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00A4EF]/5 to-transparent" />
                <Image src="/svg/azure-2.svg" alt="Azure" width={48} height={48} className="relative z-10" />
              </motion.div>

              {/* Isometric Servers Stacking */}
              <div className="perspective-1000 relative z-10 mt-20 flex h-64 w-64 flex-col items-center justify-end">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                    className="relative mb-4 flex h-16 w-48 items-center overflow-hidden rounded-xl border border-border bg-white px-6 shadow-[0_10px_30px_-10px_rgba(0,164,239,0.15)]"
                  >
                    {/* Server lights */}
                    <div className="flex w-full gap-2">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i }}
                        className="h-2 w-2 rounded-full bg-[#00A4EF]/30"
                      />
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i + 0.2 }}
                        className="h-2 w-2 rounded-full bg-[#00A4EF]/60"
                      />
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i + 0.4 }}
                        className="h-2 w-2 rounded-full bg-[#00A4EF]"
                      />
                      <div className="ml-auto h-2 w-12 rounded-full bg-muted" />
                    </div>

                    {/* Data flow pulse */}
                    <motion.div
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute left-0 top-0 h-full w-20 skew-x-12 bg-gradient-to-r from-transparent via-[#00A4EF]/10 to-transparent"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Connecting Lines */}
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30">
                <motion.path
                  d="M 50% 30% L 50% 50%"
                  stroke="#00A4EF"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, 12] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
