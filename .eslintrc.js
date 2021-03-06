// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "function-paren-newline": [
      2,
      "consistent"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "object-shorthand": "warn",
    "prefer-const": 1,
    "quotes": [1, "single"],
    "prefer-template": 2,
    "no-var": 1,
    "prefer-arrow-callback":1,
    "prefer-const": 1,
    "no-extend-native": 0,
    "no-extra-bind": 2,
    "no-console": 1
  }
}
