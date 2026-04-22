// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Database,
  Network,
  Target,
  Workflow,
} from "lucide-react";
import { createMulberry32 } from "@/lib/prng";
import { useMemo } from "react";

// Nodes positioned in a perfect hexagonal geometry where each node
// sits at the exact junction point of 3 connection lines
const nodes = [
  { id: 1, icon: Brain, x: 50, y: 18, color: "teal", label: "Enquiry Engine" },
  { id: 2, icon: Database, x: 8, y: 40, color: "teal", label: "muPDNA" },
  { id: 3, icon: Target, x: 92, y: 40, color: "burgundy", label: "muOBI" },
  { id: 4, icon: Network, x: 16, y: 78, color: "teal", label: "muUniverse" },
  { id: 5, icon: Workflow, x: 84, y: 78, color: "teal", label: "muDSC" },
  {
    id: 6,
    icon: BarChart3,
    x: 50,
    y: 88,
    color: "burgundy",
    label: "Analytics",
  },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 1, to: 5 },
  { from: 1, to: 6 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 6 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 6 },
];

const getNodePosition = (id) => {
  const node = nodes.find((n) => n.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
};

export const NetworkVisualization = () => {
  const floatingParticles = useMemo(() => {
    const rand = createMulberry32(0x6a09e667);
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + rand() * 60,
      top: 20 + rand() * 60,
      duration: 3 + rand() * 2,
      delay: i * 0.3,
    }));
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-48 w-48 animate-pulse-slow rounded-full bg-teal/5 blur-3xl" />
      </div>

      {/* SVG for connections */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle teal gradient */}
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--teal))" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(var(--teal))" stopOpacity="0.5" />
            <stop
              offset="100%"
              stopColor="hsl(var(--teal))"
              stopOpacity="0.4"
            />
          </linearGradient>

          {/* Radial gradient for flowing dots */}
          <radialGradient id="dotGradient">
            <stop offset="0%" stopColor="hsl(var(--teal))" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(var(--teal))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--teal))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const pathId = `path-${index}`;

          return (
            <g key={`connection-${index}`}>
              {/* The line path */}
              <motion.line
                id={pathId}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#connectionGradient)"
                strokeWidth="0.25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

              {/* Animated dot flowing along the line */}
              <motion.circle
                r="0.8"
                fill="url(#dotGradient)"
                initial={{
                  cx: from.x,
                  cy: from.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [from.x, to.x, from.x],
                  cy: [from.y, to.y, from.y],
                  opacity: [0, 0.9, 0.9, 0],
                }}
                transition={{
                  duration: 3 + (index % 3) * 0.5,
                  repeat: Infinity,
                  delay: 1 + index * 0.15,
                  ease: "linear",
                  times: [0, 0.05, 0.95, 1],
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const colorClass =
          node.color === "teal"
            ? "bg-teal text-white"
            : "bg-burgundy-dark text-white";

        const borderColorClass =
          node.color === "teal"
            ? "border-teal/30 group-hover:border-teal/60"
            : "border-burgundy-dark/30 group-hover:border-burgundy-dark/60";

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.12,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div className="group relative cursor-pointer">
              {/* Subtle animated glow ring */}
              <motion.div
                className={`absolute inset-0 h-20 w-20 rounded-full ${
                  node.color === "teal" ? "bg-teal/10" : "bg-burgundy-dark/10"
                }`}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.05, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />

              {/* Outer ring */}
              <div
                className={`relative h-20 w-20 rounded-full border-2 ${borderColorClass} flex items-center justify-center bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}
              >
                <div
                  className={`h-12 w-12 rounded-full ${colorClass} flex items-center justify-center shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                  {node.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-teal/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};
