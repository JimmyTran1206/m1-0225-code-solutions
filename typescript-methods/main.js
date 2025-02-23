'use strict';
// The Math Object
const heroes = [
  'Spiderman',
  'Hulk',
  'Batman',
  'Superman',
  'Ironman',
  'Wonderwoman',
];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);
const library = [
  { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { title: 'Head First Java', author: 'Kathy Sierra and Bert Bates' },
  { title: 'Head First C#', author: 'Adrew Stellman and Jennfer Greene' },
];
const lastBook = library.pop();
console.log('Last book: ', lastBook);
const firstBook = library.shift();
console.log('First book: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library: ', library);
// String methods
const fullName = 'Jimmy Tran';
const firstAndLastName = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toLocaleUpperCase();
console.log('Say my name: ', sayMyName);
const employee = {
  name: 'Tracy',
  age: 42,
  position: 'Account Manager',
};
const employeeKeys = Object.keys(employee);
console.log('Employee Keys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Employee Values: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee Pairs: ', employeePairs);
