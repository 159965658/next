module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        printWidth: 100,
        semi: true,
        
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  plugins: ["prettier"],
}