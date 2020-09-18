const BookmarkletWebpackPlugin = require('./bookmarklet-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new BookmarkletWebpackPlugin({
      input: 'main',
      output: 'index.html',
      repo: 'https://github.com/tomrule007/paintballnet-hide-chat',
      linkName: 'PBN-hideChat v1.0.0',
      pageTitle: 'Paintballnet-hideChat v1.0.0',
      author: 'Thomas J. Herzog (@tomrule007)',
    }),
  ],
});
