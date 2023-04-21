/**
 * @fileoverview espc
 * @author po4tion
 */
"use strict";

const path = require("path");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "espc",
      recommended: false,
      url: null,
    },
    fixable: "code",
    schema: [],
    messages: {
      componentNameError:
        "Component function names should start with an uppercase letter.",
    },
  },

  create(context) {
    function isComponentFile(filename) {
      return filename.split(path.sep).includes("components");
    }

    function isFirstCharUppercase(str) {
      return /^[A-Z]/.test(str);
    }

    function toTitleCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function fixProcess(node) {
      const filename = context.getFilename();

      if (!isComponentFile(filename)) {
        return;
      }

      const functionName = node.id.name;

      if (!isFirstCharUppercase(functionName)) {
        context.report({
          node: node.id,
          messageId: "componentNameError",
          fix(fixer) {
            const newFunctionName = toTitleCase(functionName);
            return fixer.replaceText(node.id, newFunctionName);
          },
        });
      }
    }

    return {
      FunctionDeclaration(node) {
        fixProcess(node);
      },
      VariableDeclarator(node) {
        if (node.init.type !== "ArrowFunctionExpression") {
          return;
        }

        fixProcess(node);
      },
    };
  },
};
