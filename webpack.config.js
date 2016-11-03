/**
 * Created by yuli on 2016/10/31.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var PAGES_PATH = path.resolve(APP_PATH, 'pages/business');

module.exports= {
    entry: {
        index: path.resolve(APP_PATH, 'index.jsx'),
        business: path.resolve(PAGES_PATH, 'business.jsx'),
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
    },
    //enable dev source map
    devtool: 'eval-source-map',
    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: APP_PATH,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app',
            filename:"index.html",
            chunks: ['index'],
        }),
        new HtmlwebpackPlugin({
            title: 'business 营业数据报表',
            filename: "business.html",
            chunks: ['business'],
        }),
    ]
}