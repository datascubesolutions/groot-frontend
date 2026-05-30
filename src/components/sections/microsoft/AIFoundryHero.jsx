// @ts-nocheck
"use client";
import { createMulberry32 } from "@/lib/prng";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AIFoundryHero() {
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
                Azure AI
              </span>
              Azure AI Foundry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-base font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-lg"
            >
              From prototype to production. The platform for building AI
              applications that actually ship.
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
                <Link href="/contact?service=ai-foundry">
                  Discuss Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization - Azure AI Studio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[480px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(0,120,212,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0078d40A_1px,transparent_1px),linear-gradient(to_bottom,#0078d40A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0078D4]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0078D4]/20 blur-[80px]"
              />
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center font-sans z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0078D4]/5 to-transparent blur-2xl" />

              {/* Central AI Node */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-[#0078D4]/20 bg-white shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0078D4]/5 to-transparent" />
                <Image src="/svg/azureai-color.svg" alt="Azure AI" width={64} height={64} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
                
                {/* AI Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[2rem] border border-[#0078D4]"
                />
              </motion.div>

              {/* Neural Network Nodes */}
              <div className="absolute inset-0 z-10">
                {[
                  { angle: 0, delay: 0 },
                  { angle: 72, delay: 0.2 },
                  { angle: 144, delay: 0.4 },
                  { angle: 216, delay: 0.6 },
                  { angle: 288, delay: 0.8 },
                ].map((node, i) => {
                  const radius = 120;
                  const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((node.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={i}
                      animate={{
                        x: [x, x + (Math.random() * 10 - 5), x],
                        y: [y, y + (Math.random() * 10 - 5), y],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-white shadow-lg"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="h-3 w-3 rounded-full bg-[#0078D4]/50" />
                      {/* Connection Line to Center */}
                      <svg className="absolute inset-0 h-[240px] w-[240px] overflow-visible" style={{ transform: `translate(${-x}px, ${-y}px)` }}>
                        <motion.line
                          x1={120 + x}
                          y1={120 + y}
                          x2="120"
                          y2="120"
                          stroke="#0078D4"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          animate={{ strokeDashoffset: [0, -10] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="opacity-30"
                        />
                      </svg>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
