/* exported truncate */
function truncate(length: number, str: string): string {
  const strArr: string[] = str.split('');
  for (let i = Math.min(length, str.length); i < str.length; i++) {
    strArr.pop();
  }
  strArr.push('...');
  return strArr.join('');
}
