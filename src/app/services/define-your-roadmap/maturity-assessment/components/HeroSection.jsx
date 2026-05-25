"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      /** @type {import("framer-motion").Easing} */
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <div className="container mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            {
              label: "Services",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
            {
              label: "Define Your Roadmap",
              href: "/services/define-your-roadmap",
            },
            {
              label: "Maturity Assessment",
              href: "/services/define-your-roadmap/maturity-assessment",
            },
          ]}
        />
      </div>

      <section ref={sectionRef} className="relative pb-20 pt-12 lg:pb-32 lg:pt-16">
        <div
          className="absolute right-0 top-0 -z-10 hidden h-full w-[55vw] bg-muted/40 backdrop-blur-3xl lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
        />

        <div className="container relative z-20 mx-auto max-w-7xl px-6">
          <div className="relative grid grid-cols-1 items-center gap-0 lg:grid-cols-12">
            <motion.div
              style={{ y: yParallax }}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full mb-10 h-[350px] overflow-hidden rounded-none border-b-8 border-l-8 border-forest/30 bg-muted/40 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:bg-muted/10 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] max-lg:!opacity-100 max-lg:!transform-none max-lg:!filter-none lg:absolute lg:-z-10 lg:right-0 lg:top-5 lg:mb-0 lg:h-[550px] lg:w-[65vw] lg:max-w-[850px] lg:bg-transparent"
            >
              <Image
                src="/images/maturity/live_radar.png"
                alt="Data Professionals Analyzing Digital Radar"
                fill
                className="object-cover grayscale-[20%] contrast-110 opacity-90 transition-transform duration-1000 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-background to-transparent lg:block lg:w-[15%]" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative flex flex-col items-start gap-8 pt-8 md:flex-row lg:col-span-12"
            >
              <motion.div
                variants={fadeIn}
                className="hidden flex-col items-center pl-2 md:flex"
              >
                <div className="mb-6 h-32 w-px bg-gradient-to-b from-transparent to-forest/60"></div>
                <div className="flex rotate-180 items-center justify-center gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.4em] text-forest [writing-mode:vertical-rl] overflow-hidden">
                  Stop Guessing. Start Scaling.
                  <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-mint/40 bg-mint/10 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(52,211,153,0.8)_360deg)]"
                    />
                    <div className="absolute h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(52,211,153,1)]" />
                  </div>
                </div>
              </motion.div>

              <div className="max-w-[1050px]">
                <motion.h1
                  variants={fadeIn}
                  className="mb-8 text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[4px_4px_0_rgba(255,255,255,0.1)]"
                >
                  <span className="inline-block text-foreground">
                    Data
                  </span>{" "}
                  <span className="text-forest">&amp;</span>{" "}
                  <span className="inline-block text-foreground">
                    Analytics
                  </span>
                  <br />
                  <span className="inline-block text-forest">
                    Maturity Assessment
                  </span>
                </motion.h1>

                <div className="relative mt-12 grid max-w-5xl gap-6 rounded-none border-4 border-foreground bg-background p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:gap-16">
                  <div className="absolute -left-4 -top-4 h-8 w-8 bg-forest border-2 border-foreground" />
                  <div className="absolute -right-4 -bottom-4 h-8 w-8 bg-mint border-2 border-foreground" />

                  <motion.p
                    variants={fadeIn}
                    className="relative z-10 text-xl font-black leading-snug text-foreground md:text-2xl uppercase tracking-tight"
                  >
                    Before you can close the gap, you need to know where the gap
                    is. We assess your current data capabilities across six
                    dimensions and show you exactly where you stand —{" "}
                    <span className="mt-2 inline-block bg-forest px-2 text-forest-foreground">
                      with evidence, not assumptions.
                    </span>
                  </motion.p>

                  <div className="flex flex-col justify-between">
                    <motion.p
                      variants={fadeIn}
                      className="mb-8 text-lg font-bold leading-relaxed text-foreground/80"
                    >
                      Our comprehensive diagnostic provides an actionable roadmap, identifying critical bottlenecks in your architecture, data governance, and team capabilities before they derail your data strategy.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                      <Link
                        href="/contact?service=maturity-assessment"
                        passHref
                      >
                        <Button
                          variant="hero"
                          size="lg"
                          className="group relative h-16 w-full overflow-hidden rounded-none border-2 border-foreground bg-foreground text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-500 hover:translate-x-[8px] hover:translate-y-[8px] hover:bg-forest hover:text-forest-foreground hover:shadow-none md:w-auto dark:hover:shadow-none"
                        >
                          <span className="relative z-10 flex h-full w-full items-center justify-center px-12 text-center text-xs font-black uppercase tracking-wider sm:px-16 sm:text-sm sm:tracking-[0.15em]">
                            <span>Schedule Assessment</span>
                            <ChevronRight className="absolute right-4 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 sm:right-6 sm:h-5 sm:w-5" />
                          </span>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
