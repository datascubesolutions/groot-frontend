// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cloud } from "lucide-react";
import Link from "next/link";

export function AzureHero() {
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
                Cloud Infrastructure
              </span>
              Azure Data Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-lg font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-xl"
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
                className="group w-full rounded-full bg-forest px-8 py-7 text-base font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=azure-assessment">
                  Get Infrastructure Assessment
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
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-forest/5 to-transparent blur-2xl" />

                {/* Isometric Servers Stacking */}
                <div className="perspective-1000 relative z-10 mt-12 flex h-64 w-64 flex-col items-center justify-end">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                      className="relative mb-4 flex h-16 w-48 items-center overflow-hidden rounded-lg border border-border bg-white px-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
                    >
                      {/* Server lights */}
                      <div className="flex w-full gap-2">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i,
                          }}
                          className="h-2 w-2 rounded-full bg-forest/30"
                        />
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i + 0.2,
                          }}
                          className="h-2 w-2 rounded-full bg-forest/60"
                        />
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i + 0.4,
                          }}
                          className="h-2 w-2 rounded-full bg-forest"
                        />
                        <div className="ml-auto h-2 w-12 rounded-full bg-muted" />
                      </div>

                      {/* Data flow pulse */}
                      <motion.div
                        animate={{ x: [-100, 200] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="absolute left-0 top-0 h-full w-20 skew-x-12 bg-gradient-to-r from-transparent via-forest/10 to-transparent"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Clouds */}
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-4 top-10 text-muted/30"
                >
                  <Cloud className="h-24 w-24" />
                </motion.div>
                <motion.div
                  animate={{ x: [10, -10, 10] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-10 right-4 text-muted/30"
                >
                  <Cloud className="h-32 w-32" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
