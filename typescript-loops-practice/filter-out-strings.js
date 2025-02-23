'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const res = [];
  for (const element of values) {
    if (typeof element !== 'string') {
      res.push(element);
    }
  }
  return res;
}
