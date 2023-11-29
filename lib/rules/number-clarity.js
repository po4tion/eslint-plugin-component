/**
 * @fileoverview 이 plugin은 components 안에 있는 component들의 맨 앞글자가 대문자인지 확인해주는 eslint입니다.
 * @author po4tion
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "enforce thousands separator in numeric literals",
      category: "Readable",
      recommended: false,
    },
    fixable: "code",
    schema: [{}],
    messages: {
      numericWarning: "Numeric literals should contain underscores for readability.",
    },
  },

  create(context) {
    return {
      Literal(node) {
        if (node.type === "Literal" && !node.raw.includes("_")) {
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
