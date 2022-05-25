export const RenderMap = (array, callback) => {
  const element = array.map((item, index) => callback(item, index));
  return element.join('');
};

export const Verify = (condition, content) => (condition ? content : '');

export default {
  RenderMap,
  Verify,
};
