const imports = require("./app.js");
console.log(imports);
const { f, i, i2 } = imports;

test("testing anagram that should pass(unsanitised input)", () => {
  expect(f(i)).toBe(true);
});

test("testing anagram that should fail(unsanitised input)", () => {
  expect(f(i2).toBe(false));
});
