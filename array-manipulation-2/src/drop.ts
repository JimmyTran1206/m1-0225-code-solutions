/* exported drop */
function drop(array: any[], count: number): any[] {
  const res: any[] = [];
  for (let i = count; i < Math.max(count, array.length); i++) {
    res.push(array[i]);
  }
  return res;
}
