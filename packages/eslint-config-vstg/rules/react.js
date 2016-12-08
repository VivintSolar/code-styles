
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
    'jsx-quotes': [ 1, 'prefer-double' ],
    'class-methods-use-this': [
      2,
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

    'react/display-name': 0,
    'react/forbid-component-props': 1,
    'react/forbid-prop-types': [ 2, [ 'any', 'array', 'object' ]],
    'react/no-array-index-key': 1,
    'react/no-children-prop': 1,
    'react/no-danger': 1,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 1,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [ 2, { 'ignoreStateless': true }],
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 1,
    'react/no-unused-prop-types': 2,
    'react/prefer-es6-class': [ 1, 'always' ],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 0,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      2,
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
    'react/sort-prop-types': 0,
    'react/style-prop-object': 2,
  },
};
