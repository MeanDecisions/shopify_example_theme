module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: "none",
    overrides: [
      {
        files: "*.liquid",
        options: {
          printWidth: 180,
          singleQuote: false,
          singleLineLinkTags: true,
          liquidSingleQuote: true,
          bracketSameLine: true,
          plugins: [require("@shopify/prettier-plugin-liquid")],
          parser: "liquid-html",
        },
      },
    ],
  };