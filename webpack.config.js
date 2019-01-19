const CleanWebpackPlugin = require('clean-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new MiniCssExtractPlugin({}),
    ]
}
