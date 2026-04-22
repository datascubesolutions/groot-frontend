// @ts-nocheck
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 140, suffix: "+", label: "Fortune 500 Companies Globally" },
  { value: 12, suffix: "+", label: "Industries Served with Innovation" },
  { value: 20, suffix: "+", label: "Years - The OG of Decision Sciences" },
  { value: 4500, suffix: "+", label: "Decision Scientists Worldwide" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-muted/10 py-20"
    >
      {/* Subtle Grid overlay for Stats */}
      <div className="grid-pattern-lg pointer-events-none absolute inset-0" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 text-center"
            >
              <div className="mb-3 text-4xl font-bold text-primary md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mx-auto max-w-[150px] text-xs font-bold uppercase leading-relaxed tracking-[0.15em] text-forest/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
