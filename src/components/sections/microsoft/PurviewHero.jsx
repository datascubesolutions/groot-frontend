// @ts-nocheck
"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Database,
  FileText,
  Server,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PurviewHero() {
  return (
    <section className="bg-grid-slate-50/50 relative flex min-h-[85vh] items-center overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 bg-background/90" />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Microsoft Purview
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl leading-relaxed text-muted-foreground"
            >
              Data governance that gets used. Discovery, lineage,
              classification, and policy — across your actual data estate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link href="/contact?service=purview-assessment">
                <Button className="group w-full rounded-full bg-brand-red px-8 py-6 text-lg font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red/90 sm:w-auto">
                  Get Governance Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block aspect-square max-h-[600px] w-full p-8"
          >
            {/* Ambient Base */}
            <div className="absolute inset-4 z-0 transform overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 shadow-[0_20px_80px_-20px_rgba(43,113,196,0.15)] backdrop-blur-3xl transition-transform duration-700 hover:scale-[1.01]">
              {/* Inner Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#2b71c40A_1px,transparent_1px),linear-gradient(to_bottom,#2b71c40A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />

              {/* Soft Internal Glowing Orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2B71C4]/20 blur-[80px]"
              />
            </div>

            <div className="relative h-full w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B71C4]/10 to-transparent blur-3xl" />

              {/* Central Purview Node */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[#2B71C4]/20 bg-white shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#2B71C4]/5 to-transparent" />
                <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Microsoft Purview" width={64} height={64} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />

                {/* Scanning radar line */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute inset-0 rounded-[2rem] overflow-hidden"
                >
                  <div className="h-1/2 w-1/2 origin-bottom-right bg-gradient-to-br from-[#2B71C4]/20 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Floating Data Assets being scanned */}
              {[
                { icon: FileText, x: -130, y: -90, delay: 0 },
                { icon: Database, x: 130, y: -50, delay: 0.5 },
                { icon: Cloud, x: -110, y: 110, delay: 1 },
                { icon: Server, x: 130, y: 110, delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [item.y - 10, item.y + 10, item.y - 10],
                    borderColor: [
                      "#e5e7eb",
                      "rgba(43,113,196, 0.4)",
                      "#e5e7eb",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                  }}
                  className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-lg"
                  style={{
                    left: "calc(50% + " + item.x + "px)",
                    top: "calc(50% + " + item.y + "px)",
                  }}
                >
                  <item.icon className="h-6 w-6 text-slate-500" />
                  
                  {/* Status Indicator */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 4,
                      delay: item.delay + 0.5,
                      repeat: Infinity,
                    }}
                    className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm"
                  />
                  
                  {/* Classification Tag */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 4,
                      delay: item.delay + 1,
                      repeat: Infinity,
                    }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded bg-[#2B71C4] px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm"
                  >
                    SECURE
                  </motion.div>
                </motion.div>
              ))}

              {/* Connecting Data Lineage Lines */}
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30">
                <motion.path
                  d="M 50% 50% L 20% 25% M 50% 50% L 80% 35% M 50% 50% L 25% 75% M 50% 50% L 75% 80%"
                  stroke="#2B71C4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
