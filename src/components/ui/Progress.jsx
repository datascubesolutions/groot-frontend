"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import * as React from "react"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-gradient-to-r from-slate-100 to-slate-50 shadow-inner",
      className
    )}
    {...props}
  >
    {/* Background shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

    {/* Progress bar with gradient */}
    <motion.div
      className="h-full relative overflow-hidden rounded-full shadow-md"
      initial={{ width: 0 }}
      animate={{ width: `${value || 0}%` }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-primary" />

      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut"
        }}
      />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-emerald-500/50 to-primary/50 blur-sm" />
    </motion.div>
  </div>
))
Progress.displayName = "Progress"

export { Progress }
