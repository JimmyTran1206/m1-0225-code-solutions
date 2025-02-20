'use strict';
/* exported compact */
function compact(array) {
  const res = [];
  for (const e of array) {
    if (e) res.push(e);
  }
  return res;
}
