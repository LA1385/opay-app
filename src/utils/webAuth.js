/**
 * webAuth.js
 * Simulates a backend authentication system using the browser's localStorage.
 * Since this app has no real server, user data is stored locally in the browser.
 *
 * Storage keys:
 * - opay_mock_users        → array of all registered users
 * - opay_mock_current_user → the user who is currently logged in
 */

const USERS_KEY = 'opay_mock_users';
const CURRENT_USER_KEY = 'opay_mock_current_user';

/**
 * getUsers - Reads all registered users from localStorage.
 * Returns an empty array if no users have been registered yet.
 *
 * @returns {Array} List of user objects stored in the browser
 */
const getUsers = () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

/**
 * registerUser - Creates a new user account and saves it to localStorage.
 * Fails if the phone number is already registered.
 *
 * The password is encoded with btoa() (base64)
 *
 * @param {string} phone    - The user's Nigerian phone number
 * @param {string} password - The 6-digit OTP entered during Sign Up
 * @returns {{ success: boolean, message: string, user?: object }}
 */
export const registerUser = (phone, password) => {
    const users = getUsers();
    const existingUser = users.find(user => user.phone === phone);

    if (existingUser) {
        return { success: false, message: 'Phone number is already registered.' };
    }

    const newUser = {
        id: Date.now().toString(),
        phone,
        password: btoa(password), 
        balance: 1200,
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { success: true, message: 'Registration successful', user: newUser };
};

/**
 * loginUser - Checks the provided credentials against localStorage.
 * Also supports a hardcoded test account (08012345678 / 123456) for quick testing.
 *
 * Uses atob() to decode the stored base64 password before comparing.
 *
 * @param {string} phone    - The user's phone number
 * @param {string} password - The 6-digit password to verify
 * @returns {{ success: boolean, message: string, user?: object }}
 */
export const loginUser = (phone, password) => {
    const users = getUsers();

    // Hardcoded bypass account for testing — skips the registration step
    if (phone === '08012345678' && password === '123456') {
        const testUser = {
            id: 'test-user-id',
            phone: '08012345678',
            password: '123456',
            balance: 1200,
            name: 'Test User'
        };
        // Save current session
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(testUser));
        return { success: true, message: 'Mock user logged in successfully', user: testUser };
    }

    const user = users.find(user => user.phone === phone);

    if (!user) {
        return { success: false, message: 'Account not found. Please register.' };
    }

    if (atob(user.password) !== password) {
        return { success: false, message: 'Incorrect password.' };
    }

    // Save the logged-in user to localStorage so other pages can access it
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
