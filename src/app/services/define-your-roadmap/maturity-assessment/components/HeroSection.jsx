"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HeroSection() {
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

      <section className="relative pb-20 pt-12 lg:pb-32 lg:pt-16">
        <div
          className="absolute right-0 top-0 -z-10 hidden h-full w-[55vw] bg-muted/40 backdrop-blur-3xl lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
        />

        <div className="container relative z-20 mx-auto max-w-7xl px-6">
          <div className="relative grid grid-cols-1 items-center gap-0 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="right-0 top-5 -z-10 mb-10 h-[350px] overflow-hidden rounded-none border-b-8 border-l-8 border-forest/30 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] contrast-125 grayscale-[40%] lg:absolute lg:mb-0 lg:h-[550px] lg:w-[65vw] lg:max-w-[850px]"
            >
              <Image
                src="/images/maturity/live_radar.png"
                alt="Data Professionals Analyzing Digital Radar"
                fill
                className="object-cover opacity-90 mix-blend-overlay"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent lg:w-[15%]" />
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
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-none bg-mint/80 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-none bg-forest"></span>
                  </span>
                </div>
              </motion.div>

              <div className="max-w-[1050px]">
                <motion.h1
                  variants={fadeIn}
                  className="mb-8 indent-0 text-[2rem] font-black uppercase leading-[0.95] tracking-tighter text-white mix-blend-difference drop-shadow-[0_0_30px_hsl(var(--forest)/0.3)] sm:text-[3rem] sm:leading-[0.85] md:text-[5rem] lg:text-[7.5rem]"
                >
                  <span className="stroke-text isolate inline-block bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent mix-blend-normal">
                    Data
                  </span>{" "}
                  <span className="text-mint isolate mix-blend-normal">&amp;</span>{" "}
                  Analytics
                  <br />
                  <span className="stroke-text bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
                    Maturity Assessment
                  </span>
                </motion.h1>

                <div className="relative mt-8 grid max-w-5xl gap-6 rounded-none border border-border/60 bg-background/85 p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] backdrop-blur-2xl sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:gap-16">
                  <div className="absolute -inset-[2px] -z-10 rounded-none bg-gradient-to-b from-forest/30 to-transparent" />

                  <motion.p
                    variants={fadeIn}
                    className="text-xl font-semibold leading-snug text-foreground md:text-2xl"
                  >
                    Before you can close the gap, you need to know where the gap
                    is. We assess your current data capabilities across six
                    dimensions and show you exactly where you stand —{" "}
                    <span className="pointer-events-none text-forest underline decoration-forest/30 underline-offset-4">
                      with evidence, not assumptions.
                    </span>
                  </motion.p>

                  <div className="flex flex-col justify-between">
                    <motion.p
                      variants={fadeIn}
                      className="mb-8 text-base leading-relaxed text-muted-foreground"
                    ></motion.p>
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
