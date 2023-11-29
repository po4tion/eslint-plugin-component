/**
 * @fileoverview espc
 * @author po4tion
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/number-easy-read");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
});

ruleTester.run("number-easy-read", rule, {
  valid: [
    {
      code: "const a = 123_123;",
    },
  ],
  invalid: [
    {
      code: "const a = 123123",
      errors: [{ messageId: "numericWarning" }],
      output: "const a = 123_123",
    },
  ],
});
