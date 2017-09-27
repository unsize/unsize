const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  devtool: 'source-map',
  output: {
    filename: './extension/build/unsize.js'
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, '../components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  }
};
