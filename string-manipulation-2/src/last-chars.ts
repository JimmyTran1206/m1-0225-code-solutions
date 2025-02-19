/* exported lastChars */
function lastChars(length: number, str: string): string {
  const strArr: string[] = str.split('');
  for (let i = 0; i < str.length - length; i++) {
    strArr.shift();
  }
  return strArr.join('');
}
