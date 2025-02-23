'use strict';
/* exported invert */
function invert(source) {
  const res = {};
  for (const key in source) {
    const resKey = '' + source[key];
    const resValue = key;
    res[resKey] = resValue;
  }
  return res;
}
