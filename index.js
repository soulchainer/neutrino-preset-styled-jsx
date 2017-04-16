const loaderMerge = require('neutrino-middleware-loader-merge');

module.exports = (neutrino, options) => {
  neutrino.use(loaderMerge('compile', 'babel'), {
    plugins: ['styled-jsx/babel']
  });
};
