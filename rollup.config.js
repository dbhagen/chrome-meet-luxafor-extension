// rollup.config.js

// import { rollup } from 'rollup'

import typescript from "rollup-plugin-typescript2";
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import zipEncryptable from 'rollup-plugin-zip-encryptable'


import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    del({ targets: 'dist/*'}),
    // always put chromeExtension() before other plugins
    chromeExtension({ browserPolyfill: true }),
    simpleReloader(),
    // the plugins below are optional
    typescript(),
    resolve(),
    commonjs(),
    zipEncryptable({ zlib: { level: 9 } }),
  ],
}