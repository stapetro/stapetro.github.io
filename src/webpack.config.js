const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  target: 'web',
  entry: {
    pickLuck: './main/pickLuck.main.js',
    headerLink: './main/headerLink.main.js',
    headerImage: './main/headerImage.mjs',
    mediaElementSetup: './main/mediaElementSetup.js',
    index: './main/index.js',
    appStyle: './main/style/index.js',
  },
  output: {
    path: path.resolve(__dirname, '..', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js',
    library: ['MyLibrary', '[name]'],
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: false,
      logLevel: 'info',
    })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'resolve-url-loader'},
          // Compiles Sass to CSS
          {loader: 'sass-loader'}],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
