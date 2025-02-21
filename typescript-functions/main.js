'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5): ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds(10)', convertMinutesToSeconds(10));
function greet(name) {
  return `Hey ${name}!`;
}
console.log("greet('Beavis'): ", greet('Beavis'));
console.log("greet('SpongeBob'): ", greet('SpongeBob'));
function getArea(width, height) {
  return width * height;
}
console.log('getArea(17, 42): ', getArea(17, 42));
console.log('getArea(22, 38): ', getArea(22, 38));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  "getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }): ",
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
console.log(
  "getFirstName({ firstName: 'John', lastName: 'Henry' }): ",
  getFirstName({ firstName: 'John', lastName: 'Henry' })
);
const getLastElement = (array) => array.at(-1);
console.log(
  "getLastElement(['propane', 'and', 'propane', 'accessories']): ",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'getLastElement([true, true, false, true]): ',
  getLastElement([true, true, false, true])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'callOtherFunction(convertMinutesToSeconds, 10): ',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  "callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']): ",
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
