'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const wordArr = word.split('');
  for (const e of wordArr) {
    if (e !== e.toUpperCase()) {
      return false;
    }
  }
  return true;
}
