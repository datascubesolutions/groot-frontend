"use client";

import { motion } from "framer-motion";

export function BenefitsSection({ title = "What Actually Changes", benefits = [] }) {
  if (!benefits || benefits.length === 0) return null;

  const [hero, ...rest] = benefits;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden border-t border-border">
      {/* Background accents */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-forest font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            The Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Hero Card — spans 2 columns */}
          {hero && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-2 bg-forest text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-2xl"
            >
              {/* Hover glare effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 pl-4">
                {hero.icon && (
                  <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {hero.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {hero.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg md:text-xl font-medium max-w-2xl">
                    {hero.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Remaining cards */}
          {rest.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className={`bg-card rounded-3xl p-7 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${index === 0 ? "lg:row-span-2" : ""
                }`}
            >
              {/* Hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {benefit.icon && (
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
