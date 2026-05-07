// @ts-nocheck
"use client";

import { domAnimation, LazyMotion, m, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const brands = [
  { name: "Microsoft Azure", logo: "/svg/azure-2.svg" },
  { name: "Microsoft Fabric", logo: "/svg/fabric_48_color.svg" },
  {
    name: "Azure Databricks",
    logo: "/svg/10787-icon-service-Azure-Databricks.svg",
  },
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
      imgRef.current.classList.remove(
        "grayscale-[100%]",
        "contrast-125",
        "opacity-90"
      );
      imgRef.current.classList.add(
        "grayscale-0",
        "contrast-100",
        "opacity-100",
        "scale-110"
      );

      if (textRef.current) {
        textRef.current.classList.remove("text-muted-foreground");
        textRef.current.classList.add("text-foreground");
      }
    } else {
      // Inactive State: Grayscale, Lower Contrast, Lower Opacity
      imgRef.current.classList.add(
        "grayscale-[100%]",
        "contrast-125",
        "opacity-90"
      );
      imgRef.current.classList.remove(
        "grayscale-0",
        "contrast-100",
        "opacity-100",
        "scale-110"
      );

      if (textRef.current) {
        textRef.current.classList.add("text-muted-foreground");
        textRef.current.classList.remove("text-foreground");
      }
    }
  });

  return (
    <div className="flex flex-shrink-0 items-center" ref={containerRef}>
      <div className="group flex items-center justify-center gap-3 px-4 py-3 transition-all duration-300 md:gap-4 md:px-12 md:py-6">
        <Image
          ref={imgRef}
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={36}
          height={36}
          className="h-6 w-auto object-contain opacity-90 contrast-125 grayscale-[100%] filter transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0 md:h-9"
        />
        {brand.name ? (
          <h3
            ref={textRef}
            className="text-nowrap text-center text-xl font-medium tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
          >
            {brand.name}
          </h3>
        ) : null}
      </div>
      {/* Sharp separator */}
      <div className="mx-4 block h-10 w-[1px] bg-border opacity-30 md:mx-6" />
    </div>
  );
}

export function ClientLogosSection({ content }) {
  const dynamicBrands =
    Array.isArray(content?.logos) && content.logos.length > 0
      ? content.logos.map((logo, index) => ({
          name: `Partner ${index + 1}`,
          logo,
        }))
      : null;
  const displayBrands = dynamicBrands || brands;
  // Duplicate brands to ensure seamless loop
  const seamlessBrands = [
    ...displayBrands,
    ...displayBrands,
    ...displayBrands,
    ...displayBrands,
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="overflow-hidden border-b border-border/40 bg-background py-1 md:py-4">
        <div className="relative w-full">
          <div
            className="relative z-10 flex overflow-hidden"
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
              className="flex flex-nowrap items-center"
            >
              {[...seamlessBrands, ...seamlessBrands].map((brand, index) => (
                <BrandItem key={`${brand.name}-${index}`} brand={brand} />
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default ClientLogosSection;
