/**
 * @fileoverview Capital letters in constants increase the clarity of the code.
 * @author po4tion
 */
"use strict";

const getMatchType = require("./getMatchType");
const isUpperCase = require("./isUpperCase");

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
            type: "array",
            uniqueItems: true
          }
        }
      }
    ],
    messages: {
      constantsWarning: "Constant variables should be named with all capital letters."
    }
  },

  create(context) {
    const DEFAULT_CUSTOM_TYPE = ["number", "string"];

    const configuration = context.options[0] || [];
    const customType = configuration.customType ?? DEFAULT_CUSTOM_TYPE;

    return {
      VariableDeclaration(node) {
        if (node.kind === "const") {
          for (let declaration of node.declarations) {
            // destructing or not initialize will be continue
            if (!declaration.init) {
              continue;
            }

            const variableType = getMatchType(declaration.init);

            if (
              !variableType ||
              isUpperCase(declaration.id.name) ||
              !customType.includes(variableType)
            ) {
              continue;
            }

            const variableName = declaration.id.name;

            context.report({
              node: declaration,
              messageId: "constantsWarning",
              fix(fixer) {
                const convertUpperCase = variableName.toUpperCase();

                return fixer.replaceText(declaration.id, convertUpperCase);
              }
            });
          }
        }
      }
    };
  }
};
