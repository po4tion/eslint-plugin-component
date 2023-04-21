/**
 * @fileoverview espc
 * @author po4tion
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules: {
    "case-strict": require("./rules/eslint-plugin-component"),
  },
};
