/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.postimg.cc",
      "blog.gojek.io",
      "127.0.0.1:8000",
      "resource.candidatecollegeind.com",
    ],
    unoptimized: true,
  },
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: "/:slug(api|uploads)/:path*",
        destination: "https://cors-proxy-infinityfree.vercel.app/:slug/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
