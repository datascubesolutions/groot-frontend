"use client";

import { motion } from "framer-motion";

export function DeliveryTimeline({ title = "How We Deliver", timeline = [] }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a2418] via-[#0d2e1f] to-[#0a2418] text-white relative overflow-hidden">
      {/* Subtle radial glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#164e3c]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#164e3c]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6"
          >
            {title}
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-400/20 to-emerald-500/40">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-emerald-400 via-emerald-300 to-emerald-400 relative z-0"
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-6 md:gap-10 group"
              >
                {/* Node */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-400 text-[#0a2418] shadow-lg shadow-emerald-400/25 flex items-center justify-center group-hover:shadow-emerald-400/40 group-hover:scale-110 transition-all duration-500 ease-out"
                  >
                    <span className="font-bold text-lg md:text-xl">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">

                  {/* Subtle top-left gradient glow on hover */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-400/0 group-hover:bg-emerald-400/[0.06] blur-[50px] rounded-full transition-all duration-700 pointer-events-none" />

                  {/* Phase pill */}
                  <div className="inline-flex items-center mb-5">
                    <span className="px-4 py-1.5 bg-emerald-400/10 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.15em] rounded-full border border-emerald-400/20">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-6 text-[15px]">
                    {item.description}
                  </p>

                  {/* Deliverable Box */}
                  {item.deliverable && (
                    <div className="bg-white/[0.04] rounded-xl p-5 border border-white/[0.06]">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[11px] font-bold text-emerald-300/80 uppercase tracking-[0.15em]">
                          You Get
                        </span>
                      </div>
                      <span className="text-white/90 font-medium text-[15px]">
                        {item.deliverable}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
