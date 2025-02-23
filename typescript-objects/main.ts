interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Jimmy',
  lastName: 'Tran',
  age: 37,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('Full Name: ' + fullName);
student.livesInIrvine = false;
console.log('Live in Irvine: ' + student.livesInIrvine);
student.previousOccupation = 'Military';
console.log('Previous Occupation' + student.previousOccupation);
console.log('Student object:', student);
console.log('Type of student: ' + typeof student);

const vehicle: Vehicle = {
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

const pet: Pet = {
  name: 'Kona',
  kind: 'Golden Retriever',
};

delete pet.name;
delete pet.kind;
console.log('pet object:', pet);
console.log('type of pet: ' + typeof pet);
