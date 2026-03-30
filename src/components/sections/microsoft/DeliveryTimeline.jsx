"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import Image from "next/image";

const TIMELINE_IMAGES = [
  "/images/fabric/process_timeline.png",
  "/images/fabric/server_capabilities.png",
  "/images/fabric/fabric_lakehouse.png",
  "/images/fabric/powerbi_dashboard.png",
];

function PhaseCardContent({ item, imgSrc, index }) {
  return (
    <>
      <div className="relative md:w-[38%] lg:w-[35%] xl:w-[40%] shrink-0 h-[220px] sm:h-[248px] md:h-auto md:min-h-[300px] lg:min-h-[320px] p-4 sm:p-5 md:p-6 pb-0 md:pb-6">
        <div className="relative h-full min-h-[196px] md:min-h-0 rounded-2xl overflow-hidden bg-[#F3F2F1] border border-black/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <Image
            src={imgSrc}
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 360px, 420px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-10 lg:py-10 xl:px-12 min-w-0 bg-white border-t md:border-t-0 md:border-l border-border/40">
        <span className="text-[#0078d4] text-[12px] font-bold uppercase tracking-[0.15em] mb-3 md:mb-4">
          {item.phase}
        </span>
        <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-[2.1rem] xl:text-4xl font-bold text-foreground mb-4 md:mb-5 leading-tight tracking-tight text-pretty pr-2">
          {item.title}
        </h3>
        <p className="text-foreground/85 text-[15px] md:text-base lg:text-[1.05rem] leading-relaxed mb-6 md:mb-8 max-w-[95%]">
          {item.description}
        </p>
        {item.deliverable && (
          <div className="rounded-xl bg-gray-50/80 border border-gray-200/80 px-5 py-4 lg:px-6 lg:py-5 mt-auto shadow-sm">
            <span className="text-[10px] lg:text-[11px] uppercase font-bold tracking-[0.15em] text-[#0078d4] block mb-1.5 lg:mb-2">
              Deliverable
            </span>
            <p className="text-foreground text-[14px] lg:text-[15px] font-semibold leading-snug text-pretty">{item.deliverable}</p>
          </div>
        )}
      </div>
    </>
  );
}

export function DeliveryTimeline({ title = "Ten Weeks to a Working Foundation", subtitle, timeline = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activate = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  if (!timeline || timeline.length === 0) return null;

  const activeItem = timeline[activeIndex];
  const activeImg = TIMELINE_IMAGES[activeIndex % TIMELINE_IMAGES.length];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-muted/30 text-foreground relative overflow-hidden border-t border-border/50">
      <div className="hidden xl:block absolute top-[8%] right-[-6%] w-[480px] h-[480px] opacity-[0.04] pointer-events-none -rotate-12 z-0">
        <Image src="/svg/fabric_48_color.svg" alt="" fill className="object-contain" aria-hidden />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10 w-full max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-16 lg:items-start">
          <div className="lg:w-[33%] lg:max-w-[450px] xl:max-w-[500px] flex flex-col justify-center py-4 md:py-6 antialiased shrink-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-forest font-semibold tracking-widest uppercase text-sm mb-5 block"
            >
              Implementation timeline
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="text-5xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground mb-6 leading-[1.05] tracking-tight text-balance"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 font-medium text-xl md:text-xl lg:text-[1.35rem] mb-7 leading-snug text-pretty w-[95%]"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 }}
              className="text-foreground/60 font-medium text-base lg:text-[17px] leading-relaxed text-pretty w-[90%]"
            >
              Tangible deliverables each phase — from architecture sign-off to analysts on governed data.
            </motion.p>

            <ol className="hidden lg:flex mt-14 xl:mt-16 items-start gap-0 relative" role="tablist" aria-label="Jump to phase">
              {timeline.map((item, i) => (
                <li key={i} className="flex flex-col items-center min-w-0 flex-1 relative group">
                  {i < timeline.length - 1 && (
                    <div
                      aria-hidden="true"
                      className={`absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] transition-colors duration-300 ${
                        i < activeIndex ? "bg-[#0078d4]" : "bg-border"
                      }`}
                    />
                  )}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === i}
                    aria-controls={`timeline-panel-${i}`}
                    id={`timeline-tab-${i}`}
                    tabIndex={activeIndex === i ? 0 : -1}
                    onClick={() => activate(i)}
                    className={`relative flex flex-col items-center gap-3 w-full text-center rounded-lg p-1 -m-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 ${
                      activeIndex === i ? "text-[#0078d4]" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold tabular-nums border-2 transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-[#0078d4] text-white border-[#0078d4] scale-110 shadow-md shadow-[#0078d4]/20"
                          : i < activeIndex
                          ? "bg-white text-[#0078d4] border-[#0078d4] hover:bg-[#0078d4]/5"
                          : "bg-white text-muted-foreground border-border/80 hover:border-border shadow-sm"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-widest leading-tight mt-1 line-clamp-2 min-w-0 w-full px-1 text-center ${
                      activeIndex === i ? "text-[#0078d4]" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile / tablet: chips + one card */}
          <div className="lg:hidden w-full space-y-6 sm:space-y-7">
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-stretch sm:justify-center" role="tablist" aria-label="Phases">
              {timeline.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === i}
                  id={`timeline-tab-mobile-${i}`}
                  aria-controls={`timeline-panel-mobile-${i}`}
                  tabIndex={activeIndex === i ? 0 : -1}
                  onClick={() => activate(i)}
                  className={`inline-flex flex-1 sm:flex-initial min-w-0 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 ${
                    activeIndex === i
                      ? "bg-[#0078d4] text-white border-[#0078d4] shadow-[0_2px_8px_rgba(0,120,212,0.35),0_1px_0_rgba(255,255,255,0.2)_inset]"
                      : "bg-white text-foreground/80 border-[#C8C6C4]/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-[#0078d4]/45 hover:shadow-[0_4px_12px_rgba(0,120,212,0.12)]"
                  }`}
                >
                  <span className="tabular-nums opacity-90 shrink-0">{i + 1}</span>
                  <span className="truncate text-left max-w-[9rem] sm:max-w-[11rem]">{item.title}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeIndex}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl overflow-hidden border border-border/80 bg-white shadow-[0_4px_32px_-8px_rgba(0,0,0,0.09)]"
              role="tabpanel"
              id={`timeline-panel-mobile-${activeIndex}`}
              aria-labelledby={`timeline-tab-mobile-${activeIndex}`}
            >
              <div className="flex flex-col md:flex-row w-full text-left">
                <PhaseCardContent item={activeItem} imgSrc={activeImg} index={activeIndex} />
              </div>
            </motion.div>
          </div>

          {/* Desktop: horizontal accordion */}
          <div
            className="hidden lg:flex lg:flex-1 w-full flex-row gap-4 xl:gap-5 min-h-[500px] h-[min(580px,74vh)] xl:min-h-[520px] xl:h-[min(600px,76vh)]"
            role="tablist"
            aria-label="Expand a phase"
          >
            {timeline.map((item, index) => {
              const isActive = activeIndex === index;
              const imgSrc = TIMELINE_IMAGES[index % TIMELINE_IMAGES.length];

              return (
                <motion.div
                  key={index}
                  layout={!reduceMotion}
                  transition={
                    reduceMotion
                      ? { duration: 0.2, ease: "easeOut" }
                      : { type: "spring", stiffness: 400, damping: 40 }
                  }
                  className={`group relative flex rounded-3xl overflow-hidden border bg-white transition-[box-shadow,border-color,transform] duration-300 focus-within:z-10 ${
                    isActive
                      ? "flex-1 min-w-0 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,120,212,0.14)] border-[#0078d4]/50"
                      : "flex-[0_0_68px] xl:flex-[0_0_76px] w-[68px] xl:w-[76px] shrink-0 cursor-pointer border-[#C8C6C4]/90 bg-gradient-to-b from-white via-[#FAFCFE] to-[#E8F2FA] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_28px_-8px_rgba(0,120,212,0.08)] transition-transform hover:border-[#0078d4]/55 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_12px_32px_-6px_rgba(0,120,212,0.14)] hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`timeline-panel-${index}`}
                    id={`timeline-tab-acc-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`absolute inset-0 z-20 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive ? "pointer-events-none" : ""
                    }`}
                    onClick={() => activate(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        activate(index);
                      }
                      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                        e.preventDefault();
                        activate(Math.min(index + 1, timeline.length - 1));
                      }
                      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                        e.preventDefault();
                        activate(Math.max(index - 1, 0));
                      }
                    }}
                  />

                  {isActive ? (
                    <div
                      id={`timeline-panel-${index}`}
                      role="tabpanel"
                      className="flex flex-col md:flex-row w-full h-full text-left pointer-events-none min-w-0"
                      aria-labelledby={`timeline-tab-acc-${index}`}
                    >
                      <PhaseCardContent item={item} imgSrc={imgSrc} index={index} />
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-stretch w-full h-full min-h-0 pointer-events-none">
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0078d4] via-[#2899f5] to-[#0078d4] opacity-95"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#F6FAFD] to-[#E3EEF8]/95 opacity-[0.97]"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
                        aria-hidden
                      />
                      <div className="relative z-[1] flex flex-col items-center justify-between flex-1 py-7 px-2 xl:px-2.5 gap-4 min-h-0">
                        <span
                          className="inline-flex items-center justify-center min-h-[2.25rem] min-w-[2.5rem] px-2 rounded-full bg-white text-[13px] font-black tabular-nums text-[#0078d4] shadow-[0_1px_4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,120,212,0.18)] ring-1 ring-white/80 group-hover:shadow-[0_2px_8px_rgba(0,120,212,0.2)] group-hover:ring-[#0078d4]/25 transition-shadow"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="flex-1 flex items-center justify-center min-h-0 text-[11px] xl:text-[12px] font-semibold text-[#323130] text-center leading-snug [writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.16em] max-h-[min(300px,58vh)] whitespace-nowrap drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] group-hover:text-[#005a9e] transition-colors [text-shadow:0_0_20px_rgba(255,255,255,0.6)]"
                        >
                          {item.title}
                        </span>
                        <span
                          className="text-[10px] font-bold text-[#0078d4]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none"
                          aria-hidden
                        >
                          ···
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
