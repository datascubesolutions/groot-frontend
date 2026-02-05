"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  PackageCheck,
  Users,
  Workflow
} from "lucide-react";

const phases = [
  {
    id: "01",
    title: "DISCOVER & ASSESS",
    timeline: "PHASE 01",
    icon: FileSearch,
    borderColor: "border-primary/20",
    textColor: "text-forest",
    iconColor: "hsl(var(--forest))",
    glowColor: "rgba(168, 255, 230, 0.4)", // Mint-ish
    activities: [
      "Understand your systems",
      "Map data sources",
      "Define goals"
    ]
  },
  {
    id: "02",
    title: "BUILD FOUNDATION",
    timeline: "PHASE 02",
    icon: Users,
    borderColor: "border-primary/20",
    textColor: "text-forest",
    iconColor: "hsl(var(--forest))",
    glowColor: "rgba(5, 150, 105, 0.3)", // Emerald
    activities: [
      "Deploy Fabric",
      "Set up Purview",
      "Governance framework",
      "First pipelines"
    ]
  },
  {
    id: "03",
    title: "ENABLE & SCALE",
    timeline: "PHASE 03",
    icon: Workflow,
    borderColor: "border-primary/20",
    textColor: "text-forest",
    iconColor: "hsl(var(--forest))",
    glowColor: "rgba(13, 148, 136, 0.3)", // Teal
    activities: [
      "Power BI dashboards",
      "AI Foundry",
      "User training",
      "Enablement"
    ]
  },
  {
    id: "04",
    title: "PROTECT YOUR INVESTMENT",
    timeline: "PHASE 04",
    icon: PackageCheck,
    borderColor: "border-primary/20",
    textColor: "text-forest",
    iconColor: "hsl(var(--forest))",
    glowColor: "rgba(2, 44, 34, 0.2)", // Deep Forest
    activities: [
      "Ensure it doesn't rot",
      "Pipeline monitoring",
      "Data quality",
      "New use cases"
    ]
  }
];

export function HowWeWorkSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header - Premium Gradient */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-forest/10 bg-forest/5 backdrop-blur-sm"
          >
            <span className="text-xs font-bold text-forest tracking-[0.2em] uppercase">The Implementation Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#022c22] animate-gradient">
              How we work
            </span>
          </motion.h2>
        </div>

        {/* Timeline Desktop View */}
        <div className="hidden lg:block relative font-sans">

          {/* Top Row: Phase Labels & Icons */}
          <div className="grid grid-cols-4 gap-8 mb-0">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-end h-[160px]"
              >
                {/* Phase Label */}
                <span className="mb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] block">
                  {phase.timeline}
                </span>

                {/* Icon Container - Glassmorphic */}
                <div className={`
                    w-[90px] h-[90px] rounded-2xl bg-white/40 backdrop-blur-xl
                    flex items-center justify-center border border-white/20 shadow-xl
                    z-20 relative transition-all duration-500 group hover:-translate-y-2
                `}>
                  {/* Internal Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${phase.glowColor}, transparent 70%)` }}
                  />
                  <phase.icon className="w-10 h-10 relative z-10 text-forest" strokeWidth={1.5} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle: Horizontal Line & Connector */}
          <div className="relative h-[80px] w-full flex items-center">
            {/* Main Horizontal Line - Continuous across columns */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-forest/40 to-transparent z-0 origin-left"
            />

            <div className="grid grid-cols-4 gap-8 w-full h-full relative z-10">
              {phases.map((phase, i) => (
                <div key={phase.id} className="relative flex items-center justify-center">
                  {/* Vertical Connector - Fixed height crossing point */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
                    className="w-[1.5px] h-full bg-forest/20 origin-center"
                  />
                  {/* The Intersection Point (Dot) - Perfectly Centered */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.8, type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute w-3.5 h-3.5 bg-forest rounded-full border-2 border-background shadow-[0_0_12px_rgba(5,150,105,0.4)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Cards - Premium Glass */}
          <div className="grid grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.6 }}
                className="w-full"
              >
                <div className={`
                    h-full relative p-8 rounded-3xl backdrop-blur-xl bg-white/40 border border-white/20
                    shadow-2xl transition-all duration-500 hover:shadow-mint/10 hover:-translate-y-1 group
                `}>
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: phase.glowColor }}
                  />

                  {/* ID Number */}
                  <div className={`absolute top-6 right-8 text-4xl font-serif font-black text-forest/15`}>
                    {phase.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-forest mb-6 tracking-tight leading-tight pr-6">
                    {phase.title}
                  </h3>

                  {/* Activity List */}
                  <ul className="space-y-4">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-muted-foreground/90">
                        <div className="mt-1.5 w-1.5 h-1.5 rotate-45 rounded-[2px] bg-primary shrink-0 shadow-[0_0_8px_rgba(168,255,230,0.8)]" />
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Enhanced Quality */}
        <div className="lg:hidden space-y-10 relative max-w-md mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative p-7 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden group">
                {/* Mobile ID Number */}
                <div className="absolute top-6 right-7 text-3xl font-serif font-black text-forest/15">
                  {phase.id}
                </div>
                {/* Mobile Title Row */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center shrink-0 border border-forest/10 shadow-inner">
                    <phase.icon className="w-7 h-7 text-forest" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">{phase.timeline}</span>
                    <h3 className="font-bold text-forest text-lg tracking-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Mobile Activity Row */}
                <div className="bg-white/30 rounded-2xl p-5 border border-white/10 shadow-inner">
                  <ul className="space-y-3.5">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-muted-foreground">
                        <div className="mt-1.5 w-1.5 h-1.5 rotate-45 rounded-[2px] bg-primary shrink-0 shadow-[0_0_8px_rgba(168,255,230,0.8)]" />
                        <span className="leading-snug">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowWeWorkSection;
