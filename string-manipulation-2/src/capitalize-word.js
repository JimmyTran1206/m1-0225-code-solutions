'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const strArr = word.toLowerCase().split('');
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join('');
}
