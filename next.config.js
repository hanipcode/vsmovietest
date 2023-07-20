/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
