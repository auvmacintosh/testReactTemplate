const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [
            new UglifyJsPlugin(),
        ],
        usedExports: true,
        sideEffects: true,
    },
    plugins: [
		htmlPlugin,
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'src/sw.js'),
        }),
    ],
};
