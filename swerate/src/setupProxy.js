const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Proxy requests starting with /api
    createProxyMiddleware({
      target: "https://api.riksbank.se", // Target URL of the Riksbank API
      changeOrigin: true, // Ensures the origin is updated to the target URL
      pathRewrite: {
        "^/api": "", // Remove '/api' from the URL when forwarding
      },
      secure: false, // Set to false if you encounter SSL issues (usually for development)
      logLevel: "debug", // Enable logging for debugging proxy issues
    })
  );
};
