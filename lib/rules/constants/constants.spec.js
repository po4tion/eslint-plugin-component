/**
 * @fileoverview Capital letters in constants increase the clarity of the code.
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

ruleTester.run("constants", rule, {
  valid: [
    {
      code: "const TEST_VALUE = {}",
      options: [{ customType: ["object"] }]
    },
    {
      code: "const TEST_VALUE = []",
      options: [{ customType: ["array"] }]
    },
    {
      code: "const TEST_VALUE = 'success'"
    },
    {
      code: "const STRING_VALUE = 'success', NUMBER_VALUE = 123"
    },
    {
      code: "const ARRAY_VALUE = [], OBJECT_VALUE = {}",
      options: [{ customType: ["array, object"] }]
    },
    {
      code: "const test_value = 'success'",
      options: [{ customType: ["number"] }]
    },
    {
      code: "const test_value = 29",
      options: [{ customType: ["string"] }]
    },
    {
      code: "const TEST_VALUE = 29n",
      options: [{ customType: ["bigint"] }]
    },
    {
      code: "const TEST_VALUE = null",
      options: [{ customType: ["null"] }]
    }
  ],
  invalid: [
    {
      code: "const test_value = 'failed'",
      errors: [{ messageId: "constantsWarning" }],
      output: "const TEST_VALUE = 'failed'"
    },
    {
      code: "const test_value = {}",
      errors: [{ messageId: "constantsWarning" }],
      output: "const TEST_VALUE = {}",
      options: [{ customType: ["object"] }]
    },
    {
      code: "const test_value = 1n",
      errors: [{ messageId: "constantsWarning" }],
      output: "const TEST_VALUE = 1n",
      options: [{ customType: ["bigint"] }]
    },
    {
      code: "const array_value = [], object_value = {}",
      errors: [{ messageId: "constantsWarning" }],
      output: "const array_value = [], OBJECT_VALUE = {}",
      options: [{ customType: ["object"] }]
    },
    {
      code: "const null_value = null",
      errors: [{ messageId: "constantsWarning" }],
      output: "const NULL_VALUE = null",
      options: [{ customType: ["null"] }]
    }
  ]
});
