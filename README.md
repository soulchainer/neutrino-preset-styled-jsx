# Neutrino styled-jsx preset

[![Build Status](https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx.svg?branch=master)](https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx)
[![NPM version][npm-image]][npm-url] [![NPM downloads][downloads-image]][npm-url]
[![Commitizen friendly][commitizen-image]][commitizen-url] [![Join Slack][slack-image]][slack-url]

`neutrino-preset-styled-jsx` is a Neutrino preset that adds support for
[styled-jsx][styled-url], a [CSS in JS technique][css-js-url].

## Requirements

- Node.js v6.9+
- Yarn or npm client
- Neutrino v6, Neutrino build preset

## Installation

`neutrino-preset-styled-jsx` can be installed via the Yarn or npm clients.

#### Yarn

```bash
❯ yarn add neutrino-preset-styled-jsx
```

#### npm

```bash
❯ npm install --save neutrino-preset-styled-jsx
```

## Usage

  Add `neutrino-preset-styled-jsx` to `use` in your `.neutrinorc.js`.

  ```js
     module.exports = {
      use: [
        'neutrino-preset-react',
        'neutrino-preset-styled-jsx',
        ...
      ]
    };
  ```

  And that's all. For `styled-jsx` specific usage, see their [docs][styled-url].
  For Neutrino usage, refer to their [documentation][neutrino-docs].


[npm-image]: https://img.shields.io/npm/v/neutrino-preset-styled-jsx.svg
[downloads-image]: https://img.shields.io/npm/dt/neutrino-preset-styled-jsx.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-styled-jsx
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
[styled-url]: https://github.com/zeit/styled-jsx
[css-js-url]: https://github.com/MicheleBertoli/css-in-js
[neutrino-docs]: https://neutrino.js.org/
