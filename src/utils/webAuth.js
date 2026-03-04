/**
 * webAuth.js
 * Utility functions for simulating authentication using localStorage.
 */

const USERS_KEY = 'opay_mock_users';
const CURRENT_USER_KEY = 'opay_mock_current_user';

/**
 * Retrieves all registered users from localStorage.
 * @returns {Array} List of user objects
 */
const getUsers = () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

/**
 * Simulates user registration.
 * Saves a new user to localStorage if the phone number is not already registered.
 * 
 * @param {string} phone - User's phone number
 * @param {string} password - 6-digit password
 * @param {string} name - User's full name
 * @returns {Object} Success or error message
 */
export const registerUser = (phone, password, name = 'User') => {
    const users = getUsers();
    const existingUser = users.find(u => u.phone === phone);

    if (existingUser) {
        return { success: false, message: 'Phone number is already registered.' };
    }

    const newUser = {
        id: Date.now().toString(),
        phone,
        password, // In a real app, this would be hashed
        balance: 1200, // Welcome bonus!
        name: name.trim() || 'User'
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Automatically log them in after registration
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return { success: true, message: 'Registration successful', user: newUser };
};

/**
 * Simulates user login.
 * Checks localStorage for matching phone and password.
 * 
 * @param {string} phone - User's phone number 
 * @param {string} password - 6-digit password
 * @returns {Object} Success or error message
 */
export const loginUser = (phone, password) => {
    const users = getUsers();

    // For testing purposes, auto-create a mock bypass user, regardless of whether other users exist
    if (phone === '08012345678' && password === '123456') {
        const testUser = {
            id: 'test-user-id',
            phone: '08012345678',
            password: '123456',
            balance: 50000,
            name: 'Test User'
        };
        // Save current session
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(testUser));
        return { success: true, message: 'Mock user logged in successfully', user: testUser };
    }

    const user = users.find(u => u.phone === phone);

    if (!user) {
        return { success: false, message: 'Account not found. Please register.' };
    }

    if (user.password !== password) {
        return { success: false, message: 'Incorrect password.' };
    }

    // Save current session
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

    return { success: true, message: 'Login successful', user };
};

/**
 * Logs out the current user by clearing the session from localStorage.
 */
export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * Retrieves the currently logged-in user.
 * @returns {Object|null} The current user object or null if not logged in.
 */
export const getCurrentUser = () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
};
