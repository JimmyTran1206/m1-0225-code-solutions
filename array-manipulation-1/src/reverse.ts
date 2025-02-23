/* exported reverse */
function reverse(array: any[]): any[] {
  const res: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  return res;
}
