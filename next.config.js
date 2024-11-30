/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.cloud.mn", "google.com", "example.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**.google.com",
      },
      {
        protocol: "https",
        hostname: "**.pasteboard.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.s3.cloud.mn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**.example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
