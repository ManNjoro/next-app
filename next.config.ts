import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://bit.ly/**')],
  },
};

export default nextConfig;
