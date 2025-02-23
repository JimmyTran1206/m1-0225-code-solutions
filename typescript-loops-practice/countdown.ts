/* exported countdown */
function countdown(num: number): number[] {
  const res: number[] = [];
  for (let i = num; i >= 0; i--) {
    res.push(i);
  }
  return res;
}
