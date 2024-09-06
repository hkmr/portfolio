/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        hostname: 'coursera-certificate-images.s3.amazonaws.com',
      },
      {
        hostname: 'graduation.udacity.com',
      },
      {
        hostname: 'hackerrank.com',
      },
      {
        hostname: 'udemy-certificate.s3.amazonaws.com',
      },
    ]
  }
};

export default nextConfig;
