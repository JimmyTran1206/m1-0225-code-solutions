'use strict';
/* exported firstChars */
function firstChars(length, str) {
  const strArr = str.split('');
  for (let i = length; i < str.length; i++) {
    strArr.pop();
  }
  return strArr.join('');
}
