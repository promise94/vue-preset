const ip = "http://192.168.5.41";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "question-core" : "/",
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
