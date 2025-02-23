'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const x of array) {
    if (x === 7) return true;
  }
  return false;
}
