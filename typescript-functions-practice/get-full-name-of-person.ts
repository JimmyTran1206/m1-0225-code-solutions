/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const getFullNameOfPerson: (x: Person) => string = (person: Person) =>
  `${person.firstName} ${person.lastName}`;
