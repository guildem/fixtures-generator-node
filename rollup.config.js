import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'fixtures-generator-node',
    sourcemap: true,
  },
  plugins: [
    babel(babelrc())
  ]
};
