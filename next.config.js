/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/achraf-website',
    assetPrefix: '/achraf-website',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig