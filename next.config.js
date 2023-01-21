/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ['page.tsx', 'api.ts'],
};

module.exports = nextConfig;
