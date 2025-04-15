// Config options borrowed from Greg Rickaby, falling under fair use under the MIT license:
// https://github.com/gregrickaby/nextjs-github-pages/blob/main/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",


  // /**
  //  * Set base path. This is the slug of your GitHub repository.
  //  * Should not be necessary with a custom domain.
  //  *
  //  * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  //  */
  // basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  productionBrowserSourceMaps: true,

  async redirects() {
    return [
      // Ensure search engines never index this. Should be unnecessary!
      // https://search.google.com/search-console/index
      {
        source: "/HansDurchholz-Resume.pdf",
        destination: "/docs/HansDurchholz-Resume.pdf",
        permanent: true
      },
      {
        source: "/resume",
        destination: "/docs/HansDurchholz-Resume.pdf",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
