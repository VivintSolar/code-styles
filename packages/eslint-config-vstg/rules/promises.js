
module.exports = {
  plugins: [ 'promise' ],
  rules: {
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/always-return': 'error',
  },
};
