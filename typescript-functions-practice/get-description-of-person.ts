/* exported getDescriptionOfPerson */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: Person): string {
  const vowels: string[] = ['a', 'i', 'e', 'u', 'o'];
  const article: string = vowels.includes(
    person.occupation.toLocaleLowerCase().charAt(0)
  )
    ? 'an'
    : 'a';
  return `${person.name} is ${article} ${person.occupation} from ${person.birthPlace}.`;
}
