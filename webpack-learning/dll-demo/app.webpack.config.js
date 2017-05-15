var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./app'],
  },
  output: {
    filename: 'app.bundle.js',
    path: 'build/',
  },
  plugins: [new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./build/vendor-manifest.json'),
  })]
};
