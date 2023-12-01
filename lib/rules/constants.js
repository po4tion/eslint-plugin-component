/**
 * @fileoverview Capital letters in constants increase the clarity of the code.
 * @author po4tion
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce capital letters in constant variable names",
      category: "Best Practice",
      recommended: false
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          customType: {
            type: "array"
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      constantsWarning: "Constant variables should be named with all capital letters."
    }
  },

  create(context) {
    // const configuration = context.options[0] || {};
    const isUpperCase = name => {
      return name === name.toUpperCase();
    };

    return {
      VariableDeclaration(node) {
        if (node.kind === "const") {
          node.declarations.forEach(declaration => {
            if (
              declaration.id &&
              declaration.id.name &&
              !isUpperCase(declaration.id.name)
            ) {
              context.report({
                node: declaration,
                messageId: "constantsWarning",
                fix(fixer) {
                  const convertUpperCase = declaration.id.name.toUpperCase();

                  return fixer.replaceText(declaration.id, convertUpperCase);
                }
              });
            }
          });
        }
      }
    };
  }
};
