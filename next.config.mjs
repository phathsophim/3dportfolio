// next.config.mjs – minimal Next.js config (plain JavaScript)

export default {
  reactStrictMode: true,
  experimental: { appDir: true }, // app router (default in Next 14)
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  future: { webpack5: true },
};
