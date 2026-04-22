// @ts-nocheck
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, DatabaseZap, LineChart, ScanSearch } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Strategy",
    description:
      "Aligning data potential with business reality through immersive strategic mapping.",
    icon: ScanSearch,
    color: "#3b82f6",
  },
  {
    id: "02",
    title: "Architecture",
    subtitle: "Engineering",
    description:
      "Transforming raw chaos into structured intelligence with robust data pipelines.",
    icon: DatabaseZap,
    color: "#a855f7",
  },
  {
    id: "03",
    title: "Intelligence",
    subtitle: "Modeling",
    description:
      "Deploying deep learning models that evolve, predict, and uncover hidden realities.",
    icon: BrainCircuit,
    color: "#ec4899",
  },
  {
    id: "04",
    title: "Impact",
    subtitle: "Action",
    description:
      "Synthesizing complex data into decisive signals that drive automated business action.",
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
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Ambient Background */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        {/* Desktop / Sticky Content */}
        <motion.div style={{ opacity }} className="w-full">
          <div className="container relative z-20 mx-auto mb-12 px-6">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Neural Process
              </span>
              <span className="ml-3 border-l border-border pl-3 text-2xl font-light text-muted-foreground">
                Scroll to Explore
              </span>
            </h2>
          </div>

          <div className="relative w-full overflow-visible pl-6 md:pl-20">
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
    <div className="group relative h-[50vh] w-[85vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-500 hover:border-primary/30 md:w-[45vw] lg:w-[30vw]">
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at top right, ${step.color}, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <step.icon className="h-7 w-7" style={{ color: step.color }} />
          </div>
          <span className="font-serif text-6xl font-bold tabular-nums opacity-10">
            {step.id}
          </span>
        </div>

        <div>
          <span
            className="mb-2 block text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: step.color }}
          >
            {step.subtitle}
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight text-foreground">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};
