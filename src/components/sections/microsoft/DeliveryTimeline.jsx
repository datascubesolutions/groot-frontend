"use client";

import { motion } from "framer-motion";

export function DeliveryTimeline({ title = "How We Deliver", timeline = [] }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-forest text-white relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 font-bold tracking-wider uppercase text-sm mb-4 block"
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
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-white/20">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-white relative z-0"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
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
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-forest shadow-xl shadow-black/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  >
                    <span className="font-bold text-lg md:text-xl">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">

                  {/* Subtle hover accent line at the top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Phase pill */}
                  <div className="inline-flex items-center mb-6">
                    <span className="px-4 py-1.5 bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/30">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed mb-8 text-lg font-medium">
                    {item.description}
                  </p>

                  {/* Deliverable Box */}
                  {item.deliverable && (
                    <div className="bg-black/20 rounded-2xl p-6 border border-white/10 shadow-inner group-hover:bg-black/25 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span className="text-sm font-bold text-white/80 uppercase tracking-widest">
                          You Get
                        </span>
                      </div>
                      <span className="text-white font-semibold text-lg">
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
