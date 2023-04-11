const { build } = require('esbuild');

// CommonJS
build({
  entryPoints: ['./src/index.ts'],
  outfile: './lib/index.cjs.js',
  bundle: true,
  sourcemap: false,
  splitting: false,
  platform: 'browser',
  format: 'cjs',
  target: ['es6']
});

// ESModule
build({
  entryPoints: ['./src/index.ts'],
  outfile: './lib/index.esm.js',
  bundle: true,
  sourcemap: false,
  splitting: false,
  platform: 'browser',
  format: 'esm',
  target: ['es6']
});

// IIFE
build({
  entryPoints: ['./src/index.ts'],
  outfile: './lib/index.iife.js',
  bundle: true,
  sourcemap: false,
  splitting: false,
  platform: 'browser',
  globalName: 'bunzz',
  format: 'iife',
  target: ['es6']
});
