const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title:'test',//读取的模板变量
            filename:'app.html', //文件名
            template: 'src/app.html'//引用的模板
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"), //监听哪些文件
        inline: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkhash].js',
        sourceMapFilename:'[name]-[id]'
    }
}
