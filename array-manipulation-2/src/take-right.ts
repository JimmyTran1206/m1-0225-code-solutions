/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  let res: any[] = [];
  if (count > array.length) {
    res = array; // return a shallow copy
  } else {
    for (let i = count; i > 0; i--) {
      res.push(array.at(-i));
    }
  }
  return res;
}
