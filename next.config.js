const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

// import "./assets/scss/material-kit-react.scss?v=1.8.0";

// module.exports = withImages()
// module.exports = withImages()
// module.exports = {
//   ...require('next-images'),
//   ...require('@zeit/next-sass'),
//   ...require('node-sass')
// }

module.exports = withPlugins([
  [withSass],
  [withImages]
]);
