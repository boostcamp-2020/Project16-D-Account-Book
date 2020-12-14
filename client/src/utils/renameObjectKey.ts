/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */

const clone = (obj: Object) => ({ ...obj });

const renameKey = (object: Object, originKey: any, newKey: any): Object => {
  const clonedObj = clone(object);
  const targetKey = clonedObj[originKey];
  delete clonedObj[originKey];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};

export default renameKey;
