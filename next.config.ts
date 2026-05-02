import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  allowedDevOrigins: ["10.104.193.57"],
  experimental: {},
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
