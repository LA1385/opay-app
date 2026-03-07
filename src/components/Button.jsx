import React from 'react';

/**
 * Button - A reusable button component used throughout the app.
 *
 * Supports two visual styles controlled by the `variant` prop:
 * - "primary": Solid green background with white text — for main actions (e.g., Login, Confirm)
 * - "outline": Transparent with a green border — for secondary actions (e.g., Create Account)
 *
 * Both variants are full-width, pill-shaped, and smoothly animate on hover.
 *
 * Props:
 * @param {string}   text    - The label shown on the button
 * @param {function} onClick - Function called when the button is clicked
 * @param {string}   variant - "primary" (default) or "outline"
 * @param {string}   type    - HTML type attribute: "button" (default), "submit", or "reset"
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
