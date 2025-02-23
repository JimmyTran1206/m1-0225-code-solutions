/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
const getInitialsOfPerson: (x: Person) => string = (person: Person) =>
  `${person.firstName[0]}${person.lastName[0]}`;
