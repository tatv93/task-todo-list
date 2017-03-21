module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        publicPath: "/",
        contentBase: "./src",
        historyApiFallback: true,
        inline: true
    },
    devtool: "source-map"
};