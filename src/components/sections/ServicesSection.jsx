"use client";

import { motion } from "framer-motion";
import {
  Database,
  Brain,
  LineChart,
  Settings,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Enterprise-grade data lakes, warehouses, and medallion architectures with Microsoft Fabric, Azure, and Databricks.",
    features: ["ETL/ELT Pipelines", "Semantic Models", "Data Governance"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Predictive modeling, NLP-powered classification, and intelligent automation that drives real business value.",
    features: ["Predictive Analytics", "NLP Solutions", "Custom ML Models"],
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Operational, financial, and workforce analytics with forecasting, scenario planning, and what-if simulations.",
    features: ["Power BI Dashboards", "Real-time Insights", "Custom Reports"],
  },
  {
    icon: Settings,
    title: "Business Solutions",
    description:
      "Financial analytics, operations optimization, customer profitability, and supply chain insights.",
    features: ["Cost Modeling", "Revenue Optimization", "Inventory Analytics"],
  },
  {
    icon: Users,
    title: "Workforce Analytics",
    description:
      "Workforce planning, utilization analytics, and resource optimization for better team performance.",
    features: ["Capacity Planning", "Performance Metrics", "Resource Allocation"],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description:
      "Data strategy roadmaps, architecture modernization, and analytics CoE setup with team upskilling.",
    features: ["Data Roadmaps", "Team Training", "Change Management"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Dot connection lines - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-1/4 left-0 w-full h-full opacity-10"
          viewBox="0 0 1000 600"
        >
          <path
            d="M0,300 Q250,100 500,300 T1000,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            End-to-end data solutions that{" "}
            <span className="text-gradient">drive growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From raw data to intelligent decisions, we build the entire stack—
            modern platforms, advanced analytics, and AI-powered automation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} className="group">
              <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mint/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Connecting dots decoration */}
                <div className="absolute top-8 right-8 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
