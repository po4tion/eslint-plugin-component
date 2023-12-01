/* eslint-env jest */

"use strict";

const convertFirstLetterUppercase = require("./convertFirstLetterUppercase");

describe("convertFirstLetterUppercase Fn", () => {
  it("should return Apple, lower to upper", () => {
    expect(convertFirstLetterUppercase("apple")).toBe("Apple");
  });

  it("should return Orange, upper to upper", () => {
    expect(convertFirstLetterUppercase("Orange")).toBe("Orange");
  });
});
