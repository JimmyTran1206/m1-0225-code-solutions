'use strict';
/* exported sumAll */
function sumAll(nums) {
  return nums.reduce((accum, currentVal) => accum + currentVal, 0);
}
