/* exported omit */
function omit(source: Record<string, any>, keys: string): Record<string, any> {
  const res: Record<string, any> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      res[key] = source[key];
    }
  }
  return res;
}
