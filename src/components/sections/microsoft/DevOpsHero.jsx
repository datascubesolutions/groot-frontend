"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function DevOpsHero() {
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
              Azure DevOps (DataOps)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Engineering discipline for analytics. Version control, CI/CD, and testing — because 'I'll just update production' isn't a deployment strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=devops-assessment">
                <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-brand-red/20 transition-all group">
                  Assess DataOps Maturity
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
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent blur-3xl opacity-50" />

                {/* Animated Pipeline path */}
                <svg className="absolute inset-0 w-full h-[300px] mt-12" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <path id="pipelinePath" d="M 50 100 Q 150 20 200 100 T 350 100" fill="none" stroke="hsl(var(--border))" strokeWidth="4" strokeLinecap="round" />
                  <motion.path
                    d="M 50 100 Q 150 20 200 100 T 350 100"
                    fill="none"
                    stroke="rgb(139,29,29)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.5 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Pipeline stages */}
                <div className="absolute flex justify-between w-[300px] z-10 bottom-24">
                  {['Dev', 'Test', 'Prod'].map((stage, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm border border-border">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-red flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-bold text-foreground">{stage}</span>
                    </div>
                  ))}
                </div>

                {/* Moving data packets */}
                <motion.div
                  animate={{
                    x: [0, 250],
                    y: [0, -40, 0, 40, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute z-20 w-6 h-6 bg-brand-red rounded-md shadow-lg shadow-brand-red/40 left-[calc(50%-125px)] top-[calc(50%-20px)]"
                />
                <motion.div
                  animate={{
                    x: [0, 250],
                    y: [0, -40, 0, 40, 0]
                  }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute z-20 w-6 h-6 bg-brand-red/70 rounded-md shadow-lg shadow-brand-red/40 left-[calc(50%-125px)] top-[calc(50%-20px)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
