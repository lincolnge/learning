const webpack = require('webpack');

const entry = {
  main: './src/main',
  main2: './src/main2'
};

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
let plugins = [];

console.log('__dirname', __dirname, process.env.isOptimized);

if (Boolean(process.env.isOptimized) === true) {
  plugins.push(commonsPlugin);
}

module.exports = {
  entry,
  output: {
    filename: 'bundle.[name].js',
    path:'./dist'
  },
  plugins
};
