var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: ['./src/app.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    progress: true,
    colors: true,
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?name=[path][name].[ext]?[hash]'
            }
        ]
    }
}
