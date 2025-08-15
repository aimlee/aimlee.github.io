import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',        // user site => no subpath
  assetPrefix: '',     // user site => no subpath
  images: { unoptimized: true }
};

export default nextConfig;