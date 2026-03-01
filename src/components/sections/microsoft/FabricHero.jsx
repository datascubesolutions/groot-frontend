"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FabricHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 bg-background text-foreground">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground"
            >
              Microsoft Fabric
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed font-medium"
            >
              One platform. All your data. From raw ingestion to board-ready dashboards — unified, governed, and ready for AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact?service=fabric-assessment">
                <Button className="w-full sm:w-auto bg-forest hover:bg-forest/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-forest/20 transition-all group">
                  Get Readiness Assessment
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Technology Partners Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-8 sm:px-10 sm:py-8 max-w-xl">
                <div className="flex flex-col gap-8">
                  {/* Top row — Microsoft, Fabric, Power BI */}
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    {/* Microsoft */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <svg width="28" height="28" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="11" height="11" fill="#F25022" />
                        <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
                        <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
                        <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
                      </svg>
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Microsoft</span>
                    </div>

                    {/* Microsoft Fabric */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Image
                        src="/svg/fabric_48_color.svg"
                        alt="Microsoft Fabric"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Fabric</span>
                    </div>

                    {/* Power BI */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Image
                        src="/svg/power-bi-icon.svg"
                        alt="Power BI"
                        width={30}
                        height={30}
                        className="h-7 w-7"
                      />
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Power BI</span>
                    </div>
                  </div>

                  {/* Bottom row — Azure, Purview, Copilot */}
                  <div className="flex items-center justify-center gap-10 flex-wrap">
                    {/* Azure */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Image
                        src="/svg/azure-2.svg"
                        alt="Azure"
                        width={28}
                        height={28}
                        className="h-7 w-auto"
                      />
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Azure</span>
                    </div>

                    {/* Microsoft Purview */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Image
                        src="/svg/microsoft-purview-seeklogo.svg"
                        alt="Microsoft Purview"
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Purview</span>
                    </div>

                    {/* Copilot */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Image
                        src="/svg/copilot-icon.svg"
                        alt="Copilot"
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                      <span className="text-lg font-semibold text-gray-700 tracking-tight">Copilot</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-forest/10 rounded-3xl transform rotate-3 scale-105 pointer-events-none blur-sm" />
            <div className="absolute inset-0 bg-black/5 rounded-3xl transform -rotate-2 scale-105 pointer-events-none blur-sm" />

            <div className="relative bg-white rounded-3xl shadow-2xl border border-border overflow-hidden p-8 h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central OneLake */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 40px rgba(22,78,60,0.15)", "0 0 0px rgba(0,0,0,0)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-3xl bg-white absolute z-20 flex items-center justify-center shadow-xl border border-forest/20"
                >
                  <Database className="w-12 h-12 text-forest" />
                </motion.div>

                {/* Orbiting nodes */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute z-10 w-16 h-16 rounded-2xl bg-white shadow-lg border border-border flex items-center justify-center"
                    animate={{
                      rotate: 360,
                      x: Math.cos(i * (Math.PI * 2 / 5)) * 140,
                      y: Math.sin(i * (Math.PI * 2 / 5)) * 140
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ originX: 0.5, originY: 0.5 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-forest/80" />
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <motion.circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" className="text-forest/20" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }}
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
