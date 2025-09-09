/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    // Only add basePath and assetPrefix in production (GitHub Pages)
    ...(process.env.NODE_ENV === 'production' && {
        basePath: '/achraf-website',
        assetPrefix: '/achraf-website',
    }),
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig