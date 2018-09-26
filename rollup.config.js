import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
const license = require('rollup-plugin-license')

export default {
  input: 'nuxt-storage.js',
  output: {
    name: 'nuxtStorage',
    file: 'dist/nuxt-storage.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-external-helpers'],
      externalHelpers: true,
      // runtimeHelpers: true
    }),
    terser(),
    license({
      banner: `nuxt-storage v<%= pkg.version %>`,
    })
  ]
}