'use strict';
/* exported getIndexes */
function getIndexes(arr) {
  const indices = [];
  for (const x in arr) {
    indices.push(Number(x));
  }
  return indices;
}
