"use client";

/**
 * useAsync Hook
 * 
 * @fileoverview Handle async operations with loading/error states
 * @module hooks/useAsync
 */

import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * @typedef {'idle' | 'pending' | 'success' | 'error'} AsyncStatus
 */

/**
 * @typedef {Object} UseAsyncState
 * @template T
 * @property {T | null} data - Result data
 * @property {Error | null} error - Error if any
 * @property {AsyncStatus} status - Current status
 * @property {boolean} isIdle - Is idle
 * @property {boolean} isLoading - Is loading
 * @property {boolean} isSuccess - Is success
 * @property {boolean} isError - Is error
 */

/**
 * @typedef {Object} UseAsyncReturn
 * @template T, A
 * @property {UseAsyncState<T>} state - Current state
 * @property {(...args: A[]) => Promise<T>} execute - Execute function
 * @property {() => void} reset - Reset to initial state
 */

/**
 * Hook for managing async operations with state
 * 
 * @template T, A
 * @param {(...args: A[]) => Promise<T>} asyncFn - Async function to execute
 * @param {Object} [options] - Options
 * @param {boolean} [options.immediate=false] - Execute immediately on mount
 * @param {A[]} [options.immediateArgs=[]] - Args for immediate execution
 * @param {(data: T) => void} [options.onSuccess] - Success callback
 * @param {(error: Error) => void} [options.onError] - Error callback
 * @returns {UseAsyncReturn<T, A>}
 * 
 * @example
 * ```jsx
 * const { state, execute } = useAsync(fetchUserData);
 * 
 * useEffect(() => {
 *   execute(userId);
 * }, [userId]);
 * 
 * if (state.isLoading) return <Loading />;
 * if (state.isError) return <Error message={state.error.message} />;
 * return <UserProfile data={state.data} />;
 * ```
 */
export function useAsync(asyncFn, options = {}) {
    const {
        immediate = false,
        immediateArgs = [],
        onSuccess,
        onError,
    } = options;

    const [state, setState] = useState({
        data: null,
        error: null,
        status: 'idle',
    });

    // Track if component is mounted
    const mountedRef = useRef(true);
    const asyncFnRef = useRef(asyncFn);

    // Update ref when function changes
    useEffect(() => {
        asyncFnRef.current = asyncFn;
    }, [asyncFn]);

    // Cleanup on unmount
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const execute = useCallback(
        async (...args) => {
            setState({ data: null, error: null, status: 'pending' });

            try {
                const result = await asyncFnRef.current(...args);

                if (mountedRef.current) {
                    setState({ data: result, error: null, status: 'success' });
                    onSuccess?.(result);
                }

                return result;
            } catch (error) {
                if (mountedRef.current) {
                    setState({ data: null, error, status: 'error' });
                    onError?.(error);
                }
                throw error;
            }
        },
        [onSuccess, onError]
    );

    const reset = useCallback(() => {
        setState({ data: null, error: null, status: 'idle' });
    }, []);

    // Execute immediately if requested
    useEffect(() => {
        if (immediate) {
            execute(...immediateArgs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Compute derived state
    const derivedState = {
        ...state,
        isIdle: state.status === 'idle',
        isLoading: state.status === 'pending',
        isSuccess: state.status === 'success',
        isError: state.status === 'error',
    };

    return { state: derivedState, execute, reset };
}

/**
 * Simpler version that just returns loading state
 * 
 * @template T, A
 * @param {(...args: A[]) => Promise<T>} asyncFn - Async function
 * @returns {[(...args: A[]) => Promise<T>, boolean]} [execute, isLoading]
 */
export function useAsyncCallback(asyncFn) {
    const [isLoading, setIsLoading] = useState(false);
    const mountedRef = useRef(true);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const execute = useCallback(
        async (...args) => {
            setIsLoading(true);
            try {
                const result = await asyncFn(...args);
                return result;
            } finally {
                if (mountedRef.current) {
                    setIsLoading(false);
                }
            }
        },
        [asyncFn]
    );

    return [execute, isLoading];
}

export default useAsync;
