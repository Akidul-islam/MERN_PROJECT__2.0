const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export { isObjEmpty, deepClone };
