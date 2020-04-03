const mylib = require("../../lib/mylib");

test('hello', () => {
  expect(mylib.hello).toBe("Hello, world!");
});