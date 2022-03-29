module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'react-app/jest', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'react/no-danger': 0,
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'class-methods-use-this': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      },
    ],
    radix: 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': [0, { props: true }],
    'no-plusplus': 0,
    'no-shadow': 'off',
    'no-underscore-dangle': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'object-curly-newline': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    semi: ['error', 'never'],
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/'], // @ 是设置的路径别名
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        paths: ['packages/*/src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  parserOptions: {
    tsconfigRootDir: './',
  },
}
