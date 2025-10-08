import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
