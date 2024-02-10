/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    MOVIE_API_URL: process.env.MOVIE_API_URL,
    SEARCH_API_URL: process.env.SEARCH_API_URL,
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
