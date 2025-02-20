'use strict';
/* exported tail */
function tail(array) {
  return array.filter((x, i) => i > 0);
}
