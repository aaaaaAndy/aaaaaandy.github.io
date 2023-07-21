const path = require('path');

const DEV_PATH = path.join(__dirname, './src');

module.exports = {
  resolve: {
    alias: {
      '@': DEV_PATH,
	    '@theme': path.join(__dirname, 'node_modules/@docusaurus/theme-classic')
    },
  },
};
