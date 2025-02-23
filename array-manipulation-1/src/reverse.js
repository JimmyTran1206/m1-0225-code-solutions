'use strict';
/* exported reverse */
function reverse(array) {
  const res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  return res;
}
