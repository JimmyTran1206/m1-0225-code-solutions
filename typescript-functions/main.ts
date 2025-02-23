function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('convertMinutesToSeconds(5): ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds(10)', convertMinutesToSeconds(10));

function greet(name: string): string {
  return `Hey ${name}!`;
}

console.log("greet('Beavis'): ", greet('Beavis'));
console.log("greet('SpongeBob'): ", greet('SpongeBob'));

function getArea(width: number, height: number): number {
  return width * height;
}

console.log('getArea(17, 42): ', getArea(17, 42));
console.log('getArea(22, 38): ', getArea(22, 38));

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
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

const getLastElement: any = (array: any[]) => array.at(-1);
console.log(
  "getLastElement(['propane', 'and', 'propane', 'accessories']): ",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'getLastElement([true, true, false, true]): ',
  getLastElement([true, true, false, true])
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
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
