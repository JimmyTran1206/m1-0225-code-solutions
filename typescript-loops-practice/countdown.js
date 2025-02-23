'use strict';
/* exported countdown */
function countdown(num) {
  const res = [];
  for (let i = num; i >= 0; i--) {
    res.push(i);
  }
  return res;
}
