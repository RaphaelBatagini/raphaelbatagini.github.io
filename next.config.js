/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3.us-west-2.amazonaws.com'
    ],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
