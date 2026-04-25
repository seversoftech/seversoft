import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["10.104.193.57"],
  experimental: {},
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
