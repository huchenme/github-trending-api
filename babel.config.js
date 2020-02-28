module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'lodash',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
};
