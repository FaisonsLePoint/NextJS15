/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://lh4.googleusercontent.com/**')]
    }
};

export default nextConfig;