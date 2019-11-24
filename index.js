module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    // React
    'plugin:react/recommended',
    'react-app',
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
    'prettier/prettier': 'warn',
    'no-use-extend-native/no-use-extend-native': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
