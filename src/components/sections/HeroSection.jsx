"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Database, Globe, Server, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { logoPaths } from "./logoData";

export function HeroSection() {
  const [isAssembled, setIsAssembled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Generate paths that will form the GROOT logo
  const logoElements = useMemo(() => {
    if (!isMounted) return [];

    // 8 different directions for elements to come from
    const directions = [
      { x: -1, y: -1, name: 'top-left' },
      { x: 1, y: -1, name: 'top-right' },
      { x: -1, y: 1, name: 'bottom-left' },
      { x: 1, y: 1, name: 'bottom-right' },
      { x: 0, y: -1, name: 'top' },
      { x: 0, y: 1, name: 'bottom' },
      { x: -1, y: 0, name: 'left' },
      { x: 1, y: 0, name: 'right' },
    ];

    return logoPaths.map((d, index) => {
      const direction = directions[index % directions.length];
      const distance = 400 + Math.random() * 300;

      return {
        id: index,
        d: d,
        // Start position logic:
        // Since we are transforming the path element itself,
        // 0,0 is the final position (identity transform).
        // We want to start at some offset.
        initialX: direction.x * distance,
        initialY: direction.y * distance,
        delay: Math.random() * 0.8,
      };
    });
  }, [isMounted, logoPaths]);



  useEffect(() => {
    setIsMounted(true);
    // Start assembly animation after a short delay
    const assemblyTimer = setTimeout(() => setIsAssembled(true), 800);
    // Start pulsing after assembly completes
    const pulseTimer = setTimeout(() => setIsPulsing(true), 3500);

    return () => {
      clearTimeout(assemblyTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern with Vignette Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,hsl(var(--mint)/0.15),transparent)]"></div>
      </div>

      {/* Floating "Satellite" Elements (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {/* Left: Extract (Data Ingestion) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[35%] left-[5%] 2xl:left-[10%] p-5 rounded-2xl glass border border-white/10 shadow-2xl backdrop-blur-xl max-w-[240px]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/5">
                <Database className="w-4 h-4 text-[hsl(var(--mint))]" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">Ingestion</div>
                <div className="text-[10px] text-muted-foreground">3 Sources Active</div>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>

          <div className="space-y-3">
            {/* Source Item 1 */}
            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <Globe className="w-4 h-4 text-blue-400 opacity-70" />
              <div className="flex-1 h-1.5 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-full bg-blue-400/50 rounded-full"
                />
              </div>
            </div>
            {/* Source Item 2 */}
            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <Server className="w-4 h-4 text-purple-400 opacity-70" />
              <div className="flex-1 h-1.5 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                  className="h-full bg-purple-400/50 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Deliver (Intelligence/Action) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-[35%] right-[5%] 2xl:right-[10%] p-5 rounded-2xl glass border border-white/10 shadow-2xl backdrop-blur-xl max-w-[240px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--forest))] flex items-center justify-center shadow-lg shadow-primary/20">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Live Impact</div>
              <div className="text-[10px] text-muted-foreground">Optimization +84%</div>
            </div>
          </div>

          <div className="relative h-16 w-full bg-white/5 rounded-lg border border-white/5 overflow-hidden flex items-end justify-between px-2 pb-2">
            {/* Simulated Graph Bars */}
            {[40, 65, 50, 80, 60, 95, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1,
                  ease: "anticipate"
                }}
                className="w-2 bg-gradient-to-t from-[hsl(var(--forest))] to-[hsl(var(--primary))] rounded-t-sm opacity-80"
              />
            ))}

            {/* Pulse Line Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Activity className="w-3 h-3" /> Real-time
            </span>
            <span className="text-xs font-bold text-primary">+24.5%</span>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 mt-4 lg:mt-0">

          {/* Animated "GROOT" Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center w-full max-w-5xl"
          >
            <motion.div
              className="relative w-full h-48 md:h-64 lg:h-[24rem]"
              animate={isPulsing ? {
                scale: [1, 1.02, 1],
              } : {
                scale: 1,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                viewBox="105 55 220 120"
                className="w-full h-full"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <linearGradient id="groot-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--burgundy))" />
                    <stop offset="50%" stopColor="hsl(var(--forest))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
                {logoElements.map((item) => (
                  <motion.path
                    key={item.id}
                    d={item.d}
                    fill="url(#groot-gradient)"
                    initial={{
                      x: item.initialX,
                      y: item.initialY,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={
                      isAssembled
                        ? {
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        }
                        : {
                          x: item.initialX,
                          y: item.initialY,
                          opacity: 0,
                          scale: 0.5,
                        }
                    }
                    transition={{
                      duration: 1.5,
                      delay: item.delay,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Extract • Refine • Deliver</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-foreground">
                Turning messy data into<br />
                <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent">intelligent decisions</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Build modern data platforms and AI-powered systems that transform complex information into clarity, automation, and sustainable growth.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <Link href="/contact">
                <Button variant="hero" size="xl" className="group text-lg px-8">
                  Start a Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="hero-outline" size="xl" className="text-lg px-8">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
