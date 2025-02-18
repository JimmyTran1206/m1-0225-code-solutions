const width: number = 3.5;
const height: number = 4.8;
const area: number = width * height;
console.log('value of area: ' + area);
console.log('type of area: ' + typeof area);

const bill: number = 115.04;
const payment: number = 141.0;
const change: number = bill - payment;
console.log('value of change: ' + change);
console.log('type of change: ' + typeof change);

const quizzes: number = 80;
const midterm: number = 92;
const final: number = 98;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade: ' + grade);
console.log('type of grade: ' + typeof grade);

const firstName: string = 'Jimmy';
const lastName: string = 'Tran';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName: ' + fullName);
console.log('type of fullName: ' + typeof fullName);

const pH: number = Math.floor(Math.random() * 15);
const isAcidic: boolean = pH < 7;
console.log('pH value: ' + pH);
console.log('value of isAcidic: ' + isAcidic);
console.log('type of isAcidic: ' + typeof isAcidic);

const headCount: number = 15;
const isSparta: boolean = headCount > 300;
console.log('value of isSparta: ' + isSparta);
console.log('type of isSparta: ' + typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto: ' + motto);
console.log('type of motto: ' + typeof motto);
