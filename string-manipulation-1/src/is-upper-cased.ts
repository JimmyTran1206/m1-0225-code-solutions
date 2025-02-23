/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const wordArr: string[] = word.split('');
  for (const e of wordArr) {
    if (e !== e.toUpperCase()) {
      return false;
    }
  }
  return true;
}
