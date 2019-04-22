import { __getData, __setData, __removeItem, __clear } from './unified-storage'

function getStorage () {
  return 'localStorage' in window && window.localStorage
    ? window.localStorage
    : null
}

export const getData = key => {
  try {
    const ls = getStorage()
    return __getData(ls, key)
  } catch (e) {}

  return null
}

export const setData = (key, value = '', expiryInMinutes = 5, expiryUnit = 'm') => {
  try {
    const ls = getStorage()
    return __setData(ls, key, value, expiryInMinutes, expiryUnit)
  } catch (e) {}
  return null
}

export const removeItem = key => {
  try {
    const ls = getStorage()
    __removeItem(ls, key)
  } catch (e) {}
}

export const clear = () => {
  try {
    const ls = getStorage()
    __clear(ls)
  } catch (e) {}
}
