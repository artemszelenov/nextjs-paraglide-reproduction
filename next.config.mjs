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
  async redirects() {
    return [
      {
        source: '/user',
        missing: [
          {
            type: 'cookie',
            key: 'session',
          },
        ],
        destination: '/',
        permanent: false,
      },
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        strategy: ['url', 'baseLocale'],
        urlPatterns: [
          // local development settings
          {
            pattern: ':protocol://localhost::port?/:locale(hi|id|de|ru|pt|es)?/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              en: { locale: null },
              hi: { locale: 'hi' },
              id: { locale: 'id' },
              de: { locale: 'de' },
              ru: { locale: 'ru' },
              pt: { locale: 'pt' },
              es: { locale: 'es' },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.com/:locale(es)?/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              en: { locale: null },
              es: { locale: 'es' },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.co.uk/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              en: { locale: null },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.mx/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              es: { locale: null },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.id/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              id: { locale: null },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.in/:locale(hi)?/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              en: { locale: null },
              hi: { locale: 'hi' },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.de/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              de: { locale: null },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.com.br/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              pt: { locale: null },
            },
          },
          {
            pattern: ':protocol://:stage(stage\.)?thetrender.ru/:path(.*)?',
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              ru: { locale: null },
            },
          },
        ],
      }),
    )

    return config
  },
}

export default nextConfig
