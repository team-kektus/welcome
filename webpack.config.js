const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const PurifyCSSPlugin = require('purifycss-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'development'
})


module.exports = {
  entry: './src/app.module.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    // progress: true,
    // hot: true,
    inline: true,
    // https: true,
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
    proxy: {
      '/app/': {
        target: 'http://localhost:8081',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/app': ''}
      },
      '/api/': {
        target: 'http://localhost:7000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loader: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.html$/,
        loaders: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'html-minifier-loader',
            options: {
              collapseWhitespace: true,
              collapseInlineTagWhitespace: true,
              removeRedundantAttributes: true,
              removeEmptyAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2|woff)$/,
        loader: 'url-loader?limit=10000',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig,
    extractSass,
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    }),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync(path.join(__dirname, 'src/**/*.html')),
    // })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

}
