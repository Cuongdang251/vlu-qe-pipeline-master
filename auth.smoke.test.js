// auth.smoke.test.js
// Quality Gate 1: Smoke Test
// Purpose: extremely fast check of the core "happy path" functionality only.

const { login } = require('./auth');

test('smoke: login succeeds with correct credentials (admin/123)', () => {
  expect(login('admin', '123')).toBe(true);
});
