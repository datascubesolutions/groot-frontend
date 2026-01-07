/**
 * Validation Rules
 * 
 * @fileoverview Reusable validation functions
 * @module lib/validators/rules
 */

/**
 * Email regex pattern
 */
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * Phone regex pattern (international format)
 */
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

/**
 * URL regex pattern
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/**
 * Validate email format
 * @param {string} value - Email to validate
 * @returns {string | undefined} Error message if invalid
 */
export function validateEmail(value) {
    if (!value) return undefined;
    if (!EMAIL_REGEX.test(value)) {
        return 'Please enter a valid email address';
    }
    return undefined;
}

/**
 * Validate phone number format
 * @param {string} value - Phone to validate
 * @returns {string | undefined} Error message if invalid
 */
export function validatePhone(value) {
    if (!value) return undefined;
    if (!PHONE_REGEX.test(value)) {
        return 'Please enter a valid phone number';
    }
    return undefined;
}

/**
 * Validate URL format
 * @param {string} value - URL to validate
 * @returns {string | undefined} Error message if invalid
 */
export function validateUrl(value) {
    if (!value) return undefined;
    if (!URL_REGEX.test(value)) {
        return 'Please enter a valid URL';
    }
    return undefined;
}

/**
 * Validate required field
 * @param {string} [message] - Custom error message
 * @returns {(value: any) => string | undefined}
 */
export function validateRequired(message = 'This field is required') {
    return (value) => {
        if (value === undefined || value === null || value === '') {
            return message;
        }
        if (typeof value === 'string' && value.trim() === '') {
            return message;
        }
        return undefined;
    };
}

/**
 * Validate minimum length
 * @param {number} min - Minimum length
 * @param {string} [message] - Custom error message
 * @returns {(value: string) => string | undefined}
 */
export function validateMinLength(min, message) {
    return (value) => {
        if (!value) return undefined;
        if (value.length < min) {
            return message || `Must be at least ${min} characters`;
        }
        return undefined;
    };
}

/**
 * Validate maximum length
 * @param {number} max - Maximum length
 * @param {string} [message] - Custom error message
 * @returns {(value: string) => string | undefined}
 */
export function validateMaxLength(max, message) {
    return (value) => {
        if (!value) return undefined;
        if (value.length > max) {
            return message || `Must be no more than ${max} characters`;
        }
        return undefined;
    };
}

/**
 * Validate against a regex pattern
 * @param {RegExp} pattern - Regex pattern
 * @param {string} message - Error message
 * @returns {(value: string) => string | undefined}
 */
export function validatePattern(pattern, message) {
    return (value) => {
        if (!value) return undefined;
        if (!pattern.test(value)) {
            return message;
        }
        return undefined;
    };
}

/**
 * Create a validator from validation rules
 * @param {Object<string, Array<(value: any) => string | undefined>>} schema - Validation schema
 * @returns {(values: Object) => Object<string, string>}
 * 
 * @example
 * const validate = createValidator({
 *   email: [validateRequired(), validateEmail],
 *   name: [validateRequired(), validateMinLength(2)],
 * });
 * 
 * const errors = validate({ email: '', name: 'A' });
 * // { email: 'This field is required', name: 'Must be at least 2 characters' }
 */
export function createValidator(schema) {
    return (values) => {
        const errors = {};

        Object.entries(schema).forEach(([field, rules]) => {
            const value = values[field];

            for (const rule of rules) {
                const error = rule(value);
                if (error) {
                    errors[field] = error;
                    break; // Stop at first error
                }
            }
        });

        return errors;
    };
}

/**
 * Combine multiple validators
 * @param {...((value: any) => string | undefined)} validators - Validators to combine
 * @returns {(value: any) => string | undefined}
 */
export function combineValidators(...validators) {
    return (value) => {
        for (const validator of validators) {
            const error = validator(value);
            if (error) return error;
        }
        return undefined;
    };
}

export default {
    validateEmail,
    validatePhone,
    validateUrl,
    validateRequired,
    validateMinLength,
    validateMaxLength,
    validatePattern,
    createValidator,
    combineValidators,
};
