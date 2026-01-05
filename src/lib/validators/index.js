/**
 * Validators Module
 * 
 * @fileoverview Validation utilities for forms and data
 * @module lib/validators
 */

export {
    validateEmail,
    validatePhone,
    validateUrl,
    validateRequired,
    validateMinLength,
    validateMaxLength,
    validatePattern,
    createValidator,
    combineValidators,
} from './rules';

export {
    contactFormSchema,
    newsletterSchema,
    loginSchema,
    registerSchema,
} from './schemas';
