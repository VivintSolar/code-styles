
module.exports = {
  extends: [
    './index',
    './rules/browser-support',
  ].map(require.resolve),
};
