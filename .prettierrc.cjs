/* eslint-env node */

/** @type {import('prettier').Options} */
module.exports = {
    plugins: [require("prettier-plugin-tailwindcss")],
    printWidth: 120,
    proseWrap: "always",
    singleQuote: true,
    trailingComma: "all",
  };
  