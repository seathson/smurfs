module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": [
      null,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
  },
}
