const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist'),
  },
  devServer: {
    contentBase: './app/dist/',
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        }],
      },
    ],
  },
};
