
module.exports = {
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/node',
    './rules/possible-errors',
    './rules/promises',
    './rules/strict-mode',
    './rules/stylistic',
    './rules/variables',
  ].map(require.resolve),
  globals: {
    module: false,
    require: false,
    document: false,
    window: false,
  },
  parserOptions: {
    ecmaVersion: 2016,
  },
};
