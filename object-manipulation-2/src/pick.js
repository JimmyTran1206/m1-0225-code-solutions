'use strict';
/* exported pick */
function pick(source, keys) {
  const res = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      res[key] = source[key];
    }
  }
  return res;
}
