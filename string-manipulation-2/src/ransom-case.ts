/* exported ransomCase */
function ransomCase(str: string): string {
  const strArr: string[] = str.toLowerCase().split('');
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join('');
}
