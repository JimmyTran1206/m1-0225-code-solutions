/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(num: number): boolean {
  return num < 5;
}
function isEven(num: number): boolean {
  return num % 2 === 0;
}

function startsWithJ(str: string): boolean {
  return str.charAt(0) === 'J';
}

function isOldEnoughToDrink(person: Record<string, any>): boolean {
  return person.age >= 21;
}

function isOldEnoughToDrive(person: Record<string, any>): boolean {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person: Record<string, any>): boolean {
  console.log(
    `It is illegal to drink and drive, even if you are ${person.age}`
  );
  return false;
}

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'World War Z';
    case 'drama':
      return 'Greyhound';
    case 'musical':
      return 'High School Musical';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

