/**
 * @fileoverview Enforce number literals for readability.
 * @author po4tion
 */
"use strict";

const rule = require(".");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    requireConfigFile: false
  }
});

ruleTester.run("number-easy-read", rule, {
  valid: [
    {
      code: "const a = 123_123"
    },
    {
      code: "const a = 23123",
      options: [
        {
          minLength: 6
        }
      ]
    },
    {
      code: "const a = 1234567",
      options: [
        {
          minLength: 8
        }
      ]
    },
    {
      code: "const a = 2_312_323_123",
      options: [
        {
          minLength: 10
        }
      ]
    }
  ],
  invalid: [
    {
      code: "const a = 123123",
      errors: [{ messageId: "numericWarning" }],
      output: "const a = 123_123"
    }
  ]
});
