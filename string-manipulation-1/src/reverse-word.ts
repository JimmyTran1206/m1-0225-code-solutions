/* exported reverseWord */
function reverseWord(word: string): string {
  let res: string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
}
