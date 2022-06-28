const Arse: string = require("../src/test");

test("test to be arse", () => {
  expect(Arse).toHaveReturnedWith("arse");
});
