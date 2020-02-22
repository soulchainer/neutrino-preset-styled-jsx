const loaderMerge = require('@neutrinojs/loader-merge');
const react = require('@neutrinojs/react');

module.exports = (neutrino, options) => {
  neutrino.use(react);
  neutrino.use(loaderMerge('compile', 'babel'), {
    plugins: ['styled-jsx/babel']
  });
};
