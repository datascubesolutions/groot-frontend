/**
 * Animation Configuration
 * Motion rules and animation presets
 */

export const animationConfig = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeIn: "cubic-bezier(0.7, 0, 1, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  scrollReveal: {
    threshold: 0.2,
    rootMargin: "0px",
    triggerOnce: false,
  },
  reducedMotion: {
    duration: 0.01,
    disableAnimations: true,
  },
};

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
