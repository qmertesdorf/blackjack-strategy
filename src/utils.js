export const getRandomObjectValue = obj => {
  const objKeys = Object.keys(obj);
  const randomObjKey = objKeys[Math.floor(Math.random() * objKeys.length)];
  return obj[randomObjKey];
};
