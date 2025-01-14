module.exports = {
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    // "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["react", "prettier"],
  // "plugins": ["react", "prettier", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: ["jsx", "tsx"],
      },
    ],
    "prettier/prettier": "error",
    "no-underscore-dangle": "off",
    "import/no-cycle": "off",
    "react/prop-types": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/extensions": ["error", "never"],
    "import/no-default-export": "error",
    // "@typescript-eslint/no-unused-vars": ["error"]
  },
  env: {
    browser: true,
  },
  settings: {},
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // "parser": "@typescript-eslint/parser"
  parser: "@babel/eslint-parser",
}
