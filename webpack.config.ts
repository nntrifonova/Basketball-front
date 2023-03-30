import webpack from "webpack";
const path = require('path'), HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(tsx)$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        })
    ]

}