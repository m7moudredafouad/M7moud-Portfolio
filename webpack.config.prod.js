const path = require('path');
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './scripts/src/app.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'scripts', 'build'),
        publicPath: './scripts/build/'
    },
    module: {
        rules: [
            {
            test: /.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}