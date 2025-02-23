/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  str: string
): string {
  const strArr = str.split('');
  const temp: string = strArr[firstIndex];
  strArr[firstIndex] = strArr[secondIndex];
  strArr[secondIndex] = temp;
  return strArr.join('');
}
