'use strict';
const student = {
  firstName: 'Jimmy',
  lastName: 'Tran',
  age: 37,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name: ' + fullName);
student.livesInIrvine = false;
console.log('Live in Irvine: ' + student.livesInIrvine);
student.previousOccupation = 'Military';
console.log('Previous Occupation' + student.previousOccupation);
console.log('Student object:', student);
console.log('Type of student: ' + typeof student);
const vehicle = {
  make: 'Toyota',
  model: 'Highlander',
  year: 2013,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Vehicle color: ' + vehicle['color']);
console.log('Vehicle is convertible: ' + vehicle['isConvertible']);
console.log('Vehicle object: ', vehicle);
console.log();
console.log('Type of vehicle:  ' + typeof vehicle);
const pet = {
  name: 'Kona',
  kind: 'Golden Retriever',
};
delete pet.name;
delete pet.kind;
console.log('pet object:', pet);
console.log('type of pet: ' + typeof pet);
