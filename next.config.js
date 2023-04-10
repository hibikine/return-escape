const isProduction = process.env.NODE_ENV === 'production';
const prefixPath = !isProduction ? '/return-escape' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: prefixPath,
  basePath: prefixPath,
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
