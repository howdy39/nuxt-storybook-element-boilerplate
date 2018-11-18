const path = require("path");
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    extensions: ['.vue'],
    alias: {
      '~': rootPath,
    }
  }
};
