"use client";

/**
 * useClickOutside Hook
 * 
 * @fileoverview Detect clicks outside of a referenced element
 * @module hooks/useClickOutside
 */

import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook for detecting clicks outside an element
 * 
 * @param {() => void} handler - Callback when click outside is detected
 * @param {boolean} [enabled=true] - Whether the listener is active
 * @returns {React.RefObject<HTMLElement>} Ref to attach to the target element
 * 
 * @example
 * ```jsx
 * const dropdownRef = useClickOutside(() => setIsOpen(false));
 * 
 * return (
 *   <div ref={dropdownRef}>
 *     <DropdownContent />
 *   </div>
 * );
 * ```
 */
export function useClickOutside(handler, enabled = true) {
    const ref = useRef(null);
    const handlerRef = useRef(handler);

    // Update handler ref when handler changes
    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    const handleClickOutside = useCallback((event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            handlerRef.current();
        }
    }, []);

    useEffect(() => {
        if (!enabled) return;

        // Use mousedown for immediate response
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [handleClickOutside, enabled]);

    return ref;
}

/**
 * Hook for detecting clicks outside multiple elements
 * 
 * @param {() => void} handler - Callback when click outside is detected
 * @param {React.RefObject<HTMLElement>[]} refs - Array of refs to check
 * @param {boolean} [enabled=true] - Whether the listener is active
 * 
 * @example
 * ```jsx
 * const triggerRef = useRef(null);
 * const contentRef = useRef(null);
 * 
 * useClickOutsideMultiple(
 *   () => setIsOpen(false),
 *   [triggerRef, contentRef]
 * );
 * ```
 */
export function useClickOutsideMultiple(handler, refs, enabled = true) {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!enabled) return;

        const handleClickOutside = (event) => {
            const isOutside = refs.every(
                (ref) => ref.current && !ref.current.contains(event.target)
            );

            if (isOutside) {
                handlerRef.current();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [refs, enabled]);
}

export default useClickOutside;
