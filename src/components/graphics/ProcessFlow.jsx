// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Lightbulb,
  PenTool,
  GitBranch,
  FlaskConical,
  CheckCircle,
} from "lucide-react";

const steps = [
  { id: 1, label: "Situation", icon: FileSearch, color: "primary" },
  { id: 2, label: "Discovery", icon: Lightbulb, color: "teal" },
  { id: 3, label: "Design", icon: PenTool, color: "primary" },
  { id: 4, label: "Representation", icon: GitBranch, color: "teal" },
  { id: 5, label: "Hypothesis", icon: FlaskConical, color: "primary" },
  { id: 6, label: "Validation", icon: CheckCircle, color: "teal" },
];

export const ProcessFlow = () => {
  return (
    <div className="relative mx-auto w-full max-w-[500px] py-8">
      {/* Flow container */}
      <div className="flex flex-wrap justify-center gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-muted-foreground/50 md:block">
                  →
                </div>
              )}

              <div className="group relative">
                {/* Step number badge */}
                <div
                  className={`absolute -left-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    step.color === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-teal text-accent-foreground"
                  }`}
                >
                  {step.id}
                </div>

                {/* Card */}
                <div className="w-32 rounded-xl border border-border bg-card p-4 shadow-md transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                  {/* Header bar */}
                  <div
                    className={`mb-3 h-1.5 rounded-full ${
                      step.color === "primary" ? "bg-primary" : "bg-teal"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${
                      step.color === "primary" ? "bg-primary/10" : "bg-teal/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        step.color === "primary" ? "text-primary" : "text-teal"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-center text-xs font-medium text-foreground">
                    {step.label}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
