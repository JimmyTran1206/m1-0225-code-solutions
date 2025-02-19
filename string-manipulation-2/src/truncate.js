'use strict';
/* exported truncate */
function truncate(length, str) {
  const strArr = str.split('');
  for (let i = Math.min(length, str.length); i < str.length; i++) {
    strArr.pop();
  }
  strArr.push('...');
  return strArr.join('');
}
