/* eslint-env jest */

"use strict";

const getDocsUrl = require("./getDocsUrl");

describe("getDocsUrl Fn", () => {
  it("should return jsx-pascal-in-component.md url", () => {
    expect(getDocsUrl("jsx-pascal-in-component")).toBe(
      "https://github.com/po4tion/eslint-plugin-component/tree/main/docs/rules/jsx-pascal-in-component.md"
    );
  });
});
