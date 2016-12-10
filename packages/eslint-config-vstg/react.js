
module.exports = {
  'extends': [
    './index',
    './modules',
    './rules/react',
  ].map(require.resolve),
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
  },
};
