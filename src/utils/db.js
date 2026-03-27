/**
 * db.js
 * Dummy in-memory database for the OPay app.
 *
 * How it works:
 * - A set of pre-seeded users is always available (hardcoded below).
 * - On startup it loads any additionally registered users from localStorage
 *   so that accounts created by the user survive page refreshes.
 * - When a new user is registered, they are saved to BOTH the in-memory
 *   store AND localStorage so their account persists after a refresh.
 *
 * Pre-seeded accounts (passwords stored as base64 via btoa()):
 *   Phone: 08012345678  Password: 123456
 *   Phone: 09087654321  Password: 654321
 */

// ─── localStorage key for persisting runtime-registered users ───────────────
const REGISTERED_USERS_KEY = 'opay_db_registered_users';

// ─── Pre-seeded users (always available, never cleared) ─────────────────────
const SEED_USERS = [
    {
        id: 'seed-user-001',
        phone: '08012345678',
        password: btoa('123456'),
        name: 'Test User',
        balance: 1200,
    },
    {
        id: 'seed-user-002',
        phone: '09087654321',
        password: btoa('654321'),
        name: 'Jane Doe',
        balance: 5000,
    },
];

/**
 * loadRegisteredUsers
 * Reads any runtime-registered users that were previously saved to
 * localStorage. Returns an empty array if none exist yet.
 *
 * @returns {Array} Array of user objects saved during past sessions
 */
const loadRegisteredUsers = () => {
    try {
        const saved = localStorage.getItem(REGISTERED_USERS_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

/**
 * saveRegisteredUsers
 * Writes the current list of runtime-registered users to localStorage
 * so they persist across page refreshes.
 *
 * @param {Array} users - The array to persist
 */
const saveRegisteredUsers = (users) => {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
};

// ─── In-memory store ─────────────────────────────────────────────────────────
// Merges the seed users with any previously registered users from localStorage.
// Seed users always take precedence — they can never be overwritten.
let registeredUsers = loadRegisteredUsers();

// ─── Public database API ─────────────────────────────────────────────────────

const db = {

    /**
     * getAllUsers
     * Returns every user in the database: both seeded and runtime-registered.
     *
     * @returns {Array} Combined list of all users
     */
    getAllUsers() {
        return [...SEED_USERS, ...registeredUsers];
    },

    /**
     * findUserByPhone
     * Searches all users (seeded + registered) for a matching phone number.
     *
     * @param {string} phone - The phone number to search for
     * @returns {object|undefined} The matching user object, or undefined
     */
    findUserByPhone(phone) {
        return this.getAllUsers().find(user => user.phone === phone);
    },

    /**
     * addUser
     * Adds a new user to the runtime list and immediately persists the
     * updated list to localStorage.
     *
     * @param {object} user - The user object to add
     */
    addUser(user) {
        registeredUsers.push(user);
        saveRegisteredUsers(registeredUsers);
    },
};

export default db;
