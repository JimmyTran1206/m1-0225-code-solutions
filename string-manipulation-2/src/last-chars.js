'use strict';
/* exported lastChars */
function lastChars(length, str) {
  const strArr = str.split('');
  for (let i = 0; i < str.length - length; i++) {
    strArr.shift();
  }
  return strArr.join('');
}
