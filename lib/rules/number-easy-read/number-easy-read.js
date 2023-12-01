/**
 * @fileoverview Enforce number literals for readability.
 * @author po4tion
 */
"use strict";

const isValidThousandSeparator = require("./isValidThousandSeparator");

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce number literals for readability",
      category: "Readable",
      recommended: false
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          minLength: {
            type: "number"
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      numericWarning:
        "Using a separator ('_') for every thousand digits is a way to improve readability."
    }
  },

  create(context) {
    const DEFAULT_MIN_LENGTH = 4;
    const configuration = context.options[0] || {};
    const minLength = configuration.minLength ?? DEFAULT_MIN_LENGTH;

    return {
      Literal(node) {
        if (typeof node.value === "number" && !node.raw.includes("_")) {
          if (node.value.toString().length < minLength) {
            return;
          }

          if (isValidThousandSeparator(node.raw)) {
            return;
          }

          const formatted = node.raw.replace(/\B(?=(\d{3})+(?!\d))/g, "_");

          context.report({
            node,
            messageId: "numericWarning",
            fix(fixer) {
              return fixer.replaceText(node, formatted);
            }
          });
        }
      }
    };
  }
};
