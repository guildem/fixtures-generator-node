const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'fixtures-generator-node',
    sourcemap: false
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};

module.exports = config;
