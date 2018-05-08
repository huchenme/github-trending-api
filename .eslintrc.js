module.exports = {
  extends: [
    require.resolve('eslint-config-kentcdodds'),
    require.resolve('eslint-config-kentcdodds/jest'),
  ],
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
  },
};
