import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  // transpilePackages: [
  //   "@tanstack/react-query",
  //   "@tanstack/query-core",
  //   "@tanstack/react-query-devtools",
  //   "@rainbow-me/rainbowkit",
  //   "viem",
  //   "wagmi",
  // ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
