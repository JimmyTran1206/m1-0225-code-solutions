// The Math Object
const heroes: string[] = [
  'Spiderman',
  'Hulk',
  'Batman',
  'Superman',
  'Ironman',
  'Wonderwoman',
];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('Random Hero: ', randomHero);

// Array Methods
interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
  { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { title: 'Head First Java', author: 'Kathy Sierra and Bert Bates' },
  { title: 'Head First C#', author: 'Adrew Stellman and Jennfer Greene' },
];
const lastBook = library.pop();
console.log('Last book: ', lastBook);
const firstBook = library.shift();
console.log('First book: ', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library: ', library);

// String methods
const fullName: string = 'Jimmy Tran';
const firstAndLastName: string[] = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toLocaleUpperCase();
console.log('Say my name: ', sayMyName);

// Object methods
interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'Tracy',
  age: 42,
  position: 'Account Manager',
};
const employeeKeys: string[] = Object.keys(employee);
console.log('Employee Keys: ', employeeKeys);
const employeeValues: (string | number)[] = Object.values(employee);
console.log('Employee Values: ', employeeValues);
const employeePairs: any[] = Object.entries(employee);
console.log('Employee Pairs: ', employeePairs);
