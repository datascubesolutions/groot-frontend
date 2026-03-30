"use client";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Database, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FabricHero() {
  const reduceMotion = useReducedMotion();

  const technologies = [
    {
      name: "Microsoft",
      icon: (
        <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="11" height="11" fill="#F25022" />
          <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
          <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
          <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
        </svg>
      )
    },
    {
      name: "Azure",
      icon: <Image src="/svg/azure-2.svg" alt="Azure" width={20} height={20} className="w-5 h-auto object-contain" />
    },
    {
      name: "Fabric",
      icon: <Image src="/svg/fabric_48_color.svg" alt="Fabric" width={20} height={20} className="w-5 h-5 object-contain" />
    },
    {
      name: "Purview",
      icon: <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" width={20} height={20} className="w-5 h-5 object-contain" />
    },
    {
      name: "Power BI",
      icon: <Image src="/svg/power-bi-icon.svg" alt="Power BI" width={20} height={20} className="w-5 h-5 object-contain" />
    },
    {
      name: "Copilot",
      icon: <Image src="/svg/copilot-icon.svg" alt="Copilot" width={20} height={20} className="w-5 h-5 object-contain" />
    }
  ];

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

      {/* Decorative dots top right (subtle) */}
      <div className="absolute top-32 right-12 opacity-20 pointer-events-none hidden lg:block">
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#164e3c" />
          </pattern>
          <rect x="0" y="0" width="150" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <div className="space-y-6 lg:pr-8">

            {/* Arrows decorative top */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center text-forest opacity-80"
            >
              <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-5">
                <path d="M0 4L8 12L0 20V4Z" fill="currentColor" />
                <path d="M12 4L20 12L12 20V4Z" fill="currentColor" />
                <path d="M24 4L32 12L24 20V4Z" fill="currentColor" />
                <path d="M36 4L44 12L36 20V4Z" fill="currentColor" />
                <path d="M48 4L56 12L48 20V4Z" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground tracking-tight text-balance antialiased"
            >
              <span className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block">One Platform. One Truth.</span>
              Microsoft Fabric
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-normal max-w-2xl py-2 text-balance antialiased"
            >
              Stop chasing the same number. From raw ingestion to board-ready dashboards — unified, governed, and ready for AI. <span className="text-foreground font-medium">In 10 weeks.</span>
            </motion.p>


            {/* Core Technologies List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-6">
                Platform & Ecosystem:
              </h3>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 max-w-lg">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0">
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-foreground text-sm tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <Button
                asChild
                className="w-full sm:w-auto bg-forest hover:bg-forest/90 text-white font-bold text-base px-8 py-7 rounded-full shadow-lg shadow-forest/20 transition-all group"
              >
                <Link href="/contact?service=fabric-assessment">
                  Get Readiness Assessment
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

          </div>

          {/* Right visualization - Custom Microsoft Fabric Architecture UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex relative w-full aspect-square md:aspect-[4/3] max-h-[600px] items-center justify-center p-8"
          >
            {/* Rich Glassmorphic Ambient Backing */}
            <div className="absolute inset-4 lg:inset-8 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/80 shadow-[0_20px_80px_-20px_rgba(0,130,114,0.15)] z-0 overflow-hidden transform transition-transform hover:scale-[1.01] duration-700">
               {/* Inner Architectural Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082720A_1px,transparent_1px),linear-gradient(to_bottom,#0082720A_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
               
               {/* Corner Dot Matrices */}
               <svg className="absolute top-8 right-8 opacity-40 text-[#008272]" width="80" height="80" viewBox="0 0 80 80">
                 <pattern id="dots-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
                 <rect x="0" y="0" width="80" height="80" fill="url(#dots-tr)" />
               </svg>
               <svg className="absolute bottom-8 left-8 opacity-40 text-[#008272]" width="80" height="80" viewBox="0 0 80 80">
                 <pattern id="dots-bl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
                 <rect x="0" y="0" width="80" height="80" fill="url(#dots-bl)" />
               </svg>

               {/* Soft Internal Glowing Orbs */}
               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-32 -right-32 w-80 h-80 bg-[#00A4EF]/20 rounded-full blur-[80px] pointer-events-none" />
               <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#008272]/20 rounded-full blur-[80px] pointer-events-none" />
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center font-sans">
              
              {/* Top Layer - Ingestion */}
              <div className="flex gap-4 xl:gap-8 mb-8 xl:mb-12">
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 w-36 xl:w-40 z-10">
                  <div className="w-8 h-8 rounded-lg bg-[#00A4EF]/10 flex items-center justify-center text-[#00A4EF]">
                    <Image src="/svg/azure-2.svg" alt="Azure Data Factory" width={16} height={16} />
                  </div>
                  <div className="flex-1"><div className="h-1.5 w-full bg-muted rounded mb-1" /><div className="h-1.5 w-2/3 bg-[#00A4EF]/30 rounded" /></div>
                </motion.div>
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 w-36 xl:w-40 z-10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                     <Database className="w-4 h-4" />
                  </div>
                  <div className="flex-1"><div className="h-1.5 w-full bg-muted rounded mb-1" /><div className="h-1.5 w-2/3 bg-emerald-500/30 rounded" /></div>
                </motion.div>
              </div>

              {/* Middle Layer - OneLake & Fabric Core */}
              <div className="relative z-20 w-64 p-6 rounded-3xl bg-white border border-border shadow-2xl flex flex-col items-center justify-center gap-4 group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#008272]/5 to-transparent rounded-3xl" />
                <div className="w-16 h-16 rounded-2xl bg-[#008272]/10 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 ring-1 ring-[#008272]/20">
                   <Image src="/svg/fabric_48_color.svg" alt="Microsoft Fabric" width={32} height={32} className="relative z-10" />
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-lg font-bold text-foreground">OneLake Base</h3>
                  <p className="text-xs text-[#008272] font-semibold uppercase tracking-wider mt-1">Delta Parquet</p>
                </div>
                {/* Data streaming animation */}
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden relative">
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 left-0 w-1/2 bg-[#008272] rounded-full" />
                </div>
              </div>

              {/* Bottom Layer - Consumption */}
              <div className="flex justify-center flex-wrap gap-3 xl:gap-4 mt-8 xl:mt-12 z-10 max-w-[400px]">
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="bg-white px-3 py-2.5 rounded-xl shadow-lg border border-border flex items-center gap-2">
                  <Image src="/svg/power-bi-icon.svg" alt="Power BI" width={16} height={16} />
                  <span className="text-xs xl:text-sm font-semibold text-foreground">Power BI</span>
                </motion.div>
                <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }} className="bg-white px-3 py-2.5 rounded-xl shadow-lg border border-border flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm flex items-center justify-center text-blue-500"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/></svg></div>
                  <span className="text-xs xl:text-sm font-semibold text-foreground">Synapse</span>
                </motion.div>
                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }} className="bg-white px-3 py-2.5 rounded-xl shadow-lg border border-border flex items-center gap-2">
                  <Image src="/svg/copilot-icon.svg" alt="Copilot" width={16} height={16} />
                  <span className="text-xs xl:text-sm font-semibold text-foreground">Copilot</span>
                </motion.div>
                <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} className="bg-white px-3 py-2.5 rounded-xl shadow-lg border border-border flex items-center gap-2">
                  <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" width={16} height={16} />
                  <span className="text-xs xl:text-sm font-semibold text-foreground">Purview</span>
                </motion.div>
              </div>

              {/* Connecting Lines background SVG */}
              <svg className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 400 400">
                {/* Lines from top to middle */}
                <motion.path animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 120 120 Q 200 150 200 180" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                <motion.path animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 280 120 Q 200 150 200 180" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Lines from middle to bottom */}
                <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 100 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 200 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />
                <motion.path animate={{ strokeDashoffset: [0, 12] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} d="M 200 280 Q 200 320 300 340" fill="none" stroke="currentColor" className="text-[#008272]" strokeWidth="2" strokeDasharray="6 6" />

                {/* Floating Abstract Plus Signs to fill whitespace */}
                <g className="text-[#008272]/30">
                   <motion.path animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} d="M 80 200 L 90 200 M 85 195 L 85 205" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                   <motion.path animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} d="M 320 250 L 330 250 M 325 245 L 325 255" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                   <motion.circle animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} cx="300" cy="180" r="3" fill="currentColor" />
                   <motion.circle animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} cx="120" cy="280" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
