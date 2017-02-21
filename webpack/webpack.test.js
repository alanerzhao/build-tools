// webpack.config.js
const path = require("path");
var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  /*...*/
    entry: {
        app: './test/test.js',
    },
    devtool: 'source-map', //开启sourcemap之后打断点进入的原始文件
    plugins: [
        new ManifestPlugin()
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name]-[chunkhash].js',
        sourceMapFilename: "[name].js.map" //输出sourcemap文件名
    }
};
