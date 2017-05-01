const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'public');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'app.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|power_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'cheap-module-source-map',
}
