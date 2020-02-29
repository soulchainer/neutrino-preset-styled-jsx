# `styled-jsx` for Neutrino

[![Build Status][travis-badge]][travis]
[![Node Package Manager][npm-badge]][npm]
[![Commitizen Friendly][commitizen-badge]][commitizen]
[![Join Slack][slack-badge]][slack]

## :no_entry: Deprecated :no_entry:
This project is no longer supported. If you have any question or would like to contribute, maintain the project or whatever, feel free to contact me at Twitter [@juanriqgon](https://twitter.com/juanriqgon) or via email at me[at]juanriquel[dot]com.

`neutrino-preset-styled-jsx` is a preset that adds support for
[`styled-jsx`][styled-jsx].

## Requirements

- Node 8 or above
- Package manager (preferably `yarn`)
- Neutrino v8

## Installation

<details open>
  <summary>yarn <i>(recommended)</i></summary>
  <code>$ yarn add --dev neutrino-preset-styled-jsx</code>
</details>

<details>
  <summary>npm</summary>
  <code>$ npm install --save-dev neutrino-preset-styled-jsx</code>
</details>


## Usage

In order to use `neutrino-preset-styled-jsx`, your  `.neutrinorc.js` must look similar to the one below.

```js
  module.exports = {
    use: [
      'neutrino-preset-styled-jsx',
      ...
    ]
  };
```

Thats all folks! If you are interested in learning more about either `styled-jsx` or `neutrino`, below are links to their documentation.

* [styled-jsx][styled-jsx]
* [neutrino][neutrino]

[styled-jsx]: https://github.com/zeit/styled-jsx#readme
[neutrino]: https://neutrinojs.org/
[slack]: https://neutrino-slack.herokuapp.com/
[commitizen]: http://commitizen.github.io/cz-cli/
[npm]: https://npmjs.org/package/neutrino-preset-styled-jsx
[travis]: https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx

[slack-badge]: https://neutrino-slack.herokuapp.com/badge.svg
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[npm-badge]: https://img.shields.io/npm/v/neutrino-preset-styled-jsx.svg
[travis-badge]: https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx.svg?branch=master
