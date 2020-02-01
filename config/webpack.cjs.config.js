const glob = require("glob");
const path = require("path");
const config = require("./webpack.base.config");

config.output = {
  path: path.resolve(__dirname, "../dist/commonjs"),
  publicPath: "/",
  filename: "semantic-ui-vue.js",
  libraryTarget: "commonjs"
};

config.entry = "./src/index.js";

module.exports = config;
