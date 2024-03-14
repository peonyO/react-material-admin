module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser"
    }
  ],
  ignorePatterns: ["node_modules", "dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "import"],
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "no-var": "error", // Require using let or const instead of var
    "no-multiple-empty-lines": ["error", { max: 1 }], // Disallow multiple empty lines
    "no-use-before-define": "off", // Disallow using functions/classes/variables before they are defined
    "prefer-const": "off", // This rule is aimed at marking variables that are declared using let but never reassigned, and should be const instead
    // eslint-plugin-import (https://www.npmjs.com/package/eslint-plugin-import)
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", ["internal", "parent", "sibling", "index", "object"], "unknown", "type"],
        pathGroups: [
          {
            pattern: "react*",
            group: "builtin",
            position: "before"
          },
          {
            pattern: "@/**",
            group: "external",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "desc",
          caseInsensitive: true
        },
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": "error",
    // eslint-plugin-tailwindcss
    "tailwindcss/classnames-order": ["error"],
    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // Disallow unused variables
    "@typescript-eslint/prefer-ts-expect-error": "error", // Disallow the use of @ts-ignore
    "@typescript-eslint/ban-ts-comment": "error", // Disallow using @ts-<directive> comments or require descriptions after directives
    "@typescript-eslint/no-inferrable-types": "off", // Allowing explicit types that can be easily inferred may add unnecessary verbosity
    "@typescript-eslint/no-namespace": "off", // Disallow using custom TypeScript modules and namespaces
    "@typescript-eslint/no-explicit-any": "off", // Disallow the use of the any type
    "@typescript-eslint/ban-types": "off", // Disallow specific types
    "@typescript-eslint/no-var-requires": "off", // Disallow the use of require statements in import statements
    "@typescript-eslint/no-empty-function": "off", // Disallow empty functions
    "@typescript-eslint/no-non-null-assertion": "off",

    // react (https://github.com/jsx-eslint/eslint-plugin-react)
    "react-hooks/rules-of-hooks": "error", // Ensure hooks are called at the top level in a component or custom hook
    "react-hooks/exhaustive-deps": "off" // The dependencies of useEffect and useCallback hooks do not need to be exhaustive
  },
  settings: {
    "import/resolver": {
      typescript: true
    }
  }
};
