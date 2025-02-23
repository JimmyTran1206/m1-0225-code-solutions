/* exported capitalizeWords */

function capitalizeWords(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((x) => capitalizeWord(x))
    .join(' ');
}
