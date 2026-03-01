"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PowerBIHero() {
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
              Power BI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Dashboards people actually use. Self-service analytics with the guardrails that keep Finance from losing sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=powerbi-assessment">
                <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-brand-red/20 transition-all group">
                  Get Dashboard Assessment
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
              <div className="relative w-full h-[350px] flex items-end justify-center gap-4 pb-12 mt-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent rounded-full blur-3xl" />

                {[40, 70, 45, 90, 60, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: height + '%', opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5, type: "spring" }}
                    className="w-12 rounded-t-lg bg-gradient-to-t relative group"
                    style={{
                      background: i === 5 ? "linear-gradient(to top, rgb(139,29,29), rgb(180,50,50))" : "linear-gradient(to top, var(--border), var(--muted))"
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
                  <div className="w-16 h-16 rounded-full border-4 border-brand-red border-t-brand-red/50 border-r-brand-red/50" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
