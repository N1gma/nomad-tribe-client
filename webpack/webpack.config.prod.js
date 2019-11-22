'use strict';
const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CURRENT_WORKING_DIR = process.cwd();

/*
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'), //  destination
        filename: 'bundle.js',
        publicPath: './dist/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(CURRENT_WORKING_DIR, 'public/index.html'),
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //check for all js files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: true
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve('src'),
            'node_modules'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};
