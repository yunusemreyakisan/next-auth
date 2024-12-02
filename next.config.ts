module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://dev-api.bereket.co/v1:path*", // Proxy to Backend
      },
    ];
  },
};
