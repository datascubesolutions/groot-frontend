"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "Microsoft Azure", logo: "/svg/azure-2.svg" },
  { name: "Microsoft Fabric", logo: "/svg/fabric_48_color.svg" },
  { name: "Azure Databricks", logo: "/svg/10787-icon-service-Azure-Databricks.svg" },
  { name: "Microsoft AI Foundry", logo: "/svg/azureai-color.svg" },
];

function BrandItem({ brand, index }) {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px -49.9% 0px -49.9%", // Hairline center strip to ensure strict single-item focus
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex items-center flex-shrink-0">
      <div
        className={`px-10 md:px-16 py-6 flex items-center justify-center group gap-4 transition-all duration-500 ${isFocused ? "scale-110" : "scale-100 opacity-90"
          }`}
      >
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className={`h-9 w-auto object-contain transition-all duration-500 filter ${isFocused
            ? "grayscale-0 contrast-100 opacity-100"
            : "grayscale-[100%] contrast-125 opacity-100"
            } group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100`}
        />
        <h3
          className={`text-xl font-medium transition-colors duration-500 text-center text-nowrap tracking-tight ${isFocused ? "text-foreground" : "text-muted-foreground"
            } group-hover:text-foreground`}
        >
          {brand.name}
        </h3>
      </div>
      {/* Sharp separator */}
      <div className="h-10 w-[1px] bg-border mx-6 block opacity-30" />
    </div>
  );
}

export function ClientLogosSection() {
  // Duplicate brands to ensure seamless loop
  const seamlessBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-10 bg-background border-b border-border/40 overflow-hidden">
      <div className="w-full relative">
        <div
          className="flex overflow-hidden relative z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center flex-nowrap"
          >
            {[...seamlessBrands, ...seamlessBrands].map((brand, index) => (
              <BrandItem
                key={`${brand.name}-${index}`}
                brand={brand}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogosSection;
