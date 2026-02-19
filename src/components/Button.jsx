import React from 'react';

/**
 * Button - Reusable button component with two style variants:
 * 
 * 1. "primary" - Filled green background (bg-opay-main) with white text and shadow
 *    Used for main actions like "Login" and "Confirm"
 * 
 * 2. "outline" - Transparent background with green border and green text
 *    Used for secondary actions like "Create a new account"
 * 
 * Both variants are full-width pill-shaped buttons with hover transitions
 * 
 * @param {string} text - The button label text
 * @param {function} onClick - Click event handler
 * @param {string} variant - "primary" (default) or "outline"
 * @param {string} type - HTML button type attribute (default: "button")
 */
const Button = ({ text, onClick, variant = 'primary', type = 'button' }) => {

    // Base styles shared by all variants: full width, padding, pill shape, font
    const baseStyles = 'w-full py-3.5 rounded-full font-semibold text-base transition-all duration-200';

    // Variant-specific styles
    const variants = {
        primary: 'bg-opay-main text-white shadow-md hover:opacity-90',
        outline: 'bg-transparent border-2 border-opay-main text-opay-main hover:bg-opay-iconbg',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {text}
        </button>
    );
};

export default Button;
