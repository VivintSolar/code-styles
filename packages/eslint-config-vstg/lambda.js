
module.exports = {
  extends: [
    './index',
    './rules/node4',
  ].map(require.resolve),
};
