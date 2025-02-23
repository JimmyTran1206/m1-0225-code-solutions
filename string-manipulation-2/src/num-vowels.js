'use strict';
/* exported numVowels */
function numVowels(str) {
  let count = 0;
  const vowels = ['a', 'i', 'e', 'o', 'u'];
  for (const char of str.toLowerCase()) {
    console.log(char);
    if (vowels.includes(char)) {
      count++;
      console.log(count);
    }
  }
  return count;
}
