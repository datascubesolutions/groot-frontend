// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every solution is tailored to your specific business context and goals.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Rapid iteration and delivery without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Enterprise-grade security, governance, and scalability built-in.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Solutions that deliver measurable business outcomes.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-24"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-5">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
              About Groot Analytics
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Your Premier Partner for{" "}
              <span className="text-gradient">Microsoft Azure</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Groot Analytics is a specialized consultancy focused on the
              Microsoft Azure ecosystem. We leverage the full power of Azure,
              Fabric, Databricks, and AI Foundry to build scalable, secure, and
              intelligent data solutions.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Our mission is to empower your business with cutting-edge
              Microsoft technologies—turning complex data into actionable
              insights and sustainable growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="mb-1 text-3xl font-bold text-primary md:text-4xl">
                  1200+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-primary md:text-4xl">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Industries Served
                </div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-primary md:text-4xl">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Retention
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
