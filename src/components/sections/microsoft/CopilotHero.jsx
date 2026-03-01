"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CopilotHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 bg-grid-slate-50/50">
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              Microsoft Copilot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              AI that knows your business. Deploy it right, and people use it. Deploy it wrong, and it becomes expensive shelfware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=copilot-assessment">
                <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-brand-red/20 transition-all group">
                  Get Readiness Assessment
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-radial from-brand-red/10 to-transparent blur-2xl" />

                {/* Central AI Orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 rounded-full bg-gradient-to-tr from-brand-red via-brand-red/80 to-brand-red/60 opacity-90 blur-md absolute z-10"
                />
                <div className="w-32 h-32 rounded-full bg-white z-20 shadow-2xl flex items-center justify-center relative border border-white/50">
                  <Sparkles className="w-12 h-12 text-brand-red" />
                </div>

                {/* Floating Chat Bubbles */}
                {[
                  { text: "Summarize the Q3 report", x: -120, y: -100, delay: 0 },
                  { text: "Draft an email to the client", x: 100, y: -60, delay: 1 },
                  { text: "Analyze this dataset", x: -80, y: 120, delay: 2 },
                  { text: "Create presentation slides", x: 120, y: 80, delay: 3 }
                ].map((bubble, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [bubble.y + 20, bubble.y, bubble.y - 10, bubble.y - 30] }}
                    transition={{ duration: 6, delay: bubble.delay, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
                    className="absolute z-30 px-4 py-3 bg-white shadow-lg rounded-2xl rounded-bl-sm border border-border text-sm font-medium text-foreground/80 max-w-[150px] whitespace-nowrap"
                    style={{ left: "calc(50% + " + bubble.x + "px)", top: "calc(50% + " + bubble.y + "px)" }}
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
