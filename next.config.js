const withPlugins = require("next-compose-plugins")
const withCSS = require("@zeit/next-css")
const path = require("path")
// const fs = require("fs")

const env = require("./ecosystem.config.js")
const NODE_ENV = process.env.NODE_ENV || "development"
const envObject = env.apps[0][`env_${NODE_ENV}`] || {}
delete envObject.NODE_ENV
console.log(envObject, "运行环境")
module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]_[hash:base64:5]",
        },
      },
    ],
  ],
  {
    // （重要配置）可以在页面上通过 procsess.env.customKey 获取 value。跟webpack.DefinePlugin实现的一致
    env: envObject,
    webpack: (config, { isServer, defaultLoaders }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, ".", ""),
      }
      return config
    },
  }
)
