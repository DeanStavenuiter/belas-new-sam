/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'belas.s3.eu-north-1.amazonaws.com' },
          ],
    }
};

export default nextConfig;
