'use strict';
function getDescriptionOfPerson(person) {
  const vowels = ['a', 'i', 'e', 'u', 'o'];
  const article = vowels.includes(
    person.occupation.toLocaleLowerCase().charAt(0)
  )
    ? 'an'
    : 'a';
  return `${person.name} is ${article} ${person.occupation} from ${person.birthPlace}.`;
}
