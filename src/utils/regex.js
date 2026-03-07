/**
 * regex.js
 * Stores validation patterns (regular expressions) used across the app.
 */

// Accepts Nigerian numbers starting with 070, 080, 081, 090, or 091 — exactly 11 digits.
// Example valid inputs: 08012345678, 07011223344
const phoneRegex = /^(0[789][01]\d{8})$/

/**
 * isValidPhone - Checks if a phone number is a valid Nigerian format.
 * Returns true if it matches, false if it doesn't.
 * Used on Sign In and Sign Up before submitting the form.
 *
 * @param {string} phone - The phone number string to validate
 * @returns {boolean} true if valid, false otherwise
 */
export const isValidPhone = (phone) => {
    return phoneRegex.test(phone);
};
