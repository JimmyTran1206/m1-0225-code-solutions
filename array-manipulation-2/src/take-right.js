'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let res = [];
  if (count > array.length) {
    res = array; // return a shallow copy
  } else {
    for (let i = count; i > 0; i--) {
      res.push(array.at(-i));
    }
  }
  return res;
}
