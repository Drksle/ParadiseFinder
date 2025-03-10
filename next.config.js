/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Add performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize image loading
  images: {
    domains: ["images.unsplash.com", "developer.ethiotelecom.et"],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 14.1.3 to 14.2.11:
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  };
}

module.exports = nextConfig;
