const getMatchType = node => {
  if (!node) return null;

  switch (node.type) {
    case "Literal":
      if (node.value === null) return "null";
      return typeof node.value;
    case "ArrayExpression":
      return "array";
    case "ObjectExpression":
      return "object";
    default:
      return null;
  }
};

module.exports = getMatchType;
