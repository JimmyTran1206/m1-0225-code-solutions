/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
const getLastNameOfPerson: (x: Person) => string = (person: Person) =>
  person.lastName;
