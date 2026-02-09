"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, FileSearch, PackageCheck, Users, Workflow } from "lucide-react";
import { useRef } from "react";

// Groot brand colors – use CSS variables for theme consistency
const THEME_COLORS = {
  forest: "hsl(var(--forest))",
  primary: "hsl(var(--primary))",
  leaf: "hsl(var(--leaf))",
  teal: "hsl(var(--primary))",
};

const steps = [
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

export const ProcessTimelineSection = () => {
  const containerRef = useRef(null);

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
    <section ref={containerRef} className="py-12 md:py-16 relative overflow-hidden bg-background">
      {/* Subtle gradient overlay - matches PainPointsSection for consistent depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/25 to-background pointer-events-none" />
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-forest/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">The Neural Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section mb-4 md:mb-6"
          >
            How we <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-primary">work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/85 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are starting from zero or optimizing for AI, we have a roadmap for you.
          </motion.p>
        </div>

        {/* Neural Stream Container */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[600px] h-full pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 600 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="process-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={THEME_COLORS.forest} stopOpacity="0.4" />
                  <stop offset="50%" stopColor={THEME_COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={THEME_COLORS.leaf} stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <motion.path
                d="M300,0 C300,150 100,200 100,300 C100,400 500,500 500,600 C500,700 300,750 300,800"
                fill="none"
                strokeWidth="3"
                stroke="url(#process-gradient)"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="space-y-8 md:space-y-10 relative z-10">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-none w-full">
        <div
          className={`
            relative group p-6 rounded-2xl backdrop-blur-sm bg-card border border-border shadow-lg shadow-charcoal/5
            hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 w-full max-w-md
            ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
          `}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${step.color}15, transparent 70%)` }}
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
              style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`, border: `1px solid ${step.color}30` }}
            >
              <step.icon className="w-6 h-6" style={{ color: step.color }} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-3xl font-bold text-foreground/25 font-serif">{step.id}</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: step.color }}>
                  {step.subtitle}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="font-medium text-sm mb-3" style={{ color: step.color }}>{step.tagline}</p>
              <ul className="space-y-2">
                {step.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90 text-sm leading-relaxed">
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-0.5 opacity-70" style={{ color: step.color }} />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-8" />
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};
