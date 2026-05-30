// @ts-nocheck
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function CapabilitiesSection({
  title = "What You Actually Get",
  subtitle,
  capabilities = [],
}) {
  const reduceMotion = useReducedMotion();
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-12 text-foreground md:py-16">
      {/* Animated Cinematic Background gradients */}
      <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
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
          className="pointer-events-none absolute -right-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-forest/5 blur-[150px]"
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
          className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-forest/5 blur-[150px]"
        />
      </div>

      {/* Fabric Logo Watermark in Free Space */}
      <div className="pointer-events-none absolute -left-64 top-1/2 z-0 hidden h-[600px] w-[600px] -translate-y-1/2 opacity-[0.03] xl:block">
        <Image
          src="/svg/fabric_48_color.svg"
          alt="Fabric Logo Background"
          fill
          className="object-contain"
        />
      </div>

      {/* Added Image on the Right Free Space */}
      <div
        className="pointer-events-none absolute -right-[10%] top-[15%] z-0 hidden h-[500px] w-[500px] opacity-20 mix-blend-screen xl:block"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      >
        <Image
          src="/images/fabric/server_capabilities.png"
          alt="Server Capabilities"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header - Centered Layout */}
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center antialiased md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block text-sm font-semibold uppercase tracking-widest text-forest"
          >
            Groot&apos;s Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-balance text-lg font-normal leading-relaxed text-muted-foreground/90 md:text-xl"
          >
            {subtitle ||
              "Everything you need to go from fragmented data to a governed, production-ready platform."}
          </motion.p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] shadow-sm backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-forest/40 hover:shadow-[0_20px_40px_rgba(22,78,60,0.08)]"
            >
              {/* Soft background glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-forest/5 blur-[80px] transition-colors duration-700 group-hover:bg-forest/15" />

              {/* Massive Number Watermark (Stroked) */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-4 select-none text-[150px] font-black leading-none text-transparent opacity-20 transition-all duration-500 group-hover:opacity-40"
                style={{ WebkitTextStroke: "2px #164e3c" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col antialiased">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-forest md:text-2xl">
                  {capability.title}
                </h3>
                <p className="mb-3 text-base font-normal leading-relaxed text-muted-foreground/90 lg:text-lg">
                  {capability.description}
                </p>
                {capability.outcome && (
                  <p className="mt-auto text-sm font-medium text-forest">
                    {capability.outcome}
                  </p>
                )}
              </div>

              {/* Animated bottom accent line */}
              <div className="absolute left-0 top-0 h-[2px] w-full -translate-x-full transform bg-gradient-to-r from-forest/0 via-forest/40 to-forest/0 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-full group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
