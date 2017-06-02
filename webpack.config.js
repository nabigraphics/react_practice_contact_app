var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
      bundle:['./src/index.js','./src/css/style.scss','./src/css/main.scss','./src/css/tvdb_list.scss','./src/css/series.scss','./src/css/sidebar.scss']
      //"notosans":'./src/css/notosans.scss'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },

    devServer: {
        hot:true,
        host:"192.168.0.138",
        inline: true,
        port: 3000,
        contentBase: __dirname + '/dist/',
        historyApiFallback: true
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react','stage-2']
                    }
                },
                {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract({fallback:"style-loader",use: "css-loader!sass-loader!autoprefixer-loader?browsers=last 2 versions"})

                },
                {
                  test: /\.css$/,
                  loader: 'style!css!autoprefixer-loader?browsers=last 2 versions'
                },
                {
                  test:/\.json$/,
                  loader:'json'
                },
                {
                  test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
                  loader: 'file',
                  options: {
                    name: 'fonts/[name].[ext]',
                  },
                }
            ]
        },
    resolveLoader: {
      moduleExtensions: ["-loader"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
        /*
        new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new UglifyJSPlugin()
        */
    ]
};
