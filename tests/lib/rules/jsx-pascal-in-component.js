/**
 * @fileoverview Change the first letter of the component to uppercase if it is lowercase.
 * @author po4tion
 */
"use strict";

const rule = require("../../../lib/rules/jsx-pascal-in-component");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    }
  }
});

ruleTester.run("jsx-pascal-in-component", rule, {
  valid: [
    {
      code: "function ComponentName() { return <div>ComponentName</div>}",
      filename: "components/ComponentName.jsx"
    },
    {
      code: "const ComponentName = () => { return <div>ComponentName</div>}",
      filename: "components/ComponentName.jsx"
    },
    {
      code: "const ComponentName = () => { return <div>ComponentName</div>}",
      filename: "components/A/A.jsx"
    },
    {
      code: "function ComponentName() { return <div>ComponentName</div>}",
      filename: "hocs/ComponentName.jsx",
      options: [{ allowAllPaths: true }]
    }
  ],
  invalid: [
    {
      code: "function componentName() { return <div>ComponentName</div>}",
      filename: "components/componentName.jsx",
      errors: [{ messageId: "componentNameError" }],
      output: "function ComponentName() { return <div>ComponentName</div>}"
    },
    {
      code: "const componentName = () => { return <div>ComponentName</div>}",
      filename: "components/componentName.jsx",
      errors: [{ messageId: "componentNameError" }],
      output: "const ComponentName = () => { return <div>ComponentName</div>}"
    },
    {
      code: "const componentName = () => { return <div>ComponentName</div>}",
      filename: "hocs/componentName.jsx",
      options: [{ allowAllPaths: true }],
      errors: [{ messageId: "componentNameError" }],
      output: "const ComponentName = () => { return <div>ComponentName</div>}"
    }
  ]
});
