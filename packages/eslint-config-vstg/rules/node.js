module.exports = {
  plugins: [ 'node' ],
  rules: {
    'callback-return': [ 'error', [ 'callback', 'cb', 'next', 'done' ] ],
    'global-require': 'warn',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'warn',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    'node/no-unsupported-features/es-syntax': [ 'error', { 'ignores': [] } ],
    'node/no-unsupported-features/es-builtins': [ 'error', { 'ignores': [] } ],
  },
};
