const { injectBabelPlugin } = require('react-app-rewired');
const rewireLessModule = require('react-app-rewire-less-modules')
const theme = require('./theme')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLessModule.withLoaderOptions({
    modifyVars: theme,
    javascriptEnabled: true,
  })(config, env);
  return config;
};
