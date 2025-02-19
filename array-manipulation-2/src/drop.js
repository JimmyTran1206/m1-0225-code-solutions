'use strict';
/* exported drop */
function drop(array, count) {
  const res = [];
  for (let i = count; i < Math.max(count, array.length); i++) {
    res.push(array[i]);
  }
  return res;
}
