'use strict';
/* exported getKeys */
function getKeys(object) {
  const keySet = [];
  for (const key in object) {
    keySet.push(key);
  }
  return keySet;
}
