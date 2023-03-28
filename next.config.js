/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "www.loginradius.com",
      "lh3.googleusercontent.com",
      "srinivasu-dandamudi-fb.netlify.app",
    ],
  },
};

module.exports = nextConfig;
