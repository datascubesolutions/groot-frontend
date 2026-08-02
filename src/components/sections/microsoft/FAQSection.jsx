// src/components/sections/microsoft/FAQSection.jsx
// @ts-nocheck
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

export function FAQSection({
  title = "Frequently Asked Questions",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const idPrefix = useId();

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative bg-white font-sans overflow-hidden h-full w-full flex flex-col justify-center border-t border-slate-200/60 pt-[80px]">
      <div className="container mx-auto px-6 max-w-[900px] h-full flex flex-col justify-center py-10 relative z-10 w-full">

        {/* Header */}
        <div className="mb-6 lg:mb-8 text-center mx-auto shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0067B8] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            {title}
          </h2>
        </div>

        {/* FAQs - Internally Scrollable */}
        <div className="space-y-4 w-full flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar pb-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `${idPrefix}-heading-${index}`;
            const panelId = `${idPrefix}-panel-${index}`;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                key={index}
                className={`rounded-3xl transition-all duration-300 border shrink-0 ${
                  isOpen
                    ? "bg-white border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    : "bg-[#F8FAFC] border-slate-200/80 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  {...(isOpen ? { "aria-controls": panelId } : {})}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-base lg:text-lg font-bold tracking-tight pr-6 transition-colors duration-300 ${isOpen ? "text-[#0067B8]" : "text-[#0F172A]"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-50 text-[#0067B8]" : "bg-slate-200/50 text-slate-500"}`}>
                    {isOpen ? <Minus className="h-5 w-5" strokeWidth={2.5} /> : <Plus className="h-5 w-5" strokeWidth={2.5} />}
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
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-[1px] w-full bg-slate-200/60 mb-5" />
                        <p className="text-[14px] lg:text-[15px] font-medium leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
