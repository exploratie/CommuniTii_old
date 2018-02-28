const path = require("path")
const webpack = require("webpack")
// use babel-minify due to UglifyJS errors from modern JS syntax
const MinifyPlugin = require("babel-minify-webpack-plugin")
// get default webpack config for @storybook/react
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js")
const DEV = process.env.NODE_ENV !== "production"
const prodPlugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
    "process.env.__REACT_NATIVE_DEBUG_ENABLED__": DEV
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new MinifyPlugin()
]
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)
  const defaultPlugins = config.plugins
  const overwrite = {
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: { cacheDirectory: true }
        }
      ]
    },
    plugins: DEV ? defaultPlugins : prodPlugins
  }
  return Object.assign(config, overwrite)
}
