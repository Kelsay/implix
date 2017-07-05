var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './source/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './source/index.html',
            to: __dirname + '/dist/index.html'
        }])
    ],
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};