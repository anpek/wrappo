const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['es2015'],
                        plugins: ['transform-react-jsx', 'transform-decorators-legacy']
                    }
                }
            },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'head',
            template: './index.html'
        })
    ],
    devtool: "inline-source-map",
}
