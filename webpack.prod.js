const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.DefinePlugin({
                   'process.env': {
             'NODE_ENV': JSON.stringify('production')
           }
     })

]
});