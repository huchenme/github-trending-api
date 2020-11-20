import path from 'path';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import dts from 'rollup-plugin-dts';
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
  {
    input: 'src/functions/utils/fetch.js',
    output: [{ file: 'lib/scrape.js', format: 'cjs' }],
    plugins: [json(), resolvePlugin],
  },
  {
    input: 'types/index.d.ts',
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [dts()],
  },
  {
    input: 'types/scrape.d.ts',
    output: {
      file: 'lib/scrape.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
