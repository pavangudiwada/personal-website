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
    async redirects() {
        return [
            { source: '/work', destination: '/', permanent: false },
            { source: '/work/:path*', destination: '/', permanent: false },
            { source: '/now', destination: '/', permanent: false },
            { source: '/contact', destination: '/', permanent: false },
        ]
    },
}

module.exports = nextConfig 