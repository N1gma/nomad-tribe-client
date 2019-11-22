'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client', // bundle the client for hot reloading
      './src/index.js',  // the entry point of app
    ],
  },
  mode: 'development',
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, 'dist'), //  destination
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: true,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NoEmitOnErrorsPlugin(),  // do not emit compiled assets that include errors
    new HtmlWebpackPlugin({
      template: path.resolve(CURRENT_WORKING_DIR, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check for all js files
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
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
    ],
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'inline-source-map',
};
