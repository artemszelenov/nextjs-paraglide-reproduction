import { paraglideWebpackPlugin } from '@inlang/paraglide-js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sintetic-assets.sfo3.digitaloceanspaces.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'minio',
        port: '9002',
        pathname: '/files.thetrender.com/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/*',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        strategy: ['url', 'cookie', 'baseLocale'],
        urlPatterns: [
          // local development settings
          {
            pattern: "http://localhost::port?/:path(.*)?",
            localized: [
              ["en", "http://localhost::port?/:path(.*)?"],
              ["hi", "http://localhost::port?/hi/:path(.*)?"],
              ["id", "http://localhost::port?/id/:path(.*)?"],
              ["de", "http://localhost::port?/de/:path(.*)?"],
              ["ru", "http://localhost::port?/ru/:path(.*)?"],
              ["pt", "http://localhost::port?/pt/:path(.*)?"],
              ["es", "http://localhost::port?/es/:path(.*)?"]
            ]
          },
          {
            pattern: "https://thetrender.com/:path(.*)?",
            localized: [
              ["en", "https://thetrender.com/:path(.*)?"],
              ["es", "https://thetrender.com/es/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.co.uk/:path(.*)?",
            localized: [
              ["en", "https://thetrender.co.uk/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.id/:path(.*)?",
            localized: [
              ["id", "https://thetrender.id/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.in/:path(.*)?",
            localized: [
              ["en", "https://thetrender.in/en/:path(.*)?"],
              ["hi", "https://thetrender.in/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.de/:path(.*)?",
            localized: [
              ["de", "https://thetrender.de/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.com.br/:path(.*)?",
            localized: [
              ["pt", "https://thetrender.com.br/:path(.*)?"],
            ],
          },
          {
            pattern: "https://thetrender.ru/:path(.*)?",
            localized: [
              ["ru", "https://thetrender.ru/:path(.*)?"],
            ],
          },
        ],
      }),
    )

    return config
  },
}

export default nextConfig
