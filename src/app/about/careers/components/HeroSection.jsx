// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { m, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const STYLES = {
  section: "relative z-10 pt-24 pb-20 border-b border-border/50 bg-card/30",
  container: "container mx-auto container-padding",
  grid: "mt-16 lg:mt-24 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center",
  textContent: "max-w-2xl",
  badgeWrapper: "inline-flex items-center gap-3 mb-10",
  badgeLine: "w-12 h-px bg-primary/60",
  badgeText: "text-primary font-bold uppercase tracking-[0.2em] text-sm",
  heading:
    "text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05] text-foreground text-balance",
  headingAccent:
    "text-transparent bg-clip-text bg-gradient-to-r from-primary to-forest relative whitespace-nowrap",
  swoosh: "absolute -bottom-2 left-0 w-full h-4 text-primary opacity-30",
  paragraph:
    "text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl text-balance",
  imageWrapper:
    "relative w-full aspect-[4/3] lg:aspect-[4/5] xl:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group",
  overlayColor:
    "absolute inset-0 bg-primary/10 mix-blend-color z-10 transition-colors duration-700 pointer-events-none",
  overlayGradient:
    "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none",
  image:
    "object-cover object-center group-hover:scale-105 transition-transform duration-1000",
  glassCard:
    "absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20 shadow-xl flex items-center justify-between",
  glassTitle: "text-white font-bold text-lg leading-tight tracking-tight",
  glassSubtitle: "text-white/80 font-medium text-xs sm:text-sm mt-1",
  glassIconWrapper:
    "w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm shadow-inner",
  glassIcon: "text-white w-5 h-5",
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  return (
    <div className={STYLES.section}>
      <div className={STYLES.container}>
        <Breadcrumb
          items={[
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/about/careers" },
          ]}
        />

        <div className={STYLES.grid}>
          <m.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className={STYLES.textContent}
          >
            <m.div variants={fadeIn} className={STYLES.badgeWrapper}>
              <span className={STYLES.badgeLine} aria-hidden="true" />
              <span className={STYLES.badgeText}>Join The Team</span>
            </m.div>

            <m.h1 variants={fadeIn} className={STYLES.heading}>
              Join the <br className="hidden md:block" aria-hidden="true" />
              <span className={STYLES.headingAccent}>
                Team.
                <svg
                  className={STYLES.swoosh}
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <m.path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.1 : 1.5,
                      delay: shouldReduceMotion ? 0 : 0.5,
                      ease: "easeOut",
                    }}
                  />
                </svg>
              </span>
            </m.h1>

            <m.p variants={fadeIn} className={STYLES.paragraph}>
              We&apos;re hiring Data Engineers, Analytics Engineers, and Power
              BI Developers focused on the Microsoft stack.
            </m.p>
          </m.div>

          <m.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.95,
              x: shouldReduceMotion ? 0 : 20,
            }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 1,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            className={STYLES.imageWrapper}
          >
            <div className={STYLES.overlayColor} aria-hidden="true" />
            <div className={STYLES.overlayGradient} aria-hidden="true" />

            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Engineering team collaborating around a table"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className={STYLES.image}
            />

            <div className={STYLES.glassCard}>
              <div>
                <p className={STYLES.glassTitle}>Elite Engineering Culture</p>
                <p className={STYLES.glassSubtitle}>
                  Join our growing team.
                </p>
              </div>
              <div className={STYLES.glassIconWrapper} aria-hidden="true">
                <Sparkles className={STYLES.glassIcon} />
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
