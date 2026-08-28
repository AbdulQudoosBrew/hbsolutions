import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giavanibathrooms.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "www.ct1.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "shop.ct1.com",
        pathname: "/pub/media/**",
      },
      {
        protocol: "https",
        hostname: "www.deponti.com",
        pathname: "/storage/app/resources/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
