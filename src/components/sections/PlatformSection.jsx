// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  GitBranch,
  Layers,
  BarChart2,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Navigate Complexity",
    description:
      "Structure problem definitions with precision and clarity across all organizational levels.",
  },
  {
    icon: GitBranch,
    title: "Map Interconnections",
    description:
      "Visualize relationships between business challenges to identify leverage points.",
  },
  {
    icon: Layers,
    title: "Systematic Transformation",
    description:
      "Plan and achieve measurable outcomes through iterative decision frameworks.",
  },
  {
    icon: BarChart2,
    title: "Harmonize Analytics",
    description:
      "Align creation and consumption of data-driven insights across stakeholders.",
  },
  {
    icon: Zap,
    title: "Accelerate Decisions",
    description:
      "Reduce cycle time by tracking progress and identifying bottlenecks proactively.",
  },
  {
    icon: Users,
    title: "Enable Collaboration",
    description:
      "Foster shared understanding with a common language around organizational challenges.",
  },
];

export const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <h2 className="mb-6 font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            The <span className="text-primary">Enquiry Engine</span> is Your
            Enabling Platform
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            A unified ecosystem that combines multiple applications working in
            unison to help organizations navigate complexity and achieve
            systematic transformations.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
