/**
 * regex.js
 * Contains regular expressions for validation across the application.
 */

// Matches a valid Nigerian phone number format.
// Supports formats like: 08012345678, +2348012345678, 2348012345678, 8012345678
export const phoneRegex = /^(0|\+?234)?([789][01]\d{8})$/;

// Matches exactly 6 digits (for OTP or 6-digit PIN/Password)
export const sixDigitRegex = /^\d{6}$/;

/**
 * Validates a Nigerian phone number.
 * @param {string} phone 
 * @returns {boolean} True if valid, false otherwise.
 */
export const isValidPhone = (phone) => {
    return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Validates a 6-digit pin/otp.
 * @param {string} code 
 * @returns {boolean} True if valid, false otherwise.
 */
export const isValidSixDigitCode = (code) => {
    return sixDigitRegex.test(code);
};
