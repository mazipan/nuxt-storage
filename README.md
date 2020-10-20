# 🛢 Nuxt-Storage
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg)](#contributors)
![](https://badgen.net/bundlephobia/minzip/nuxt-storage)
[![version](https://img.shields.io/npm/v/nuxt-storage.svg?maxAge=3600)](https://www.npmjs.com/package/nuxt-storage)
[![downloads](https://img.shields.io/npm/dt/nuxt-storage.svg?maxAge=86400)](https://www.npmjs.com/package/nuxt-storage) [![Travis](https://img.shields.io/travis/mazipan/nuxt-storage.svg?maxAge=86400)](https://travis-ci.org/mazipan/nuxt-storage)
[![codecov](https://codecov.io/gh/mazipan/nuxt-storage/branch/master/graph/badge.svg?maxAge=86400)](https://codecov.io/gh/mazipan/nuxt-storage) ![Dependencies](https://img.shields.io/david/mazipan/nuxt-storage.svg)

> Utilities for easy read and write browser's storage in Nuxt.js project

## Why I need this package?

In Nuxt, it's hard to play with browser's storage like `sessionStorage` and `localStorage`.
This package will help you handle client side storage with a simple API and with various useful additional features such as expiry.

## How to install and use

Install using NPM or Yarn

```bash
# NPM
$ npm i nuxt-storage
# Yarn
$ yarn add nuxt-storage
```

## Sample using this package

All API import

```js
import nuxtStorage from 'nuxt-storage';

nuxtStorage.localStorage.setData('key', 'value');
nuxtStorage.sessionStorage.setData('key', 'value');
```

## API

| Method Name | Parameter                         | Default Value | Available Options |
|-------------|-----------------------------------|---------------|-------------------|
| getData     | `key` (type: String)              | Empty String  |  |
| setData     | `key` (type: String)              | Empty String  |  |
|             | `value` (type: any)               | Empty String  |  |
|             | `expiry` (type: Number)           | 5             |  |
|             | `expiryUnit` (type: String)       | m             | `s` = second, `m` = minutes, `h` = hour, `d` = day  |
| clear       | -                                 |               |  |


## Support me

- 👉 🇮🇩 [Trakteer](https://trakteer.id/mazipan?utm_source=github)
- 👉 🌍 [BuyMeACoffe](https://www.buymeacoffee.com/mazipan?utm_source=github)
- 👉 🌍 [Paypal](https://www.paypal.me/mazipan?utm_source=github)
- 👉 🌍 [Ko-Fi](https://ko-fi.com/mazipan)

-----

Copyright © 2018 by Irfan Maulana

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://stainfilm.com"><img src="https://avatars0.githubusercontent.com/u/3953002?v=4" width="100px;" alt="notjiam"/><br /><sub><b>notjiam</b></sub></a><br /><a href="https://github.com/mazipan/nuxt-storage/commits?author=notjiam" title="Tests">⚠️</a> <a href="https://github.com/mazipan/nuxt-storage/issues?q=author%3Anotjiam" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.mazipan.xyz/"><img src="https://avatars0.githubusercontent.com/u/7221389?v=4" width="100px;" alt="Irfan Maulana"/><br /><sub><b>Irfan Maulana</b></sub></a><br /><a href="https://github.com/mazipan/nuxt-storage/issues?q=author%3Amazipan" title="Bug reports">🐛</a> <a href="#maintenance-mazipan" title="Maintenance">🚧</a> <a href="https://github.com/mazipan/nuxt-storage/commits?author=mazipan" title="Tests">⚠️</a> <a href="https://github.com/mazipan/nuxt-storage/commits?author=mazipan" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
