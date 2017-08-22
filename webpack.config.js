const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ROOT_PATH = path.resolve(__dirname)

module.exports = function (env) {
  let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index_template.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]

  if (env && env.production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true,
      comments: false,
      sourceMap: true
    }))
    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }))
  }

  return {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
      path: path.resolve(ROOT_PATH, './'),
      publicPath: '',
      filename: 'bundle.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(gif|png|svg)$/,
          use: ['url-loader', 'img-loader']
        },
        {
          test: /\.jsx?$/,
          use: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: path.resolve(ROOT_PATH, './'),
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 8000
    },
    plugins: plugins
  }
}
