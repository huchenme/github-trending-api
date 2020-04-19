module.exports = {
  extends: ['eslint-config-kentcdodds', 'eslint-config-kentcdodds/jest'],
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'babel/new-cap': 'off',
  },
};
