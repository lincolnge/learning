const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const injectDevServer = require('./dev-server-inject');

// 当访问 / 时，跳转到 /dist/index.html
// injectDevServer();

module.exports = {
  // entry: ['./app/index.js'],
  entry: {
    index: [
      'react-hot-loader/patch',
      // // activate HMR for React
      //
      // 'webpack-dev-server/client?http://localhost:8080',
      // // bundle the client for webpack-dev-server
      // // and connect to the provided endpoint
      //
      // 'webpack/hot/only-dev-server',
      // // bundle the client for hot reloading
      // // only- means to only hot reload for successful updates
      './app/index.js',
    ],
    index2: ['./app/index2.js'],
    // vendor: ['lodash'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel'],
        exclude: /node_modules/,
        // include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$|\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  output: {
    // filename: '[name].js',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // publicPath: path.resolve(__dirname, 'dist'),
  },
  context: path.resolve(__dirname, '.'),
  resolve: {
    extensions: ['.js', '.jsx'],
    // 配置模块的根目录，可以是数组。NOTE: 必须是绝对路径
    modules: [
      path.resolve('./node_modules'),
      path.resolve(__dirname),
    ],
    alias: {
      '~': path.resolve(__dirname),
    }
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    moduleExtensions: ['-loader']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer({
      filename: 'stats-view.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
      // inject: 'true',
      // chunks: ['vendor', 'index'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      // filename: '[name].js',
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[chunkhash].js',
      // children: true,
      // async: 'true',
      // chunks: ['lodash'],
    }),
    // new AddAssetHtmlPlugin({
    //   filepath: require.resolve('./some-file'),
    // }),
  ],
  devServer: {
    compress: true,
    hot: true,
    // enable HMR on the server

    // contentBase: './dist',
    // contentBase: false,
    contentBase: path.join(__dirname, "dist"),
    // contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    // publicPath: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    stats: {
      colors: true
    },
    host: '0.0.0.0',
    port: 9999,
    // proxy: {
    //   [/\/(?!static).+/]: {
    //     target: "http://localhost:8411",
    //   }
    // }
  }
};
