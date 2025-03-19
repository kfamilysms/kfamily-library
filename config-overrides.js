const path = require('path')
/* config-overrides.js */

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
  }

  return config;
}