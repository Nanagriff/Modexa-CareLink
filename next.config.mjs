/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ufts.io"
            },
        ],
    },
};


export default nextConfig;
