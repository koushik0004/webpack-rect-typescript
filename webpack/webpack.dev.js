const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    hot: true,
    open: true,
    compress: true,
    port: 9001,
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Koushik"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
