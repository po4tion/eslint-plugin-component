/**
 * @fileoverview 이 plugin은 components 안에 있는 component들의 맨 앞글자가 대문자인지 확인해주는 eslint입니다.
 * @author po4tion
 */
"use strict";

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
    schema: [{}],
    messages: {
      numericWarning:
        "Using a separator ('_') for every thousand digits is a way to improve readability.",
    },
  },

  create(context) {
    function isValidThousandSeparator(numberString) {
      const regex = /^\d{1,3}(_\d{3})*$/;

      return regex.test(numberString);
    }

    return {
      Literal(node) {
        if (typeof node.value === "number" && !node.raw.includes("_")) {
          if (node.value.toString().length < 4) {
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
