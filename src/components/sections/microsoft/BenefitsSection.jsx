// @ts-nocheck
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function BenefitsSection({
  title = "What Actually Changes",
  subtitle,
  benefits = [],
}) {
  const reduceMotion = useReducedMotion();
  if (!benefits || benefits.length === 0) return null;
  const [hero, ...rest] = benefits;

  return (
    <section className="relative flex flex-col justify-center overflow-hidden border-t border-border/50 bg-background py-12 lg:py-0 lg:min-h-[calc(100vh-80px)] text-foreground">
      {/* Animated Cinematic Background accents */}
      <motion.div
        animate={
          reduceMotion
            ? { scale: 1, opacity: 0.65 }
            : { scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-forest/5 blur-[120px]"
      />
      <motion.div
        animate={
          reduceMotion
            ? { scale: 1, opacity: 0.55 }
            : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-forest/5 blur-[120px]"
      />

      {/* Relatable Fabric Image in Free Space */}
      <div
        className="pointer-events-none absolute -right-[15%] top-[10%] hidden h-[800px] w-[800px] opacity-20 mix-blend-screen 2xl:block"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      >
        <Image
          src="/images/fabric/fabric_lakehouse.png"
          alt="Fabric Lakehouse"
          fill
          className="object-contain"
        />
      </div>

      {/* Added Image on the Left Free Space */}
      <div
        className="pointer-events-none absolute -left-[10%] bottom-[5%] hidden h-[600px] w-[600px] opacity-20 mix-blend-screen xl:block"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      >
        <Image
          src="/images/fabric/data_benefits.png"
          alt="Data Benefits"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-2 max-w-3xl text-center md:mb-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-forest"
          >
            The Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground antialiased md:text-3xl lg:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-2 max-w-2xl text-sm font-normal leading-relaxed text-muted-foreground/90 antialiased md:text-base"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* Hero Card — spans 2 columns */}
          {hero && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-forest p-5 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(22,78,60,0.3)] md:col-span-2 md:p-6 lg:col-span-2"
            >
              {/* Hover glare effect */}
              <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

              <div className="flex flex-col gap-3 pl-4 md:flex-row md:items-start md:gap-4">
                {hero.icon && (
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition-transform duration-300 group-hover:scale-110">
                    {hero.icon}
                  </div>
                )}
                <div className="flex-1 antialiased">
                  <h3 className="mb-1 text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {hero.title}
                  </h3>
                  <p className="mb-1 max-w-2xl text-sm font-normal leading-relaxed text-white/80 md:text-base">
                    {hero.description}
                  </p>
                  {hero.outcome && (
                    <p className="text-base font-medium text-mint">
                      {hero.outcome}
                    </p>
                  )}
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
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col antialiased">
                {benefit.icon && (
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-forest/10 text-forest transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground lg:text-lg">
                  {benefit.title}
                </h3>
                <p className="mb-1 flex-1 text-[13px] font-normal leading-relaxed text-muted-foreground/90 lg:text-sm">
                  {benefit.description}
                </p>
                {benefit.outcome && (
                  <p className="text-[11px] font-medium text-forest lg:text-xs">
                    {benefit.outcome}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Empty Space Filler Custom Visualization */}
          {rest.length % 3 !== 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group relative hidden min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-xl lg:flex"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008272]/5 to-[#00A4EF]/5 transition-colors duration-500 group-hover:from-[#008272]/10 group-hover:to-[#00A4EF]/10" />

            {/* Corner Dot Matrices */}
            <svg
              className="pointer-events-none absolute right-4 top-4 text-[#008272] opacity-30"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <pattern
                id="dots-tr-ben"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </pattern>
              <rect
                x="0"
                y="0"
                width="60"
                height="60"
                fill="url(#dots-tr-ben)"
              />
            </svg>
            <svg
              className="pointer-events-none absolute bottom-4 left-4 text-[#00A4EF] opacity-30"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <pattern
                id="dots-bl-ben"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </pattern>
              <rect
                x="0"
                y="0"
                width="60"
                height="60"
                fill="url(#dots-bl-ben)"
              />
            </svg>

            {/* Unified Flow Visual */}
            <div className="relative z-10 flex w-full flex-col gap-6 font-sans">
              <div className="relative flex w-full items-center justify-between px-4">
                {/* Data Source Nodes */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                    <div className="absolute right-0 top-1/2 h-[2px] w-4 translate-x-full bg-border" />
                    <div className="h-4 w-4 rounded-full bg-forest/20" />
                  </div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                    <div className="absolute right-0 top-1/2 h-[2px] w-4 translate-x-full bg-border" />
                    <div className="h-4 w-4 rounded-full bg-blue-500/20" />
                  </div>
                </div>

                {/* Unified Engine */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#008272]/30 bg-white/50 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(0,130,114,0.15)] ring-1 ring-[#008272]/20"
                  >
                    <Image
                      src="/svg/fabric_48_color.svg"
                      alt="Fabric"
                      width={28}
                      height={28}
                    />
                  </motion.div>
                </motion.div>

                {/* Output Nodes */}
                <div className="relative z-10 flex w-28 flex-col gap-3">
                  <div className="flex h-8 w-full items-center gap-2 rounded-lg border border-border bg-white px-2 shadow-sm">
                    <Image
                      src="/svg/power-bi-icon.svg"
                      width={14}
                      height={14}
                      alt="BI"
                    />{" "}
                    <div className="h-1 flex-1 rounded-full bg-muted" />
                  </div>
                  <div className="flex h-8 w-full items-center gap-2 rounded-lg border border-border bg-white px-2 shadow-sm">
                    <Image
                      src="/svg/copilot-icon.svg"
                      width={14}
                      height={14}
                      alt="Copilot"
                    />{" "}
                    <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-[#008272] to-transparent" />
                  </div>
                  <div className="flex h-8 w-full items-center gap-2 rounded-lg border border-border bg-white px-2 shadow-sm">
                    <div className="h-3.5 w-3.5 rounded-sm bg-blue-500" />{" "}
                    <div className="h-1 flex-1 rounded-full bg-muted" />
                  </div>
                </div>

                {/* Connection Lines rendered via simple absolute borders */}
                <div className="absolute left-16 right-16 top-1/2 z-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-border via-[#008272]/30 to-border" />
              </div>

              <div className="mt-2 flex flex-col items-center text-center">
                <span className="rounded-full border border-border/50 bg-white/80 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  OneLake Native Architecture
                </span>
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
