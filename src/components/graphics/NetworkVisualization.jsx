"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import { 
  LayoutGrid, 
  Database, 
  Brain, 
  Network, 
  Target, 
  TrendingUp, 
  Workflow, 
  Puzzle,
  BarChart3,
  Lightbulb
} from "lucide-react";

const nodes = [
  { id: 1, icon: Brain, x: 50, y: 25, color: "primary", label: "Enquiry Engine" },
  { id: 2, icon: Database, x: 15, y: 35, color: "teal", label: "muPDNA" },
  { id: 3, icon: Target, x: 85, y: 35, color: "burgundy", label: "muOBI" },
  { id: 4, icon: Network, x: 25, y: 65, color: "primary", label: "muUniverse" },
  { id: 5, icon: Workflow, x: 75, y: 65, color: "teal", label: "muDSC" },
  { id: 6, icon: BarChart3, x: 50, y: 80, color: "burgundy", label: "Analytics" },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 1, to: 5 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 6 },
  { from: 2, to: 6 },
  { from: 3, to: 6 },
];

const getNodePosition = (id) => {
  const node = nodes.find(n => n.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
};

export const NetworkVisualization = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate floating particles only on client to avoid hydration mismatch
  const floatingParticles = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      duration: 3 + Math.random() * 2,
      delay: i * 0.3,
    }));
  }, [isMounted]);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--teal))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#connectionGradient)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const colorClass = node.color === "primary" 
          ? "bg-primary text-primary-foreground" 
          : node.color === "teal" 
            ? "bg-teal text-accent-foreground" 
            : "bg-burgundy-dark text-primary-foreground";
        
        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
          >
            <div className="relative group cursor-pointer">
              {/* Outer ring */}
              <div className={`w-16 h-16 rounded-full border-2 ${
                node.color === "primary" 
                  ? "border-primary/30" 
                  : node.color === "teal" 
                    ? "border-teal/30" 
                    : "border-burgundy-dark/30"
              } flex items-center justify-center bg-background/80 backdrop-blur-sm shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-muted-foreground">{node.label}</span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Floating particles - only render on client */}
      {isMounted && floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
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
