/* exported invert */
function invert(source: Record<string, any>): Record<string, any> {
  const res: Record<string, any> = {};
  for (const key in source) {
    const resKey = '' + source[key];
    const resValue = key;
    res[resKey] = resValue;
  }
  return res;
}
