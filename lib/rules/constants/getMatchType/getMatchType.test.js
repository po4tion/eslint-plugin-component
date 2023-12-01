/* eslint-env jest */

"use strict";

const getMatchType = require("./getMatchType");

describe("getMatchType Fn", () => {
  it("should return null", () => {
    const typeNullNode = {
      type: "Nothing",
      value: "nothing"
    };

    expect(getMatchType(null)).toBeNull();

    expect(getMatchType(typeNullNode)).toBeNull();
  });

  it("should return 'null'", () => {
    const typeLiteralNode = {
      type: "Literal",
      value: null
    };

    expect(getMatchType(typeLiteralNode)).toBe("null");
  });

  it("should return array", () => {
    const typeArrayExpressionNode = {
      type: "ArrayExpression"
    };

    expect(getMatchType(typeArrayExpressionNode)).toBe("array");
  });

  it("should return object", () => {
    const typeObjectExpressionNode = {
      type: "ObjectExpression"
    };

    expect(getMatchType(typeObjectExpressionNode)).toBe("object");
  });

  it("should return number", () => {
    const typeNumberNode = {
      type: "Literal",
      value: 29
    };

    expect(getMatchType(typeNumberNode)).toBe("number");
  });

  it("should return string", () => {
    const typeStringNode = {
      type: "Literal",
      value: "snuggle"
    };

    expect(getMatchType(typeStringNode)).toBe("string");
  });

  it("should return bigint", () => {
    const typeStringNode = {
      type: "Literal",
      value: 129n
    };

    expect(getMatchType(typeStringNode)).toBe("bigint");
  });
});
