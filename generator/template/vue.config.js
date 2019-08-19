const ip = "your serve ip";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: ip,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
