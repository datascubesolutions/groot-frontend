"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { m, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BREADCRUMB_ITEMS = [
  { label: "Services", href: "/services/define-your-roadmap/maturity-assessment" },
  { label: "Define Your Roadmap", href: "/services/define-your-roadmap" },
  { label: "Stack Evaluation", href: "/services/define-your-roadmap/stack-evaluation" },
];

const STYLES = {
  heroContainer: "container mx-auto px-6 max-w-7xl pt-4",
  section: "relative pt-12 pb-20 lg:pt-16 lg:pb-32",
  bgShape: "absolute top-0 right-0 w-[50vw] h-full bg-cyan-500/5 backdrop-blur-3xl -z-10 hidden lg:block",
  innerContainer: "container mx-auto px-6 max-w-7xl relative z-20",
  gridOuter: "grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center",
  imageWrapper: "lg:absolute top-0 right-0 lg:w-[45vw] lg:max-w-[650px] h-[350px] lg:h-[550px] -z-10 mb-10 lg:mb-0 rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden grayscale-[50%] contrast-125 border-r-8 border-b-8 border-cyan-500/30 shadow-[20px_20px_0px_0px_rgba(6,182,212,0.1)]",
  imageOverlay: "absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background",
  image: "object-cover mix-blend-overlay opacity-90",
  contentCol: "lg:col-span-12 relative flex flex-col md:flex-row gap-8 items-start pt-8",
  verticalBadgeBlock: "hidden md:flex flex-col items-center pr-4",
  verticalLine: "w-px h-32 bg-gradient-to-b from-transparent to-cyan-500/60 mb-6",
  verticalTextWrapper: "[writing-mode:vertical-rl] text-sm font-black tracking-[0.4em] uppercase text-cyan-600 rotate-180 flex items-center justify-center gap-6 whitespace-nowrap",
  pingDotOuter: "relative flex h-3 w-3",
  pingDotAnim: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75",
  pingDotInner: "relative inline-flex rounded-full h-3 w-3 bg-cyan-500",
  contentWrapper: "max-w-[1050px]",
  heading: "text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7.5rem] font-black mb-8 tracking-tighter leading-[0.85] uppercase text-foreground drop-shadow-sm",
  headingAccent1: "inline-block mix-blend-normal text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 stroke-text",
  headingAccent2: "text-cyan-600",
  headingAccent3: "inline-block mix-blend-normal",
  paragraphCard: "grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 max-w-5xl mt-8 bg-background/85 backdrop-blur-2xl p-8 md:p-12 border-2 border-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] relative",
  cardCornerAccent: "absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-cyan-500/50 -m-0.5 pointer-events-none",
  paragraph: "text-xl md:text-2xl text-foreground font-semibold leading-snug",
  underline: "underline decoration-cyan-500 underline-offset-4 pointer-events-none",
  actionBlock: "flex flex-col justify-end",
  actionButton: "px-8 h-16 w-full md:w-auto overflow-hidden group relative bg-foreground text-background hover:bg-cyan-500 hover:text-white transition-all duration-500 rounded-none border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground)/0.2)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]",
  actionTextWrapper: "relative z-10 flex items-center font-black tracking-[0.15em] uppercase text-sm",
  actionIcon: "ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 }
    }
  };

  return (
    <>
      <div className={STYLES.heroContainer}>
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      <section className={STYLES.section}>
        <div className={STYLES.bgShape} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }} aria-hidden="true" />

        <div className={STYLES.innerContainer}>
          <div className={STYLES.gridOuter}>

            <m.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, filter: shouldReduceMotion ? "blur(0px)" : "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: shouldReduceMotion ? 0.4 : 1, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
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
              <m.div variants={fadeIn} className={STYLES.verticalBadgeBlock} aria-hidden="true">
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
                  <span className={STYLES.headingAccent1}>Evaluate.</span><br />
                  <span className={STYLES.headingAccent2}>Compare.</span><br />
                  <span className={STYLES.headingAccent3}>Decide.</span>
                </m.h1>

                <div className={STYLES.paragraphCard}>
                  <div className={STYLES.cardCornerAccent} aria-hidden="true" />

                  <m.p variants={fadeIn} className={STYLES.paragraph}>
                    Vendor sales pitches won&apos;t tell you how a tool integrates with <span className={STYLES.underline}>your</span> specific source systems. We prove which platform fits your data constraints, latency requirements, and budget through hands-on technical PoCs.
                  </m.p>

                  <div className={STYLES.actionBlock}>
                    <m.div variants={fadeIn}>
                      <Link href="/contact?service=stack-evaluation" passHref>
                        <Button variant="hero" size="lg" className={STYLES.actionButton} aria-label="Initiate Stack Evaluation Contact Form">
                          <span className={STYLES.actionTextWrapper}>
                            Initiate Evaluation
                            <ChevronRight className={STYLES.actionIcon} aria-hidden="true" />
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
