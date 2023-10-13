module.exports = {
  root: true,
  plugins: ['react-native', '@typescript-eslint', 'import', 'eslint-plugin-tsdoc'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn'],
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/consistent-type-imports': ['warn'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-single-element-style-arrays': 2
  }
}
