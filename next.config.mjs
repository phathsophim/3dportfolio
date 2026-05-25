import { NextConfig } from 'next';

/**
 * next.config.mjs – minimal config for the 3D portfolio.
 * Enables MDX, React Strict Mode, and allows images from any domain (for GLTF textures).
 */
const nextConfig = {
  reactStrictMode: true,
  /** Enable the experimental app directory (already default in Next 14) */
  experimental: { appDir: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // Optional: future Webpack 5 features
  future: { webpack5: true },
} satisfies NextConfig;

export default nextConfig;
