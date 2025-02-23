/* exported capitalize */
function capitalize(word: string): string {
  return word
    .split('')
    .map((x, i) => (i === 0 ? x.toUpperCase() : x.toLocaleLowerCase()))
    .join('');
}
