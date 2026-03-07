import React from 'react';

/**
 * Icon — a single component that holds every SVG icon used across the app.
 * Pass the icon's name and Tailwind size/colour classes to render it anywhere.
 *
 * Usage:
 *   <Icon name="Home" className="w-6 h-6 text-opay-main" />
 *
 * All icon paths use `currentColor`, so Tailwind `text-*` classes control the colour.
 *
 * @param {string} name      - Name of the icon to render (see switch cases below)
 * @param {string} className - Tailwind classes for size and colour (default: "w-6 h-6")
 */
const Icon = ({ name, className = 'w-6 h-6' }) => {
    const props = {
        className,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        'aria-hidden': true,
    };

    switch (name) {

        /* ─────────────── Bottom Navigation ─────────────── */

        case 'Home':
            return (
                <svg {...props}>
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
            );

        case 'Rewards':
            return (
                <svg {...props}>
                    <path d="M12 3l2.47 4.9L20 8.85l-4 3.8.94 5.35L12 15.4l-4.94 2.6.94-5.35L4 8.85l5.53-.95L12 3z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
            );

        case 'Finance':
            return (
                <svg {...props}>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Cards':
            return (
                <svg {...props}>
                    <rect x="2" y="5" width="20" height="14" rx="2"
                        stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M6 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'Me':
            return (
                <svg {...props}>
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        /* ─────────────── Top Bar ─────────────── */

        case 'Bell':
            return (
                <svg {...props}>
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.73 21a2 2 0 01-3.46 0"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'QRScan':
            return (
                <svg {...props}>
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M14 14h2v2h-2zM18 14h3M18 18h3M14 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'Help':
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9.09 9a3 3 0 015.82 1c0 2-3 3-3 3"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                </svg>
            );

        /* ─────────────── Balance Card ─────────────── */

        case 'Shield':
            return (
                <svg {...props}>
                    <path d="M12 2l7 4v5c0 4.42-2.99 8.57-7 9.93C7.99 19.57 5 15.42 5 11V6l7-4z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Eye':
            return (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            );

        case 'ClosedEye':
            return (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>

            )

        case 'ChevronRight':
            return (
                <svg {...props}>
                    <polyline points="9 18 15 12 9 6"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'ArrowRight':
            return (
                <svg {...props}>
                    <path d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        /* ─────────────── Quick Actions ─────────────── */

        case 'SendToPerson':
            return (
                <svg {...props}>
                    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M17 9l3 3-3 3M20 12h-6"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Bank':
            return (
                <svg {...props}>
                    <path d="M3 22h18M4 22V11M20 22V11M2 11l10-8 10 8M12 22v-5a2 2 0 00-4 0v5"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="15" width="4" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
            );

        case 'Withdraw':
            return (
                <svg {...props}>
                    <path d="M5 12H19M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 19h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        /* ─────────────── Services Grid ─────────────── */

        case 'Airtime':
            return (
                <svg {...props}>
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 7h6M9 11h6M9 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'Data':
            return (
                <svg {...props}>
                    <path d="M1 6l5-4 5 4 5-4 5 4" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12l5-4 5 4 5-4 5 4" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 18l5-4 5 4 5-4 5 4" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Betting':
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );

        case 'TV':
            return (
                <svg {...props}>
                    <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 7L12 3l4 4" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 20h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <polygon points="10,11 16,14 10,17" fill="currentColor" />
                </svg>
            );

        case 'OWealth':
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 2v2M12 20v2M22 12h-2M4 12H2" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" />
                    <path d="M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'Loan':
            return (
                <svg {...props}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M10 9h4M12 7v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'Invitation':
            return (
                <svg {...props}>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'More':
            return (
                <svg {...props}>
                    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
                </svg>
            );

        /* ─────────────── Promo Banner ─────────────── */

        case 'Email':
            return (
                <svg {...props}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        /* ─────────────── Savings ─────────────── */

        case 'Gift':
            return (
                <svg {...props}>
                    <polyline points="20 12 20 22 4 22 4 12"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2" y="7" width="20" height="5" rx="1"
                        stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'Target':
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
            );

        case 'Voucher':
            return (
                <svg {...props}>
                    <rect x="2" y="7" width="20" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 10h20M7 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M11 12h5M11 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        /* ─────────────── Me Page ─────────────── */

        case 'Settings':
            return (
                <svg {...props}>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'HexSettings':
            // Hexagonal settings icon (like the OPay top right icon)
            return (
                <svg {...props} viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4.5 6v6c0 5.25 3.21 10.15 7.5 11.5C16.29 22.15 19.5 17.25 19.5 12V6L12 2z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 9.5V7M12 17v-2.5M9 12H7M17 12h-2M9.93 9.93L8.5 8.5M15.5 15.5l-1.43-1.43M9.93 14.07L8.5 15.5M15.5 8.5l-1.43 1.43"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );

        case 'TransactionHistory':
            return (
                <svg {...props}>
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );

        case 'AccountLimits':
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 6v6l-3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 3.5A9.97 9.97 0 012 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'BankCard':
            return (
                <svg {...props}>
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M6 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'PayMe':
            return (
                <svg {...props}>
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="3.5" cy="3.5" r="0" />
                </svg>
            );

        case 'ShareOPay':
            return (
                <svg {...props}>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        case 'SecurityCenter':
            return (
                <svg {...props}>
                    <path d="M12 2l7 4v5c0 4.42-2.99 8.57-7 9.93C7.99 19.57 5 15.42 5 11V6l7-4z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'CustomerService':
            return (
                <svg {...props}>
                    <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
            );

        case 'OPayUSSD':
            return (
                <svg {...props}>
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                    <path d="M9 7l1.5 2L9 11M12 7v4M15 7l-1.5 2 1.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        case 'RateUs':
            return (
                <svg {...props}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );

        /* Filled shield with a checkmark — used in security banners */
        case 'SecurityBanner':
            return (
                <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            );

        case 'Logout':
            return (
                <svg {...props}>
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            );

        default:
            return null;
    }
};

export default Icon;
