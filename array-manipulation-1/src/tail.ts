/* exported tail */
function tail(array: any[]): any[] {
  return array.filter((x, i) => i > 0);
}
