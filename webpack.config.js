const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            Object.assign( 
                {
                    template: './src/index.html'
                }
            )
        )
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'babel-loader' }
        ]
    },
    performance: {
        hints: false
    },
    stats: {
        children: true,
        entrypoints: false
    }
};