const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/mazerunner' : '',
  assetPrefix: isGithubActions ? '/mazerunner/' : undefined,
};

export default nextConfig;
