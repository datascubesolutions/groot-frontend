/**
 * useReducedMotion Hook
 *
 * @fileoverview Returns true if the user has requested reduced motion via the
 * OS-level "Reduce Motion" preference. Use this to conditionally disable heavy
 * Framer Motion animations, parallax effects, and CSS transitions on components
 * where animation is purely decorative and non-essential.
 *
 * @example
 * const reducedMotion = useReducedMotion();
 * // In JSX:
 * <motion.div style={reducedMotion ? {} : { y: heroY, opacity: heroOpacity }}>
 */

"use client";

import { useEffect, useState } from "react";

/**
 * Detects the user's prefers-reduced-motion media query preference.
 *
 * @returns {boolean} True if the user prefers reduced motion.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setReducedMotion(mediaQuery.matches);

    // Listen for changes (e.g. user toggling OS setting)
    const handler = (event) => setReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

export default useReducedMotion;
