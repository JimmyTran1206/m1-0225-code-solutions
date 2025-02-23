/* exported getIndexes */
function getIndexes(arr: any[]): number[] {
  const indices: number[] = [];
  for (const x in arr) {
    indices.push(Number(x));
  }
  return indices;
}
