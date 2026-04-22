// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CopilotHero() {
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
                Generative AI
              </span>
              Microsoft Copilot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-lg font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-xl"
            >
              AI that knows your business. Deploy it right, and people use it.
              Deploy it wrong, and it becomes expensive shelfware.
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
                <Link href="/contact?service=copilot-assessment">
                  Get Readiness Assessment
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
                <div className="bg-gradient-to-radial absolute inset-0 from-forest/10 to-transparent blur-2xl" />

                {/* Central AI Orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute z-10 h-40 w-40 rounded-full bg-gradient-to-tr from-forest via-forest/80 to-forest/60 opacity-90 blur-md"
                />
                <div className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full border border-white/50 bg-white shadow-2xl">
                  <Sparkles className="h-12 w-12 text-forest" />
                </div>

                {/* Floating Chat Bubbles */}
                {[
                  {
                    text: "Summarize the Q3 report",
                    x: -120,
                    y: -100,
                    delay: 0,
                  },
                  {
                    text: "Draft an email to the client",
                    x: 100,
                    y: -60,
                    delay: 1,
                  },
                  { text: "Analyze this dataset", x: -80, y: 120, delay: 2 },
                  {
                    text: "Create presentation slides",
                    x: 120,
                    y: 80,
                    delay: 3,
                  },
                ].map((bubble, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.8, 1, 1, 0.8],
                      y: [
                        bubble.y + 20,
                        bubble.y,
                        bubble.y - 10,
                        bubble.y - 30,
                      ],
                    }}
                    transition={{
                      duration: 6,
                      delay: bubble.delay,
                      repeat: Infinity,
                      times: [0, 0.1, 0.8, 1],
                    }}
                    className="absolute z-30 max-w-[150px] whitespace-nowrap rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3 text-sm font-medium text-foreground/80 shadow-lg"
                    style={{
                      left: "calc(50% + " + bubble.x + "px)",
                      top: "calc(50% + " + bubble.y + "px)",
                    }}
                  >
                    {bubble.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
