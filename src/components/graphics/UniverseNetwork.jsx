"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Briefcase,
  Database,
  FileText,
  Target
} from "lucide-react";
import { useEffect, useState } from "react";

const centerNode = { icon: FileText, label: "Core", color: "primary" };

const orbitNodes = [
  { icon: BarChart2, label: "Analytics", color: "teal", angle: 0 },
  { icon: Database, label: "Data", color: "primary", angle: 60 },
  { icon: Briefcase, label: "Strategy", color: "burgundy", angle: 120 },
  { icon: Target, label: "Goals", color: "teal", angle: 180 },
  { icon: FileText, label: "Docs", color: "primary", angle: 240 },
  { icon: BarChart2, label: "Reports", color: "burgundy", angle: 300 },
];

export const UniverseNetwork = () => {
  const radius = 140;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 30 + Math.random() * 40,
      top: 30 + Math.random() * 40,
      duration: 2 + Math.random() * 2,
      delay: i * 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {orbitNodes.map((node, index) => {
          const x = parseFloat((200 + radius * Math.cos((node.angle * Math.PI) / 180)).toFixed(3));
          const y = parseFloat((200 + radius * Math.sin((node.angle * Math.PI) / 180)).toFixed(3));

          // Connect to center
          return (
            <motion.line
              key={`center-${index}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          );
        })}

        {/* Cross connections */}
        {orbitNodes.map((node, index) => {
          const nextIndex = (index + 2) % orbitNodes.length;
          const x1 = parseFloat((200 + radius * Math.cos((node.angle * Math.PI) / 180)).toFixed(3));
          const y1 = parseFloat((200 + radius * Math.sin((node.angle * Math.PI) / 180)).toFixed(3));
          const x2 = parseFloat((200 + radius * Math.cos((orbitNodes[nextIndex].angle * Math.PI) / 180)).toFixed(3));
          const y2 = parseFloat((200 + radius * Math.sin((orbitNodes[nextIndex].angle * Math.PI) / 180)).toFixed(3));

          return (
            <motion.line
              key={`cross-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--teal) / 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Center node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
      >
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow">
          <centerNode.icon className="w-8 h-8 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Orbit nodes */}
      {orbitNodes.map((node, index) => {
        const Icon = node.icon;
        const x = parseFloat((50 + (radius / 4) * Math.cos((node.angle * Math.PI) / 180)).toFixed(3));
        const y = parseFloat((50 + (radius / 4) * Math.sin((node.angle * Math.PI) / 180)).toFixed(3));

        const colorClass = node.color === "primary"
          ? "border-primary/30 text-primary"
          : node.color === "teal"
            ? "border-teal/30 text-teal"
            : "border-burgundy-dark/30 text-burgundy-dark";

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
          >
            <div className={`w-14 h-14 rounded-full border-2 ${colorClass} bg-background flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer`}>
              <Icon className="w-6 h-6" />
            </div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
