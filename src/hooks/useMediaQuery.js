"use client";

/**
 * useMediaQuery Hook
 * 
 * @fileoverview Responsive media query hook for handling breakpoints
 * @module hooks/useMediaQuery
 */

import { useState, useEffect, useMemo } from 'react';

/**
 * Tailwind CSS breakpoints
 */
export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

/**
 * Hook for detecting media query matches
 * 
 * @param {string} query - Media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} Whether the media query matches
 * 
 * @example
 * ```jsx
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 * ```
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Memoize the media query list
    const mediaQueryList = useMemo(() => {
        if (typeof window === 'undefined') return null;
        return window.matchMedia(query);
    }, [query]);

    useEffect(() => {
        setMounted(true);

        if (!mediaQueryList) return;

        // Set initial value
        setMatches(mediaQueryList.matches);

        // Handler for changes
        const handler = (event) => {
            setMatches(event.matches);
        };

        // Modern browsers
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', handler);
            return () => mediaQueryList.removeEventListener('change', handler);
        }
        // Legacy browsers (Safari < 14)
        else {
            mediaQueryList.addListener(handler);
            return () => mediaQueryList.removeListener(handler);
        }
    }, [mediaQueryList]);

    // Return false during SSR to avoid hydration mismatch
    if (!mounted) return false;

    return matches;
}

/**
 * Hook for detecting if screen is mobile
 * @returns {boolean}
 */
export function useIsMobile() {
    return useMediaQuery(`(max-width: ${BREAKPOINTS.md})`);
}

/**
 * Hook for detecting if screen is tablet
 * @returns {boolean}
 */
export function useIsTablet() {
    const isAboveMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);
    const isBelowDesktop = useMediaQuery(`(max-width: ${BREAKPOINTS.lg})`);
    return isAboveMobile && isBelowDesktop;
}

/**
 * Hook for detecting if screen is desktop
 * @returns {boolean}
 */
export function useIsDesktop() {
    return useMediaQuery(`(min-width: ${BREAKPOINTS.lg})`);
}

/**
 * Hook for getting current breakpoint
 * @returns {'mobile' | 'tablet' | 'desktop' | 'large'}
 */
export function useBreakpoint() {
    const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm})`);
    const isMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);
    const isLg = useMediaQuery(`(min-width: ${BREAKPOINTS.lg})`);
    const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);

    if (isXl) return 'large';
    if (isLg) return 'desktop';
    if (isMd) return 'tablet';
    if (isSm) return 'mobile';
    return 'mobile';
}

export default useMediaQuery;
