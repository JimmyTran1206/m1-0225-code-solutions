const colors: string[] = ['red', 'white', 'blue'];
for (let i: number = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]: ${colors[i]}`);
}
console.log(`America flag is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico flag is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('colors array: ', colors);

const students: string[] = ['Jimmy', 'Winny', 'Anna', 'Ellie'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('Students array: ', students);
console.log(`Type of students: `, typeof students);
