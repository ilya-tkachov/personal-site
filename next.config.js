/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/ya2cd3vm6xm6/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = withTM()

module.exports = nextConfig
