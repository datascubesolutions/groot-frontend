/**
 * Validation Schemas
 * 
 * @fileoverview Pre-built validation schemas for common forms
 * @module lib/validators/schemas
 */

import {
    createValidator,
    validateRequired,
    validateEmail,
    validatePhone,
    validateMinLength,
    validateMaxLength,
} from './rules';

/**
 * Contact form validation schema
 */
export const contactFormSchema = createValidator({
    name: [
        validateRequired('Name is required'),
        validateMinLength(2, 'Name must be at least 2 characters'),
        validateMaxLength(100, 'Name must be less than 100 characters'),
    ],
    email: [
        validateRequired('Email is required'),
        validateEmail,
    ],
    phone: [
        validatePhone,
    ],
    company: [
        validateMaxLength(100, 'Company name must be less than 100 characters'),
    ],
    message: [
        validateRequired('Message is required'),
        validateMinLength(10, 'Message must be at least 10 characters'),
        validateMaxLength(5000, 'Message must be less than 5000 characters'),
    ],
});

/**
 * Newsletter subscription validation schema
 */
export const newsletterSchema = createValidator({
    email: [
        validateRequired('Email is required'),
        validateEmail,
    ],
});

/**
 * Login form validation schema
 */
export const loginSchema = createValidator({
    email: [
        validateRequired('Email is required'),
        validateEmail,
    ],
    password: [
        validateRequired('Password is required'),
        validateMinLength(8, 'Password must be at least 8 characters'),
    ],
});

/**
 * Registration form validation schema
 */
export const registerSchema = createValidator({
    name: [
        validateRequired('Name is required'),
        validateMinLength(2, 'Name must be at least 2 characters'),
    ],
    email: [
        validateRequired('Email is required'),
        validateEmail,
    ],
    password: [
        validateRequired('Password is required'),
        validateMinLength(8, 'Password must be at least 8 characters'),
    ],
    confirmPassword: [
        validateRequired('Please confirm your password'),
    ],
});

/**
 * Validate password confirmation matches
 * @param {Object} values - Form values
 * @returns {Object} Errors
 */
export function validatePasswordMatch(values) {
    const errors = {};
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
}

export default {
    contactFormSchema,
    newsletterSchema,
    loginSchema,
    registerSchema,
    validatePasswordMatch,
};
