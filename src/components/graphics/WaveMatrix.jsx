// @ts-nocheck
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
    <div className="mx-auto w-full max-w-[600px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        {/* Header */}
        <div className="bg-charcoal p-4 text-primary-foreground">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="text-sm font-medium opacity-70">Initiative</div>
            {waves.map((wave) => (
              <div key={wave.label} className="text-sm font-semibold">
                {wave.label}
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-between bg-muted px-4 py-2 text-xs">
          <span className="font-medium text-teal">
            Minimum Viable Experience
          </span>
          <div className="mx-4 h-1 flex-1 rounded-full bg-gradient-to-r from-teal via-primary to-burgundy-dark" />
          <span className="font-medium text-primary">
            Maximum Transformation
          </span>
        </div>

        {/* Matrix body */}
        <div className="space-y-4 p-4">
          {rows.map((row, rowIndex) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.2 }}
                className="grid grid-cols-4 items-center gap-2"
              >
                {/* Row label */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {row.label}
                  </span>
                </div>

                {/* Wave cells */}
                {waves.map((wave, waveIndex) => (
                  <div key={wave.label} className="space-y-1">
                    <div className="relative h-12 overflow-hidden rounded-lg border border-dashed border-border bg-muted/30">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${wave.progress - waveIndex * 20}%`,
                        }}
                        transition={{
                          delay: 0.5 + waveIndex * 0.2,
                          duration: 0.8,
                        }}
                        className={`absolute inset-y-0 left-0 ${
                          waveIndex === 0
                            ? "bg-teal/30"
                            : waveIndex === 1
                              ? "bg-primary/30"
                              : "bg-burgundy-dark/30"
                        }`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">
                          Add Matrix +
                        </span>
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
