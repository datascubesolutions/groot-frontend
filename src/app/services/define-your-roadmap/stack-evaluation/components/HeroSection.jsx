// @ts-nocheck
"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { m, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BREADCRUMB_ITEMS = [
  {
    label: "Services",
    href: "/services/define-your-roadmap/maturity-assessment",
  },
  { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
  {
    label: "Stack Evaluation",
    href: "/services/define-your-roadmap/stack-evaluation",
  },
];

const STYLES = {
  heroContainer: "container mx-auto px-6 max-w-7xl pt-4",
  section: "relative pt-12 pb-20 lg:pt-16 lg:pb-32",
  bgShape:
    "absolute right-0 top-0 -z-10 hidden h-full w-[55vw] bg-muted/40 backdrop-blur-3xl lg:block",
  innerContainer: "container mx-auto px-6 max-w-7xl relative z-20",
  gridOuter: "relative grid grid-cols-1 items-center gap-0 lg:grid-cols-12",
  imageWrapper:
    "relative w-full mb-10 h-[350px] overflow-hidden rounded-none border-b-8 border-l-8 border-cyan-500/30 bg-muted/40 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:bg-muted/10 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] max-lg:!opacity-100 max-lg:!transform-none max-lg:!filter-none max-lg:order-last max-lg:mt-8 lg:absolute lg:-z-10 lg:right-0 lg:top-5 lg:mb-0 lg:h-[550px] lg:w-[65vw] lg:max-w-[850px] lg:bg-transparent contrast-125 grayscale-[40%]",
  imageOverlay:
    "absolute inset-0 hidden bg-gradient-to-r from-background to-transparent lg:block lg:w-[15%]",
  image: "object-cover opacity-100 mix-blend-normal lg:opacity-90 lg:mix-blend-overlay",
  contentCol:
    "relative flex flex-col items-start gap-8 pt-8 md:flex-row lg:col-span-12",
  verticalBadgeBlock: "hidden flex-col items-center pl-2 md:flex",
  verticalLine:
    "mb-6 h-32 w-px bg-gradient-to-b from-transparent to-cyan-500/60",
  verticalTextWrapper:
    "flex rotate-180 items-center justify-center gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-cyan-600 [writing-mode:vertical-rl] overflow-hidden",
  pingDotOuter: "relative flex h-3 w-3",
  pingDotAnim:
    "absolute inline-flex h-full w-full animate-ping rounded-none bg-cyan-400/80 opacity-75",
  pingDotInner: "relative inline-flex h-3 w-3 rounded-none bg-cyan-500",
  contentWrapper: "max-w-[1050px]",
  heading:
    "mb-8 indent-0 text-[3rem] font-black uppercase leading-[0.95] tracking-tighter text-foreground mix-blend-normal drop-shadow-none sm:text-[4rem] sm:leading-[0.85] md:text-[5rem] lg:text-[7.5rem] lg:text-white lg:mix-blend-difference lg:drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  headingAccent1:
    "stroke-text isolate inline-block bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent mix-blend-normal",
  headingAccent2: "text-cyan-600 isolate mix-blend-normal",
  headingAccent3: "stroke-text bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent",
  paragraphCard:
    "relative mt-8 grid max-w-5xl gap-6 rounded-none border border-border/60 bg-background/85 p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] backdrop-blur-2xl sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:gap-16",
  cardCornerAccent:
    "absolute -inset-[2px] -z-10 rounded-none bg-gradient-to-b from-cyan-500/30 to-transparent",
  paragraph: "text-xl font-semibold leading-snug text-foreground md:text-2xl",
  underline:
    "pointer-events-none text-cyan-500 underline decoration-cyan-500/30 underline-offset-4",
  actionBlock: "flex flex-col justify-between",
  actionButton:
    "group relative h-16 w-full overflow-hidden rounded-none border-2 border-foreground bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-500 hover:translate-x-[8px] hover:translate-y-[8px] hover:bg-cyan-500 hover:text-white hover:shadow-none md:w-auto dark:hover:shadow-none",
  actionTextWrapper:
    "relative z-10 flex h-full w-full items-center justify-center px-12 text-center text-xs font-black uppercase tracking-wider sm:px-16 sm:text-sm sm:tracking-[0.15em]",
  actionIcon:
    "absolute right-4 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 sm:right-6 sm:h-5 sm:w-5",
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  return (
    <>
      <div className={STYLES.heroContainer}>
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      <section className={STYLES.section}>
        <div
          className={STYLES.bgShape}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
          aria-hidden="true"
        />

        <div className={STYLES.innerContainer}>
          <div className={STYLES.gridOuter}>
            <m.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.95,
                filter: shouldReduceMotion ? "blur(0px)" : "blur(20px)",
              }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: shouldReduceMotion ? 0.4 : 1,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={STYLES.imageWrapper}
            >
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2670"
                alt="Cloud Infrastructure and Servers"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={STYLES.image}
                priority
              />
              <div className={STYLES.imageOverlay} aria-hidden="true" />
            </m.div>

            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className={STYLES.contentCol}
            >
              <m.div
                variants={fadeIn}
                className={STYLES.verticalBadgeBlock}
                aria-hidden="true"
              >
                <div className={STYLES.verticalLine}></div>
                <div className={STYLES.verticalTextWrapper}>
                  Facts over Friction
                  <span className={STYLES.pingDotOuter}>
                    <span className={STYLES.pingDotAnim}></span>
                    <span className={STYLES.pingDotInner}></span>
                  </span>
                </div>
              </m.div>

              <div className={STYLES.contentWrapper}>
                <m.h1 variants={fadeIn} className={STYLES.heading}>
                  <span className={STYLES.headingAccent1}>Evaluate.</span>
                  <br />
                  <span className={STYLES.headingAccent2}>Compare.</span>
                  <br />
                  <span className={STYLES.headingAccent3}>Decide.</span>
                </m.h1>

                <div className={STYLES.paragraphCard}>
                  <div className={STYLES.cardCornerAccent} aria-hidden="true" />

                  <m.p variants={fadeIn} className={STYLES.paragraph}>
                    Vendor sales pitches won&apos;t tell you how a tool
                    integrates with{" "}
                    <span className={STYLES.underline}>your</span> specific
                    source systems. We prove which platform fits your data
                    constraints, latency requirements, and budget through
                    hands-on technical PoCs.
                  </m.p>

                  <div className={STYLES.actionBlock}>
                    <m.div variants={fadeIn}>
                      <Link href="/contact?service=stack-evaluation" passHref>
                        <Button
                          variant="hero"
                          size="lg"
                          className={STYLES.actionButton}
                          aria-label="Initiate Stack Evaluation Contact Form"
                        >
                          <span className={STYLES.actionTextWrapper}>
                            Initiate Evaluation
                            <ChevronRight
                              className={STYLES.actionIcon}
                              aria-hidden="true"
                            />
                          </span>
                        </Button>
                      </Link>
                    </m.div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
}
