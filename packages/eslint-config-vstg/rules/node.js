
module.exports = {
  plugins: [ 'node' ],
  rules: {
    'callback-return': [ 2, [ 'callback', 'cb', 'next', 'done' ]],
    'global-require': 1,
    'handle-callback-err': 2,
    'no-mixed-requires': 1,
    'no-new-require': 0,
    'no-path-concat': 1,
    'no-process-env': 0,
    'no-process-exit': 1,
    'no-restricted-modules': 0,
    'no-sync': 0,

    'node/no-unsupported-features': [ 2, { 'version': 6 }],
  },
};
