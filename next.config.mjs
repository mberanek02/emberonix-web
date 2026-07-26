/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      // Static playground demos live in public/playground/<id>/ as plain HTML;
      // serve their index.html at the clean directory URL.
      {
        source: '/playground/lego-charlotte',
        destination: '/playground/lego-charlotte/index.html',
      },
      {
        source: '/playground/lego-charlotte/',
        destination: '/playground/lego-charlotte/index.html',
      },
      {
        source: '/playground/vegas-matt',
        destination: '/playground/vegas-matt/index.html',
      },
      {
        source: '/playground/vegas-matt/',
        destination: '/playground/vegas-matt/index.html',
      },
    ];
  },
};

export default nextConfig;
