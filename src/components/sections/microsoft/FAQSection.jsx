"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection({ title = "Frequently Asked Questions", faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background text-foreground relative border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Sticky heading */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Got questions? We've answered the most common ones. If yours isn't here, reach out — we'll give you a straight answer.
            </motion.p>
          </div>

          {/* Right — Accordion */}
          <div className="lg:w-[65%] space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 border relative ${isOpen
                    ? "border-forest bg-forest text-white shadow-[0_10px_40px_rgba(22,78,60,0.25)] md:scale-[1.02] z-20"
                    : "border-border/50 bg-card hover:border-forest/30 hover:bg-forest/[0.02] text-foreground shadow-sm hover:shadow-md z-10"
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group w-full px-6 py-6 md:px-8 md:py-8 text-left flex items-start md:items-center gap-5 focus:outline-none"
                  >
                    {/* Number */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0 mt-0 md:-mt-1 transition-all duration-300 ${isOpen
                      ? "bg-white text-forest shadow-lg"
                      : "bg-muted text-muted-foreground group-hover:bg-forest/10 group-hover:text-forest"
                      }`}>
                      <span className="text-sm font-bold tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Question */}
                    <span className={`flex-1 text-lg font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-foreground group-hover:text-forest/90"
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
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 pl-[4.75rem] md:pl-[5.25rem]">
                          <div className="border-t border-white/20 pt-5 md:pt-6 w-full">
                            <p className="text-white/90 leading-relaxed text-base md:text-lg font-medium">
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
