const fn = require("../../src/hello-world");
const mylib = require("../../lib/mylib");

test('handler', async () => {
  const retval = await fn.handler({});
  expect(retval.statusCode).toBe(200);
  const body = JSON.parse(retval.body);
  expect(body.message).toBe(mylib.hello);
});