/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const res: any[] = [];
  for (const x of values) {
    if (x !== null) res.push(x);
  }
  return res;
}
