const loaderMerge = require('neutrino-middleware-loader-merge');
const react = require('neutrino-preset-react');

module.exports = (neutrino, options) => {
  neutrino.use(react);
  neutrino.use(loaderMerge('compile', 'babel'), {
    plugins: ['styled-jsx/babel']
  });
};
