export const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true;
  }
  return false;
};