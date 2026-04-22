// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Asset Mapping – original positions, larger sizing for viewport
const tools = [
  {
    name: "Databricks",
    src: "/svg/10787-icon-service-Azure-Databricks.svg",
    position: "top-[25%] left-1/2 -translate-x-1/2 -translate-y-[40px]",
    width: 120,
    height: 34,
  },
  {
    name: "Snowflake",
    src: "/svg/snowflake.png",
    position: "top-[20%] right-[15%]",
    width: 120,
    height: 52,
  },
  {
    name: "Tableau",
    src: "/svg/Tableau.svg",
    position: "top-[45%] right-[10%]",
    width: 120,
    height: 38,
  },
  {
    name: "Power BI",
    src: "/svg/fabric_48_color.svg",
    position: "bottom-[15%] right-[25%]",
    width: 115,
    height: 38,
  },
  {
    name: "Azure",
    src: "/svg/azure-2.svg",
    position: "bottom-[25%] left-[25%]",
    width: 115,
    height: 48,
  },
];

export function ToolsSection() {
  return (
    <section className="section-padding relative flex min-h-[680px] items-center justify-center overflow-visible bg-background font-sans md:min-h-[760px]">
      {/* Ripple background – larger viewport */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-[800px] md:w-[800px] lg:h-[880px] lg:w-[880px]">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-2 border-mint/35"
            initial={{ width: "320px", height: "320px", opacity: 1 }}
            animate={{ width: "580px", height: "580px", opacity: 0 }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: index * 1.2,
              ease: "easeOut",
            }}
          />
        ))}
        <div className="absolute h-[320px] w-[320px] rounded-full border border-mint/10 md:h-[360px] md:w-[360px]" />
        <div className="absolute h-[520px] w-[520px] rounded-full border border-mint/5 md:h-[600px] md:w-[600px] lg:h-[680px] lg:w-[680px]" />
      </div>

      {/* Central content – scaled for larger viewport */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center sm:px-8 md:gap-8 lg:px-12">
        {/* Icon above heading */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center md:h-16 md:w-16">
          <Image
            src="/svg/10787-icon-service-Azure-Databricks.svg"
            alt=""
            width={56}
            height={28}
            className="h-full w-auto object-contain"
            aria-hidden
          />
        </div>

        {/* Main heading */}
        <h2 className="heading-section">
          <span className="relative inline-block">
            Favorite Tools
            <svg
              className="absolute -bottom-1 left-0 h-3 w-full text-primary md:h-3.5"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </span>
          <span className="mx-2 font-normal text-muted-foreground md:mx-2.5">
            &
          </span>
          <span className="font-normal text-muted-foreground">Resource</span>
          <br />
          <span className="mt-0.5 inline-block">Blog Teasers</span>
        </h2>
      </div>

      {/* Floating logos – optimized padding and responsive positions */}
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          className={`absolute z-20 ${tool.position}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.08, y: -4 }}
        >
          {tool.name !== "Databricks" && (
            <div className="flex items-center justify-center rounded-xl border border-border/50 bg-card/60 p-3 backdrop-blur-sm transition-shadow hover:bg-card/80 hover:shadow-md md:p-4">
              <Image
                src={tool.src}
                alt={tool.name}
                width={tool.width}
                height={tool.height}
                className="h-9 max-h-12 w-auto object-contain md:h-10"
              />
            </div>
          )}
        </motion.div>
      ))}

      {/* Google Analytics */}
      <motion.div
        className="absolute bottom-[15%] left-[15%] z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/60 p-3 backdrop-blur-sm transition-shadow hover:bg-card/80 hover:shadow-md md:gap-3 md:p-3.5">
          <Image
            src="/svg/google-analytics.svg"
            alt="Google Analytics"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain md:h-10 md:w-10"
          />
          <span className="text-sm font-semibold leading-tight text-foreground md:text-base">
            Google
            <br />
            Analytics
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default function ToolsSectionImplementation() {
  return <ToolsSection />;
}
