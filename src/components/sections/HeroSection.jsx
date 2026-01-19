"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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





      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-10 mt-4 lg:mt-0">

          {/* Animated "GROOT" Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center w-full max-w-5xl"
          >
            <motion.div
              className="relative w-full h-48 md:h-64 lg:h-[22rem]"
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

              {/* Analytics Text - Animates after logo assembly */}
              <div className="flex justify-center gap-[0.02em] md:gap-[0.04em] z-20 -mt-[45px] md:-mt-[65px] lg:-mt-[145px] -ml-[25px] md:-ml-[45px] lg:-ml-[80px]">
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
                    className="text-base md:text-xl lg:text-3xl font-bold tracking-normal bg-gradient-to-tr from-[hsl(var(--burgundy))] via-[hsl(var(--forest))] to-[hsl(var(--primary))] bg-fixed bg-clip-text text-transparent select-none font-sans pb-1"
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
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-foreground/80 drop-shadow-sm">Extract • Refine • Deliver</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-foreground">
                Turning messy data into<br />
                <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent">intelligent decisions</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
