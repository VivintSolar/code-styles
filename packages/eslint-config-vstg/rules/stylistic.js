module.exports = {
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': 'error',
    camelcase: 'warn',
    'capitalized-comments': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',

    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 1,
          let: 1,
          const: 2,
        },
        MemberExpression: 1,
        FunctionDeclaration: {
          body: 1,
          parameters: 'first',
        },
        FunctionExpression: {
          body: 1,
          parameters: 'first',
        },
        CallExpression: {
          arguments: 1,
        },
      },
    ],

    'jsx-quotes': 'error',

    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],

    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': 'error',
    'max-depth': [ 'error', { max: 5 } ],
    'max-len': 'off',

    'max-lines': [
      'error',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    'max-nested-callbacks': 'error',
    'max-params': [ 'error', { max: 8 } ],
    'max-statements-per-line': 'error',
    'max-statements': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'warn',
    'new-parens': 'error',
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',

    'no-bitwise': [
      'error',
      {
        allow: [ '~' ],
      },
    ],

    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 1 } ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': 'off', // The following line is the desired functionality, but is awaiting https://github.com/eslint/eslint/issues/6488
    // 'object-curly-newline': [ 'error', { multiline: true, minProperties: 3 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ],
    'one-var-declaration-per-line': 'error',
    'one-var': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': [ 'error', 'never' ],
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [ 'error', 'single' ],
    'require-jsdoc': 'off',
    'semi-spacing': 'error',
    semi: 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',

    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],

    'spaced-comment': 'off',
    'unicode-bom': 'off',
    'wrap-regex': 'off',
  },
};
