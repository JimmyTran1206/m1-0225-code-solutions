'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const res = {};
  res[keyValuePair[0]] = keyValuePair[1];
  return res;
}
