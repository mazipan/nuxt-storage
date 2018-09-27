# 🛢 Nuxt-Storage

> Utilities for easy read and write browser's storage in Nuxt.js project

[![License](https://img.shields.io/github/license/mazipan/nuxt-storage.svg?longCache=true)](https://github.com/mazipan/nuxt-storage) [![version](https://img.shields.io/npm/v/nuxt-storage.svg?maxAge=3600)](https://www.npmjs.com/package/nuxt-storage)
[![downloads](https://img.shields.io/npm/dt/nuxt-storage.svg?maxAge=86400)](https://www.npmjs.com/package/nuxt-storage) [![Travis](https://img.shields.io/travis/mazipan/nuxt-storage.svg?maxAge=86400)](https://travis-ci.org/mazipan/nuxt-storage)
[![codecov](https://codecov.io/gh/mazipan/nuxt-storage/branch/master/graph/badge.svg?maxAge=86400)](https://codecov.io/gh/mazipan/nuxt-storage)

## Why I need this package?

In Nuxt, it's hard to play with browser's storage like `sessionStorage` and `localStorage`. 
This package will help you handle this client side storage easier.
Also coming with simple and easy to used API.

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

Partial import

```js
// # for local storage
import { getData, setData } from 'nuxt-storage/local-storage';

// # for session storage
// import { getData, setData } from 'nuxt-storage/session-storage';

setData('key', 'value');
```

## API

| Storage             | Method Name | Parameter                                                                   | Notes   |
|---------------------|-------------|-----------------------------------------------------------------------------|---------|
| `localStorage`      | getData     | `key` (type: String)                                                        |         |
| `localStorage`      | setData     | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number) |         |
| `sessionStorage`    | getData     | `key` (type: String)                                                        |         |
| `sessionStorage`    | setData     | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number) |         |

-----

Copyright © 2018 by Irfan Maulana