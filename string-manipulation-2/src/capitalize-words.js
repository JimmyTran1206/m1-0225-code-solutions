'use strict';
/* exported capitalizeWords */
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((x) => capitalizeWord(x))
    .join(' ');
}
