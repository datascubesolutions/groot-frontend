// @ts-nocheck
"use client";

import { SideParticles } from "@/components/animations/SideParticles";
import { Button } from "@/components/ui/Button";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MicrosoftHero({
  title,
  subtitle,
  badge,
  primaryCtaText = "Get Assessment",
  primaryCtaLink,
  secondaryCtaText = "Talk to Our Team",
  secondaryCtaLink = "/contact",
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-28 pb-10">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-20 bg-background">
          <>
            <SideParticles side="left" variant="structured" />
            <SideParticles side="right" variant="chaotic" />
          </>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          {/* Radial Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,hsl(160,20%,97%)_60%,hsl(160,20%,94%)_100%)] opacity-80 mix-blend-multiply"></div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          {/* Glassmorphic Backdrop for the content */}
          <div className="absolute inset-0 -z-10 scale-[1.05] rounded-3xl border border-white/10 bg-background/60 opacity-0 shadow-2xl duration-1000 animate-in fade-in fill-mode-forwards" />

          <div className="relative rounded-3xl px-6 py-12 sm:px-12">
            {badge && (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-5 py-2.5 shadow-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-forest" />
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-foreground/80">
                  {badge}
                </span>
              </m.div>
            )}

            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              {subtitle}
            </p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href={primaryCtaLink}>
                <Button
                  variant="hero"
                  size="xl"
                  className="group w-full border-0 bg-forest px-6 py-4 text-sm text-white shadow-lg shadow-forest/20 hover:bg-forest/90 sm:w-auto"
                >
                  {primaryCtaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full bg-white/50 px-6 py-4 text-sm backdrop-blur-sm hover:bg-white/80 sm:w-auto"
                >
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
