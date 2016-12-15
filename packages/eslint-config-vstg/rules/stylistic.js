
module.exports = {
  rules: {
    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': 2,
    'camelcase': 1,
    'capitalized-comments': 0,
    'comma-dangle': [ 2, 'always-multiline' ],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': [ 2, 'never' ],
    'consistent-this': 0,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,

    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
        'VariableDeclarator': {
          'var': 1,
          'let': 1,
          'const': 2,
        },
        'MemberExpression': 1,
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 'first',
        },
        'FunctionExpression': {
          'body': 1,
          'parameters': 'first',
        },
        'CallExpression': {
          'arguments': 1,
        },
      },
    ],

    'jsx-quotes': 2,

    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'minimum',
      },
    ],

    'keyword-spacing': 2,
    'line-comment-position': 0,
    'linebreak-style': 2,
    'lines-around-comment': 0,
    'lines-around-directive': 2,
    'max-depth': [ 1, { max: 5 } ],
    'max-len': 0,

    'max-lines': [
      1,
      {
        'max': 1000,
        'skipBlankLines': true,
        'skipComments': true,
      },
    ],

    'max-nested-callbacks': 2,
    'max-params': [ 1, { max: 8 } ],
    'max-statements-per-line': 2,
    'max-statements': 0,
    'multiline-ternary': 0,
    'new-cap': 1,
    'new-parens': 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,

    'no-bitwise': [
      2,
      {
        'allow': [ '~' ],
      },
    ],

    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [ 2, { max: 2, maxEOF: 1 } ],
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-newline': 0, // The following line is the desired functionality, but is awaiting https://github.com/eslint/eslint/issues/6488
    // 'object-curly-newline': [ 2, { multiline: true, minProperties: 3 } ],
    'object-curly-spacing': [ 2, 'always' ],
    'object-property-newline': [ 2, { allowMultiplePropertiesPerLine: true } ],
    'one-var-declaration-per-line': 2,
    'one-var': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': [ 1, 'never' ],
    'quote-props': [ 2, 'as-needed' ],
    'quotes': [ 2, 'single' ],
    'require-jsdoc': 0,
    'semi-spacing': 2,
    'semi': 2,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [ 2, 'never' ],
    'space-in-parens': 2,
    'space-infix-ops': 2,

    'space-unary-ops': [
      2,
      {
        'words': true,
        'nonwords': false,
      },
    ],

    'spaced-comment': 0,
    'unicode-bom': 0,
    'wrap-regex': 0,
  },
};
