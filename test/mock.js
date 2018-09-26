export const __mockStore = () => {
  const data = {};
  return {
    getItem: key => data[key],
    setItem: (key, value) => {
      data[key] = value;
    },
  };
};