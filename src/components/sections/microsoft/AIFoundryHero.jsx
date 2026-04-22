// @ts-nocheck
"use client";
import { createMulberry32 } from "@/lib/prng";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AIFoundryHero() {
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
                Azure AI
              </span>
              Azure AI Foundry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-lg font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-xl"
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
                className="group w-full rounded-full bg-forest px-8 py-7 text-base font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=ai-foundry">
                  Discuss Your AI Project
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
              <div className="relative flex h-[350px] w-full items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-forest/5 blur-3xl" />

                {/* Neural Network Grid */}
                <div className="relative z-10 grid w-full grid-cols-4 gap-6 px-12">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const rand = createMulberry32(i + 1);
                    const delay = (i % 4) * rand();
                    const repeatDelay = rand() * 2;
                    return (
                      <motion.div
                        key={i}
                        animate={{
                          backgroundColor: [
                            "#ffffff",
                            "rgba(22,78,60,0.1)",
                            "#ffffff",
                          ],
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 0 0px rgba(0,0,0,0)",
                            "0 0 20px rgba(22,78,60, 0.15)",
                            "0 0 0px rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          delay,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay,
                        }}
                        className="flex aspect-square w-full items-center justify-center rounded-xl border border-border bg-white shadow-sm"
                      >
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Background connecting lines (simulated with SVG) */}
                <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-10">
                  <pattern
                    id="grid"
                    width="70"
                    height="70"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 70 0 L 0 0 0 70"
                      fill="none"
                      stroke="currentColor"
                      className="text-forest"
                      strokeWidth="1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
