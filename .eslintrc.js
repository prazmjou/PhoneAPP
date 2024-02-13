module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
  },
};
