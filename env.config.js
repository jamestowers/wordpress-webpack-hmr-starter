const path = require('path');

module.exports = {
  THEME_NAME: 'THEME NAME',
  PROXY_TARGET: 'THEME_NAME.dev',
  HOST: 'localhost',
  PORT: 3000,
  PATHS: {
    src: unipath('assets'),
    compiled: unipath(path.resolve(__dirname, 'compiled')),
    modules: unipath('node_modules'),
    base: unipath('.'),
  }
};

function unipath(base) {
  return function join() {
    const _paths = [base].concat(Array.from(arguments));
    return path.resolve(path.join.apply(null, _paths));
  }
}
