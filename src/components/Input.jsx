import React from 'react';

/**
 * NigerianFlag - Renders a small Nigerian flag icon (green-white-green)
 * Used inside the phone input variant to indicate the country code
 */
const NigerianFlag = () => (
    <div className="flex gap-0.5">
        <div className="w-2.5 h-5 bg-green-700 rounded-l-sm"></div>
        <div className="w-2.5 h-5 bg-white border-y border-gray-200"></div>
        <div className="w-2.5 h-5 bg-green-700 rounded-r-sm"></div>
    </div>
);

/**
 * Input - Reusable input component with two variants:
 * 
 * 1. "phone" variant: Shows Nigerian flag + "+234" country code prefix with a divider
 *    Used on both SignIn and SignUp pages for phone number entry
 * 
 * 2. "default" variant: A plain text input with optional rightElement
 *    The rightElement prop allows placing a button/icon on the right side (e.g., "Get OTP")
 * 
 * @param {string} type - Input type (text, password, tel, etc.)
 * @param {string} placeholder - Placeholder text for the input
 * @param {string} value - Controlled input value
 * @param {function} onChange - Change handler for the input
 * @param {number} maxLength - Maximum character length allowed
 * @param {string} variant - "phone" or "default"
 * @param {JSX.Element} rightElement - Optional element rendered on the right side of the input
 */
const Input = ({ type = 'text', placeholder, value, onChange, maxLength, variant = 'default', rightElement }) => {

    // Phone variant: renders flag icon, +234 prefix, divider, then input field
    if (variant === 'phone') {
        return (
            <div className="w-full bg-opay-app rounded-lg flex items-center px-4 py-3.5">
                <NigerianFlag />
                <span className="ml-2 text-opay-headings font-medium text-sm">+234</span>
                {/* Vertical divider between country code and input */}
                <div className="w-px h-5 bg-gray-300 mx-3"></div>
                <input
                    type="tel"
                    placeholder={placeholder || 'Enter phone number'}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength || 10}
                    className="flex-1 bg-transparent outline-none text-sm text-opay-headings placeholder-opay-inactive"
                />
            </div>
        );
    }

    // Default variant: plain input with optional right-side element (e.g., "Get OTP" button)
    return (
        <div className="w-full bg-opay-app rounded-lg flex items-center px-4 py-3.5">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                className="flex-1 bg-transparent outline-none text-sm text-opay-headings placeholder-opay-inactive"
            />
            {/* If a rightElement is provided, show a divider then the element */}
            {rightElement && (
                <>
                    <div className="w-px h-5 bg-gray-300 mx-3"></div>
                    {rightElement}
                </>
            )}
        </div>
    );
};

export default Input;