// @ts-nocheck
"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function SourceChart({ trafficSources }) {
  if (!trafficSources || trafficSources.length === 0) {
    return (
      <div className="flex h-full min-h-[150px] items-center justify-center text-sm text-muted-foreground">
        No source data
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={trafficSources}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          stroke="hsl(var(--card))"
          strokeWidth={4}
          paddingAngle={2}
          dataKey="value"
        >
          {trafficSources.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              className="opacity-90 transition-opacity hover:opacity-100"
            />
          ))}
        </Pie>
        <RechartsTooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "10px",
            boxShadow: "0 4px 15px -2px rgba(0,0,0,0.1)",
            fontSize: "12px",
            color: "hsl(var(--foreground))",
          }}
          itemStyle={{ color: "hsl(var(--foreground))" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
