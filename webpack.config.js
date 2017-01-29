var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './public/js/books/index.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/app/assets/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
