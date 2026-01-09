"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  LineChart,
  ScanSearch
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Strategy",
    description: "Aligning data potential with business reality through immersive strategic mapping.",
    icon: ScanSearch,
    color: "#3b82f6",
  },
  {
    id: "02",
    title: "Architecture",
    subtitle: "Engineering",
    description: "Transforming raw chaos into structured intelligence with robust data pipelines.",
    icon: DatabaseZap,
    color: "#a855f7",
  },
  {
    id: "03",
    title: "Intelligence",
    subtitle: "Modeling",
    description: "Deploying deep learning models that evolve, predict, and uncover hidden realities.",
    icon: BrainCircuit,
    color: "#ec4899",
  },
  {
    id: "04",
    title: "Impact",
    subtitle: "Action",
    description: "Synthesizing complex data into decisive signals that drive automated business action.",
    icon: LineChart,
    color: "#14b8a6",
  },
];

export const ProcessTimelineSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  // Optional: subtle opacity fade for entry/exit visual polish
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Ambient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-primary/10 rounded-full blur-[100px]" />
        </div>

        {/* Desktop / Sticky Content */}
        <motion.div style={{ opacity }} className="w-full">
          <div className="container mx-auto px-6 mb-12 relative z-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                Neural Process
              </span>
              <span className="text-muted-foreground ml-3 text-2xl font-light border-l pl-3 border-border">
                Scroll to Explore
              </span>
            </h2>
          </div>

          <div className="relative w-full pl-6 md:pl-20 overflow-visible">
            <motion.div style={{ x }} className="flex gap-10">
              {steps.map((step) => (
                <Card key={step.id} step={step} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ step }) => {
  return (
    <div className="relative h-[50vh] w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-primary/30 transition-colors duration-500">
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top right, ${step.color}, transparent 60%)` }}
      />

      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <step.icon className="w-7 h-7" style={{ color: step.color }} />
          </div>
          <span className="text-6xl font-bold opacity-10 font-serif tabular-nums">{step.id}</span>
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2 block" style={{ color: step.color }}>
            {step.subtitle}
          </span>
          <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};
