import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['lodash/omitBy', 'lodash/isNil', 'cheerio', 'node-fetch'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      process.env.NODE_ENV === 'production' && uglify(),
    ],
  },
  {
    input: 'src/server.js',
    external: [
      'express',
      'memory-cache',
      'cors',
      'lodash',
      'cheerio',
      'node-fetch',
    ],
    output: [{ file: 'dist/server.js', format: 'cjs' }],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
              modules: false,
            },
          ],
        ],
      }),
    ],
  },
];
