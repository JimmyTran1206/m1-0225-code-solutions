'use strict';
/* exported take */
function take(array, count) {
  const res = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    res.push(array[i]);
  }
  return res;
}
