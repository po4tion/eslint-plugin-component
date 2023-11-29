/* eslint-env jest */

"use strict";

const isValidThousandSeparator = require("./isValidThousandSeparator");

describe("isValidThousandSeparator Fn", () => {
  it("should return false", () => {
    const testNumber = 123123;

    expect(isValidThousandSeparator(testNumber)).toBe(false);
  });

  it("should return true", () => {
    const testNumber = `123_123`;

    expect(isValidThousandSeparator(testNumber)).toBe(true);
  });
});
