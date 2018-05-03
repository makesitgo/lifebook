const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch', // activates HMR for React
    'webpack-dev-server/client?http://0.0.0.0:8001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.svg/,
        loader: ['svg-url-loader']
      },
      {
        test: /.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?sourceMap=true' },
          { loader: 'less-loader?sourceMap=true' }
        ]
      },
      {
        test: /favicon\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(), // do not emit compiled assets that include errors
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('')
      }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    historyApiFallback: true, // respond to 404s with index.html
    hot: true, // enable HMR on the server
    progress: true // show compilation progress
  }
};
