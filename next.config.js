/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3.us-west-2.amazonaws.com'
    ],
  },
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/articles/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
