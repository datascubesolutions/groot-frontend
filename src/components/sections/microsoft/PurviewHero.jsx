"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, FileText, Server, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function PurviewHero() {
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
              Microsoft Purview
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Data governance that gets used. Discovery, lineage, classification, and policy — across your actual data estate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=purview-assessment">
                <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-brand-red/20 transition-all group">
                  Get Governance Assessment
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
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent blur-3xl" />

                {/* Central Shield */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-20 w-40 h-40 bg-white rounded-3xl shadow-2xl border border-border flex items-center justify-center"
                >
                  <ShieldAlert className="w-16 h-16 text-brand-red" />

                  {/* Scanning radar line */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                  >
                    <div className="w-1/2 h-1/2 bg-gradient-to-br from-brand-red/20 to-transparent origin-bottom-right" />
                  </motion.div>
                </motion.div>

                {/* Floating Data Assets being scanned */}
                {[
                  { icon: FileText, x: -140, y: -80, delay: 0 },
                  { icon: Database, x: 140, y: -40, delay: 0.5 },
                  { icon: Cloud, x: -120, y: 100, delay: 1 },
                  { icon: Server, x: 120, y: 120, delay: 1.5 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [item.y - 10, item.y + 10, item.y - 10],
                      borderColor: ["#e5e7eb", "rgba(139,29,29, 0.5)", "#e5e7eb"]
                    }}
                    transition={{ duration: 4, delay: item.delay, repeat: Infinity }}
                    className="absolute z-10 w-16 h-16 bg-white rounded-xl shadow-md border-2 border-border flex items-center justify-center"
                    style={{ left: "calc(50% + " + item.x + "px)", top: "calc(50% + " + item.y + "px)" }}
                  >
                    <item.icon className="w-6 h-6 text-muted-foreground" />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 4, delay: item.delay + 0.5, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
                    />
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
                  <motion.path
                    d="M 50% 50% L 20% 30% M 50% 50% L 80% 40% M 50% 50% L 25% 75% M 50% 50% L 75% 80%"
                    stroke="rgb(139,29,29)" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
