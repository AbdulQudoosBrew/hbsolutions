import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hbsolutions.uk" }],
        destination: "https://hbsolutions.uk/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
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
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "gretagrove.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
