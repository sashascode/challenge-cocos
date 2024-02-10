/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;
