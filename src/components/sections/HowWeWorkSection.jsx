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
    timeline: "WEEK 1-2",
    icon: FileSearch,
    // Yellow Theme
    bgColor: "bg-[#FFF9E6]",
    iconBg: "bg-[#FFF9E6]",
    borderColor: "border-[#FFE599]",
    textColor: "text-[#B45F06]",
    iconColor: "#F1C232",
    activities: [
      "Understand your systems",
      "Map data sources",
      "Define goals"
    ]
  },
  {
    id: "02",
    title: "BUILD FOUNDATION",
    timeline: "WEEK 3-6",
    icon: Users,
    // Purple Theme
    bgColor: "bg-[#F3E8FF]",
    iconBg: "bg-[#F3E8FF]",
    borderColor: "border-[#D8B4FE]",
    textColor: "text-[#7E22CE]",
    iconColor: "#A855F7",
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
    timeline: "WEEK 7-12",
    icon: Workflow,
    // Green/Teal Theme
    bgColor: "bg-[#E6FFFA]",
    iconBg: "bg-[#E6FFFA]",
    borderColor: "border-[#81E6D9]",
    textColor: "text-[#2C7A7B]",
    iconColor: "#38B2AC",
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
    timeline: "ONGOING",
    icon: PackageCheck,
    // Red/Pink Theme
    bgColor: "bg-[#FFF5F5]",
    iconBg: "bg-[#FFF5F5]",
    borderColor: "border-[#FEB2B2]",
    textColor: "text-[#C53030]",
    iconColor: "#F56565",
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
    <section className="py-12 relative overflow-visible">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
          >
            How we work
          </motion.h2>
        </div>

        {/* Timeline Desktop View */}
        <div className="hidden lg:block relative font-sans">

          {/* Top Row: Week Labels & Icons */}
          <div className="grid grid-cols-4 gap-6 mb-0">
            {phases.map((phase) => (
              <div key={phase.id} className="flex flex-col items-center justify-end h-[140px]">
                {/* Week Label */}
                <span className="mb-4 text-sm font-extrabold text-slate-500 uppercase tracking-wider block">
                  {phase.timeline}
                </span>

                {/* Icon */}
                <div className={`w-[80px] h-[80px] rounded-lg ${phase.iconBg} flex items-center justify-center border border-transparent shadow-sm z-20 relative transition-transform duration-300 hover:-translate-y-1`}>
                  <phase.icon className="w-9 h-9" style={{ color: phase.iconColor }} strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>

          {/* Middle: Horizontal Line & Connector */}
          <div className="relative h-[60px] w-full">
            {/* Main Line - Centered vertically - Thicker & Darker */}
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-300 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-6 h-full">
              {phases.map((phase) => (
                <div key={phase.id} className="relative h-full flex justify-center items-center">
                  {/* Vertical Connector - Thicker & Darker */}
                  <div className="w-[3px] h-full bg-slate-300" />
                  {/* Marker at intersection */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#F97316] rounded-full border-2 border-white z-10`} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Cards */}
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="w-full"
              >
                <div className={`h-full ${phase.bgColor} rounded-lg p-6 relative transition-all duration-300 hover:shadow-lg border border-slate-100/50`}>

                  {/* Number - Inside Card, Top Right */}
                  <div className={`absolute top-4 right-4 text-3xl font-bold ${phase.textColor} opacity-20`}>
                    {phase.id}
                  </div>

                  {/* Title */}
                  <h3 className={`text-[17px] font-extrabold ${phase.textColor} mb-4 uppercase leading-tight pr-8`}>
                    {phase.title}
                  </h3>

                  {/* Bullet List */}
                  <ul className="space-y-2.5">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] font-semibold text-slate-700">
                        <div className={`mt-[6px] w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0`} />
                        <span className="leading-snug">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8 relative max-w-md mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${phase.bgColor} rounded-xl p-6 shadow-sm border border-slate-100`}>
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon in Mobile */}
                  <div className={`w-12 h-12 rounded-lg ${phase.iconBg} flex items-center justify-center shadow-sm shrink-0`}>
                    <phase.icon className="w-6 h-6" style={{ color: phase.iconColor }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase block mb-1">{phase.timeline}</span>
                    <h3 className={`font-bold ${phase.textColor} text-lg`}>
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                        {activity}
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
