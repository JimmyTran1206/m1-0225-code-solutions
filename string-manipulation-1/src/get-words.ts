/* exported getWords */
function getWords(str: string): string[] {
  return str.length === 0 ? [] : str.split(' ');
}
