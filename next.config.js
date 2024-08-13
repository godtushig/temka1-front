/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pasteboard.co'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.pasteboard.co',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
