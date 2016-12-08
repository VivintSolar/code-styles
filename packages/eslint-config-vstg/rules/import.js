
module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  'plugins': [
    'import',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json' ],
      },
    },
    'import/extensions': [ '.js', '.jsx' ],
    'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ],
    react: {
      pragma: 'React',
      version: '15.0',
    },
  },
  rules: {

    // Static analysis:
    'no-unresolved': 2,
    'named': 0,
    'default': 0,
    'namespace': 0,
    'no-restricted-paths': 0,
    'no-absolute-path': 2,
    'no-dynamic-require': 2,
    'no-internal-modules': 0,
    'no-webpack-loader-syntax': 2,

    // Helpful warnings:
    'export': 2,
    'no-named-as-default': 2,
    'no-named-as-default-member': 2,
    'no-deprecated': 0,
    'no-extraneous-dependencies': 0,
    'no-mutable-exports': 2,

    // Module systems:
    'unambiguous': 0,
    'no-commonjs': 0,
    'no-amd': 0,
    'no-nodejs-modules': 0,

    // Style guide:
    'first': [ 2, 'absolute-first' ],
    'no-duplicates': 2,
    'no-namespace': 0,
    'extensions': [
      2,
      'always',
      {
        'js': 'never',
        'jsx': 'never',
      },
    ],
    'order': 0,
    'newline-after-import': 2,
    'prefer-default-export': 2,
    'max-dependencies': 0,
    'no-unassigned-import': 0,
    'no-named-default': 2,
  },
};
