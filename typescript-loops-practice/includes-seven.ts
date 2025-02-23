/* exported includesSeven */
function includesSeven(array: any[]): boolean {
  for (const x of array) {
    if (x === 7) return true;
  }
  return false;
}
