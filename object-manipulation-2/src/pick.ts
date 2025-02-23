/* exported pick */
function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const res: Record<string, any> = {};
  for (const key of keys) {
    console.log('key: ' + key);
    console.log('source[key]: ' + source[key]);

    if (source[key] !== undefined) {
      res[key] = source[key];
    }
  }
  return res;
}
