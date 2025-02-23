'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  return numbers.map((elem) => (elem % 2 === 0 ? 'even' : 'odd'));
}
