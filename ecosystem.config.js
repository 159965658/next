module.exports = {
  apps: [
    {
      name: "next-demo",
      script: "./server/index.js",
      // watch: true,
      // instances : "max",
      env_development: {
        NODE_ENV: "development",
        ENV_CONFIG: "dev",
        API_ROOT: "http://192.168.0.16:6820", // 开发
      },
      env_production: {
        PORT: 1888,
        NODE_ENV: "production",
        ENV_CONFIG: "prod",
        API_ROOT: "http://192.168.0.60", // 生产
      },
    },
  ],
}
