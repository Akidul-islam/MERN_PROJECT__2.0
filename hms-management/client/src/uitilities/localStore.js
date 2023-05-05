export const locatData = (dataName) => {
  if (!localStorage.getItem(dataName)) {
    return localStorage.setItem(dataName, JSON.stringify(null));
  }
  return JSON.parse(localStorage.getItem(dataName));
};
