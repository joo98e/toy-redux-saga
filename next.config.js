/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "localhost"],
  },
};

module.exports = nextConfig;
