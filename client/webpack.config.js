const webpack = require("webpack");

module.exports = {
  entry: {
    // polyfills: "./src/polyfills.ts",
    // vendor: "./src/vendor.ts",
    app: "./src/main.ts"
  },
  output: {
    filename: "./../app/assets/javascripts/[name].js",
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }, {
        test: /\.sass$/,
        loaders: ["css", "sass"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ],
  devtool: "eval-source-map"
};
