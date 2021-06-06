module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
    images: {
      domains: ['image.tmdb.org'],
    },

  };

const withImages = require('next-images')
module.exports = withImages()