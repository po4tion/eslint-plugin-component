/**
 * @fileoverview 이 plugin은 components 안에 있는 component들의 맨 앞글자가 대문자인지 확인해주는 eslint입니다.
 * @author po4tion
 */
"use strict";

const convertFirstLetterUppercase = require("../utils/convertFirstLetterUppercase");
const getDocsUrl = require("../utils/getDocsUrl");
const isComponentFile = require("../utils/isComponentFile");
const isFirstCharUppercase = require("../utils/isFirstCharUppercase");

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Change the first letter of the component to uppercase if it is lowercase.",
      recommended: false,
      url: getDocsUrl("jsx-pascal-in-component")
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          allowAllPaths: {
            type: "boolean"
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      componentNameError:
        "Component function names should start with an uppercase letter."
    }
  },

  create(context) {
    const getReturnType = body => {
      return body.body[0].argument.type;
    };

    const configuration = context.options[0] || {};
    const allowAllPaths = configuration.allowAllPaths || false;

    return {
      FunctionDeclaration(node) {
        const filename = context.filename;

        if (!isComponentFile(filename) && !allowAllPaths) {
          return;
        }

        const returnType = getReturnType(node.body);

        if (returnType !== "JSXElement") {
          return;
        }

        const functionName = node.id.name;

        if (!isFirstCharUppercase(functionName)) {
          context.report({
            node: node.id,
            messageId: "componentNameError",
            fix(fixer) {
              const newFunctionName = convertFirstLetterUppercase(functionName);
              return fixer.replaceText(node.id, newFunctionName);
            }
          });
        }
      },
      VariableDeclarator(node) {
        if (node.init.type !== "ArrowFunctionExpression") {
          return;
        }

        const filename = context.filename;

        if (!isComponentFile(filename) && !allowAllPaths) {
          return;
        }

        const variableName = node.id.name;

        if (!isFirstCharUppercase(variableName)) {
          context.report({
            node: node.id,
            messageId: "componentNameError",
            fix(fixer) {
              const newVariableName = convertFirstLetterUppercase(variableName);
              return fixer.replaceText(node.id, newVariableName);
            }
          });
        }
      }
    };
  }
};
