/**
 * formatter.js
 * Contains utility functions to format data for display.
 */

/**
 * Formats a number into Nigerian Naira currency representation.
 * E.g., 1200 becomes "₦1,200.00"
 * 
 * @param {number|string} amount - The amount to format
 * @param {boolean} includeDecimals - Whether to include .00
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, includeDecimals = true) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) return '₦0.00';

    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: includeDecimals ? 2 : 0,
        maximumFractionDigits: includeDecimals ? 2 : 0,
    }).format(numericAmount);
};

/**
 * Formats a raw phone number into a standard +234 format or standard local format.
 * Basic implementation to strip non-digits.
 * 
 * @param {string} phone - The raw phone number
 * @returns {string} Formatted phone number
 */
export const formatPhoneInput = (phone) => {
    // Remove all non-numeric characters for clean data
    return phone.replace(/\D/g, '');
};
