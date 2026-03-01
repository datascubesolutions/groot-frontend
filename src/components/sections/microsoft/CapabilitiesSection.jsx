"use client";

import { motion } from "framer-motion";

export function CapabilitiesSection({ title = "What You Actually Get", capabilities = [] }) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-forest/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-forest/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header - Centered Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-forest font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Groot&apos;s Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight mb-6 text-foreground"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Everything you need to go from fragmented data to a governed, production-ready platform.
          </motion.p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(22,78,60,0.08)] flex flex-col h-full"
            >
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-forest/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-forest/15 transition-colors duration-700" />

              {/* Massive Number Watermark */}
              <div className="absolute -right-6 -bottom-8 text-[140px] leading-none font-black text-forest/[0.05] group-hover:text-forest/[0.12] transition-colors duration-500 pointer-events-none select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-forest transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mt-auto text-base">
                  {capability.description}
                </p>
              </div>

              {/* Animated bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-forest/0 via-forest/40 to-forest/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
