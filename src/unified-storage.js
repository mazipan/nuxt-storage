const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true;
  }
  return false;
};

export const __getData = (storage, key) => {
  try {
    const ls = storage;
    const cache = ls.getItem(key);
    if (__isNotNull(cache)) {
      const cacheParsed = JSON.parse(cache);
      if (__isNotNull(cacheParsed)) {
        // cek cache expiry time
        const timeNow = new Date().getTime();
        const dateCache = cacheParsed.created;
        const expiryInMilis = parseInt(cacheParsed.expiry, 10) * 60 * 1000;
        const expiryTime = parseInt(dateCache, 10) + expiryInMilis;

        if (expiryTime > timeNow) {
          return cacheParsed.value;
        } else {
          // remove if cache expired to get bigger space
          ls.removeItem(key);
        }
      }
    }
  } catch (e) {}

  return null;
};

export const __setData = (storage, key, value = '', expiryInMinutes = 5) => {
  try {
    const ls = storage;
    const data = {
      created: new Date().getTime(),
      value,
      expiry: expiryInMinutes,
    };
    ls.setItem(key, JSON.stringify(data));
    return data;
  } catch (e) {}
  return null;
};
