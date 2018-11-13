const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');
const rewireLessModule = require('react-app-rewire-less-modules')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLessModule.withLoaderOptions({
    // modifyVars: { "@primary-color": "#000" },
    javascriptEnabled: true,
  })(config, env);
  return config;
};