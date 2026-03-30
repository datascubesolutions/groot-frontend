"use client";

import { SideParticles } from "@/components/animations/SideParticles";
import { Button } from "@/components/ui/Button";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MicrosoftHero({
  title,
  subtitle,
  badge,
  primaryCtaText = "Get Assessment",
  primaryCtaLink,
  secondaryCtaText = "Talk to Our Team",
  secondaryCtaLink = "/contact"
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background -z-20">
          {isMounted && (
            <>
              <SideParticles side="left" variant="structured" />
              <SideParticles side="right" variant="chaotic" />
            </>
          )}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          {/* Radial Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,hsl(160,20%,97%)_60%,hsl(160,20%,94%)_100%)] opacity-80 mix-blend-multiply"></div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 relative z-10 max-w-5xl text-center"
        >
          {/* Glassmorphic Backdrop for the content */}
          <div className="absolute inset-0 -z-10 bg-background/60 rounded-3xl border border-white/10 shadow-2xl scale-[1.05] opacity-0 animate-in fade-in duration-1000 fill-mode-forwards" />

          <div className="relative py-12 px-6 sm:px-12 rounded-3xl">
            {badge && (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/60 border border-border/80 mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-foreground/80">
                  {badge}
                </span>
              </m.div>
            )}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-foreground">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
              {subtitle}
            </p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            >
              <Link href={primaryCtaLink}>
                <Button variant="hero" size="xl" className="group text-lg px-8 bg-forest hover:bg-forest/90 text-white border-0 shadow-lg shadow-forest/20 w-full sm:w-auto">
                  {primaryCtaText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={secondaryCtaLink}>
                <Button variant="outline" size="xl" className="text-lg px-8 w-full sm:w-auto bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  {secondaryCtaText}
                </Button>
              </Link>
            </m.div>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
