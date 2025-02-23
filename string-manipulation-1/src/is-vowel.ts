/* exported isVowel */
function isVowel(char: string): boolean {
  if (char.length > 1) return false;
  const vowelArr = ['a', 'i', 'o', 'u', 'e'];
  for (const e of vowelArr) {
    if (e === char.toLowerCase()) return true;
  }
  return false;
}
