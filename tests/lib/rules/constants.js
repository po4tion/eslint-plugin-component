/**
 * @fileoverview Capital letters in constants increase the clarity of the code.
 * @author po4tion
 */
"use strict";

const rule = require("../../../lib/rules/constants");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    requireConfigFile: false
  }
});

ruleTester.run("constants", rule, {
  valid: [
    {
      code: "const TEST_VALUE = 'success'"
    }
  ],
  invalid: [
    {
      code: "const test_value = 'failed'",
      errors: [{ messageId: "constantsWarning" }],
      output: "const TEST_VALUE = 'failed'"
    }
  ]
});
