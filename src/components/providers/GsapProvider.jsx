"use client";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

// Register plugins once
gsap.registerPlugin(ScrollTrigger, Flip);

export function GsapProvider({ children }) {
  useLayoutEffect(() => {
    // Config default ease or settings if needed
    gsap.defaults({ ease: "power2.out" });

    // Cleanup function if needed, though GSAP is usually global
  }, []);

  return <>{children}</>;
}
