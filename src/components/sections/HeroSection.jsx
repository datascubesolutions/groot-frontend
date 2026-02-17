"use client";

import { SideParticles } from "@/components/animations/SideParticles";
import { Button } from "@/components/ui/Button";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { logoPaths } from "./logoData";

export function HeroSection() {
  const [textAnimationDone, setTextAnimationDone] = useState(false);
  const [isAssembled, setIsAssembled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);
  const svgRef = useRef(null);

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
    // Mount particles after assembly is mostly done (frees main thread for spring animations)
    const particlesTimer = setTimeout(() => setParticlesReady(true), 3000);
    // Start pulsing after assembly completes
    const pulseTimer = setTimeout(() => setIsPulsing(true), 3500);
    // Mark animation done — swap motion.path → static path & clean up will-change
    const doneTimer = setTimeout(() => setAnimationDone(true), 4000);

    return () => {
      clearTimeout(assemblyTimer);
      clearTimeout(particlesTimer);
      clearTimeout(pulseTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Clean up will-change on SVG after animations settle
  useEffect(() => {
    if (animationDone && svgRef.current) {
      svgRef.current.style.willChange = "auto";
      svgRef.current.style.transform = "";
    }
  }, [animationDone]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative h-screen min-h-[100dvh] flex flex-col overflow-y-auto overflow-x-hidden pt-28 md:pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background">
          {/* Particles deferred until assembly completes to free main thread */}
          {particlesReady && (
            <>
              <SideParticles side="left" variant="chaotic" />
              <SideParticles side="right" variant="structured" />
            </>
          )}

          {/* Grid Pattern with Vignette Mask - Reduced opacity */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          {/* Data Architect Radial Gradient: White center -> Faint Mint Edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,hsl(160,20%,97%)_60%,hsl(160,20%,94%)_100%)] opacity-80 mix-blend-multiply"></div>
        </div>

        {/* GROOT Logo + Content - Logo fixed, gap pushes text below */}
        <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-0 relative z-10 container-padding">
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center w-full max-w-5xl"
          >
            <m.div
              className="relative w-full aspect-[12/7] md:h-72 lg:h-[24rem]"
              animate={isPulsing ? {
                scale: [1, 1.02, 1],
              } : {
                scale: 1,
              }}
              transition={{
                duration: 3,
                repeat: 3,
                ease: "easeInOut"
              }}
            >
              <svg
                ref={svgRef}
                viewBox="95 45 240 140"
                className="w-full h-full"
                style={animationDone
                  ? { overflow: "visible" }
                  : { overflow: "visible", willChange: "transform", transform: "translateZ(0)" }
                }
              >
                <defs>
                  <linearGradient id="groot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--groot-dark-primary))" />
                    <stop offset="100%" stopColor="hsl(var(--groot-dark-forest))" />
                  </linearGradient>
                </defs>
                {animationDone
                  ? logoPaths.map((d, i) => (
                    <path key={i} d={d} fill="url(#groot-gradient)" />
                  ))
                  : logoElements.map((item) => (
                    <m.path
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
                  ))
                }
              </svg>

              {/* Analytics Text - Animates after logo assembly */}
              <div className="flex justify-center gap-[0.02em] md:gap-[0.04em] z-20 -mt-[14%] md:-mt-[85px] lg:-mt-[170px] -ml-[7%] md:-ml-[50px] lg:-ml-[88px]">
                {"Analytics".split("").map((char, index) => (
                  <m.span
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
                  </m.span>
                ))}
              </div>
            </m.div>
          </m.div>

          {/* Content - "Your data" text, CTA, etc. */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transform: textAnimationDone ? "none" : undefined }}
            onAnimationComplete={() => setTextAnimationDone(true)}
            className="w-full pt-0 pb-6 md:pb-8 -mt-4"
          >
            <div className="container mx-auto max-w-5xl">
              <div className="text-center space-y-3 md:space-y-4 relative">
                {/* Glassmorphic Backdrop */}
                <div className="absolute inset-0 -z-10 bg-background/60 rounded-3xl border border-white/10 shadow-2xl scale-[1.1] opacity-0 animate-in fade-in duration-1000 fill-mode-forwards" style={{ animationDelay: '1s' }} />

                <div className="relative pt-0 pb-3 px-6 sm:px-8 md:px-10 rounded-3xl">
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm md:text-base font-bold uppercase tracking-[0.1em] text-foreground/80 drop-shadow-sm">MICROSOFT FABRIC & AI FOUNDRY SPECIALISTS</span>
                  </m.div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-2 md:mb-3 text-foreground">
                    Your data wasn't built for<br /><span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent whitespace-nowrap">what's coming.</span>
                  </h1>

                  <p className="text-lg md:text-xl text-foreground/80 md:text-muted-foreground font-medium md:font-normal max-w-3xl mx-auto leading-relaxed mb-3 md:mb-4">
                    No rip-and-replace. We leverage your existing Microsoft<br className="hidden md:block" /> investment and build alongside you.
                  </p>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3 md:gap-4 justify-center pt-2"
                  >
                    <Link href="/assessment">
                      <Button variant="hero" size="xl" className="group text-lg px-8 shadow-lg shadow-mint/20">
                        Get Your Data Readiness Score
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>

                    {/* Tech Strip - Logos + Text (matches hero badge styling) */}
                    <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 px-5 py-3 rounded-full bg-muted/50 border border-border/60 text-sm md:text-base font-medium text-foreground/75">
                      <div className="flex items-center gap-2">
                        <Image src="/svg/azure-2.svg" alt="Azure" width={24} height={24} className="h-5 md:h-6 w-auto object-contain opacity-90" />
                        <span>Azure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src="/svg/fabric_48_color.svg" alt="Fabric" width={24} height={24} className="h-5 md:h-6 w-auto object-contain opacity-90" />
                        <span>Fabric</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src="/svg/microsoft-purview-seeklogo.svg" alt="Purview" width={24} height={24} className="h-5 md:h-6 w-auto object-contain opacity-90" />
                        <span>Purview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src="/svg/power-bi-icon.svg" alt="Power BI" width={24} height={24} className="h-5 md:h-6 w-auto object-contain opacity-90" />
                        <span>Power BI</span>
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default HeroSection;
