// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // When hitting /api/ path
        destination: 'https://api.riksbank.se/:path*', // Forward the request to the Riksbank API
      },
    ];
  },
};
