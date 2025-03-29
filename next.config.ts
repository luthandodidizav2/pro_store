import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  }, // ✅ Correctly closed the object
};

export default nextConfig;
