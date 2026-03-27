/**
 * webAuth.js
 * Handles all authentication logic for the OPay app.
 *
 * User accounts are stored in db.js (the dummy database), which:
 *   - Always provides the pre-seeded test accounts
 *   - Persists newly registered users to localStorage so they survive refreshes
 *
 * The active session (currently logged-in user) is still stored in localStorage
 * under CURRENT_USER_KEY, exactly as before.
 */

import db from './db';

const CURRENT_USER_KEY = 'opay_mock_current_user';

/**
 * registerUser - Creates a new user account and saves it to the dummy database.
 * Fails if the phone number is already registered (including pre-seeded users).
 *
 * The password is encoded with btoa() (base64) before storing.
 *
 * @param {string} phone    - The user's Nigerian phone number
 * @param {string} password - The 6-digit OTP entered during Sign Up
 * @returns {{ success: boolean, message: string, user?: object }}
 */
export const registerUser = (phone, password) => {
    const existingUser = db.findUserByPhone(phone);

    if (existingUser) {
        return { success: false, message: 'Phone number is already registered.' };
    }

    const newUser = {
        id: Date.now().toString(),
        phone,
        password: btoa(password),
        name: 'Current User',
        balance: 1200,
    };

    // Add to db — this saves to both the in-memory store and localStorage
    db.addUser(newUser);

    return { success: true, message: 'Registration successful', user: newUser };
};

/**
 * loginUser - Checks the provided credentials against the dummy database.
 * Works for both pre-seeded accounts and users registered at runtime.
 *
 * Uses atob() to decode the stored base64 password before comparing.
 *
 * @param {string} phone    - The user's phone number
 * @param {string} password - The 6-digit password to verify
 * @returns {{ success: boolean, message: string, user?: object }}
 */
export const loginUser = (phone, password) => {
    const user = db.findUserByPhone(phone);

    if (!user) {
        return { success: false, message: 'Account not found. Please register.' };
    }

    if (atob(user.password) !== password) {
        return { success: false, message: 'Incorrect password.' };
    }

    // Save the logged-in user to localStorage so the session survives a refresh
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

    return { success: true, message: 'Login successful', user };
};

/**
 * logoutUser - Ends the current user's session by removing them from localStorage.
 * After this, getCurrentUser() will return null.
 */
export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * getCurrentUser - Returns the user who is currently logged in.
 * Returns null if no one is logged in (e.g., after logout or on first visit).
 *
 * @returns {object|null} The current user object, or null if not logged in
 */
export const getCurrentUser = () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
};
