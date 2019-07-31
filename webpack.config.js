const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
        path: path.resolve(__dirname, '..', '.env'),
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  }
};