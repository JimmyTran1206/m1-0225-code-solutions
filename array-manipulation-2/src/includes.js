'use strict';
/* exported includes */
function includes(array, value) {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
