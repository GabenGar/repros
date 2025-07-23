// @ts-check
/**
 * @returns {Promise<import('next').NextConfig>}
 */
async function createNextConfig() {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: "dist",
    sassOptions: {
      // a duct tape
      // https://github.com/vercel/next.js/discussions/67931#discussioncomment-11044560
      // until nextjs releases a next major
      // https://github.com/vercel/next.js/issues/71638#issuecomment-2454463904
      silenceDeprecations: ["legacy-js-api"],
    },
    transpilePackages: ["@repo/ui"],
    experimental: {
      typedRoutes: true
    },
  };

  return nextConfig;
}

export default createNextConfig;
