"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function CapabilitiesSection({ title = "What You Actually Get", subtitle, capabilities = [] }) {
  if (!capabilities || capabilities.length === 0) return null;

  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden border-t border-border/50">
      {/* Animated Cinematic Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          animate={
            reduceMotion
              ? { scale: 1, opacity: 0.75 }
              : { scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-forest/5 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={
            reduceMotion
              ? { scale: 1, opacity: 0.65 }
              : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-forest/5 blur-[150px] rounded-full pointer-events-none"
        />
      </div>

      {/* Fabric Logo Watermark in Free Space */}
      <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 -left-64 w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/svg/fabric_48_color.svg" alt="Fabric Logo Background" fill className="object-contain" />
      </div>

      {/* Added Image on the Right Free Space */}
      <div
        className="hidden xl:block absolute top-[15%] -right-[10%] w-[500px] h-[500px] opacity-20 pointer-events-none mix-blend-screen z-0"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
        }}
      >
        <Image src="/images/fabric/server_capabilities.png" alt="Server Capabilities" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Centered Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center antialiased">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Groot&apos;s Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-foreground tracking-tight text-balance"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground/90 font-normal text-lg md:text-xl leading-relaxed text-balance"
          >
            {subtitle || "Everything you need to go from fragmented data to a governed, production-ready platform."}
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
              className="group relative bg-card/60 backdrop-blur-2xl border border-border/50 hover:border-forest/40 rounded-[2rem] p-10 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(22,78,60,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col h-full z-10"
            >
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-forest/15 transition-colors duration-700" />

              {/* Massive Number Watermark (Stroked) */}
              <div
                className="absolute -right-4 -bottom-6 text-[150px] leading-none font-black text-transparent pointer-events-none select-none transition-all duration-500 opacity-20 group-hover:opacity-40"
                style={{ WebkitTextStroke: "2px #164e3c" }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col antialiased">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4 group-hover:text-forest transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground/90 font-normal leading-relaxed text-base lg:text-lg mb-3">
                  {capability.description}
                </p>
                {capability.outcome && (
                  <p className="text-forest font-medium text-sm mt-auto">{capability.outcome}</p>
                )}
              </div>

              {/* Animated bottom accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-forest/0 via-forest/40 to-forest/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
