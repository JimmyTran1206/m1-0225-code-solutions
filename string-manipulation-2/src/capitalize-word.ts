/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const strArr: string[] = word.toLowerCase().split('');
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join('');
}
