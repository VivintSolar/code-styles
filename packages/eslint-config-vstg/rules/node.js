
module.exports = {
  plugins: [ 'node' ],
  rules: {
    'callback-return': [ 2, [ 'callback', 'cb', 'next', 'done' ] ],
    'global-require': 1,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 0,
    'no-process-exit': 1,
    'no-restricted-modules': 0,
    'no-sync': 0,

    'node/no-unsupported-features': [ 2, { 'version': 6 } ],
  },
};
