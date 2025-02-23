/* exported initial */
function initial(array: any[]): any[] {
  return array.filter((x, i) => i < array.length - 1);
}
