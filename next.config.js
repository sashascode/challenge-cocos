/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    GET_MOVIE_DETAILS_URL: process.env.GET_MOVIE_DETAILS_URL,
    SEARCH_MOVIE_URL: process.env.SEARCH_MOVIE_URL,
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
