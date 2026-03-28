import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Replace with authorized hostname
        port: '',
        pathname: '/**', // Customize path as needed
      },
    ],
  },
};

export default nextConfig;
