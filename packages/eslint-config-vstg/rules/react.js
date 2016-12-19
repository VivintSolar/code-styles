
const jsxIndentSize = 2;
const jsxIndentPropsSize = 2;

module.exports = {
  'plugins': [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.json' ],
      },
    },
    react: {
      pragma: 'React',
      version: '15.0',
    },
  },
  rules: {
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],

    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [ 'error', { 'ignoreStateless': true } ],
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/prefer-es6-class': [ 'warn', 'always' ],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',

    'react/jsx-boolean-value': [ 'error', 'never' ],
    'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],
    'react/jsx-curly-spacing': [ 'error', 'always', { allowMultiline: true } ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx' ] } ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': [ 'error', jsxIndentSize ],
    'react/jsx-indent-props': [ 'error', jsxIndentPropsSize ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { maximum: 3 } ],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [ 'error', { allowAllCaps: true } ],
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': [ 'error', 'always' ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
      },
    ],
  },
};
