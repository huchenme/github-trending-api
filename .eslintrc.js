module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
  extends: [
    'eslint:recommended',
    // 'eslint-config-kentcdodds',
    // 'eslint-config-kentcdodds/jest'
  ],
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'babel/new-cap': 'off',
    'require-await': 'off',
  },
};
