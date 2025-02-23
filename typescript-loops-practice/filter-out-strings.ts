/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const res: any = [];
  for (const element of values) {
    if (typeof element !== 'string') {
      res.push(element);
    }
  }
  return res;
}
