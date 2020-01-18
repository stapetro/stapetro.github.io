const path = require('path');

module.exports = {
  entry: {
    pickLuck: './main/pickLuck.main.js',
    mediaElementSetup: './main/mediaElementSetup.js',
    index: './main/index.js',
  },
  output: {
    path: path.resolve(__dirname, '..', 'assets', 'js'),
    filename: '[name].js',
  },
  devtool: 'source-map',
};
