/* exported firstChars */
function firstChars(length: number, str: string): string {
  const strArr: string[] = str.split('');
  for (let i = length; i < str.length; i++) {
    strArr.pop();
  }
  return strArr.join('');
}
