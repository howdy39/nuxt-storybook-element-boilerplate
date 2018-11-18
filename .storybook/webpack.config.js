const path = require("path");
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue'],
    alias: {
      '~': rootPath,
    }
  }
};
