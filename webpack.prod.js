const base = require("./webpack.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
  mode: "production",
  optimization: { minimizer: [new CssMinimizerPlugin()] },
});
