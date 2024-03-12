// @see: https://stylelint.io
module.exports = {
  root: true,
  extends: ["stylelint-config-standard", "stylelint-config-recess-order", "stylelint-prettier/recommended"],
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html"
    },
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less"
    }
  ],
  rules: {
    "function-url-quotes": "always", // Quotation marks for URLs "always": must have quotes, "never": no quotes
    "color-hex-length": "long", // Specify the shorthand or extended form for hexadecimal colors "short": shorthand, "long": extended
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["inside-block-and-after-rule", "inside-block"]
      }
    ], // Require or disallow an empty line before rules
    "font-family-no-missing-generic-family-keyword": null, // Disallow missing generic font family keywords in font family name lists
    "no-empty-source": null, // Disallow empty source
    "selector-class-pattern": null, // Enforce a format for selector class names
    "value-no-vendor-prefix": null, // Disable vendor prefixes (for resolving multi-line ellipsis -webkit-box)
    "no-descending-specificity": null, // Disallow selectors of lower specificity from coming after selectors of higher specificity
    "custom-property-pattern": null, // Allow custom CSS variable names
    "media-feature-range-notation": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "layer", "apply", "variants", "responsive", "screen"]
      }
    ]
  },
  ignoreFiles: ["**/.js", "/*.jsx", "/.tsx", "**/.ts", "dist/**/.css"]
};
