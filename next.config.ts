import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APP_NAME: process.env.APP_NAME,
    BASE_URL: process.env.BASE_URL
  }
};

export default nextConfig;
