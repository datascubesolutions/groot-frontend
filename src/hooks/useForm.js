"use client";

/**
 * useForm Hook
 * 
 * @fileoverview Simple form state management
 * @module hooks/useForm
 */

import { useState, useCallback, useMemo } from 'react';

/**
 * @typedef {Object} FieldError
 * @property {string} message - Error message
 */

/**
 * @typedef {Object} UseFormReturn
 * @template T
 * @property {T} values - Current form values
 * @property {Object<string, FieldError>} errors - Field errors
 * @property {Object<string, boolean>} touched - Touched fields
 * @property {boolean} isValid - Form validity
 * @property {boolean} isDirty - Form has changes
 * @property {boolean} isSubmitting - Form is submitting
 * @property {(name: string, value: any) => void} setValue - Set single value
 * @property {(values: Partial<T>) => void} setValues - Set multiple values
 * @property {(name: string, error: string) => void} setError - Set field error
 * @property {(errors: Object) => void} setErrors - Set multiple errors
 * @property {(name: string) => void} clearError - Clear field error
 * @property {() => void} clearErrors - Clear all errors
 * @property {(name: string) => void} setTouched - Mark field as touched
 * @property {() => void} reset - Reset form to initial values
 * @property {(handler: (values: T) => Promise<void>) => (e: Event) => void} handleSubmit - Submit handler
 * @property {(name: string) => Object} getFieldProps - Get props for input field
 */

/**
 * Hook for managing form state
 * 
 * @template T
 * @param {Object} options - Form options
 * @param {T} options.initialValues - Initial form values
 * @param {(values: T) => Object<string, string>} [options.validate] - Validation function
 * @param {(values: T) => Promise<void>} [options.onSubmit] - Submit handler
 * @returns {UseFormReturn<T>}
 * 
 * @example
 * ```jsx
 * const form = useForm({
 *   initialValues: { email: '', password: '' },
 *   validate: (values) => {
 *     const errors = {};
 *     if (!values.email) errors.email = 'Required';
 *     return errors;
 *   },
 *   onSubmit: async (values) => {
 *     await loginUser(values);
 *   },
 * });
 * 
 * return (
 *   <form onSubmit={form.handleSubmit()}>
 *     <Input {...form.getFieldProps('email')} />
 *     {form.errors.email && <span>{form.errors.email.message}</span>}
 *     <Button type="submit" loading={form.isSubmitting}>Submit</Button>
 *   </form>
 * );
 * ```
 */
export function useForm(options) {
    const { initialValues, validate, onSubmit } = options;

    const [values, setValuesState] = useState(initialValues);
    const [errors, setErrorsState] = useState({});
    const [touched, setTouchedState] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if form has changes
    const isDirty = useMemo(() => {
        return JSON.stringify(values) !== JSON.stringify(initialValues);
    }, [values, initialValues]);

    // Check if form is valid
    const isValid = useMemo(() => {
        return Object.keys(errors).length === 0;
    }, [errors]);

    // Set single value
    const setValue = useCallback((name, value) => {
        setValuesState((prev) => ({ ...prev, [name]: value }));

        // Clear error when value changes
        setErrorsState((prev) => {
            const next = { ...prev };
            delete next[name];
            return next;
        });
    }, []);

    // Set multiple values
    const setValues = useCallback((newValues) => {
        setValuesState((prev) => ({ ...prev, ...newValues }));
    }, []);

    // Set field error
    const setError = useCallback((name, message) => {
        setErrorsState((prev) => ({
            ...prev,
            [name]: { message },
        }));
    }, []);

    // Set multiple errors
    const setErrors = useCallback((newErrors) => {
        const formatted = Object.entries(newErrors).reduce((acc, [key, message]) => {
            acc[key] = { message };
            return acc;
        }, {});
        setErrorsState(formatted);
    }, []);

    // Clear field error
    const clearError = useCallback((name) => {
        setErrorsState((prev) => {
            const next = { ...prev };
            delete next[name];
            return next;
        });
    }, []);

    // Clear all errors
    const clearErrors = useCallback(() => {
        setErrorsState({});
    }, []);

    // Mark field as touched
    const setTouched = useCallback((name) => {
        setTouchedState((prev) => ({ ...prev, [name]: true }));
    }, []);

    // Reset form
    const reset = useCallback(() => {
        setValuesState(initialValues);
        setErrorsState({});
        setTouchedState({});
        setIsSubmitting(false);
    }, [initialValues]);

    // Validate form
    const validateForm = useCallback(() => {
        if (!validate) return {};

        const validationErrors = validate(values);
        setErrors(validationErrors);
        return validationErrors;
    }, [validate, values, setErrors]);

    // Handle submit
    const handleSubmit = useCallback(
        (customHandler) => {
            return async (event) => {
                event?.preventDefault();

                // Validate
                const validationErrors = validateForm();
                if (Object.keys(validationErrors).length > 0) {
                    return;
                }

                setIsSubmitting(true);

                try {
                    const handler = customHandler || onSubmit;
                    if (handler) {
                        await handler(values);
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    throw error;
                } finally {
                    setIsSubmitting(false);
                }
            };
        },
        [validateForm, onSubmit, values]
    );

    // Get field props helper
    const getFieldProps = useCallback(
        (name) => ({
            name,
            value: values[name] ?? '',
            onChange: (e) => {
                const value = e.target?.value ?? e;
                setValue(name, value);
            },
            onBlur: () => {
                setTouched(name);
                if (validate) {
                    const validationErrors = validate(values);
                    if (validationErrors[name]) {
                        setError(name, validationErrors[name]);
                    }
                }
            },
            error: touched[name] ? errors[name]?.message : undefined,
        }),
        [values, errors, touched, setValue, setTouched, setError, validate]
    );

    return {
        values,
        errors,
        touched,
        isValid,
        isDirty,
        isSubmitting,
        setValue,
        setValues,
        setError,
        setErrors,
        clearError,
        clearErrors,
        setTouched,
        reset,
        handleSubmit,
        getFieldProps,
    };
}

export default useForm;
