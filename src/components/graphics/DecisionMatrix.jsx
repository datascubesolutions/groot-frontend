"use client";

import { motion } from "framer-motion";

const columns = ["Problem List", "Source", "Produce", "Distribute", "Consume"];
const rows = [
  { label: "Customer Retention", values: [1, 1, 1, 0.5, 0.3] },
  { label: "Customer Segmentation", values: [1, 0.8, 0.9, 0.6, 0.4] },
  { label: "Customer Reactivation", values: [0.9, 0.7, 0.5, 0.3, 0.2] },
  { label: "Prediction - Risk Assessment", values: [0.8, 0.6, 0.4, 0.2, 0.1] },
];

const getStatusColor = (value) => {
  if (value >= 0.8) return "bg-teal";
  if (value >= 0.5) return "bg-primary";
  if (value >= 0.3) return "bg-burgundy-dark";
  return "bg-muted";
};

export const DecisionMatrix = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-charcoal text-primary-foreground p-4">
          <div className="grid grid-cols-6 gap-2 text-center">
            {columns.map((col, index) => (
              <div 
                key={col} 
                className={`text-xs font-semibold ${index === 0 ? 'col-span-1 text-left' : 'col-span-1'}`}
              >
                {col}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix body */}
        <div className="p-4 space-y-3">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.15 }}
              className="grid grid-cols-6 gap-2 items-center"
            >
              {/* Row label */}
              <div className="text-xs font-medium text-foreground truncate">
                {row.label}
              </div>

              {/* Value cells */}
              {row.values.map((value, valueIndex) => (
                <div key={valueIndex} className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + rowIndex * 0.1 + i * 0.05 }}
                      className={`h-6 flex-1 rounded-sm ${
                        i < Math.round(value * 5) 
                          ? getStatusColor(value) 
                          : "bg-muted/50"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="px-4 py-3 border-t border-border bg-muted/20">
          <div className="flex items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-teal" />
              <span className="text-muted-foreground">Complete</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary" />
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-burgundy-dark" />
              <span className="text-muted-foreground">At Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-muted/50" />
              <span className="text-muted-foreground">Not Started</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
