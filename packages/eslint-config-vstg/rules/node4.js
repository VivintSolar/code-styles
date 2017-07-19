module.exports = {
  plugins: [ 'node' ],
  rules: {
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',

    'node/no-unsupported-features': [ 'error', { version: 4 } ],
  },
};
