const path = require("path");

const componentRoutes = ["components", "component"];

const isComponentFile = filename => {
  const _filename = filename.toLowerCase().split(path.sep);

  return componentRoutes.some(route => _filename.includes(route));
};

module.exports = isComponentFile;
