"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  LineChart,
  ScanSearch
} from "lucide-react";
import { useRef } from "react";

// Neural Stream Steps
const steps = [
  {
    id: "01",
    title: "Greenfield Engineering",
    subtitle: "Zero to One",
    description: "For visionaries building from scratch. We design cloud-native foundations without legacy debt, ensuring your first rapid prototype is also your long-term bedrock.",
    icon: ScanSearch,
    color: "#3b82f6", // Blue
  },
  {
    id: "02",
    title: "Modernization & Governance",
    subtitle: "Chaos to Order",
    description: "For enterprises drowning in data. We transform fragmented, messy archives into a governed Data Mesh, turning liability into a strategic asset.",
    icon: DatabaseZap,
    color: "#a855f7", // Purple
  },
  {
    id: "03",
    title: "Cognitive Intelligence",
    subtitle: "Good to Great",
    description: "For leaders seeking dominance. We deploy agentic AI workflows that self-optimize, automating complex decisions and unlocking exponential growth.",
    icon: BrainCircuit,
    color: "#ec4899", // Pink
  },
  {
    id: "04",
    title: "Operational Excellence",
    subtitle: "The Standard",
    description: "Frictionless automation. We re-engineer supply chains and pipelines for sub-second decision making, creating a permanent competitive gap.",
    icon: LineChart,
    color: "#14b8a6", // Teal
  },
];

export const ProcessTimelineSection = () => {
  const containerRef = useRef(null);

  // Ref for the SVG container to track scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Ambient Neural Background - Reduced Size */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Compacted */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">The Neural Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight mb-4"
          >
            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">Data Maturity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are starting from zero or optimizing for AI, we have a roadmap for you.
          </motion.p>
        </div>

        {/* The Neural Stream Container */}
        <div className="relative">
          {/* Main SVG Path - Compacted Height (800px instead of 1200px) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[600px] h-full pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 600 800" preserveAspectRatio="none">
              <motion.path
                d="M300,0 C300,150 100,200 100,300 C100,400 500,500 500,600 C500,700 300,750 300,800"
                fill="none"
                strokeWidth="3"
                stroke="url(#gradient)"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-12 md:space-y-16 relative z-10">
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
      className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
    >
      {/* Icon/Connect Node */}
      <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-none w-full">
        {/* The Glass Card - Reduced Padding */}
        <div className={`
             relative group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl
             hover:bg-white/10 transition-all duration-300 w-full max-w-md
             ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
         `}>
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${step.color}15, transparent 70%)` }}
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <step.icon className="w-6 h-6" style={{ color: step.color }} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-3xl font-bold opacity-10 font-serif">{step.id}</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: step.color }}>{step.subtitle}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for the central line flow on desktop - Reduced */}
      <div className="hidden lg:block w-12"></div>

      {/* Counter-balance side */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};
