const env = require('./server/config/env');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
        'AUTH_DOMAIN': JSON.stringify(env.AUTH_DOMAIN),
        'AUTH_CALLBACK_URL': JSON.stringify(env.AUTH_CALLBACK_URL),
        'AUTH_CLIENT_ID': JSON.stringify(env.AUTH_CLIENT_ID),
        'AUTH_AUDIENCE': JSON.stringify(env.AUTH_AUDIENCE)
      }
   }),
  ],
}
