const setValueInLocalStorage = (obj, key) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export default setValueInLocalStorage;
