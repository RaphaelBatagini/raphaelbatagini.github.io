/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
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
