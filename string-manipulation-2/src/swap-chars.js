'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, str) {
  const strArr = str.split('');
  const temp = strArr[firstIndex];
  strArr[firstIndex] = strArr[secondIndex];
  strArr[secondIndex] = temp;
  return strArr.join('');
}
