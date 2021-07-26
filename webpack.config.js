const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'style.css'})
  ]
};