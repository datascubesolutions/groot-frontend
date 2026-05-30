// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CopilotHero() {
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
                Generative AI
              </span>
              Microsoft Copilot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-balance py-2 text-base font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-lg"
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
                className="group w-full rounded-full bg-forest px-6 py-4 text-sm font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 sm:w-auto"
              >
                <Link href="/contact?service=copilot-assessment">
                  Get Readiness Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization - Copilot UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden aspect-square max-h-[480px] w-full items-center justify-center p-8 md:aspect-[4/3] lg:flex"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(46,163,169,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01] lg:inset-8">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#2ea3a90A_1px,transparent_1px),linear-gradient(to_bottom,#2ea3a90A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2EA3A9]/20 blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#2EA3A9]/20 blur-[80px]"
              />
            </div>

            <div className="relative h-full w-full flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#2EA3A9]/5 to-transparent blur-2xl" />

              {/* Central Copilot Node */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-[#2EA3A9]/20 bg-white shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#2EA3A9]/5 to-transparent" />
                <Image src="/svg/copilot-icon.svg" alt="Copilot" width={64} height={64} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
                
                {/* AI Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[2rem] border border-[#2EA3A9]"
                />
              </motion.div>

              {/* Floating Chat Bubbles */}
              {[
                { text: "Summarize the Q3 report", x: -140, y: -100, delay: 0 },
                { text: "Draft an email to the client", x: 120, y: -70, delay: 1 },
                { text: "Analyze this dataset", x: -110, y: 110, delay: 2 },
                { text: "Create presentation slides", x: 130, y: 80, delay: 3 },
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
                  className="absolute z-30 max-w-[200px] whitespace-nowrap rounded-2xl rounded-bl-sm border border-[#2EA3A9]/20 bg-white px-5 py-3 text-sm font-medium text-foreground/80 shadow-[0_10px_30px_-10px_rgba(46,163,169,0.2)]"
                  style={{
                    left: `calc(50% + ${bubble.x}px)`,
                    top: `calc(50% + ${bubble.y}px)`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#2EA3A9]/60" />
                    {bubble.text}
                  </div>
                </motion.div>
              ))}

              {/* Connecting Data Lineage Lines */}
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="140"
                  fill="none"
                  stroke="#2EA3A9"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
