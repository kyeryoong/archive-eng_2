/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://solved.ac/api/v3/user/show?handle=kyeryoong/:path*",
            },
        ];
    },
}

module.exports = nextConfig;
