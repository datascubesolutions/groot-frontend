"use client";

import { SideParticles } from "@/components/animations/SideParticles";
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Left Zone: Chaotic/Messy Data */}
        <SideParticles side="left" variant="chaotic" />

        {/* Right Zone: Structured/Intelligent Data */}
        <SideParticles side="right" variant="structured" />

        {/* Grid Pattern with Vignette Mask - Reduced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Data Architect Radial Gradient: White center -> Faint Mint Edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,hsl(160,20%,97%)_60%,hsl(160,20%,94%)_100%)] opacity-80 mix-blend-multiply"></div>
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
                viewBox="95 45 240 140"
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

              {/* Analytics Text - Animates after logo assembly */}
              <div className="flex justify-center gap-[0.02em] md:gap-[0.04em] z-20 -mt-[50px] md:-mt-[75px] lg:-mt-[155px] -ml-[25px] md:-ml-[45px] lg:-ml-[80px]">
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
                    className="text-base md:text-xl lg:text-3xl font-bold tracking-normal bg-gradient-to-br from-[hsl(var(--groot-dark-primary))] to-[hsl(var(--groot-dark-forest))] bg-fixed bg-clip-text text-transparent select-none font-sans pb-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 relative"
          >
            {/* Glassmorphic Backdrop */}
            <div className="absolute inset-0 -z-10 bg-background/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl scale-[1.1] opacity-0 animate-in fade-in duration-1000 fill-mode-forwards" style={{ animationDelay: '1s' }} />

            <div className="relative p-6 md:p-10 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.1em] text-foreground/80 drop-shadow-sm whitespace-nowrap">MICROSOFT FABRIC & AI FOUNDRY SPECIALISTS</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter mb-4 text-foreground drop-shadow-sm">
                Your data wasn't built <br className="hidden md:block" />
                for <span className="font-['var(--font-playfair)'] italic font-semibold tracking-wide bg-gradient-to-r from-[#059669] to-[#022c22] bg-clip-text text-transparent px-2">what&apos;s coming.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Production-grade Fabric. Governed data. Dashboards your board actually trusts. The foundation that makes AI possible — and gives you the edge.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-8 pt-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="hero" size="xl" className="group text-lg px-8 shadow-lg shadow-mint/20">
                      Get Your Data Readiness Score
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-8 opacity-90">
                  {/* Azure */}
                  <div className="flex items-center gap-2 group cursor-default">
                    <img src="/svg/azure-2.svg" alt="Azure" className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                    <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">Azure</span>
                  </div>

                  <span className="h-1 w-1 rounded-full bg-border"></span>

                  {/* Fabric */}
                  <div className="flex items-center gap-2 group cursor-default">
                    <img src="/svg/fabric_48_color.svg" alt="Fabric" className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                    <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">Fabric</span>
                  </div>

                  <span className="h-1 w-1 rounded-full bg-border"></span>

                  {/* Purview */}
                  <div className="flex items-center gap-2 group cursor-default">
                    <img src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                    <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">Purview</span>
                  </div>

                  <span className="h-1 w-1 rounded-full bg-border"></span>

                  {/* Power BI */}
                  <div className="flex items-center gap-2 group cursor-default">
                    {/* Using Fabric logo logic from ToolsSection */}
                    <img src="/svg/fabric_48_color.svg" alt="Power BI" className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                    <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">Power BI</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
