// auth.js
// Simple authentication module for demo purposes.

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '9999';
const LOCKED_USERNAMES = ['locked_user'];

//abcde
/**
 * Attempts to log in a user.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} true if login succeeds, false otherwise.
 */
function login(username, password) {
  // Reject empty/undefined username or password
  if (!username || !password) {
    return false;
  }

  // Reject locked accounts
  if (LOCKED_USERNAMES.includes(username)) {
    return false;
  }

  // Reject passwords containing special characters (basic policy check)
  const specialCharRegex = /[^a-zA-Z0-9]/;
  if (specialCharRegex.test(password)) {
    return false;
  }

  // Valid credentials check
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return true;
  }

  return false;
}

module.exports = { login };
