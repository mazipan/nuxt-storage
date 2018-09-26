import { __getData, __setData } from './unified-storage';

export const getData = (key) => {
  if (process.client) {
    try {
      const ls = 'localStorage' in window && window.localStorage ? window.localStorage : null;
      return __getData(ls, key);
    } catch (e) {}
  }

  return null;
};

export const setData = (key, value = '', expiryInMinutes = 5) => {
  if (process.client) {
    try {
      const ls = 'localStorage' in window && window.localStorage ? window.localStorage : null;
      return __setData(ls, key, value, expiryInMinutes);
    } catch (e) {}
  }
  return null;
};
