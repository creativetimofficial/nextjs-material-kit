/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

const nextConfig = withTM({
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/nextjs-material-kit" : ""
});

module.exports = nextConfig;
