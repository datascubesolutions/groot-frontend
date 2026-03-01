"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Cloud } from "lucide-react";
import Link from "next/link";

export function AzureHero() {
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
              Azure Data Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              The foundation beneath your data platform. Storage, networking, security — configured for enterprise analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=azure-assessment">
                <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-brand-red/20 transition-all group">
                  Get Infrastructure Assessment
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 to-transparent blur-2xl" />

                {/* Isometric Servers Stacking */}
                <div className="relative z-10 w-64 h-64 flex flex-col items-center justify-end perspective-1000 mt-12">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                      className="w-48 h-16 bg-white rounded-lg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-border mb-4 relative overflow-hidden flex items-center px-6"
                    >
                      {/* Server lights */}
                      <div className="flex gap-2 w-full">
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: i }} className="w-2 h-2 rounded-full bg-brand-red/30" />
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i + 0.2 }} className="w-2 h-2 rounded-full bg-brand-red/60" />
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.2, repeat: Infinity, delay: i + 0.4 }} className="w-2 h-2 rounded-full bg-brand-red" />
                        <div className="ml-auto w-12 h-2 rounded-full bg-muted" />
                      </div>

                      {/* Data flow pulse */}
                      <motion.div
                        animate={{ x: [-100, 200] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-brand-red/10 to-transparent skew-x-12"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Clouds */}
                <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-4 text-muted/30">
                  <Cloud className="w-24 h-24" />
                </motion.div>
                <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-4 text-muted/30">
                  <Cloud className="w-32 h-32" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
