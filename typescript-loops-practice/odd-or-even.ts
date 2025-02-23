/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  return numbers.map((elem) => (elem % 2 === 0 ? 'even' : 'odd'));
}
