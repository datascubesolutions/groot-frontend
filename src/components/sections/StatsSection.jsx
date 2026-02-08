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
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/10 border-y border-border relative overflow-hidden">
      {/* Subtle Grid overlay for Stats */}
      <div className="absolute inset-0 grid-pattern-lg pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest/60 max-w-[150px] mx-auto leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
