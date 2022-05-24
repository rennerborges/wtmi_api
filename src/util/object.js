export const removeValueUndefinedOrNull = (object) => {
  const cloneObject = { ...object };

  Object.keys(cloneObject).forEach((key) => {
    if (!cloneObject[key]) {
      delete cloneObject[key];
    }
  });

  return cloneObject;
};

export default {
  removeValueUndefinedOrNull,
};
