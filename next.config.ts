import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration - generates fully static HTML/CSS/JS
  output: "export",
  
  images: {
    // Disable image optimization for static export (images must be unoptimized)
    unoptimized: true,
  },
  
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
  
  // Disable features that require server
  trailingSlash: true,
  
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
