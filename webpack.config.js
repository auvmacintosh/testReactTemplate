const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const uglifyJsPlugin = new UglifyJsPlugin();
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});
const serviceWorkerWebpackPlugin = new ServiceWorkerWebpackPlugin({
    entry: path.join(__dirname, 'src/sw.js'),
});

module.exports = {
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react',
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-class-properties',
                                {loose: true},
                            ],
                            '@babel/plugin-proposal-object-rest-spread',
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [uglifyJsPlugin],
        usedExports: true,
        sideEffects: true,
    },
    plugins: [
        htmlPlugin,
        serviceWorkerWebpackPlugin,
    ],
};
