module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type":
      "off",
  },
  plugins: ["prettier"],
};
