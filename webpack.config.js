const CleanWebpackPlugin = require('clean-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: ['./src/index'],

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new SourceMapDevToolPlugin({ filename: '[file].map' }),
        new MiniCssExtractPlugin({})
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: { inline: false, annotation: true }
                }
            })
        ]
    }
}
