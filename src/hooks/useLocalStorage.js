// @ts-nocheck
"use client";

/**
 * useLocalStorage Hook
 *
 * @fileoverview Persistent state management with localStorage
 * @module hooks/useLocalStorage
 */

import { useCallback, useSyncExternalStore } from "react";

function readStored(key, initialValue) {
  if (typeof window === "undefined") return initialValue;
  try {
    const item = window.localStorage.getItem(key);
    if (item === null) return initialValue;
    return JSON.parse(item);
  } catch {
    return initialValue;
  }
}

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
  const subscribe = useCallback(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const onStorage = (event) => {
        if (event.key === key || event.key === null) onStoreChange();
      };
      const onCustom = () => onStoreChange();
      window.addEventListener("storage", onStorage);
      window.addEventListener(`local-storage-${key}`, onCustom);
      return () => {
        window.removeEventListener("storage", onStorage);
        window.removeEventListener(`local-storage-${key}`, onCustom);
      };
    },
    [key]
  );

  const getSnapshot = useCallback(
    () => readStored(key, initialValue),
    [key, initialValue]
  );

  const getServerSnapshot = useCallback(() => initialValue, [initialValue]);

  const storedValue = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setValue = useCallback(
    (value) => {
      if (typeof window === "undefined") return;
      try {
        const prev = readStored(key, initialValue);
        const valueToStore = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(new Event(`local-storage-${key}`));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, initialValue]
  );

  const removeValue = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new Event(`local-storage-${key}`));
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
