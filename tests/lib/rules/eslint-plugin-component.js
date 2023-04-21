/**
 * @fileoverview espc
 * @author po4tion
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/eslint-plugin-component"),
  RuleTester = require("eslint").RuleTester;

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

ruleTester.run("eslint-plugin-component", rule, {
  valid: [
    {
      code: "function ComponentName() { return <div>ComponentName</div>}",
      filename: "components/ComponentName.jsx",
    },
    {
      code: "const ComponentName = () => { return <div>ComponentName</div>}",
      filename: "components/ComponentName.jsx",
    },
  ],
  invalid: [
    {
      code: "function componentName() { return <div>ComponentName</div>}",
      filename: "components/componentName.jsx",
      errors: [{ messageId: "componentNameError" }],
      output: "function ComponentName() { return <div>ComponentName</div>}",
    },
    {
      code: "const componentName = () => { return <div>ComponentName</div>}",
      filename: "components/componentName.jsx",
      errors: [{ messageId: "componentNameError" }],
      output: "const ComponentName = () => { return <div>ComponentName</div>}",
    },
  ],
});
