import path from 'path';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import pkg from './package.json';

const external = (id) => !id.startsWith('.') && !path.isAbsolute(id);

const extensions = ['.js', '.jsx'];

const resolvePlugin = resolve({
  extensions,
});

const babelPlugin = babel({
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  extensions,
});

const createConfig = (filename) => ({
  input: `src/functions/${filename}.js`,
  output: [{ file: `build/${filename}.js`, format: 'cjs' }],
  plugins: [json(), resolvePlugin, commonjs(), babelPlugin],
});

export default [
  {
    input: 'src/index.js',
    external,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      json(),
      resolvePlugin,
      babelPlugin,
      process.env.NODE_ENV === 'production' && terser(),
    ],
  },
  ...[
    'developers',
    'languages',
    'repositories',
    'spoken_languages',
  ].map((filename) => createConfig(filename)),
];
