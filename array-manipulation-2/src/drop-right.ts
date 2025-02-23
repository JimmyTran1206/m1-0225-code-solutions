/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  const res: any[] = [];
  for (let i = 0; i < array.length - count; i++) {
    res.push(array[i]);
  }
  return res;
}
