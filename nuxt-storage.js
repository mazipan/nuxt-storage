import {
  getData as getDataLocal,
  setData as setDataLocal,
  removeItem as removeItemLocal,
  clear as clearLocal
} from './src/local-storage'

import {
  getData as getDataSession,
  setData as setDataSession,
  removeItem as removeItemSession,
  clear as clearSession
} from './src/session-storage'

export default {
  localStorage: {
    getData: getDataLocal,
    setData: setDataLocal,
    removeItem: removeItemLocal,
    clear: clearLocal
  },
  sessionStorage: {
    getData: getDataSession,
    setData: setDataSession,
    removeItem: removeItemSession,
    clear: clearSession
  }
}
