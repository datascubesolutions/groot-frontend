"use client";

/**
 * useDisclosure Hook
 * 
 * @fileoverview Boolean state management for modals, drawers, etc.
 * @module hooks/useDisclosure
 */

import { useState, useCallback, useMemo } from 'react';

/**
 * @typedef {Object} UseDisclosureReturn
 * @property {boolean} isOpen - Current open state
 * @property {() => void} onOpen - Open handler
 * @property {() => void} onClose - Close handler
 * @property {() => void} onToggle - Toggle handler
 * @property {(state: boolean) => void} setIsOpen - Direct state setter
 */

/**
 * Hook for managing boolean disclosure state (modals, drawers, dropdowns)
 * 
 * @param {boolean} [initialState=false] - Initial open state
 * @param {Object} [callbacks] - Optional callbacks
 * @param {() => void} [callbacks.onOpen] - Called when opening
 * @param {() => void} [callbacks.onClose] - Called when closing
 * @returns {UseDisclosureReturn}
 * 
 * @example
 * ```jsx
 * const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
 * 
 * return (
 *   <>
 *     <Button onClick={onOpen}>Open Modal</Button>
 *     <Modal isOpen={isOpen} onClose={onClose}>Content</Modal>
 *   </>
 * );
 * ```
 */
export function useDisclosure(initialState = false, callbacks = {}) {
    const [isOpen, setIsOpen] = useState(initialState);

    const onOpen = useCallback(() => {
        setIsOpen(true);
        callbacks.onOpen?.();
    }, [callbacks]);

    const onClose = useCallback(() => {
        setIsOpen(false);
        callbacks.onClose?.();
    }, [callbacks]);

    const onToggle = useCallback(() => {
        setIsOpen((prev) => {
            const next = !prev;
            if (next) {
                callbacks.onOpen?.();
            } else {
                callbacks.onClose?.();
            }
            return next;
        });
    }, [callbacks]);

    // Memoize return value
    return useMemo(
        () => ({
            isOpen,
            onOpen,
            onClose,
            onToggle,
            setIsOpen,
        }),
        [isOpen, onOpen, onClose, onToggle]
    );
}

export default useDisclosure;
