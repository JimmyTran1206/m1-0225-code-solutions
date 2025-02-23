/* exported includes */
function includes(array: any[], value: any): boolean {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
