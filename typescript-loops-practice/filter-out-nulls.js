'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const res = [];
  for (const x of values) {
    if (x !== null) res.push(x);
  }
  return res;
}
