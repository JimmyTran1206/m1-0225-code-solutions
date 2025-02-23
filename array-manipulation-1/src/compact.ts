/* exported compact */
function compact(array: any[]): any[] {
  const res: any[] = [];
  for (const e of array) {
    if (e) res.push(e);
  }
  return res;
}
