var webpack = require('webpack');
var path = require('path');
// var StatsPlugin = require('stats-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js',
    './index2.js'
  ],
  output: {
    filename: 'bundle.js',
    path: 'static/',
    publicPath: 'static/',
  },
  stats: {
    assets: false,
    chunks: false,
    children: false,
    modules: false,
    // colors: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer(),
    // new StatsPlugin('stats.json', {
    //   chunkModules: true,
    //   exclude: [/node_modules[\\\/]react/]
    // }),
    // new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    // new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    // // NOTE：如果已经压缩过的文件被重复处理，会非常耗时
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // supresses warnings, usually from module minification
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    }]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    stats: {
      colors: true,
      chunks: false,
    },
    proxy: {
      // "/api/*": "http://localhost:3000"
      // '/api/*': {
      //   target: 'http://localhost:3000',
      //   secure: false
      // }
    }
  }
};
