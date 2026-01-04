"use client";

/**
 * useDebounce Hook
 * 
 * @fileoverview Debounce values and callbacks
 * @module hooks/useDebounce
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook for debouncing a value
 * 
 * @template T
 * @param {T} value - Value to debounce
 * @param {number} [delay=300] - Debounce delay in ms
 * @returns {T} Debounced value
 * 
 * @example
 * ```jsx
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 500);
 * 
 * useEffect(() => {
 *   // API call with debounced value
 *   searchAPI(debouncedSearch);
 * }, [debouncedSearch]);
 * ```
 */
export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook for debouncing a callback function
 * 
 * @template T
 * @param {(...args: T[]) => void} callback - Function to debounce
 * @param {number} [delay=300] - Debounce delay in ms
 * @returns {(...args: T[]) => void} Debounced function
 * 
 * @example
 * ```jsx
 * const handleSearch = useDebouncedCallback((value) => {
 *   searchAPI(value);
 * }, 500);
 * 
 * <Input onChange={(e) => handleSearch(e.target.value)} />
 * ```
 */
export function useDebouncedCallback(callback, delay = 300) {
    const callbackRef = useRef(callback);
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

    const debouncedCallback = useCallback(
        (...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                callbackRef.current(...args);
            }, delay);
        },
        [delay]
    );

    return debouncedCallback;
}

export default useDebounce;
