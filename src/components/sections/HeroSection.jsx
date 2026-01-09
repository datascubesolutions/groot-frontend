"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function HeroSection() {
  const [isAssembled, setIsAssembled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Generate dots that will form "GROOT" text in a clear, readable way
  const dots = useMemo(() => {
    if (!isMounted) return [];
    const dotPositions = [];

    // Define a clear "GROOT" pattern with proper letter spacing
    // Each letter is 5 units wide, with 1 unit spacing between letters
    const grootPattern = [
      // Row 0
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      // Row 1
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      // Row 2
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      // Row 3
      [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      // Row 4
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      // Row 5
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    ];

    // 8 different directions for dots to come from
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

    let id = 0;
    grootPattern.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 1) {
          const direction = directions[id % directions.length];
          const distance = 400 + Math.random() * 300; // Dots come from far away

          dotPositions.push({
            id: id++,
            targetX: colIndex * 12 - 170, // Center the text (29 cols * 12 / 2 approx 174)
            targetY: rowIndex * 12 - 30,
            startX: (colIndex * 12 - 170) + direction.x * distance,
            startY: (rowIndex * 12 - 30) + direction.y * distance,
            delay: Math.random() * 0.8,
            direction: direction.name,
          });
        }
      });
    });
    return dotPositions;
  }, [isMounted]);

  // Generate random positions for floating background dots
  const floatingDots = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
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

      {/* Floating Background Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-10">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Data Engineering & AI Solutions
              </span>
            </motion.div> */}

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

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 items-center justify-center lg:justify-start text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">MS</span>
                </div>
                <span className="text-sm">Microsoft Fabric</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">Az</span>
                </div>
                <span className="text-sm">Azure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">DB</span>
                </div>
                <span className="text-sm">Databricks</span>
              </div>
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

              {/* SVG Container for animated dots forming "GROOT" */}
              <svg
                viewBox="-200 -150 400 250"
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
                {dots.map((dot) => (
                  <motion.circle
                    key={dot.id}
                    r="5"
                    fill="url(#groot-gradient)"
                    className="drop-shadow-sm"
                    initial={{
                      cx: dot.startX,
                      cy: dot.startY,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={
                      isAssembled
                        ? {
                          cx: dot.targetX,
                          cy: dot.targetY,
                          opacity: 1,
                          scale: isPulsing ? [1, 1.15, 1] : 1,
                        }
                        : {
                          cx: dot.startX,
                          cy: dot.startY,
                          opacity: 0,
                          scale: 0,
                        }
                    }
                    transition={{
                      duration: 1.5,
                      delay: dot.delay,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                      scale: {
                        duration: 2.5,
                        repeat: isPulsing ? Infinity : 0,
                        ease: "easeInOut",
                      }
                    }}
                  />
                ))}
              </svg>

              {/* Orbiting accent dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-primary/50 shadow-lg"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    x: Math.cos((i / 8) * Math.PI * 2) * 180 - 5,
                    y: Math.sin((i / 8) * Math.PI * 2) * 140 - 5,
                    opacity: 0.6,
                  }}
                  transition={{
                    duration: 25 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: (i / 8) * 3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
