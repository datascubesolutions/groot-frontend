"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PowerBIHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 bg-background text-foreground">
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
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/5 blur-[150px] rounded-full pointer-events-none"
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
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground tracking-tight text-balance antialiased"
            >
              <span className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block">Business Intelligence</span>
              Power BI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-normal max-w-2xl py-2 text-balance antialiased"
            >
              Dashboards people actually use. Self-service analytics with the guardrails that keep Finance from losing sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                className="w-full sm:w-auto bg-forest hover:bg-forest/90 text-white font-bold text-base px-8 py-7 rounded-full shadow-lg shadow-forest/20 transition-all group"
              >
                <Link href="/contact?service=powerbi-assessment">
                  Get Dashboard Assessment
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform rotate-3 scale-105 pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-white/50 rounded-3xl shadow-xl transform -rotate-2 scale-105 pointer-events-none opacity-50" />
            <div className="relative bg-white rounded-3xl shadow-2xl border border-border overflow-hidden p-8 h-[400px]">
              <div className="relative w-full h-[350px] flex items-end justify-center gap-4 pb-12 mt-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/5 to-transparent rounded-full blur-3xl" />

                {[40, 70, 45, 90, 60, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: height + '%', opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5, type: "spring" }}
                    className="w-12 rounded-t-lg bg-gradient-to-t relative group"
                    style={{
                      background: i === 5 ? "linear-gradient(to top, rgba(22,78,60,1), rgba(42,157,143,1))" : "linear-gradient(to top, var(--border), var(--muted))"
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + i * 0.1 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {height}%
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white rounded-2xl shadow-xl border border-border"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-forest border-t-forest/50 border-r-forest/50" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
