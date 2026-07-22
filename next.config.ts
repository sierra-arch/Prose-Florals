import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Self-hosted local photos; keep optimization on but allow large source files.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
