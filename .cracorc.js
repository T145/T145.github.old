const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES
} = require('@craco/craco');

module.exports = {
  eslint: {
    //mode: ESLINT_MODES.extends, // assuming this means settings from the config file are included (no craco docs)
    configure: {},
    pluginOptions: {}
  },
  babel: {
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/core',
          // Use "'libraryDirectory': ''," if your bundler does not support ES modules
          libraryDirectory: 'esm',
          camel2DashComponentName: false
        },
        'core'
      ]
    ]
  },
  jest: {
    configure: {
      preset: 'react',
      moduleFileExtensions: ['ts', 'tsx']
    }
  }
};
