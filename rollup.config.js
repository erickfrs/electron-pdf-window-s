import path from 'path'

import clear from 'rollup-plugin-clear'

import pkg from './package.json'

/** @type import('rollup').RollupOptions */
const config = {
  input: path.join(__dirname, 'src/index.js'),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: ['path', 'electron', 'got', 'read-chunk'],
  plugins: [
    clear({
      targets: ['dist']
    })
  ]
}

export default config
