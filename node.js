module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "eslint-plugin-import-helpers"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        printWidth: 120,
        bracketSpacing: true,
        trailingComma: "none",
        arrowParens: "avoid",
        endOfLine: "lf",
        insertPragma: false,
      },
    ],
    "no-useless-constructor": "off",
    "space-before-function-paren": "off",
    camelcase: "off",
    "no-extra-boolean-cast": "off",
    "prefer-const": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
