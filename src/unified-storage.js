const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true
  }
  return false
}

export const __getData = (storage, key) => {
  try {
    const ls = storage
    const cache = ls.getItem(key)
    if (__isNotNull(cache)) {
      const cacheParsed = JSON.parse(cache)
      if (__isNotNull(cacheParsed)) {
        // check cache expiry time
        const timeNow = new Date().getTime()
        const dateCache = cacheParsed.created
        let milisMultiplier = (1000 * 60) // default is in minutes unit

        if (cacheParsed.unit && cacheParsed.unit === 's') { // in second unit
          milisMultiplier = (1000)
        } else if (cacheParsed.unit && cacheParsed.unit === 'm') { // in minute unit
          milisMultiplier = (1000 * 60)
        } else if (cacheParsed.unit && cacheParsed.unit === 'h') { // in hour unit
          milisMultiplier = (1000 * 60 * 60)
        } else if (cacheParsed.unit && cacheParsed.unit === 'd') { // in day unit
          milisMultiplier = (1000 * 60 * 60 * 24)
        }

        const expiryInMilis = parseInt(cacheParsed.expiry, 10) * milisMultiplier
        const expiryTime = parseInt(dateCache, 10) + expiryInMilis

        if (expiryTime > timeNow) {
          return cacheParsed.value
        } else {
          // remove if cache expired to get bigger space
          // ls.removeItem(key)
          console.warn('storage is expired')
        }
      }
    }
  } catch (e) {
    console.warn('failed parse JSON')
  }

  return null
}

export const __setData = (storage, key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  try {
    const ls = storage
    const data = {
      created: new Date().getTime(),
      value,
      expiry: expiryInMinutes,
      unit: expiryUnit
    }
    ls.setItem(key, JSON.stringify(data))
    return data
  } catch (e) {}
  return null
}

export const __removeItem = (storage, key) => {
  try {
    storage.removeItem(key)
  } catch (e) {}
}

export const __clear = (storage) => {
  try {
    storage.clear()
  } catch (e) {}
}
