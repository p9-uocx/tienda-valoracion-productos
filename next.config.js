// next.config.js
// archivos de configuracion, no tocar
const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config, options) {
    config.resolve.alias['@Components'] = path.join(__dirname, 'components');
    config.resolve.alias['@Pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@Images'] = path.join(__dirname, 'static/img');
    return config;
  },
});
