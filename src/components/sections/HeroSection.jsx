"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, Cpu, Zap, BarChart } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { logoPaths } from "./logoData";

const techStack = [
  { name: "Microsoft Azure", icon: Cloud },
  { name: "Microsoft Fabric", icon: BarChart },
  { name: "Azure Databricks", icon: Database },
  { name: "AI Foundry", icon: Cpu },
];

export function HeroSection() {
  const [isAssembled, setIsAssembled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [logoElements, setLogoElements] = useState([]);

  useEffect(() => {
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

    const elements = logoPaths.map((d, index) => {
      const direction = directions[index % directions.length];
      const distance = 400 + Math.random() * 300;

      return {
        id: index,
        d: d,
        initialX: direction.x * distance,
        initialY: direction.y * distance,
        delay: Math.random() * 0.8,
      };
    });

    setLogoElements(elements);

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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern with Vignette Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,hsl(var(--mint)/0.15),transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">

          {/* Animated "GROOT" Logo - More compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center w-full max-w-4xl"
          >
            <motion.div
              className="relative w-full h-40 md:h-52 lg:h-[18rem]"
              animate={isPulsing ? {
                scale: [1, 1.01, 1],
              } : {
                scale: 1,
              }}
              transition={{
                duration: 4,
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
                  <linearGradient id="groot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--groot-dark-primary))" />
                    <stop offset="100%" stopColor="hsl(var(--groot-dark-forest))" />
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

              {/* Analytics Text - Scaled down slightly */}
              <div className="flex justify-center gap-[0.02em] md:gap-[0.04em] z-20 -mt-[35px] md:-mt-[55px] lg:-mt-[115px] -ml-[20px] md:-ml-[40px] lg:-ml-[70px]">
                {"Analytics".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    animate={isAssembled ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 2.2 + index * 0.08,
                      ease: "easeOut"
                    }}
                    className="text-sm md:text-lg lg:text-2xl font-bold tracking-normal bg-gradient-to-br from-[hsl(var(--groot-dark-primary))] to-[hsl(var(--groot-dark-forest))] bg-fixed bg-clip-text text-transparent select-none font-sans pb-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-5xl mx-auto space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-foreground/80 drop-shadow-sm">Extract • Refine • Deliver</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-foreground">
                Enterprise Data & AI on<br />
                <span className="bg-gradient-to-r from-primary via-forest to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">Microsoft Azure</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Specializing in Microsoft Fabric, Azure Databricks, and AI Foundry to build modern data platforms that transform complex information into intelligent decisions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
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

            {/* Tech Stack Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="pt-12 border-t border-border/50"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">Specializing in the Microsoft Data Stack</p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 text-foreground/70 grayscale hover:grayscale-0 transition-all cursor-default group">
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <tech.icon size={20} />
                    </div>
                    <span className="text-sm md:text-base font-medium whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
