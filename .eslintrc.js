"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  overrides: [
    {
      files: ["lib/rules/**/*.spec.js"],
      env: { mocha: true }
    }
  ],
  rules: {
    "node/no-unpublished-require": [
      "error",
      {
        allowModules: ["eslint", "jest", "@babel/eslint-parser"]
      }
    ]
  }
};
