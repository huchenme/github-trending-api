import path from 'path';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const external = id => !id.startsWith('.') && !path.isAbsolute(id);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

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
    input: 'src/index.ts',
    external,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      resolvePlugin,
      babelPlugin,
      process.env.NODE_ENV === 'production' && terser(),
    ],
  },
  {
    input: 'src/server.ts',
    external,
    output: [{ file: 'dist/server.cjs.js', format: 'cjs' }],
    plugins: [resolvePlugin, babelPlugin],
  },
];
