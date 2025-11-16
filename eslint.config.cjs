module.exports = [
  {
    files: ["html/js/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",  // important for modern JS syntax
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
