'use strict';
/* exported ransomCase */
function ransomCase(str) {
  const strArr = str.toLowerCase().split('');
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join('');
}
