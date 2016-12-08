
module.exports = {
  extends: [
    './index',
    './rules/node4',
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
