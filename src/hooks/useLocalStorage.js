"use client";

/**
 * useLocalStorage Hook
 * 
 * @fileoverview Persistent state management with localStorage
 * @module hooks/useLocalStorage
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for syncing state with localStorage
 * 
 * @template T
 * @param {string} key - Storage key
 * @param {T} initialValue - Default value if none exists
 * @returns {[T, (value: T | ((prev: T) => T)) => void, () => void]}
 * 
 * @example
 * ```jsx
 * const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');
 * ```
 */
export function useLocalStorage(key, initialValue) {
    // State to store our value
    const [storedValue, setStoredValue] = useState(initialValue);
    const [isHydrated, setIsHydrated] = useState(false);

    // Hydrate from localStorage after mount
    useEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            const item = window.localStorage.getItem(key);
            if (item !== null) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
        }
        setIsHydrated(true);
    }, [key]);

    // Wrapped setter that persists to localStorage
    const setValue = useCallback(
        (value) => {
            try {
                // Allow value to be a function for same API as useState
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;

                setStoredValue(valueToStore);

                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));

                    // Dispatch storage event for cross-tab sync
                    window.dispatchEvent(
                        new StorageEvent('storage', {
                            key,
                            newValue: JSON.stringify(valueToStore),
                        })
                    );
                }
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    // Remove from storage
    const removeValue = useCallback(() => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);

    // Listen for changes in other tabs
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleStorageChange = (event) => {
            if (event.key === key && event.newValue !== null) {
                try {
                    setStoredValue(JSON.parse(event.newValue));
                } catch (error) {
                    console.warn(`Error parsing storage event for key "${key}":`, error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key]);

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
