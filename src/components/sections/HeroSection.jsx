"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  }, [isMounted]);



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
      {/* Background Pattern */}
      {/* Background Pattern - Removed as per user request */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-mint-light/30" />



      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-10">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-[hsl(var(--burgundy))] via-[hsl(var(--forest))] to-[hsl(var(--primary))] bg-clip-text text-transparent pb-2">
                EXTRACT. REFINE. DELIVER.
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Turning messy data into{" "}
              <span className="text-gradient">intelligent decisions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We build modern data platforms and AI-powered systems that
              transform complex, scattered information into clarity, automation,
              and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="group">
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Explore Services
              </Button>
            </motion.div>


          </motion.div>

          {/* Right: Animated "GROOT" Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center -mt-12 lg:-mt-24"
          >
            <div className="relative w-full h-80 md:h-96">
              {/* Animated pulsing glow effect */}
              {/* Animated pulsing glow effect - Removed as per user request */}

              {/* SVG Container for animated logo paths */}
              <svg
                viewBox="105 55 220 120"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))' }}
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
                          scale: isPulsing ? [1, 1.05, 1] : 1,
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
                      scale: {
                        duration: 2.5,
                        repeat: isPulsing ? Infinity : 0,
                        ease: "easeInOut",
                        transformOrigin: "center"
                      }
                    }}
                  />
                ))}
              </svg>

<<<<<<< Updated upstream

=======
            {/* Analytics Text - Animates after logo assembly */}
            <div className="flex justify-center gap-[0.1em] md:gap-[0.2em] z-20 -mt-[45px] md:-mt-[65px] lg:-mt-[146px] -ml-[30px] md:-ml-[50px] lg:-ml-[90px]">
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
                  className="text-lg md:text-2xl lg:text-4xl font-normal tracking-tight bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent select-none font-sans pb-1"
                >
                  {char}
                </motion.span>
              ))}
>>>>>>> Stashed changes
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}

export default HeroSection;
