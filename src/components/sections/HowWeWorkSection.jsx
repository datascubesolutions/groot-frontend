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
    title: "Discover & Assess",
    timeline: "WEEK 1-2",
    icon: FileSearch,
    tagline: "We learn your world first.",
    activities: [
      "Deep-dive into your systems & data landscape",
      "Map sources, flows, and ownership",
      "Define clear success metrics & roadmap"
    ]
  },
  {
    id: "02",
    title: "Build Foundation",
    timeline: "WEEK 3-6",
    icon: Users,
    tagline: "Governed from day one.",
    activities: [
      "Deploy Azure Fabric & Purview",
      "Establish governance & security framework",
      "Stand up first production pipelines"
    ]
  },
  {
    id: "03",
    title: "Enable & Scale",
    timeline: "WEEK 7-12",
    icon: Workflow,
    tagline: "Insight that drives decisions.",
    activities: [
      "Power BI dashboards leadership trusts",
      "AI Foundry & Copilot integration",
      "User training & enablement"
    ]
  },
  {
    id: "04",
    title: "Protect Your Investment",
    timeline: "ONGOING",
    icon: PackageCheck,
    tagline: "Built to last.",
    activities: [
      "Continuous monitoring & optimization",
      "Data quality & lineage tracking",
      "New use cases & expansion"
    ]
  }
];

export function HowWeWorkSection() {
  return (
    <section className="relative overflow-visible bg-background py-20 md:py-24">
      {/* Background decor - matches ServicesSection, ProcessTimelineSection */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Our methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-6"
          >
            How we <span className="text-gradient-forest">work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="body-large mx-auto max-w-2xl text-center"
          >
            A proven path from data chaos to governed insight — delivered in weeks, not years.
          </motion.p>
        </div>

        {/* Timeline Desktop View */}
        <div className="hidden lg:block relative font-sans">

          {/* Top Row: Week Labels & Icons */}
          <div className="mb-0 grid grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex h-[160px] flex-col items-center justify-end"
              >
                {/* Week Label */}
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-forest">
                  {phase.timeline}
                </span>

                {/* Icon Container - Gradient border, elevated */}
                <div className="relative z-20 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-white shadow-lg shadow-forest/10 ring-2 ring-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15 hover:ring-primary/40">
                  <phase.icon className="h-10 w-10 text-primary" strokeWidth={2} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle: Horizontal Line & Connector - multi-color gradient, previous structure */}
          <div className="relative h-[72px] w-full">
            {/* Main Line - theme gradient (forest → primary) */}
            <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-forest/20 via-primary/70 to-forest/20 z-0" />

            <div className="grid h-full grid-cols-4 gap-6">
              {phases.map((phase) => (
                <div key={phase.id} className="relative flex h-full items-center justify-center">
                  {/* Vertical Connector */}
                  <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />
                  {/* Marker at intersection */}
                  <div className="absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-md ring-4 ring-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Cards */}
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="w-full"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                  {/* Top accent - theme gradient (forest → primary) */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-forest via-primary to-forest" />
                  {/* Left accent stripe - theme gradient */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-forest via-primary to-forest" />

                  {/* Number - theme colors, visible */}
                  <div className="absolute top-6 right-6 text-7xl font-black leading-none text-primary/40 pointer-events-none">
                    {phase.id}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 pr-16 text-xl font-bold tracking-tight text-forest">
                    {phase.title}
                  </h3>
                  {/* Tagline */}
                  <p className="mb-6 text-sm font-medium text-primary">
                    {phase.tagline}
                  </p>

                  {/* Bullet List */}
                  <ul className="space-y-4">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-primary ring-2 ring-primary/25" />
                        <span className="text-[15px] font-medium leading-snug text-slate-700">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="relative mx-auto max-w-md space-y-6 lg:hidden">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60">
                {/* Top accent - theme gradient */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-forest via-primary to-forest" />
                {/* Left accent stripe - theme gradient */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-forest via-primary to-forest" />
                <div className="mb-5 flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                    <phase.icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-forest">
                      {phase.timeline}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-forest">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {phase.tagline}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-primary ring-2 ring-primary/25" />
                      <span className="text-[15px] font-medium leading-snug text-slate-700">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowWeWorkSection;
