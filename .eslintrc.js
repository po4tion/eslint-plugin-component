"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
  rules: {
    "node/no-unpublished-require": [
      "error",
      {
        allowModules: ["eslint", "jest"],
      },
    ],
  },
};
