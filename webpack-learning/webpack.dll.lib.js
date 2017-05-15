const webpack = require('webpack');
const path = require('path');
const outputPath = path.join(__dirname, 'dist');
const fileName = '[name].js';

// 资源依赖包，提前编译
const lib = [
  'lodash',
  'jquery',
];

const plugin = [
  new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     */
    path: path.join(outputPath, 'manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 和 output.library 一样即可。
     */
    name: '[name]',
    context: __dirname
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
  devtool: '#source-map',
  entry: {
    lib: lib
  },
  output: {
    path: outputPath,
    filename: fileName,
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: plugin
};
