/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const wordArr: string[] = word.split('');
  for (const e of wordArr) {
    if (e !== e.toLowerCase()) {
      return false;
    }
  }
  return true;
}
