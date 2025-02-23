'use strict';
const colors = ['red', 'white', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]: ${colors[i]}`);
}
console.log(`America flag is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico flag is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('colors array: ', colors);
const students = ['Jimmy', 'Winny', 'Anna', 'Ellie'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('Students array: ', students);
console.log(`Type of students: `, typeof students);
