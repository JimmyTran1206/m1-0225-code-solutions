'use strict';
/* exported initial */
function initial(array) {
  return array.filter((x, i) => i < array.length - 1);
}
