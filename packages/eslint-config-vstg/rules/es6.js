
module.exports = {
  rules: {
    // 'arrow-body-style': [ 2, 'as-needed' ], // Needs a way to force for multi-line
    'arrow-body-style': 0,
    'arrow-parens': [
      2,
      'as-needed',
      {
        'requireForBlockBody': true,
      },
    ],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    'no-new-symbol': 2,
    // 'no-restricted-imports': [ 2, 'lodash', 'underscore' ], // j/k, but seriously
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 2,
    'no-useless-rename': 0,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-numeric-literals': 0,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 1,
    'rest-spread-spacing': [ 2, 'never' ],
    'sort-imports': 0,
    'symbol-description': 1,
    'template-curly-spacing': 0,
    'yield-star-spacing': 2,
  },
};
