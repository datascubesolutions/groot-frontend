"use client";

/**
 * useThrottle Hook
 * 
 * @fileoverview Throttle values and callbacks
 * @module hooks/useThrottle
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook for throttling a value
 * 
 * @template T
 * @param {T} value - Value to throttle
 * @param {number} [limit=300] - Throttle limit in ms
 * @returns {T} Throttled value
 * 
 * @example
 * ```jsx
 * const [scrollY, setScrollY] = useState(0);
 * const throttledScrollY = useThrottle(scrollY, 100);
 * ```
 */
export function useThrottle(value, limit = 300) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRan = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            if (Date.now() - lastRan.current >= limit) {
                setThrottledValue(value);
                lastRan.current = Date.now();
            }
        }, limit - (Date.now() - lastRan.current));

        return () => {
            clearTimeout(handler);
        };
    }, [value, limit]);

    return throttledValue;
}

/**
 * Hook for throttling a callback function
 * 
 * @template T
 * @param {(...args: T[]) => void} callback - Function to throttle
 * @param {number} [limit=300] - Throttle limit in ms
 * @returns {(...args: T[]) => void} Throttled function
 * 
 * @example
 * ```jsx
 * const handleScroll = useThrottledCallback((event) => {
 *   console.log('Scroll position:', event.target.scrollTop);
 * }, 100);
 * ```
 */
export function useThrottledCallback(callback, limit = 300) {
    const callbackRef = useRef(callback);
    const lastRanRef = useRef(0);
    const timeoutRef = useRef(null);

    // Update callback ref when callback changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const throttledCallback = useCallback(
        (...args) => {
            const now = Date.now();
            const remaining = limit - (now - lastRanRef.current);

            if (remaining <= 0) {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                lastRanRef.current = now;
                callbackRef.current(...args);
            } else if (!timeoutRef.current) {
                timeoutRef.current = setTimeout(() => {
                    lastRanRef.current = Date.now();
                    timeoutRef.current = null;
                    callbackRef.current(...args);
                }, remaining);
            }
        },
        [limit]
    );

    return throttledCallback;
}

export default useThrottle;
