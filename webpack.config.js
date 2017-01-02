const webpack = require('webpack');

const entry = {
  main: './src/main',
  main2: './src/main2'
};
module.exports = {
  entry,
  output: {
    filename: 'bundle.[name].js',
    path:'./dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js', ['main', 'main2'])
  ]
};
