// auth.regression.test.js
// Quality Gate 2: Regression Test
// Purpose: full suite of edge cases, run after merging into main.

const { login } = require('./auth');

describe('Regression Suite - login()', () => {
  test('fails with correct username but wrong password', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('fails with empty username', () => {
    expect(login('', '123')).toBe(false);
  });

  test('fails with empty password', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('fails when password contains special characters', () => {
    expect(login('admin', '123!@#')).toBe(false);
  });

  test('fails when account is locked', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('fails with unknown username', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('still passes for the valid credentials (sanity check)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
