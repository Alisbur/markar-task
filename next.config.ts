import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // Проксируем все /api запросы на сервер
      },
    ];
  },
};

export default nextConfig;
