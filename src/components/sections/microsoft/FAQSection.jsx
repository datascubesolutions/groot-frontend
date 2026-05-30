// @ts-nocheck
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  Network,
} from "lucide-react";
import { useId, useState } from "react";

export function FAQSection({
  title = "Frequently Asked Questions",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();
  const idPrefix = useId();

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-12 text-foreground md:py-16">
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
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-forest/5 blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left — Sticky heading */}
          <div className="antialiased lg:sticky lg:top-32 lg:w-[35%] lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 block text-sm font-semibold uppercase tracking-widest text-forest"
            >
              FAQ
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
              className="text-balance text-lg font-normal leading-relaxed text-muted-foreground/90"
            >
              Got questions? We&apos;ve answered the most common ones. If yours
              isn&apos;t here, reach out — we&apos;ll give you a straight
              answer.
            </motion.p>

            {/* Intricate Custom FAQ Visualization (Replacing Static Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="group relative mt-12 hidden aspect-square w-[80%] items-center justify-center overflow-hidden rounded-[3rem] border border-white/80 bg-white/40 p-8 font-sans shadow-[0_20px_80px_-20px_rgba(0,130,114,0.2)] backdrop-blur-3xl lg:flex"
            >
              {/* Internal Grid & Glow */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082720D_1px,transparent_1px),linear-gradient(to_bottom,#0082720D_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-[#008272]/10 via-transparent to-[#00A4EF]/10"
              />

              <div className="relative z-10 flex h-full w-full items-center justify-center">
                {/* Background Connecting Circuits */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
                  viewBox="0 0 400 400"
                >
                  <motion.path
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    d="M 200 200 L 100 100 M 200 200 L 300 100 M 200 200 L 100 300 M 200 200 L 300 300 M 200 200 L 50 200 M 200 200 L 350 200"
                    fill="none"
                    stroke="#008272"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  <circle cx="100" cy="100" r="4" fill="#008272" />
                  <circle cx="300" cy="100" r="4" fill="#008272" />
                  <circle cx="100" cy="300" r="4" fill="#008272" />
                  <circle cx="300" cy="300" r="4" fill="#008272" />
                </svg>

                {/* Central "FAQ" Core Node */}
                <div className="relative z-30 flex h-48 w-40 transform flex-col items-center justify-center gap-2 rounded-3xl border-2 border-white bg-white/80 shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#008272]/5 to-transparent" />

                  <motion.div
                    animate={{ rotateY: [0, 10, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 text-6xl font-black tracking-tighter text-[#008272] drop-shadow-md"
                  >
                    FAQ
                  </motion.div>

                  <div className="relative z-10 mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008272] to-[#00A4EF] text-white shadow-lg">
                    <HelpCircle className="h-8 w-8" strokeWidth={2.5} />
                  </div>

                  {/* Giant faded question mark in background */}
                  <span className="pointer-events-none absolute -bottom-8 -right-4 select-none text-[140px] font-black leading-none text-[#008272]/5">
                    ?
                  </span>
                </div>

                {/* Floating Orbital HUDs */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-4 top-8 z-20 w-32 rounded-2xl border border-white bg-white/90 p-3 shadow-xl backdrop-blur"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#008272]">
                    <MessageSquare className="h-4 w-4" />{" "}
                    <span className="text-[10px] font-bold uppercase">
                      Queries
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[80%] bg-[#008272]" />
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[65%] bg-[#00A4EF]" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-12 right-4 z-20 w-36 rounded-2xl border border-white bg-white/90 p-3 shadow-xl backdrop-blur"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#00A4EF]">
                    <BarChart className="h-4 w-4" />{" "}
                    <span className="text-[10px] font-bold uppercase">
                      Resolve Rate
                    </span>
                  </div>
                  <div className="flex h-8 items-end gap-1.5">
                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-[#008272] to-[#00A4EF]"
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute right-4 top-16 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white/90 text-[#008272] shadow-xl backdrop-blur"
                >
                  <span className="text-2xl font-black">?</span>
                </motion.div>

                <motion.div
                  animate={{ x: [5, -5, 5] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute bottom-20 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white bg-white/90 text-[#00A4EF] shadow-xl backdrop-blur"
                >
                  <Network className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right — Accordion */}
          <div className="space-y-4 lg:w-[65%]">
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
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 md:rounded-3xl ${
                    isOpen
                      ? "z-20 border-forest bg-forest text-white shadow-[0_10px_40px_rgba(22,78,60,0.25)] md:scale-[1.02]"
                      : "z-10 border-border/40 bg-card/60 text-foreground shadow-sm backdrop-blur-xl hover:border-forest/30 hover:bg-forest/5 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    {...(isOpen ? { "aria-controls": panelId } : {})}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`group flex w-full items-start gap-3 rounded-2xl px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:items-center md:gap-4 md:rounded-3xl md:px-6 md:py-6 ${
                      isOpen
                        ? "focus-visible:ring-white focus-visible:ring-offset-forest"
                        : "focus-visible:ring-forest focus-visible:ring-offset-background"
                    }`}
                  >
                    {/* Number */}
                    <div
                      className={`mt-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 md:-mt-1 md:h-12 md:w-12 ${
                        isOpen
                          ? "bg-white text-forest shadow-lg"
                          : "bg-muted text-muted-foreground group-hover:bg-forest/10 group-hover:text-forest"
                      }`}
                    >
                      <span className="text-xs font-semibold tabular-nums md:text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Question */}
                    <span
                      className={`flex-1 text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg ${
                        isOpen
                          ? "text-white"
                          : "text-foreground group-hover:text-forest/90"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <div
                      className={`mt-0.5 flex-shrink-0 rounded-full p-1.5 transition-all duration-300 md:mt-0 md:p-2 ${
                        isOpen
                          ? "rotate-180 bg-white text-forest shadow-lg"
                          : "bg-forest/10 text-forest group-hover:scale-110 group-hover:bg-forest/20"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
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
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <div className="px-4 pb-4 pl-[3.25rem] pt-0 md:px-6 md:pb-6 md:pl-[4.5rem]">
                          <div className="w-full border-t border-white/20 pt-4 antialiased md:pt-5">
                            <p className="text-base font-normal leading-relaxed text-white/80 md:text-lg">
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
