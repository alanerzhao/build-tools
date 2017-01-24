const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].[chunkhash].css');
module.exports = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    devtool: 'source-map', //开启sourcemap之后打断点进入的原始文件
    module: {
        loaders: [
            //加载文件
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract('style-loader', 'css-loader')
            },
            //加载scss文件
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style-loader', 'css-loader!sass-loader')
            },
            //加载js
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
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),//指定加载
        extractCSS
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"), //监听哪些文件
        inline: true,
        port: 9000,
        compress: true, //开启gzip
        // hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkhash].js',
        sourceMapFilename: "[name].js.map" //输出sourcemap文件名
    }
}
