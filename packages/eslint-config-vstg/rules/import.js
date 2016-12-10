
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
    'node',
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
    'node/no-unsupported-features': 0,

    // Static analysis:
    'import/no-unresolved': 2,
    'import/named': 0,
    'import/default': 0,
    'import/namespace': 0,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 2,

    // Helpful warnings:
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 2,

    // Module systems:
    'import/unambiguous': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 0,
    'import/no-nodejs-modules': 0,

    // Style guide:
    'import/first': [ 2, 'absolute-first' ],
    'import/no-duplicates': 2,
    'import/no-namespace': 0,
    'import/extensions': [
      2,
      'always',
      {
        'js': 'never',
        'jsx': 'never',
      },
    ],
    'import/order': 0,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 0,
    'import/no-named-default': 2,
  },
};
