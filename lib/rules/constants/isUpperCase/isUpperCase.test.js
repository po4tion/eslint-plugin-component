/* eslint-env jest */

"use strict";

const isUpperCase = require("./isUpperCase");

describe("isUpperCase Fn", () => {
  it("should be true", () => {
    expect(isUpperCase("APPLE")).toBe(true);
    expect(isUpperCase("ITS_DELICIOUS")).toBe(true);
  });

  it("should be false", () => {
    expect(isUpperCase("Orange")).toBe(false);
    expect(isUpperCase("its_not_delicious")).toBe(false);
  });
});
