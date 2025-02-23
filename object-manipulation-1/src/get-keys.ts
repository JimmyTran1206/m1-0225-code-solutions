/* exported getKeys */
function getKeys(object: Record<string, any>): string[] {
  const keySet: string[] = [];
  for (const key in object) {
    keySet.push(key);
  }
  return keySet;
}
