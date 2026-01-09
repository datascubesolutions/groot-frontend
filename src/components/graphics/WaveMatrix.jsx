"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Sparkles } from "lucide-react";

const waves = [
  { label: "Wave 1", progress: 85 },
  { label: "Wave 2", progress: 65 },
  { label: "Wave 3", progress: 40 },
];

const rows = [
  { label: "Outcomes", icon: Target },
  { label: "Shared Behaviors", icon: TrendingUp },
  { label: "Enablers & Insights", icon: Sparkles },
];

export const WaveMatrix = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-charcoal text-primary-foreground p-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="text-sm font-medium opacity-70">Initiative</div>
            {waves.map((wave) => (
              <div key={wave.label} className="text-sm font-semibold">{wave.label}</div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="bg-muted px-4 py-2 flex items-center justify-between text-xs">
          <span className="text-teal font-medium">Minimum Viable Experience</span>
          <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-teal via-primary to-burgundy-dark rounded-full" />
          <span className="text-primary font-medium">Maximum Transformation</span>
        </div>

        {/* Matrix body */}
        <div className="p-4 space-y-4">
          {rows.map((row, rowIndex) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.2 }}
                className="grid grid-cols-4 gap-2 items-center"
              >
                {/* Row label */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{row.label}</span>
                </div>

                {/* Wave cells */}
                {waves.map((wave, waveIndex) => (
                  <div key={wave.label} className="space-y-1">
                    <div className="h-12 border border-dashed border-border rounded-lg bg-muted/30 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${wave.progress - waveIndex * 20}%` }}
                        transition={{ delay: 0.5 + waveIndex * 0.2, duration: 0.8 }}
                        className={`absolute inset-y-0 left-0 ${
                          waveIndex === 0 
                            ? "bg-teal/30" 
                            : waveIndex === 1 
                              ? "bg-primary/30" 
                              : "bg-burgundy-dark/30"
                        }`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Add Matrix +</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
