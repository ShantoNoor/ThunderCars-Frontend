const getValueFromLocalStorage = (key) => {
  const localData = localStorage.getItem(key);
  if (localData) {
    return JSON.parse(localData);
  } else {
    return [];
  }
};

export default getValueFromLocalStorage;
