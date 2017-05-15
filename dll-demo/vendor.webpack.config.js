var webpack = require('webpack');
module.exports = {
  entry: {
    vendor: ['./vendor'],
  },
  output: {
    filename: 'vendor.bundle.js',
    path: 'build/',
    library: 'vendor_lib',
  },
  plugins: [new webpack.DllPlugin({
    name: 'vendor_lib',
    path: 'build/vendor-manifest.json',
  })]
};
