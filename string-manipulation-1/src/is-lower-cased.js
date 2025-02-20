'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const wordArr = word.split('');
  for (const e of wordArr) {
    if (e !== e.toLowerCase()) {
      return false;
    }
  }
  return true;
}
