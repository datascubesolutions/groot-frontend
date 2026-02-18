"use client";

import { domAnimation, LazyMotion, m, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const brands = [
  { name: "Microsoft Azure", logo: "/svg/azure-2.svg" },
  { name: "Microsoft Fabric", logo: "/svg/fabric_48_color.svg" },
  { name: "Azure Databricks", logo: "/svg/10787-icon-service-Azure-Databricks.svg" },
  { name: "Microsoft AI Foundry", logo: "/svg/azureai-color.svg" },
  { name: "Google Analytics", logo: "/svg/google-analytics.svg" },
];

function BrandItem({ brand }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useAnimationFrame(() => {
    if (!containerRef.current || !imgRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const center = window.innerWidth / 2;
    const itemCenter = rect.left + rect.width / 2;
    const dist = Math.abs(center - itemCenter);
    const threshold = 180; // Activate when within ~180px of center (wider focus area)

    // Apply classes based on distance to simulate focus
    const isActive = dist < threshold;

    if (isActive) {
      // Active State: Color, Full Opacity, Slightly Larger
      imgRef.current.classList.remove("grayscale-[100%]", "contrast-125", "opacity-90");
      imgRef.current.classList.add("grayscale-0", "contrast-100", "opacity-100", "scale-110");

      if (textRef.current) {
        textRef.current.classList.remove("text-muted-foreground");
        textRef.current.classList.add("text-foreground");
      }
    } else {
      // Inactive State: Grayscale, Lower Contrast, Lower Opacity
      imgRef.current.classList.add("grayscale-[100%]", "contrast-125", "opacity-90");
      imgRef.current.classList.remove("grayscale-0", "contrast-100", "opacity-100", "scale-110");

      if (textRef.current) {
        textRef.current.classList.add("text-muted-foreground");
        textRef.current.classList.remove("text-foreground");
      }
    }
  });

  return (
    <div className="flex items-center flex-shrink-0" ref={containerRef}>
      <div
        className="px-4 md:px-12 py-3 md:py-6 flex items-center justify-center group gap-3 md:gap-4 transition-all duration-300"
      >
        <Image
          ref={imgRef}
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={36}
          height={36}
          className="h-6 md:h-9 w-auto object-contain transition-all duration-300 filter grayscale-[100%] contrast-125 opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110"
        />
        <h3
          ref={textRef}
          className="text-xl font-medium transition-colors duration-300 text-center text-nowrap tracking-tight text-muted-foreground group-hover:text-foreground"
        >
          {brand.name}
        </h3>
      </div>
      {/* Sharp separator */}
      <div className="h-10 w-[1px] bg-border mx-4 md:mx-6 block opacity-30" />
    </div>
  );
}

export function ClientLogosSection() {
  // Duplicate brands to ensure seamless loop
  const seamlessBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="py-1 md:py-4 bg-background border-b border-border/40 overflow-hidden">
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
            <m.div
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
                />
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default ClientLogosSection;
