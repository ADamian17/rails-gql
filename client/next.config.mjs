/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "vendors/_mantine.scss";`,
  },
};

export default nextConfig;
