import { getData as getDataLocal, setData as setDataLocal } from './src/local-storage';
import { getData as getDataSession, setData as setDataSession } from './src/session-storage';

export default {
  localStorage: {
    getData: getDataLocal,
    setData: setDataLocal,
  },
  sessionStorage: {
    getData: getDataSession,
    setData: setDataSession,
  }
}