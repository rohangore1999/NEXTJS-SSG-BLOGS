/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true // means for each page it will move to seperate folder and create index.js so we can load any page
}

module.exports = nextConfig
