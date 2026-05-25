// @ts-nocheck
"use client";

import {
  domAnimation,
  LazyMotion,
  m,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  FileSearch,
  PackageCheck,
  Users,
  Workflow,
} from "lucide-react";
import { useRef } from "react";

// Groot brand colors – use CSS variables for theme consistency
const THEME_COLORS = {
  forest: "hsl(var(--forest))",
  primary: "hsl(var(--primary))",
  leaf: "hsl(var(--leaf))",
  teal: "hsl(var(--primary))",
};

const defaultSteps = [
  {
    id: "01",
    title: "Discover & Assess",
    subtitle: "Week 1–2",
    icon: FileSearch,
    tagline: "We learn your world first.",
    activities: [
      "Deep-dive into your systems & data landscape",
      "Map sources, flows, and ownership",
      "Define clear success metrics & roadmap",
    ],
    color: THEME_COLORS.forest,
  },
  {
    id: "02",
    title: "Build Foundation",
    subtitle: "Week 3–6",
    icon: Users,
    tagline: "Governed from day one.",
    activities: [
      "Deploy Azure Fabric & Purview",
      "Establish governance & security framework",
      "Stand up first production pipelines",
    ],
    color: THEME_COLORS.teal,
  },
  {
    id: "03",
    title: "Enable & Scale",
    subtitle: "Week 7–12",
    icon: Workflow,
    tagline: "Insight that drives decisions.",
    activities: [
      "Power BI dashboards leadership trusts",
      "AI Foundry & Copilot integration",
      "User training & enablement",
    ],
    color: THEME_COLORS.primary,
  },
  {
    id: "04",
    title: "Protect Your Investment",
    subtitle: "Ongoing",
    icon: PackageCheck,
    tagline: "Built to last.",
    activities: [
      "Continuous monitoring & optimization",
      "Data quality & lineage tracking",
      "New use cases & expansion",
    ],
    color: THEME_COLORS.leaf,
  },
];

export const ProcessTimelineSection = ({ content }) => {
  const containerRef = useRef(null);
  const steps =
    Array.isArray(content?.steps) && content.steps.length > 0
      ? defaultSteps.map((step, index) => ({
        ...step,
        id: content.steps[index]?.num || step.id,
        title: content.steps[index]?.title || step.title,
        tagline: content.steps[index]?.description || step.tagline,
      }))
      : defaultSteps;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-background py-12 md:py-16"
      >
        {/* Subtle gradient overlay - matches PainPointsSection for consistent depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-muted/25 to-background" />
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-forest/10 blur-[80px]" />
        </div>

        <div className="container-padding container relative z-10 mx-auto">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <m.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-section mb-4 md:mb-6"
            >
              How we{" "}
              <span className="bg-gradient-to-r from-forest to-forest/70 bg-clip-text text-transparent">
                work
              </span>
            </m.h2>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-foreground/90 md:text-foreground/85"
            >
              Whether you are starting from zero or optimizing for AI, we have a
              roadmap for you.
            </m.p>
          </div>

          {/* Neural Stream Container */}
          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 hidden h-full w-[600px] -translate-x-1/2 lg:block">
              <svg
                className="h-full w-full"
                viewBox="0 0 600 800"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="process-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor={THEME_COLORS.forest}
                      stopOpacity="0.4"
                    />
                    <stop
                      offset="50%"
                      stopColor={THEME_COLORS.primary}
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor={THEME_COLORS.leaf}
                      stopOpacity="0.4"
                    />
                  </linearGradient>
                </defs>
                <m.path
                  d="M300,0 C300,150 100,200 100,300 C100,400 500,500 500,600 C500,700 300,750 300,800"
                  fill="none"
                  strokeWidth="3"
                  stroke="url(#process-gradient)"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
              </svg>
            </div>

            <div className="relative z-10 space-y-8 md:space-y-10">
              {steps.map((step, index) => (
                <StepCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center gap-8 lg:flex-row ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="order-1 flex w-full flex-1 justify-center lg:order-none lg:justify-end">
        <div
          className={`group relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-lg shadow-charcoal/5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${isEven ? "lg:mr-auto" : "lg:ml-auto"} `}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at center, ${step.color}15, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex min-w-0 flex-col items-center gap-5 text-center md:flex-row md:items-start md:text-left md:gap-6">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                border: `1px solid ${step.color}30`,
              }}
            >
              <step.icon className="h-6 w-6" style={{ color: step.color }} />
            </div>

            <div className="flex flex-1 flex-col items-center md:items-start">
              <div className="mb-1.5 flex items-center justify-center gap-3 md:justify-start">
                <span className="font-serif text-3xl font-bold text-foreground/80 md:text-foreground/60">
                  {step.id}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/80">
                  {step.subtitle}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-foreground/70">
                {step.tagline}
              </p>
              <div className="w-full sm:w-auto">
                <ul className="inline-block space-y-2 text-left">
                  {step.activities.map((activity, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                    >
                      <ArrowRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70"
                        style={{ color: step.color }}
                      />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-8 lg:block" />
      <div className="hidden flex-1 lg:block" />
    </m.div>
  );
};
