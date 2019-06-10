import path from 'path';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

const external = id => !id.startsWith('.') && !path.isAbsolute(id);

export default [
  {
    input: 'src/index.js',
    external: id => external(id),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      process.env.NODE_ENV === 'production' && terser(),
    ],
  },
  {
    input: 'src/server.js',
    external: id => external(id),
    output: [{ file: 'dist/server.cjs.js', format: 'cjs' }],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
    ],
  },
];
