/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PORTFOLIO',
  assetPrefix: '/PORTFOLIO/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
