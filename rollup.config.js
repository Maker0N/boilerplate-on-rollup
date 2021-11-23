import { babel } from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({babelHelpers: 'bundled'}),
    styles()
  ]
}