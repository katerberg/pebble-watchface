module.exports = {
  root: true,
  ignorePatterns: ["build/", "node_modules/"],
  overrides: [
    {
      files: ["src/pkjs/**/*.js"],
      env: {
        browser: true,
        es2022: true,
      },
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "script",
      },
      globals: {
        Pebble: "readonly",
      },
    },
    {
      files: ["src/embeddedjs/**/*.js"],
      env: {
        es2022: true,
      },
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        console: "readonly",
        screen: "readonly",
        watch: "readonly",
      },
    },
  ],
};
