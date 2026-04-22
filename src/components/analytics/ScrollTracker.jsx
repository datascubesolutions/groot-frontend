// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ScrollTracker() {
  const scrollRef = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      [25, 50, 75, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !scrollRef.current[threshold]) {
          scrollRef.current[threshold] = true;
          trackEvent(`scroll_${threshold}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initially in case page is short
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
