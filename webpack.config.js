const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.(jpg|jfif|svg|jpeg|png|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new HtmlwebpackPlugin({
            title: 'Webpack App2',
            filename: 'template2.html',
            template: 'src/template2.html',
        })
    ]
}