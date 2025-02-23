/* exported sumAll */
function sumAll(nums: number[]): number {
  return nums.reduce((accum, currentVal) => accum + currentVal, 0);
}
