"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Asset Mapping
const tools = [
  {
    name: "Databricks",
    src: "/svg/10787-icon-service-Azure-Databricks.svg",
    // Position: Top Center
    position: "top-[25%] left-1/2 -translate-x-1/2 -translate-y-[40px]",
    width: 140,
    height: 40
  },
  {
    name: "Snowflake",
    src: "/svg/snowflake.png",
    // Position: Top Right
    position: "top-[20%] right-[15%]",
    width: 140,
    height: 60
  },
  {
    name: "Tableau",
    src: "/svg/Tableau.svg",
    // Position: Middle Right
    position: "top-[45%] right-[10%]",
    width: 140,
    height: 40
  },
  {
    name: "Power BI",
    src: "/svg/fabric_48_color.svg",
    // Position: Bottom Right Center
    position: "bottom-[15%] right-[25%]",
    width: 120,
    height: 40
  },
  {
    name: "Azure",
    src: "/svg/azure-2.svg",
    // Position: Bottom Left Center
    position: "bottom-[25%] left-[25%]",
    width: 120,
    height: 50
  },
  // Removed Google Analytics (Groot Logo) as requested
];

export function ToolsSection() {
  return (
    <section className="py-24 relative overflow-visible bg-white min-h-[800px] flex items-center justify-center font-sans">

      {/* Water Ripple Background (High Visibility Version) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none flex items-center justify-center">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-blue-400/50 rounded-full"
            initial={{ width: "350px", height: "350px", opacity: 1 }}
            animate={{
              width: "650px",
              height: "650px",
              opacity: 0
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: index * 1.2,
              ease: "easeOut"
            }}
          />
        ))}
        {/* Static base circles */}
        <div className="absolute w-[350px] h-[350px] rounded-full border border-blue-200" />
        <div className="absolute w-[550px] h-[550px] rounded-full border border-blue-100" />
      </div>

      {/* Central Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Databricks Mini Logo above text */}
        <div className="mb-4">
          <Image
            src="/svg/10787-icon-service-Azure-Databricks.svg"
            alt="Databricks"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Main Heading (Original Layout) */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
          <span className="relative inline-block">
            Favorite Tools
            {/* Yellow Underline SVG Shape */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
            </svg>
          </span>
          <span className="font-light text-slate-400 mx-3">&</span>
          Resource
          <br />
          Blog Teasers
        </h2>
      </div>

      {/* Floating Logos */}
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          className={`absolute ${tool.position} z-20`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {tool.name !== 'Databricks' && (
            <div className="flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-sm transition-shadow">
              <Image
                src={tool.src}
                alt={tool.name}
                width={tool.width}
                height={tool.height}
                className="object-contain"
              />
            </div>
          )}
        </motion.div>
      ))}

      {/* Manual Placements for missing ones (Original Placeholders) */}

      {/* Rasa - Top Left */}
      <div className="absolute top-[25%] left-[20%]">
        <div className="flex items-center gap-2 p-2">
          <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold">R</div>
          <span className="font-bold text-purple-700 text-xl">RASA</span>
        </div>
      </div>

      {/* Dialogflow - Left */}
      <div className="absolute top-[45%] left-[10%]">
        <div className="flex items-center gap-2 p-2">
          <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold">D</div>
          <span className="font-bold text-slate-600 text-xl">Dialogflow</span>
        </div>
      </div>

      {/* Qlik - Bottom Left */}
      <div className="absolute bottom-[40%] left-[18%]">
        <div className="flex items-center gap-2 p-2">
          <span className="font-bold text-[#009845] text-4xl">Qlik</span>
          <div className="w-8 h-8 rounded-full border-4 border-[#009845]"></div>
        </div>
      </div>

      {/* Adobe - Bottom Left Low */}
      <div className="absolute bottom-[15%] left-[15%]">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[#48286a] rounded-full flex items-center justify-center text-white">A</div>
          <span className="font-bold text-slate-700">Adobe<br />Analytics</span>
        </div>
      </div>

    </section>
  );
}

export default function ToolsSectionImplementation() {
  return <ToolsSection />;
}
