/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) return config;

    config.module.rules.push({ test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] });
    config.module.rules.push({ test: /\.ttf$/i, type: 'asset/inline' });

    return config;
  }
}

module.exports = nextConfig
