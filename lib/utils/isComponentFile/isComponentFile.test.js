/* eslint-env jest */

"use strict";

const isComponentFile = require("./isComponentFile");

describe("isComponentFile Fn", () => {
  it("should include 'component' or 'components' route", () => {
    expect(isComponentFile("/components/table.jsx")).toBe(true);
    expect(isComponentFile("/component/table.jsx")).toBe(true);
  });

  it("should not include 'component' or 'components' route", () => {
    expect(isComponentFile("/hooks/table.jsx")).toBe(false);
    expect(isComponentFile("/styles/table.jsx")).toBe(false);
  });
});
