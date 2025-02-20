'use strict';
/* exported omit */
function omit(source, keys) {
  const res = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      res[key] = source[key];
    }
  }
  return res;
}
