import { __isNotNull } from './util';

export const getData = (key) => {
  if (process.client) {
    try {
      const ls = 'sessionStorage' in window && window.sessionStorage ? window.sessionStorage : null;
      __getData(ls, key);
    } catch (e) {}
  }

  return null;
};

export const setData = (key, value = '', expiryInMinutes = 5) => {
  if (process.client) {
    try {
      const ls = 'sessionStorage' in window && window.sessionStorage ? window.sessionStorage : null;
      __setData(ls, key, value, expiryInMinutes);
    } catch (e) {}
  }
  return null;
};
