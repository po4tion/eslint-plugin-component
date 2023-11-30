/**
 * @fileoverview 이 plugin은 components 안에 있는 component들의 맨 앞글자가 대문자인지 확인해주는 eslint입니다.
 * @author po4tion
 */
"use strict";

const isValidThousandSeparator = require("../utils/isValidThousandSeparator");

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce number literals for readability",
      category: "Readable",
      recommended: false,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          minLength: {
            type: "number",
            default: 4,
            minimum: 4,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      numericWarning:
        "Using a separator ('_') for every thousand digits is a way to improve readability.",
    },
  },

  create(context) {
    const configuration = context.options[0] || {};
    const minLength = configuration.minLength;

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
            },
          });
        }
      },
    };
  },
};
