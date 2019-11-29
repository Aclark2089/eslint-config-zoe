'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',

  plugins: [
    'import',
    'flowtype',
    'jsx-a11y',
    'react',
    'react-hooks',
    'promise',
    'unicorn',
    'no-use-extend-native',
    'jest',
    'prettier'
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'react-app',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['prettier/@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'
      }
    }
  ],
  rules: {
    'no-shadow': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-object-spread': 'warn',
    'prettier/prettier': 'warn',
    'no-use-extend-native/no-use-extend-native': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/button-has-type': 'warn',
    'react/no-danger': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-unsafe-regex': 'error'
  }
};
