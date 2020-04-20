const withPlugins = require("next-compose-plugins")
const withCSS = require("@zeit/next-css")

const withLess = require("@zeit/next-less")
const path = require("path")
const fs = require("fs")
const lessToJS = require("less-vars-to-js")

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/antd-custom.less"), "utf8")
)
const env = require("./ecosystem.config.js")
const NODE_ENV = process.env.NODE_ENV || "development"
const envObject = env.apps[0][`env_${NODE_ENV}`] || {}
delete envObject.NODE_ENV //必须删除
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
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables, // make your antd custom effective
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
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals),
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader",
        })
      }
      return config
    },
  }
)
