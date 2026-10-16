const isGitHubPages = process.env.TARGET_DEPLOY === 'github-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? '/mazerunner' : '',
  assetPrefix: isGitHubPages ? '/mazerunner/' : undefined,
};

export default nextConfig;
