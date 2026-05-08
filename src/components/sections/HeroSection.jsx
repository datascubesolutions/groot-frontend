// @ts-nocheck
"use client";

import { SideParticles } from "@/components/animations/SideParticles";
import { Button } from "@/components/ui/Button";
import { createMulberry32 } from "@/lib/prng";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { logoPaths } from "./logoData";

export function HeroSection({ content }) {
  const [textAnimationDone, setTextAnimationDone] = useState(false);
  const [isAssembled, setIsAssembled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);
  const svgRef = useRef(null);
  const heroContent = {
    badgeText:
      content?.badgeText ?? "Microsoft Fabric & AI Foundry Specialists",
    headlineLine1: content?.headlineLine1 ?? "Your data wasn't built for",
    headlineHighlight: content?.headlineHighlight ?? "what's coming.",
    subtitle:
      content?.subtitle ??
      "No rip-and-replace. We leverage your existing Microsoft investment and build alongside you.",
    primaryButtonText:
      content?.primaryButtonText ?? "Get Your Data Readiness Score",
    primaryButtonLink: content?.primaryButtonLink ?? "/assessment",
  };

  // Generate paths that will form the GROOT logo
  const logoElements = useMemo(() => {
    const rand = createMulberry32(0x510e527f);
    // 8 different directions for elements to come from
    const directions = [
      { x: -1, y: -1, name: "top-left" },
      { x: 1, y: -1, name: "top-right" },
      { x: -1, y: 1, name: "bottom-left" },
      { x: 1, y: 1, name: "bottom-right" },
      { x: 0, y: -1, name: "top" },
      { x: 0, y: 1, name: "bottom" },
      { x: -1, y: 0, name: "left" },
      { x: 1, y: 0, name: "right" },
    ];

    return logoPaths.map((d, index) => {
      const direction = directions[index % directions.length];
      const distance = 400 + rand() * 300;

      return {
        id: index,
        d: d,
        initialX: direction.x * distance,
        initialY: direction.y * distance,
        delay: rand() * 0.8,
      };
    });
  }, []);

  useEffect(() => {
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
      <section className="relative flex h-screen min-h-[100dvh] flex-col overflow-hidden pt-28 md:pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background">
          {/* Particles deferred until assembly completes to free main thread */}
          {particlesReady && (
            <>
              <SideParticles side="left" variant="structured" />
              <SideParticles side="right" variant="structured" />
            </>
          )}

          {/* Grid Pattern with Vignette Mask - Reduced opacity */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          {/* Softer radial layer to keep hero tone aligned with page background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,hsl(160,20%,97%)_58%,hsl(var(--background))_100%)] opacity-65"></div>

          {/* Blend hero bottom into next section background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-background/80 to-background md:h-44" />
        </div>

        {/* GROOT Logo + Content - Logo fixed, gap pushes text below */}
        <div className="container-padding relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-0">
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex w-full max-w-5xl items-center justify-center"
          >
            <m.div
              className="relative aspect-[12/7] w-full md:h-72 lg:h-[24rem]"
              animate={
                isPulsing
                  ? {
                      scale: [1, 1.02, 1],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 3,
                repeat: 3,
                ease: "easeInOut",
              }}
            >
              <svg
                ref={svgRef}
                viewBox="95 45 240 140"
                className="h-full w-full"
                style={
                  animationDone
                    ? { overflow: "visible" }
                    : {
                        overflow: "visible",
                        willChange: "transform",
                        transform: "translateZ(0)",
                      }
                }
              >
                <defs>
                  <linearGradient
                    id="groot-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--groot-dark-primary))"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--groot-dark-forest))"
                    />
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
                    ))}
              </svg>

              {/* Analytics Text - Animates after logo assembly */}
              <div className="z-20 -ml-[7%] -mt-[25%] flex justify-center gap-[0.02em] sm:-mt-[18%] md:-ml-[50px] md:-mt-[85px] md:gap-[0.04em] lg:-ml-[88px] lg:-mt-[170px]">
                {"Analytics".split("").map((char, index) => (
                  <m.span
                    key={index}
                    initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    animate={
                      isAssembled
                        ? { opacity: 1, x: 0, filter: "blur(0px)" }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 2.2 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="select-none bg-gradient-to-br from-[hsl(var(--groot-dark-primary))] to-[hsl(var(--groot-dark-forest))] bg-clip-text pb-1 font-sans text-base font-bold tracking-normal text-transparent md:text-xl lg:text-3xl"
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
            className="-mt-4 w-full pb-6 pt-0 md:pb-8"
          >
            <div className="container mx-auto max-w-5xl">
              <div className="relative space-y-3 text-center md:space-y-4">
                {/* Glassmorphic Backdrop */}
                <div
                  className="absolute inset-0 -z-10 scale-[1.1] rounded-3xl border border-white/10 bg-background/60 opacity-0 shadow-2xl duration-1000 animate-in fade-in fill-mode-forwards"
                  style={{ animationDelay: "1s" }}
                />

                <div className="relative rounded-3xl px-6 pb-3 pt-0 sm:px-8 md:px-10">
                  <m.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                    className="group relative mb-6 inline-flex cursor-pointer overflow-hidden rounded-full border border-forest/15 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-forest/25 hover:bg-white/90 hover:shadow-md sm:px-5 sm:py-2 md:mb-8 md:px-6 md:py-2.5"
                  >
                    {/* Hover Shine Effect */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-[1.5s] ease-in-out group-hover:translate-x-full" />
                    
                    {/* Pure Typography */}
                    <span className="relative whitespace-nowrap bg-gradient-to-r from-forest to-forest/80 bg-clip-text text-[8.5px] font-extrabold uppercase tracking-[0.1em] text-transparent drop-shadow-sm xs:text-[9px] xs:tracking-[0.15em] sm:text-[10px] sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                      {heroContent.badgeText}
                    </span>
                  </m.div>

                  <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight text-foreground md:mb-3 md:text-5xl lg:text-6xl">
                    {heroContent.headlineLine1}
                    <br />
                    <span className="whitespace-nowrap bg-gradient-to-r from-[hsl(var(--groot-dark-forest))] to-[hsl(var(--groot-dark-primary))] bg-clip-text text-transparent">
                      {heroContent.headlineHighlight}
                    </span>
                  </h1>

                  <p className="mx-auto mb-3 max-w-3xl text-lg font-medium leading-relaxed text-foreground/80 md:mb-4 md:text-xl md:font-normal md:text-muted-foreground">
                    {heroContent.subtitle}
                  </p>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center justify-center gap-3 pt-2 md:gap-4"
                  >
                    <Link
                      href={heroContent.primaryButtonLink}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="hero"
                        size="xl"
                        className="group flex w-full items-center justify-center gap-1.5 px-3 py-4 text-sm shadow-lg shadow-mint/20 xs:px-4 sm:w-auto sm:gap-2 sm:px-6 sm:text-base md:px-8 md:text-lg"
                      >
                        {heroContent.primaryButtonText}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                      </Button>
                    </Link>

                    {/* Tech Strip - Logos + Text (fixed wrapping for mobile) */}
                    <div className="mx-auto mt-4 inline-flex w-full max-w-sm flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-border/60 bg-muted/50 px-4 py-4 text-sm font-medium text-foreground/75 md:max-w-none md:gap-8 md:rounded-full md:px-6 md:py-3 md:text-base">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/svg/azure-2.svg"
                          alt="Azure"
                          width={24}
                          height={24}
                          sizes="24px"
                          className="h-5 w-auto object-contain opacity-90 md:h-6"
                        />
                        <span>Azure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/svg/fabric_48_color.svg"
                          alt="Fabric"
                          width={24}
                          height={24}
                          sizes="24px"
                          className="h-5 w-auto object-contain opacity-90 md:h-6"
                        />
                        <span>Fabric</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/svg/microsoft-purview-seeklogo.svg"
                          alt="Purview"
                          width={24}
                          height={24}
                          sizes="24px"
                          className="h-5 w-auto object-contain opacity-90 md:h-6"
                        />
                        <span>Purview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/svg/power-bi-icon.svg"
                          alt="Power BI"
                          width={24}
                          height={24}
                          sizes="24px"
                          className="h-5 w-auto object-contain opacity-90 md:h-6"
                        />
                        <span>Power BI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/svg/copilot-icon.svg"
                          alt="Copilot"
                          width={24}
                          height={24}
                          sizes="24px"
                          className="h-5 w-auto object-contain opacity-90 md:h-6"
                        />
                        <span>Copilot</span>
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
