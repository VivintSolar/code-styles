
module.exports = {
  extends: [
    './index',
  ].map(require.resolve),
  env: {
    mocha: true,
    jasmine: true,
  },
  rules: {
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'promise/always-return': 'off',
  },
};
