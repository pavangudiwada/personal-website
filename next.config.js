/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.robusta.dev',
                pathname: '/assets/images/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                pathname: '/vi/**',
            }
        ],
    },
}

module.exports = nextConfig 