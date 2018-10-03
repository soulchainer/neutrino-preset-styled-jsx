# `styled-jsx` for Neutrino

[![Build Status](https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx.svg?branch=master)](https://travis-ci.org/soulchainer/neutrino-preset-styled-jsx)
[![npm](https://img.shields.io/npm/v/neutrino-preset-styled-jsx.svg)](https://www.npmjs.com/package/neutrino-preset-styled-jsx)



`neutrino-preset-styled-jsx` is a preset that adds support for
[`styled-jsx`](https://github.com/zeit/styled-jsx#readme).

## Requirements

- Node 8 or above
- Package manager (preferably `npm`, `yarn`, or `pnpm`)
- Neutrino v8

## Installation

It be installed with any package manager that supports `npm`! You can see some reccomended ones above.


<details open>
  <summary>npm</summary>
  <code>$ npm install --save-dev neutrino-preset-styled-jsx</code>
</details>

<details>
  <summary>pnpm</summary>
  <code>$ pnpm install --save-dev neutrino-preset-styled-jsx</code>
</details>

<details>
  <summary>yarn</summary>
  <code>$ yarn add --dev neutrino-preset-styled-jsx</code>
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

* [styled-jsx](https://github.com/zeit/styled-jsx)
* [neutrino](https://neutrinojs.org/)
