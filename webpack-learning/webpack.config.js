'use strict';
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const glob = require("glob");
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const isOptimized = Boolean(process.env.isOptimized);

let entry = {};
const files = glob.sync('./src/**/*.js').filter((f) => {
  return !/lib/.test(f);
});
let filepath;
let name;

console.log('path.dirname(__dirname)', path.dirname(__dirname), __dirname);
for (let i = 0; i < files.length; i++) {
  filepath = files[i];
  name = filepath.substring(2, filepath.length - 3); // 去掉 ./ 还有 .js
  entry[name] = filepath;
  console.log('name', name);
  console.log('filepath', filepath);
}

// entry = glob.sync("./src/**/*.js");
// entry = {
//   'src/main': './src/main.js',
//   'src/main2': './src/main2.js'
// };

console.log('entry', entry);

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
const dllPlugin = new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: require('./dist/manifest.json'),
});
const addLibToHtml = new AddAssetHtmlPlugin({ filepath: require.resolve('./dist/lib') });

const plugins = [
  new Visualizer({
    filename: isOptimized ? './stats.html' : './stats2.html'
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: 'body'
  }),
  new OpenBrowserPlugin({
    url: 'http://localhost:8080'
  }),
];

console.log('__dirname', __dirname, process.env.isOptimized, isOptimized);

if (isOptimized) {
  plugins.push(commonsPlugin, dllPlugin, addLibToHtml);
}

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path:'./dist'
  },
  plugins,
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ["transform-decorators-legacy"],
      },
      include: path.join(__dirname, '.')
    }]
  }
};
