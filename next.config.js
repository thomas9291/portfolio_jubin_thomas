/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "portfolio-thomas-jubin.s3.eu-central-1.amazonaws.com",
      "skillicons.dev",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
