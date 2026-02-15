"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import { Bot, Database, GitMerge } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ClientLottie = dynamic(() => import("@/components/ui/ClientLottie"), { ssr: false });

const painPoints = [
  {
    id: "mna",
    category: "M&A",
    icon: GitMerge,
    quote: "We acquired a company. Systems don't talk.",
  },
  {
    id: "ops",
    category: "Operations",
    icon: Database,
    quote: "Pipelines break. Reports are late.",
  },
  {
    id: "ai",
    category: "AI/R&D",
    icon: Bot,
    quote: "Every AI pilot stalls on bad data.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function PainPointsSection() {
  const [questionAnimation, setQuestionAnimation] = useState(null);

  useEffect(() => {
    import("@/lottie/question.json").then((mod) => setQuestionAnimation(mod.default));
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative overflow-hidden section-padding bg-background"
        aria-labelledby="pain-points-heading"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

        <div className="container relative z-10 mx-auto container-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8 lg:items-start">
              {/* Left column: Header + Pain points */}
              <div className="lg:col-span-6">
                {/* Section header */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="mb-10 md:mb-12"
                >
                  <div className="mb-6 md:mb-8 flex items-start gap-4">
                    {questionAnimation && (
                      <div className="h-20 w-20 shrink-0 md:h-24 md:w-24" aria-hidden="true">
                        <ClientLottie
                          animationData={questionAnimation}
                          className="h-full w-full"
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                    )}
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        System diagnostics
                      </p>
                      <h2
                        id="pain-points-heading"
                        className="heading-section"
                      >
                        Sound{" "}
                        <span className="bg-gradient-to-r from-forest to-primary bg-clip-text text-transparent">
                          familiar?
                        </span>
                      </h2>
                    </div>
                  </div>
                  <p className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
                    We&apos;ve seen all three. Let&apos;s figure out which one you&apos;re facing.
                  </p>
                </m.div>

                {/* Pain points list */}
                <m.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-2"
                >
                  {painPoints.map((point, index) => (
                    <m.div
                      key={point.id}
                      variants={itemVariants}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="group flex items-start gap-4 rounded-xl py-4 md:py-5 px-4 md:px-5 -mx-4 md:-mx-5 transition-colors hover:bg-card/80"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <point.icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                          {point.category}
                        </span>
                        <p className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                          &ldquo;{point.quote}&rdquo;
                        </p>
                      </div>
                    </m.div>
                  ))}
                </m.div>

              </div>

              {/* Right column: Project proof card */}
              <div className="lg:col-span-6 lg:pt-8">
                <m.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-border/30"
                >
                  {/* Card accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary via-primary to-forest" />

                  <div className="relative px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                    {/* Content */}
                    <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                      Currently migrating{" "}
                      <span className="text-xl font-bold text-forest md:text-2xl">3 ERP systems</span>
                      {" "}into one governed Fabric Lakehouse for a{" "}
                      <span className="font-bold text-foreground">PE-backed company</span> — ERP extraction,
                      Medallion architecture, Purview governance, and executive dashboards.
                    </p>

                    {/* Target badge */}
                    <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                      <span className="inline-flex items-center rounded-lg bg-forest px-5 py-3 text-base font-bold text-forest-foreground shadow-md">
                        Target: unified reporting in 10 weeks
                      </span>
                    </div>
                  </div>
                </m.article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
