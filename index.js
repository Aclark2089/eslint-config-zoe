'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    // import
    'plugin:import/errors',
    'plugin:import/warnings',
    // React
    'react-app',
    'plugin:react/recommended',
    // Typescript
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // Prettier
    'prettier',
    'prettier/react',
    'prettier/unicorn',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
    'jest',
    'import',
    // React
    'react',
    'react-hooks',
    // Typescript
    '@typescript-eslint',
    // Prettier
    'prettier'
  ],
  rules: {
    'no-shadow': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-object-spread': 'warn',
    // import
    'import/no-unresolved': 'error',
    // prettier
    'prettier/prettier': 'warn',
    // no-use-extend-native
    'no-use-extend-native/no-use-extend-native': 'error',
    // react
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/button-has-type': 'warn',
    'react/no-danger': 'warn',
    // typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // unicorn
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-unsafe-regex': 'error'
  }
};
