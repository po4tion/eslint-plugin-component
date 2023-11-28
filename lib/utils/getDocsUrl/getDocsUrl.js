const BASE_DOCS_URL =
  "https://github.com/po4tion/eslint-plugin-component/tree/main/docs/rules";

const getDocsUrl = (url) => {
  return `${BASE_DOCS_URL}/${url}.md`;
};

module.exports = getDocsUrl;
