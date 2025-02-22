/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
const getFirstInitialOfPerson: (x: Person) => string = (person: Person) =>
  person.firstName[0];
