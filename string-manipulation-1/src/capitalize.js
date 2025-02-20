'use strict';
/* exported capitalize */
function capitalize(word) {
  return word
    .split('')
    .map((x, i) => (i === 0 ? x.toUpperCase() : x.toLocaleLowerCase()))
    .join('');
}
