// @ts-nocheck
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
      <div className="relative h-[220px] shrink-0 p-4 pb-0 sm:h-[248px] sm:p-5 md:h-auto md:min-h-[300px] md:w-[38%] md:p-6 md:pb-6 lg:min-h-[320px] lg:w-[35%] xl:w-[40%]">
        <div className="relative h-full min-h-[196px] overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F3F2F1] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] md:min-h-0">
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

      <div className="flex min-w-0 flex-1 flex-col justify-center border-t border-border/40 bg-white px-6 py-8 sm:px-8 sm:py-8 md:border-l md:border-t-0 md:px-10 md:py-10 lg:px-10 lg:py-10 xl:px-12">
        <span className="mb-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#0078d4] md:mb-4">
          {item.phase}
        </span>
        <h3 className="mb-4 text-pretty pr-2 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:mb-5 md:text-3xl lg:text-[2.1rem] xl:text-4xl">
          {item.title}
        </h3>
        <p className="mb-6 max-w-[95%] text-[15px] leading-relaxed text-foreground/85 md:mb-8 md:text-base lg:text-[1.05rem]">
          {item.description}
        </p>
        {item.deliverable && (
          <div className="mt-auto rounded-xl border border-gray-200/80 bg-gray-50/80 px-5 py-4 shadow-sm lg:px-6 lg:py-5">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#0078d4] lg:mb-2 lg:text-[11px]">
              Deliverable
            </span>
            <p className="text-pretty text-[14px] font-semibold leading-snug text-foreground lg:text-[15px]">
              {item.deliverable}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export function DeliveryTimeline({
  title = "Ten Weeks to a Working Foundation",
  subtitle,
  timeline = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activate = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  if (!timeline || timeline.length === 0) return null;

  const activeItem = timeline[activeIndex];
  const activeImg = TIMELINE_IMAGES[activeIndex % TIMELINE_IMAGES.length];

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-muted/30 py-20 text-foreground md:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-[-6%] top-[8%] z-0 hidden h-[480px] w-[480px] -rotate-12 opacity-[0.04] xl:block">
        <Image
          src="/svg/fabric_48_color.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="flex shrink-0 flex-col justify-center py-4 antialiased md:py-6 lg:w-[33%] lg:max-w-[450px] xl:max-w-[500px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-5 block text-sm font-semibold uppercase tracking-widest text-forest"
            >
              Implementation timeline
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="mb-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-5xl xl:text-[3.5rem]"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.1 }}
                className="mb-7 w-[95%] text-pretty text-xl font-medium leading-snug text-foreground/80 md:text-xl lg:text-[1.35rem]"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 }}
              className="w-[90%] text-pretty text-base font-medium leading-relaxed text-foreground/60 lg:text-[17px]"
            >
              Tangible deliverables each phase — from architecture sign-off to
              analysts on governed data.
            </motion.p>

            <ol
              className="relative mt-14 hidden items-start gap-0 lg:flex xl:mt-16"
              role="tablist"
              aria-label="Jump to phase"
            >
              {timeline.map((item, i) => (
                <li
                  key={i}
                  className="group relative flex min-w-0 flex-1 flex-col items-center"
                >
                  {i < timeline.length - 1 && (
                    <div
                      aria-hidden="true"
                      className={`absolute left-[calc(50%+24px)] top-5 h-[2px] w-[calc(100%-48px)] transition-colors duration-300 ${
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
                    className={`relative -m-1 flex w-full flex-col items-center gap-3 rounded-lg p-1 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 ${
                      activeIndex === i
                        ? "text-[#0078d4]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums transition-all duration-300 ${
                        activeIndex === i
                          ? "scale-110 border-[#0078d4] bg-[#0078d4] text-white shadow-md shadow-[#0078d4]/20"
                          : i < activeIndex
                            ? "border-[#0078d4] bg-white text-[#0078d4] hover:bg-[#0078d4]/5"
                            : "border-border/80 bg-white text-muted-foreground shadow-sm hover:border-border"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`mt-1 line-clamp-2 w-full min-w-0 px-1 text-center text-[11px] font-bold uppercase leading-tight tracking-widest ${
                        activeIndex === i
                          ? "text-[#0078d4]"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile / tablet: chips + one card */}
          <div className="w-full space-y-6 sm:space-y-7 lg:hidden">
            <div
              className="flex w-full snap-x snap-mandatory gap-2.5 overflow-x-auto pb-4 scrollbar-hide sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:snap-none"
              role="tablist"
              aria-label="Phases"
            >
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
                  className={`inline-flex shrink-0 snap-center items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 sm:flex-initial sm:snap-align-none ${
                    activeIndex === i
                      ? "border-[#0078d4] bg-[#0078d4] text-white shadow-[0_2px_8px_rgba(0,120,212,0.35),0_1px_0_rgba(255,255,255,0.2)_inset]"
                      : "border-[#C8C6C4]/80 bg-white text-foreground/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-[#0078d4]/45 hover:shadow-[0_4px_12px_rgba(0,120,212,0.12)]"
                  }`}
                >
                  <span className="shrink-0 tabular-nums opacity-90">
                    {i + 1}
                  </span>
                  <span className="max-w-[9rem] truncate text-left sm:max-w-[11rem]">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeIndex}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-3xl border border-border/80 bg-white shadow-[0_4px_32px_-8px_rgba(0,0,0,0.09)]"
              role="tabpanel"
              id={`timeline-panel-mobile-${activeIndex}`}
              aria-labelledby={`timeline-tab-mobile-${activeIndex}`}
            >
              <div className="flex w-full flex-col text-left md:flex-row">
                <PhaseCardContent
                  item={activeItem}
                  imgSrc={activeImg}
                  index={activeIndex}
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop: horizontal accordion */}
          <div
            className="hidden h-[min(580px,74vh)] min-h-[500px] w-full flex-row gap-4 lg:flex lg:flex-1 xl:h-[min(600px,76vh)] xl:min-h-[520px] xl:gap-5"
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
                  className={`group relative flex overflow-hidden rounded-3xl border bg-white transition-[box-shadow,border-color,transform] duration-300 focus-within:z-10 ${
                    isActive
                      ? "min-w-0 flex-1 border-[#0078d4]/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,120,212,0.14)]"
                      : "w-[68px] flex-[0_0_68px] shrink-0 cursor-pointer border-[#C8C6C4]/90 bg-gradient-to-b from-white via-[#FAFCFE] to-[#E8F2FA] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_28px_-8px_rgba(0,120,212,0.08)] transition-transform hover:-translate-y-0.5 hover:border-[#0078d4]/55 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_12px_32px_-6px_rgba(0,120,212,0.14)] xl:w-[76px] xl:flex-[0_0_76px]"
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
                      className="pointer-events-none flex h-full w-full min-w-0 flex-col text-left md:flex-row"
                      aria-labelledby={`timeline-tab-acc-${index}`}
                    >
                      <PhaseCardContent
                        item={item}
                        imgSrc={imgSrc}
                        index={index}
                      />
                    </div>
                  ) : (
                    <div className="pointer-events-none relative flex h-full min-h-0 w-full flex-col items-stretch">
                      <div
                        className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#0078d4] via-[#2899f5] to-[#0078d4] opacity-95"
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
                      <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center justify-between gap-4 px-2 py-7 xl:px-2.5">
                        <span
                          className="inline-flex min-h-[2.25rem] min-w-[2.5rem] items-center justify-center rounded-full bg-white px-2 text-[13px] font-black tabular-nums text-[#0078d4] shadow-[0_1px_4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,120,212,0.18)] ring-1 ring-white/80 transition-shadow group-hover:shadow-[0_2px_8px_rgba(0,120,212,0.2)] group-hover:ring-[#0078d4]/25"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex max-h-[min(300px,58vh)] min-h-0 flex-1 rotate-180 items-center justify-center whitespace-nowrap text-center text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-[#323130] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] transition-colors [text-shadow:0_0_20px_rgba(255,255,255,0.6)] [writing-mode:vertical-rl] group-hover:text-[#005a9e] xl:text-[12px]">
                          {item.title}
                        </span>
                        <span
                          className="select-none text-[10px] font-bold text-[#0078d4]/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
