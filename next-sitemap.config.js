/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_ROOT || 'https://example.com',
  generateRobotsTxt: true,
  output: 'export',
}