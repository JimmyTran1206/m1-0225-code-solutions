/* exported toObject */
function toObject(keyValuePair: [string, any]): Record<string, any> {
  const res: Record<string, any> = {};
  res[keyValuePair[0]] = keyValuePair[1];
  return res;
}
