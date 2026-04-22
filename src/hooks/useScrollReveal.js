// @ts-nocheck
"use client";

/**
 * useScrollReveal Hook
 *
 * @fileoverview Scroll-based reveal animations with Intersection Observer
 * @module hooks/useScrollReveal
 */

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { animationConfig } from "@/config/animation.config";
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * @typedef {Object} UseScrollRevealOptions
 * @property {number} [threshold] - Intersection threshold (0-1)
 * @property {string} [rootMargin] - Root margin for intersection observer
 * @property {boolean} [triggerOnce] - Whether to trigger animation only once
 */

/**
 * @typedef {Object} UseScrollRevealReturn
 * @property {React.RefObject<HTMLElement>} ref - Ref to attach to element
 * @property {boolean} isVisible - Current visibility state
 * @property {boolean} hasBeenVisible - Whether element has ever been visible
 */

/**
 * Hook for scroll-based reveal animations
 *
 * @param {UseScrollRevealOptions} [options={}] - Configuration options
 * @returns {UseScrollRevealReturn}
 *
 * @example
 * ```jsx
 * const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
 * return <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>Content</div>;
 * ```
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = animationConfig.scrollReveal.threshold,
    rootMargin = animationConfig.scrollReveal.rootMargin,
    triggerOnce = animationConfig.scrollReveal.triggerOnce,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const handleIntersection = useCallback(
    (entries) => {
      if (!shouldAnimate) {
        setIsVisible(true);
        setHasBeenVisible(true);
        return;
      }

      const [entry] = entries;
      const isIntersecting = entry.isIntersecting;

      setIsVisible(isIntersecting);

      if (isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    },
    [hasBeenVisible, shouldAnimate]
  );

  // Memoize observer options
  const observerOptions = useMemo(
    () => ({ threshold, rootMargin }),
    [threshold, rootMargin]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      startTransition(() => {
        setIsVisible(true);
        setHasBeenVisible(true);
      });
      return;
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, observerOptions]);

  // Return visibility based on triggerOnce setting
  const shouldShow = triggerOnce ? hasBeenVisible : isVisible;

  return { ref, isVisible: shouldShow, hasBeenVisible };
}
