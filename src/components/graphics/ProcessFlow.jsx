"use client";

import { motion } from "framer-motion";
import { 
  FileSearch, 
  Lightbulb, 
  PenTool, 
  GitBranch, 
  FlaskConical,
  CheckCircle 
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
    <div className="relative w-full max-w-[500px] mx-auto py-8">
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
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted-foreground/50">
                  →
                </div>
              )}
              
              <div className="relative group">
                {/* Step number badge */}
                <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                  step.color === "primary" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-teal text-accent-foreground"
                }`}>
                  {step.id}
                </div>

                {/* Card */}
                <div className="w-32 p-4 bg-card border border-border rounded-xl shadow-md group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                  {/* Header bar */}
                  <div className={`h-1.5 rounded-full mb-3 ${
                    step.color === "primary" ? "bg-primary" : "bg-teal"
                  }`} />
                  
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                    step.color === "primary" ? "bg-primary/10" : "bg-teal/10"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      step.color === "primary" ? "text-primary" : "text-teal"
                    }`} />
                  </div>
                  
                  {/* Label */}
                  <p className="text-xs font-medium text-center text-foreground">{step.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
