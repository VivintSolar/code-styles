module.exports = {
  extends: [ './index', './rules/import' ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
};
