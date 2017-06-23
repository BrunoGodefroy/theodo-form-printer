const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname)

module.exports = function(env) {
  let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ];

  if (env && env.production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true,
      comments: false,
      sourceMap: true,
    }))
  }

  return {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
      path: path.resolve(ROOT_PATH, './'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(gif|png|svg)$/,
          use: ['url-loader', 'img-loader']
        },
        {
          test: /\.jsx?$/,
          use: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
          exclude: /\landing.less$/
        },
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
      port: 8000,
    },
    plugins: plugins,
  };
};
