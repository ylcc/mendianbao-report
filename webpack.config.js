/**
 * Created by yuli on 2016/10/31.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
    entry: [
        // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve(APP_PATH, 'index.jsx')
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
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
        }),
    ]
}