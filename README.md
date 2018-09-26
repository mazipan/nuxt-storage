# nuxt-storage

🛢 Utilities for easy read and write browser's storage in Nuxt.js project

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
import { getData, setData } from 'nuxt-storage/dist/local-storage';

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