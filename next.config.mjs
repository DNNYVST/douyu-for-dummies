/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sta-op.douyucdn.cn",
      },
    ],
  },
};

export default nextConfig;
