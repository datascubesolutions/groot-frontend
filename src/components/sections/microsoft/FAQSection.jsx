"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BarChart, ChevronDown, HelpCircle, MessageSquare, Network } from "lucide-react";
import { useId, useState } from "react";

export function FAQSection({ title = "Frequently Asked Questions", faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();
  const idPrefix = useId();

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative border-t border-border/50 overflow-hidden">
      {/* Animated Background glow */}
      <motion.div
        animate={
          reduceMotion
            ? { scale: 1, opacity: 0.55 }
            : { scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Sticky heading */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start antialiased">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight text-balance mb-6"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground/90 font-normal text-lg leading-relaxed text-balance"
            >
              Got questions? We&apos;ve answered the most common ones. If yours isn&apos;t here, reach out — we&apos;ll give you a straight answer.
            </motion.p>

            {/* Intricate Custom FAQ Visualization (Replacing Static Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:flex mt-12 relative w-[80%] aspect-square rounded-[3rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,130,114,0.2)] group bg-white/40 backdrop-blur-3xl border border-white/80 items-center justify-center p-8 font-sans"
            >
              {/* Internal Grid & Glow */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082720D_1px,transparent_1px),linear-gradient(to_bottom,#0082720D_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
              <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-gradient-to-tr from-[#008272]/10 via-transparent to-[#00A4EF]/10" />

              <div className="relative w-full h-full flex items-center justify-center z-10">
                {/* Background Connecting Circuits */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 400">
                  <motion.path animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} d="M 200 200 L 100 100 M 200 200 L 300 100 M 200 200 L 100 300 M 200 200 L 300 300 M 200 200 L 50 200 M 200 200 L 350 200" fill="none" stroke="#008272" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="100" cy="100" r="4" fill="#008272" />
                  <circle cx="300" cy="100" r="4" fill="#008272" />
                  <circle cx="100" cy="300" r="4" fill="#008272" />
                  <circle cx="300" cy="300" r="4" fill="#008272" />
                </svg>

                {/* Central "FAQ" Core Node */}
                <div className="relative z-30 w-40 h-48 rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border-2 border-white flex flex-col items-center justify-center gap-2 transform group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#008272]/5 to-transparent rounded-3xl" />

                  <motion.div animate={{ rotateY: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="text-6xl font-black text-[#008272] tracking-tighter drop-shadow-md relative z-10">
                    FAQ
                  </motion.div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#008272] to-[#00A4EF] text-white flex items-center justify-center shadow-lg relative z-10 mt-2">
                    <HelpCircle className="w-8 h-8" strokeWidth={2.5} />
                  </div>

                  {/* Giant faded question mark in background */}
                  <span className="absolute -right-4 -bottom-8 text-[140px] font-black text-[#008272]/5 leading-none pointer-events-none select-none">?</span>
                </div>

                {/* Floating Orbital HUDs */}
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 left-4 w-32 bg-white/90 backdrop-blur border border-white shadow-xl rounded-2xl p-3 z-20">
                  <div className="flex gap-2 items-center mb-2 text-[#008272]">
                    <MessageSquare className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase">Queries</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden"><div className="h-full w-[80%] bg-[#008272]" /></div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden"><div className="h-full w-[65%] bg-[#00A4EF]" /></div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 right-4 w-36 bg-white/90 backdrop-blur border border-white shadow-xl rounded-2xl p-3 z-20">
                  <div className="flex gap-2 items-center mb-2 text-[#00A4EF]">
                    <BarChart className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase">Resolve Rate</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-8">
                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="flex-1 bg-gradient-to-t from-[#008272] to-[#00A4EF] rounded-t-sm" />
                    ))}
                  </div>
                </motion.div>

                <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-16 right-4 w-12 h-12 bg-white/90 backdrop-blur border border-white shadow-xl rounded-xl flex items-center justify-center text-[#008272] z-20">
                  <span className="text-2xl font-black">?</span>
                </motion.div>

                <motion.div animate={{ x: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-20 left-6 w-12 h-12 bg-white/90 backdrop-blur border border-white shadow-xl rounded-xl flex items-center justify-center text-[#00A4EF] z-20">
                  <Network className="w-6 h-6" />
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:w-[65%] space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `${idPrefix}-heading-${index}`;
              const panelId = `${idPrefix}-panel-${index}`;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 border relative ${isOpen
                    ? "border-forest bg-forest text-white shadow-[0_10px_40px_rgba(22,78,60,0.25)] md:scale-[1.02] z-20"
                    : "border-border/40 bg-card/60 backdrop-blur-xl hover:border-forest/30 hover:bg-forest/5 text-foreground shadow-sm hover:shadow-md z-10"
                    }`}
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    {...(isOpen ? { "aria-controls": panelId } : {})}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`group w-full px-6 py-6 md:px-8 md:py-8 text-left flex items-start md:items-center gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl md:rounded-3xl ${isOpen
                      ? "focus-visible:ring-white focus-visible:ring-offset-forest"
                      : "focus-visible:ring-forest focus-visible:ring-offset-background"
                      }`}
                  >
                    {/* Number */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0 mt-0 md:-mt-1 transition-all duration-300 ${isOpen
                      ? "bg-white text-forest shadow-lg"
                      : "bg-muted text-muted-foreground group-hover:bg-forest/10 group-hover:text-forest"
                      }`}>
                      <span className="text-sm font-semibold tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Question */}
                    <span className={`flex-1 text-lg font-semibold tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-foreground group-hover:text-forest/90"
                      }`}>
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <div className={`p-2 rounded-full flex-shrink-0 mt-0.5 md:mt-0 transition-all duration-300 ${isOpen
                      ? "rotate-180 bg-white text-forest shadow-lg"
                      : "bg-forest/10 text-forest group-hover:bg-forest/20 group-hover:scale-110"
                      }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0.15 : 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 pl-[4.75rem] md:pl-[5.25rem]">
                          <div className="border-t border-white/20 pt-5 md:pt-6 w-full antialiased">
                            <p className="text-white/80 leading-relaxed text-base md:text-lg font-normal">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
