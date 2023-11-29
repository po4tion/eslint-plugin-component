/**
 * @fileoverview espc
 * @author po4tion
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    "jsx-pascal-in-component": require("./rules/jsx-pascal-in-component"),
    "number-easy-read": require("./rules/number-easy-read"),
  },
};
