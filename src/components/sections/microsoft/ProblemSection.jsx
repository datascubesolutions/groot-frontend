"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProblemSection({ tagline = "Sound familiar?", problems = [] }) {
  if (!problems || problems.length === 0) return null;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              The Problem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              WE TURN COMPLEXITY INTO ADVANTAGE.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-forest leading-snug mb-8 border-l-4 border-forest pl-5"
            >
              {tagline}
            </motion.p>
            {/* Compact image: placed below copy, clean aspect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] max-h-[280px] shadow-lg border border-border/40"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Team meeting discussing data discrepancies"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
                priority={false}
              />
            </motion.div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-forest rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Number indicator */}
                  <span className="text-white/40 font-bold block mb-6 md:mb-8 text-sm tracking-wider uppercase">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {problem.title}
                  </h3>

                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
