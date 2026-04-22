// @ts-nocheck
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

import { useSyncExternalStore } from "react";

function subscribeReducedMotion(callback) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Detects the user's prefers-reduced-motion media query preference.
 *
 * @returns {boolean} True if the user prefers reduced motion.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

export default useReducedMotion;
