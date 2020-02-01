const path = require("path");
const config = require("./webpack.base.config");
const { transformFileName,getMultipleEntries } = require("./configUtils");

config.entry = getMultipleEntries();
config.output = {
  path: path.resolve(__dirname, "../dist/commonjs"),
  publicPath: "/",
  filename: transformFileName,
  libraryTarget: "commonjs"
};

module.exports = config;
