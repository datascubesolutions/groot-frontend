"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every solution is tailored to your specific business context and goals.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Rapid iteration and delivery without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise-grade security, governance, and scalability built-in.",
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
      className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Groot Analytics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Premier Partner for{" "}
              <span className="text-gradient">Microsoft Azure</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Groot Analytics is a specialized consultancy focused on the
              Microsoft Azure ecosystem. We leverage the full power of Azure,
              Fabric, Databricks, and AI Foundry to build scalable, secure, and
              intelligent data solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower your business with cutting-edge Microsoft
              technologies—turning complex data into actionable insights and
              sustainable growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  1200+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Industries Served
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
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
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
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
