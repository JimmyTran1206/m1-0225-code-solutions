'use strict';
const books = [
  {
    isbn: '978-1491951989',
    title: 'JavaScript: The Definitive Guide',
    author: ' David Flanagan',
  },
  {
    isbn: '978-0131101630',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
  },
  {
    isbn: '978-0061120084',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];
const jsonBooks = JSON.stringify(books);
console.log(
  'json string: ' + jsonBooks,
  'type of json string: ' + typeof jsonBooks
);
const jsonStudent = '{"id": 123456, "name": "John Doe"}';
console.log(
  'json string: ' + jsonStudent,
  'type of json string: ' + typeof jsonStudent
);
const student = JSON.parse(jsonStudent);
console.log('student: ', student);
const bookArr = JSON.parse(jsonBooks);
console.log('books: ', bookArr);
