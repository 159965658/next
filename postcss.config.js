const isProduct = process.env.NODE_ENV === "production"
const browsers = isProduct
  ? ["ie >= 8", "firefox >= 8", "chrome >= 24", "Opera>=10"]
  : []

module.exports = {
  plugins: {
    "postcss-cssnext": {
      browsers: browsers,
      features: {
        customProperties: false,
      },
    },
    "postcss-nested": {},
  },
}
