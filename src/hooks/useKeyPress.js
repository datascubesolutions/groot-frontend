"use client";

/**
 * useKeyPress Hook
 * 
 * @fileoverview Detect and respond to keyboard events
 * @module hooks/useKeyPress
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for detecting when a specific key is pressed
 * 
 * @param {string} targetKey - Key to listen for (e.g., 'Escape', 'Enter', 'a')
 * @param {Object} [options] - Options
 * @param {boolean} [options.preventDefault=false] - Prevent default behavior
 * @param {boolean} [options.stopPropagation=false] - Stop event propagation
 * @returns {boolean} Whether the key is currently pressed
 * 
 * @example
 * ```jsx
 * const isEscapePressed = useKeyPress('Escape');
 * 
 * useEffect(() => {
 *   if (isEscapePressed) closeModal();
 * }, [isEscapePressed]);
 * ```
 */
export function useKeyPress(targetKey, options = {}) {
    const { preventDefault = false, stopPropagation = false } = options;
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = useCallback(
        (event) => {
            if (event.key === targetKey) {
                if (preventDefault) event.preventDefault();
                if (stopPropagation) event.stopPropagation();
                setKeyPressed(true);
            }
        },
        [targetKey, preventDefault, stopPropagation]
    );

    const upHandler = useCallback(
        (event) => {
            if (event.key === targetKey) {
                setKeyPressed(false);
            }
        },
        [targetKey]
    );

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [downHandler, upHandler]);

    return keyPressed;
}

/**
 * Hook for handling keyboard shortcuts
 * 
 * @param {Object<string, () => void>} keyMap - Map of keys to handlers
 * @param {Object} [options] - Options
 * @param {boolean} [options.preventDefault=true] - Prevent default behavior
 * @param {boolean} [options.enabled=true] - Whether shortcuts are active
 * 
 * @example
 * ```jsx
 * useKeyboardShortcuts({
 *   'Escape': () => closeModal(),
 *   'Enter': () => submitForm(),
 *   'ctrl+s': () => saveDocument(),
 * });
 * ```
 */
export function useKeyboardShortcuts(keyMap, options = {}) {
    const { preventDefault = true, enabled = true } = options;

    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event) => {
            // Build key string including modifiers
            const parts = [];
            if (event.ctrlKey || event.metaKey) parts.push('ctrl');
            if (event.altKey) parts.push('alt');
            if (event.shiftKey) parts.push('shift');
            parts.push(event.key.toLowerCase());

            const keyCombo = parts.join('+');

            // Check both the combo and just the key
            const handler = keyMap[keyCombo] || keyMap[event.key];

            if (handler) {
                if (preventDefault) event.preventDefault();
                handler(event);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [keyMap, preventDefault, enabled]);
}

/**
 * Common keyboard shortcuts hook for modal/dialog patterns
 * 
 * @param {Object} handlers - Handler functions
 * @param {() => void} [handlers.onEscape] - Escape key handler
 * @param {() => void} [handlers.onEnter] - Enter key handler
 * @param {boolean} [enabled=true] - Whether shortcuts are active
 */
export function useModalKeyboard(handlers, enabled = true) {
    const { onEscape, onEnter } = handlers;

    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && onEscape) {
                event.preventDefault();
                onEscape();
            }
            if (event.key === 'Enter' && onEnter) {
                // Don't prevent default for Enter in form inputs
                const isInput = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);
                if (!isInput) {
                    event.preventDefault();
                    onEnter();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onEscape, onEnter, enabled]);
}

export default useKeyPress;
