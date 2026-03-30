"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function BenefitsSection({ title = "What Actually Changes", subtitle, benefits = [] }) {
  if (!benefits || benefits.length === 0) return null;

  const reduceMotion = useReducedMotion();
  const [hero, ...rest] = benefits;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative overflow-hidden border-t border-border/50">
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
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none"
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
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Relatable Fabric Image in Free Space */}
      <div
        className="hidden 2xl:block absolute top-[10%] -right-[15%] w-[800px] h-[800px] opacity-20 pointer-events-none mix-blend-screen"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
        }}
      >
        <Image src="/images/fabric/fabric_lakehouse.png" alt="Fabric Lakehouse" fill className="object-contain" />
      </div>

      {/* Added Image on the Left Free Space */}
      <div
        className="hidden xl:block absolute bottom-[5%] -left-[10%] w-[600px] h-[600px] opacity-20 pointer-events-none mix-blend-screen"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
        }}
      >
        <Image src="/images/fabric/data_benefits.png" alt="Data Benefits" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            The Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight text-balance antialiased"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground/90 font-normal leading-relaxed mt-4 max-w-2xl mx-auto antialiased"
            >
              {subtitle}
            </motion.p>
          )}
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
              className="md:col-span-2 lg:col-span-2 bg-forest text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(22,78,60,0.3)] transition-all duration-500 shadow-2xl"
            >
              {/* Hover glare effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 pl-4">
                {hero.icon && (
                  <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {hero.icon}
                  </div>
                )}
                <div className="flex-1 antialiased">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                    {hero.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg md:text-xl font-normal max-w-2xl mb-3">
                    {hero.description}
                  </p>
                  {hero.outcome && (
                    <p className="text-mint font-medium text-lg">{hero.outcome}</p>
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
              className={`bg-card/60 backdrop-blur-xl rounded-3xl p-7 md:p-8 border border-border/40 hover:border-forest/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden ${index === 0 ? "lg:row-span-2" : ""
                }`}
            >
              {/* Hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full antialiased">
                {benefit.icon && (
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground/90 font-normal leading-relaxed flex-1 mb-3">
                  {benefit.description}
                </p>
                {benefit.outcome && (
                  <p className="text-forest font-medium text-sm">{benefit.outcome}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Empty Space Filler Custom Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden lg:flex bg-white rounded-3xl overflow-hidden shadow-xl border border-border relative min-h-[250px] items-center justify-center p-8 group"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#008272]/5 to-[#00A4EF]/5 group-hover:from-[#008272]/10 group-hover:to-[#00A4EF]/10 transition-colors duration-500" />
             
             {/* Corner Dot Matrices */}
             <svg className="absolute top-4 right-4 opacity-30 text-[#008272] pointer-events-none" width="60" height="60" viewBox="0 0 60 60">
               <pattern id="dots-tr-ben" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
               <rect x="0" y="0" width="60" height="60" fill="url(#dots-tr-ben)" />
             </svg>
             <svg className="absolute bottom-4 left-4 opacity-30 text-[#00A4EF] pointer-events-none" width="60" height="60" viewBox="0 0 60 60">
               <pattern id="dots-bl-ben" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern>
               <rect x="0" y="0" width="60" height="60" fill="url(#dots-bl-ben)" />
             </svg>

             {/* Unified Flow Visual */}
             <div className="relative z-10 w-full flex flex-col gap-6 font-sans">
                <div className="flex justify-between items-center w-full px-4 relative">
                   {/* Data Source Nodes */}
                   <div className="flex flex-col gap-3 relative z-10">
                     <div className="w-10 h-10 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center relative">
                        <div className="absolute right-0 top-1/2 w-4 h-[2px] bg-border translate-x-full" />
                        <div className="w-4 h-4 rounded-full bg-forest/20" />
                     </div>
                     <div className="w-10 h-10 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center relative">
                        <div className="absolute right-0 top-1/2 w-4 h-[2px] bg-border translate-x-full" />
                        <div className="w-4 h-4 rounded-full bg-blue-500/20" />
                     </div>
                   </div>

                   {/* Unified Engine */}
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-24 h-24 rounded-full border border-dashed border-[#008272]/30 flex items-center justify-center relative bg-white/50 backdrop-blur-sm z-10">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-16 h-16 rounded-full bg-white ring-1 ring-[#008272]/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,130,114,0.15)]">
                         <Image src="/svg/fabric_48_color.svg" alt="Fabric" width={28} height={28} />
                      </motion.div>
                   </motion.div>

                   {/* Output Nodes */}
                   <div className="flex flex-col gap-3 relative z-10 w-28">
                     <div className="w-full h-8 rounded-lg bg-white border border-border flex items-center px-2 gap-2 shadow-sm">
                        <Image src="/svg/power-bi-icon.svg" width={14} height={14} alt="BI" /> <div className="h-1 flex-1 bg-muted rounded-full" />
                     </div>
                     <div className="w-full h-8 rounded-lg bg-white border border-border flex items-center px-2 gap-2 shadow-sm">
                        <Image src="/svg/copilot-icon.svg" width={14} height={14} alt="Copilot" /> <div className="h-1 flex-1 bg-gradient-to-r from-[#008272] to-transparent rounded-full" />
                     </div>
                     <div className="w-full h-8 rounded-lg bg-white border border-border flex items-center px-2 gap-2 shadow-sm">
                        <div className="w-3.5 h-3.5 rounded-sm bg-blue-500" /> <div className="h-1 flex-1 bg-muted rounded-full" />
                     </div>
                   </div>

                   {/* Connection Lines rendered via simple absolute borders */}
                   <div className="absolute top-1/2 left-16 right-16 h-[2px] bg-gradient-to-r from-border via-[#008272]/30 to-border -translate-y-1/2 z-0" />
                </div>
                
                <div className="text-center mt-2 flex flex-col items-center">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-white/80 px-4 py-1 rounded-full border border-border/50">OneLake Native Architecture</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
