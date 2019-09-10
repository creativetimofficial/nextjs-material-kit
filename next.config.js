const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

// import "./assets/scss/nextjs-material-kit.scss?v=1.8.0";

// module.exports = withImages()
// module.exports = withImages()
// module.exports = {
//   ...require('next-images'),
//   ...require('@zeit/next-sass'),
//   ...require('node-sass')
// }

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
