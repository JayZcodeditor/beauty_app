import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'yourdomain.com', 'allonline.7eleven.co.th', "media.shopat24.com"], // ใส่ domain ที่รูปมาจาก
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // รองรับทุก domain ที่เป็น http
      },
      {
        protocol: 'https',
        hostname: '**', // รองรับทุก domain ที่เป็น https
      },
    ],
  },
};

export default nextConfig;
