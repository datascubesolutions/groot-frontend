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
  Users 
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Navigate Complexity",
    description: "Structure problem definitions with precision and clarity across all organizational levels.",
  },
  {
    icon: GitBranch,
    title: "Map Interconnections",
    description: "Visualize relationships between business challenges to identify leverage points.",
  },
  {
    icon: Layers,
    title: "Systematic Transformation",
    description: "Plan and achieve measurable outcomes through iterative decision frameworks.",
  },
  {
    icon: BarChart2,
    title: "Harmonize Analytics",
    description: "Align creation and consumption of data-driven insights across stakeholders.",
  },
  {
    icon: Zap,
    title: "Accelerate Decisions",
    description: "Reduce cycle time by tracking progress and identifying bottlenecks proactively.",
  },
  {
    icon: Users,
    title: "Enable Collaboration",
    description: "Foster shared understanding with a common language around organizational challenges.",
  },
];

export const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
            The <span className="text-primary">Enquiry Engine</span> is Your Enabling Platform
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A unified ecosystem that combines multiple applications working in unison to help 
            organizations navigate complexity and achieve systematic transformations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
