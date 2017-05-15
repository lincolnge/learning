var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    "./app.js",
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: {
      colors: true
    },
    proxy: {
      "/api/*": "http://localhost:3000"
      // '/api/*': {
      //   target: 'http://localhost:3000',
      //   secure: false
      // }
    }
  }
}
