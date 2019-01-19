const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ['./src/index'],

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
}
