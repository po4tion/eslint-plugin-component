/* eslint-env jest */

"use strict";

const isFirstCharUppercase = require("./isFirstCharUppercase");

describe("isFirstCharUppercase Fn", () => {
  it("should be started with Uppercase letter", () => {
    expect(isFirstCharUppercase("Apple")).toBe(true);
  });

  it("should be started with Uppercase letter", () => {
    expect(isFirstCharUppercase("orange")).toBe(false);
  });
});
