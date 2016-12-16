
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
    'node/no-unsupported-features': 'off',

    // Static analysis:
    'import/no-unresolved': 'error',
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',

    // Helpful warnings:
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',

    // Module systems:
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'off',
    'import/no-nodejs-modules': 'off',

    // Style guide:
    'import/first': [ 'error', 'absolute-first' ],
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'jsx': 'never',
      },
    ],
    'import/order': 'off',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
  },
};
