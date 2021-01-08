const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES
} = require('@craco/craco');

module.exports = {
  eslint: {
    configure: {
      env: {
        browser: true,
        es2020: true
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
      rules: {
        'no-use-before-define': 'off', // the base rule must be disabled as it can report incorrect errors alongside typescript
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-props-no-spreading': 'off', // props spreading is on track to become a standard: https://zhenyong.github.io/react/docs/transferring-props.html#transferring-with-...-in-jsx
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never'
          }
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*']
          }
        ]
      },
      settings: {
        react: {
          version: 'detect'
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['./src']
          }
        }
      }
    }
  },
  babel: {
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/core',
          // Use "'libraryDirectory': ''," if your bundler does not support ES modules
          libraryDirectory: 'esm',
          camel2DashComponentName: false
        },
        'core'
      ]
    ]
  },
  jest: {
    configure: {
      preset: 'react',
      moduleFileExtensions: ['ts', 'tsx']
    }
  }
};
